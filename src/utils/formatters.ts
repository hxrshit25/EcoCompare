/**
 * Formats a numeric price into the Indian Rupee (₹) format.
 * e.g., 58999 -> ₹58,999; 139999 -> ₹1,39,999
 */
export function formatPrice(price: number, currency: string = '₹'): string {
  if (price === undefined || price === null || isNaN(price)) {
    return `${currency}0`;
  }
  try {
    const formatted = new Intl.NumberFormat('en-IN').format(price);
    return `${currency}${formatted}`;
  } catch {
    return `${currency}${price}`;
  }
}

/**
 * Returns a human-friendly data credibility badge configuration
 */
export function getDataConfidenceBadge(
  status?: 'Verified' | 'Estimated' | 'Not Available',
  confidence?: 'High' | 'Medium' | 'Preliminary'
): { label: string; dotColor: string; bg: string; text: string; border: string } {
  if (status === 'Verified') {
    return {
      label: 'Verified LCA',
      dotColor: 'bg-emerald-500',
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
      text: 'text-emerald-800 dark:text-emerald-300',
      border: 'border-emerald-200 dark:border-emerald-800'
    };
  }
  if (status === 'Estimated') {
    return {
      label: confidence === 'High' ? 'Estimated (High Confidence)' : 'Peer-Estimated',
      dotColor: 'bg-teal-500',
      bg: 'bg-teal-50 dark:bg-teal-950/60',
      text: 'text-teal-800 dark:text-teal-300',
      border: 'border-teal-200 dark:border-teal-800'
    };
  }
  return {
    label: 'Preliminary Data',
    dotColor: 'bg-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
    text: 'text-amber-800 dark:text-amber-300',
    border: 'border-amber-200 dark:border-amber-800'
  };
}
