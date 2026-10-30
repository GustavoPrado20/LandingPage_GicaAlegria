import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Movimento com motivo:
 * 1) Topo: os arcos da marca sobem em sequência e a foto entra por último (primeira impressão).
 * 2) Galeria: cada foto surge uma vez ao entrar na tela (guia o olhar pela vitrine de trabalhos).
 * Nada mais se mexe. Sem JS ou com "reduzir movimento", tudo aparece parado.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('[data-ring]', { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, clearProps: 'transform,opacity' });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 36,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });
}
