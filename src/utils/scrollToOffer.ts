/**
 * Smoothly scrolls to the purchase card (#comprar).
 *
 * The landing page wraps several sections in `.cv-section`
 * (content-visibility: auto) for performance. Those sections render with an
 * ESTIMATED height until they are painted, which breaks plain `#hash` anchor
 * jumps: the browser computes the target offset from the estimates, then the
 * real heights shift everything and the scroll lands in the wrong place.
 *
 * To fix this we scroll to the element and then re-correct on subsequent
 * frames, once the intervening sections have rendered their real size.
 */
export function scrollToOffer(
e?: {preventDefault: () => void;},
targetId = 'comprar')
{
  if (e) e.preventDefault();
  if (typeof document === 'undefined') return;

  const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getTarget = () => document.getElementById(targetId);

  const scrollNow = (behavior: ScrollBehavior) => {
    const el = getTarget();
    if (!el) return;
    el.scrollIntoView({
      behavior,
      block: 'start'
    });
  };

  // Initial scroll kicks off rendering of any content-visibility sections
  // between the current position and the target.
  scrollNow(prefersReduced ? 'auto' : 'smooth');

  if (prefersReduced) return;

  // Re-correct after the layout settles, in case revealed sections shifted
  // the target's final position.
  const corrections = [120, 320, 600];
  corrections.forEach((delay) => {
    window.setTimeout(() => scrollNow('smooth'), delay);
  });
}