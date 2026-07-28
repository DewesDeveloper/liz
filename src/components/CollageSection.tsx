import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Импортируем изображения. 
// Важно: так как файл теперь в папке components, путь до img меняется на ../img/
import photoBig from '../img/6.jpg'; 
import photoMed from '../img/7.jpg';
import photoSmall from '../img/8.jpg';

gsap.registerPlugin(ScrollTrigger);

export const CollageSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const img1 = useRef<HTMLDivElement>(null);
  const img2 = useRef<HTMLDivElement>(null);
  const img3 = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Параллакс для фото
      gsap.to(img1.current, {
        y: -100,
        scrollTrigger: { trigger: sectionRef.current, scrub: true }
      });
      gsap.to(img2.current, {
        y: -180,
        scrollTrigger: { trigger: sectionRef.current, scrub: true }
      });
      gsap.to(img3.current, {
        y: -60,
        scrollTrigger: { trigger: sectionRef.current, scrub: true }
      });

      // Анимация появления текста
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: "power4.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-32 overflow-hidden bg-[#0a0a0a]"
    >
      <div className="relative w-full h-[600px] md:h-[800px]">
        <div ref={img1} className="absolute top-10 left-0 w-2/3 h-[450px] z-10 overflow-hidden border border-white/10 shadow-2xl">
          <img src={photoBig} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="1" />
        </div>
        <div ref={img2} className="absolute top-1/2 -right-4 w-1/2 h-[250px] z-20 overflow-hidden border border-white/10 shadow-2xl ring-8 ring-[#0a0a0a]">
          <img src={photoMed} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="2" />
        </div>
        <div ref={img3} className="absolute bottom-10 left-[10%] w-1/3 h-[200px] z-30 overflow-hidden border border-gold/30 shadow-2xl">
          <img src={photoSmall} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="3" />
        </div>
      </div>

      <div ref={textRef} className="w-full md:w-1/2 mt-20 md:mt-0 md:pl-24">
        <h2 className="text-gold text-sm uppercase tracking-[0.5em] mb-6">Наследие</h2>
        <h3 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
          История, написанная <br /> 
          <span className="text-white not-italic font-bold">вместе с тобой</span>
        </h3>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
         Хоть мы и не всегда были с тобой настолько близки, ругались и были далеко друг от друга я всё равно тебя любил не смотря ни на что и хотел быть рядом.
         Ты - лучшее, что давала мне жизнь, лучший шанс на счастливую и долгую жизнь. Я не хочу терять этот щанс, хочу быть с тобой всегда - и в болезни,
         и в здравии, и горе. Делить всё, что уготовила нам жизнь. Быть рядом, не смотря ни какие трудности и радости. Быть всегда с тобой, быть с маой лучшей девушкой на всем белом и черном свете.
         Быть с той, что смеется, как чайка, с той, что шутит чернее дегтя, быть с той, что радуется, как ребенок от любых мелочей, с той, кто поддерживает меня и волнуется искренне всех на свете.
         Я люблю тебя, Лиза, и ъочу прожить остаток своих дней с тобой. Ведь эти дни все, до единого, лучшие в моей скучной жизни.
        </p>
        <button className="group relative px-8 py-4 border border-gold text-gold uppercase text-xs tracking-widest overflow-hidden transition-all">
          <a href='https://web.telegram.org/@RAIDEN_MEI01' className="relative z-10 group-hover:text-black transition-colors duration-300">Моя мявка</a>
          <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};