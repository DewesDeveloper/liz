import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FinalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Плавное появление текста снизу
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 2,
        ease: "power4.out"
      });

      // Анимация раскрытия линии
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scaleX: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Декоративный размытый свет на фоне */}
      <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div ref={textRef} className="text-center px-6">
        <p className="text-gray-500 uppercase tracking-[0.6em] text-xs mb-8">
          Навсегда в моём сердце
        </p>
        
        <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
          Я тебя люблю
        </h2>

        {/* Разделительная линия */}
        <div 
          ref={lineRef}
          className="w-24 h-[1px] bg-gold mx-auto mb-10 origin-center"
        />

        <p className="text-gold text-xl md:text-2xl font-light tracking-widest uppercase">
          мой лучший подарок судьбы
        </p>
      </div>

      {/* Копирайт в самом низу */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em]">
          2026 • Твоя личная крепость
        </p>
      </div>
    </section>
  );
};