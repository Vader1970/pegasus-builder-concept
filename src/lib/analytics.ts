/**
 * GA4 for the Pegasus Digital – Showcase Concepts property.
 * Measurement ID is supplied via NEXT_PUBLIC_GA_MEASUREMENT_ID only.
 */
export function gaMeasurementId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!id) return undefined;
  if (!/^G-[A-Z0-9]+$/i.test(id)) return undefined;
  return id;
}
