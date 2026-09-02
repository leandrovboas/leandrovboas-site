export function formatArticleDate(isoOrRfc822: string, locale: string): string {
  const date = new Date(isoOrRfc822);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
  }).format(date);
}
