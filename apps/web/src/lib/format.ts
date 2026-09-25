/** Number/currency helpers used across tickers, tables and calculators. */

export function formatPrice(value: number, digits = 5) {
  return value.toFixed(digits);
}

export function formatCurrency(value: number, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
}

export function formatPercent(value: number, digits = 2) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(digits)}%`;
}

export function formatCompact(value: number, locale = "en-US") {
  return new Intl.NumberFormat(locale, { notation: "compact" }).format(value);
}
