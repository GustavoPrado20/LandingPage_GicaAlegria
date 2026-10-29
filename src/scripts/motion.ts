import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Movimento com motivo:
 * 1) Topo: os arcos da marca sobem em sequência e a foto entra por último (primeira impressão).
 * 2) Galeria: cada foto surge uma vez ao entrar na tela (guia o olhar pela vitrine de trabalhos).
 * Nada mais se mexe. Sem JS ou com "reduzir movimento", tudo aparece parado.
 */
const motion = gsap.matchMedia();

motion.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('[data-ring]', { y: 20, duration: 0.9, ease: 'expo.out', stagger: 0.1, clearProps: 'transform' });
  gsap.from('[data-ring-img]', { opacity: 0, duration: 0.7, delay: 0.3, ease: 'expo.out', clearProps: 'opacity' });

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
});
