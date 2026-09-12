import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { getCommittees } from "@/data/committees";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Committees.module.css";

type CommitteesProps = {
  locale: Locale;
  labels: Dictionary["home"]["committees"];
};

export default function Committees({ locale, labels }: CommitteesProps) {
  const committees = getCommittees(locale);

  return (
    <section
      id="committees"
      aria-labelledby="committees-heading"
      className="mx-auto w-full max-w-[1729px] px-5 py-16 md:px-10 md:py-28 lg:px-20"
    >
      <h2 id="committees-heading" className="mb-7 text-balance text-center text-[clamp(32px,4vw,56px)] font-semibold leading-none tracking-[-0.035em] md:mb-14">
        {labels.title}
      </h2>

      <div className={styles.grid}>
        {committees.map((committee) => (
          <Link
            key={committee.id}
            href={`/${locale}/committees/${committee.slug}`}
            aria-labelledby={`committee-${committee.slug}-title`}
            className={`${styles.card} ${committee.isBlue ? styles.blue : ""} ${committee.wide ? styles.wide : ""}`}
          >
            <div className={styles.artwork}>
              <Image
                src={committee.imageUrl}
                alt=""
                fill
                sizes={committee.wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 id={`committee-${committee.slug}-title`} className={styles.title}>{committee.title}</h3>
              <span className={styles.details}>
                {labels.details}
                <ArrowUpRightIcon className={styles.arrow} aria-hidden="true" />
              </span>
            </div>
            <div className={styles.overlay} aria-hidden="true">
              <p>{committee.cardDescription}</p>
              <span className={styles.overlayCta}>
                {labels.details}
                <ArrowUpRightIcon className={styles.arrow} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
