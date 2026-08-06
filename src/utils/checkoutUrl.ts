const CHECKOUT_BASE_URL =
  'https://bio-hack-peso-ideal.impultienda.ar/checkout';

/**
 * Appends the current page's query string (utm_source, utm_campaign, gclid,
 * fbclid, etc.) to the checkout URL as-is, so tracking params survive the
 * redirect to checkout.
 */
export function getCheckoutUrl(): string {
  if (typeof window === 'undefined') return CHECKOUT_BASE_URL;
  const search = window.location.search;
  return search ? `${CHECKOUT_BASE_URL}${search}` : CHECKOUT_BASE_URL;
}
