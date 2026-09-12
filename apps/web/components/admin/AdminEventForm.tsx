"use client";

import { FormEvent, useState } from "react";

type SubmitState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const languages = [
  { code: "ru", label: "Русский" },
  { code: "kk", label: "Қазақша" },
  { code: "en", label: "English" },
] as const;

export default function AdminEventForm() {
  const [apiKey, setApiKey] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: "submitting" });

    const form = event.currentTarget;
    const values = new FormData(form);

    try {
      const startsAt = toIsoDate(values.get("startsAt"));
      const endsAt = toIsoDate(values.get("endsAt"));

      if (new Date(endsAt) < new Date(startsAt)) {
        throw new Error("Окончание не может быть раньше начала.");
      }

      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-admin-api-key": apiKey,
        },
        body: JSON.stringify({
          slug: values.get("slug"),
          startsAt,
          endsAt,
          imageUrl: values.get("imageUrl"),
          status: values.get("status"),
          translations: Object.fromEntries(
            languages.map(({ code }) => [
              code,
              {
                title: values.get(`${code}.title`),
                shortDescription: values.get(`${code}.shortDescription`),
                description: values.get(`${code}.description`),
                location: values.get(`${code}.location`),
              },
            ]),
          ),
        }),
      });

      const result = await parseResponse(response) as {
        slug?: string;
        message?: string | string[];
      };

      if (!response.ok) {
        throw new Error(normalizeMessage(result.message));
      }

      form.reset();
      setImageUrl("");
      setSubmitState({
        type: "success",
        message: `Мероприятие «${result.slug ?? "без slug"}» сохранено.`,
      });
    } catch (error: unknown) {
      setSubmitState({
        type: "error",
        message: error instanceof Error ? error.message : "Не удалось сохранить мероприятие.",
      });
    }
  }

  const isSubmitting = submitState.type === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start"
    >
      <div className="space-y-7">
        <FormSection title="Общие данные" description="Дата, публикация и изображение используются для всех языков.">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Начало" htmlFor="startsAt" hint="Время Алматы (UTC+5).">
              <input id="startsAt" name="startsAt" type="datetime-local" required className={inputClass} />
            </Field>
            <Field label="Окончание" htmlFor="endsAt" hint="Время Алматы (UTC+5).">
              <input id="endsAt" name="endsAt" type="datetime-local" required className={inputClass} />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Slug" htmlFor="slug" hint="Необязательно — будет создан из английского названия.">
              <input id="slug" name="slug" type="text" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="student-meetup" className={inputClass} />
            </Field>
            <Field label="Статус" htmlFor="status">
              <select id="status" name="status" defaultValue="DRAFT" className={inputClass}>
                <option value="DRAFT">Черновик</option>
                <option value="PUBLISHED">Опубликовано</option>
              </select>
            </Field>
          </div>

          <Field label="URL обложки" htmlFor="imageUrl" hint="Прямая ссылка на изображение по HTTPS.">
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              placeholder="https://images.example.com/event.jpg"
              className={inputClass}
            />
          </Field>
        </FormSection>

        {languages.map(({ code, label }) => (
          <FormSection key={code} title={label} description={`Содержимое карточки на языке ${label}.`}>
            <Field label="Название" htmlFor={`${code}.title`}>
              <input id={`${code}.title`} name={`${code}.title`} type="text" maxLength={160} required className={inputClass} />
            </Field>
            <Field label="Краткое описание" htmlFor={`${code}.shortDescription`} hint="Показывается в карточке мероприятия.">
              <textarea id={`${code}.shortDescription`} name={`${code}.shortDescription`} rows={3} maxLength={320} required className={inputClass} />
            </Field>
            <Field label="Полное описание" htmlFor={`${code}.description`}>
              <textarea id={`${code}.description`} name={`${code}.description`} rows={6} maxLength={10000} required className={inputClass} />
            </Field>
            <Field label="Место проведения" htmlFor={`${code}.location`}>
              <input id={`${code}.location`} name={`${code}.location`} type="text" maxLength={240} required className={inputClass} />
            </Field>
          </FormSection>
        ))}
      </div>

      <aside className="space-y-5 lg:sticky lg:top-6">
        <div className="overflow-hidden rounded-[28px] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-[#555]">Предпросмотр обложки</p>
          <div className="mt-4 aspect-[16/10] overflow-hidden rounded-[20px] bg-[#eaf4fb]">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageUrl} alt="Предпросмотр обложки" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[#888]">
                Изображение появится после ввода URL
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[28px] bg-[#0A66C2] p-6 text-white shadow-sm">
          <Field label="Ключ администратора" htmlFor="adminApiKey" dark hint="Ключ отправляется только в защищённый API-запрос.">
            <input
              id="adminApiKey"
              type="password"
              value={apiKey}
              onChange={(event) => setApiKey(event.target.value)}
              required
              autoComplete="off"
              className={`${inputClass} border-white/25 bg-white/10 text-white placeholder:text-white/45 focus:border-white`}
            />
          </Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-full bg-white px-6 py-3.5 font-semibold text-[#0A66C2] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Сохраняем…" : "Сохранить мероприятие"}
          </button>

          {submitState.type === "success" || submitState.type === "error" ? (
            <p
              role={submitState.type === "error" ? "alert" : "status"}
              className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
                submitState.type === "success" ? "bg-white/15" : "bg-red-950/25"
              }`}
            >
              {submitState.message}
            </p>
          ) : null}
        </div>
      </aside>
    </form>
  );
}

const inputClass =
  "mt-2 w-full rounded-2xl border border-black/10 bg-[#fafafa] px-4 py-3 text-base outline-none transition focus:border-[#0A66C2] focus:ring-4 focus:ring-[#0A66C2]/10";

function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] bg-white p-6 shadow-sm md:rounded-[36px] md:p-9">
      <div className="mb-7">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#777]">{description}</p>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  dark = false,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold">
      <span className={dark ? "text-white" : "text-[#333]"}>{label}</span>
      {children}
      {hint ? <span className={`mt-2 block text-xs font-normal ${dark ? "text-white/70" : "text-[#888]"}`}>{hint}</span> : null}
    </label>
  );
}

function toIsoDate(value: FormDataEntryValue | null) {
  if (
    typeof value !== "string" ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)
  ) {
    throw new Error("Укажите дату и время начала и окончания.");
  }

  const date = new Date(`${value}:00+05:00`);
  if (Number.isNaN(date.getTime())) throw new Error("Указана некорректная дата.");
  return date.toISOString();
}

async function parseResponse(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    if (!response.ok) {
      throw new Error(`Сервер временно недоступен (HTTP ${response.status}).`);
    }
    throw new Error("Сервер вернул неожиданный формат ответа.");
  }

  return response.json();
}

function normalizeMessage(message?: string | string[]) {
  if (Array.isArray(message)) return message.join(" ");
  return message || "Не удалось сохранить мероприятие.";
}
