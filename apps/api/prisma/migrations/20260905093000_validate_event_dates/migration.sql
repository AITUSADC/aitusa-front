-- Prevent invalid intervals regardless of whether events are written by the
-- future admin API, a seed script, or directly in the database.
ALTER TABLE "Event"
ADD CONSTRAINT "Event_valid_date_range" CHECK ("endsAt" >= "startsAt");
