import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CollageSection } from './components/CollageSection'; 
import { FinalSection } from './components/FinalSection'; // Импорт
gsap.registerPlugin(ScrollTrigger);
// src/App.tsx или ваш компонент
import img1 from './img/1.jpg'; // Замените на реальные названия файлов
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

import photoBig from './img/6.jpg'; // Большое вертикальное
import photoMed from './img/7.jpg'; // Среднее горизонтальное
import photoSmall from './img/8.jpg'; // Маленькое квадратное

interface CardItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const SECTION_DATA: CardItem[] = [
  {
    id: 1,
    title: "Масюся",
    subtitle: "Моя крепость и вдохновение",
    image: img1
  },
  {
    id: 2,
    title: "Дом",
    subtitle: "Место, где живет любовь",
    image: img2
  },
  {
    id: 3,
    title: "Мечта",
    subtitle: "То, ради чего я стараюсь и живу",
    image: img3
  },
  {
    id: 4,
    title: "Будущее",
    subtitle: "К которому мы идем рука об руку",
    image: img4
  }
];
export default function App() {
  useSmoothScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Анимация Hero (Масштабирование фона)
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        scale: 1.2,
        y: 100
      });

      // 2. Появление заголовка (Fade + Slide)
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });

      // 3. Анимация появления карточек при скролле
      gsap.utils.toArray<HTMLElement>(".reveal-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    });

    return () => ctx.revert();
  }, []);


  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Goonies Cave"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center">
          <h1 ref={titleRef} className="text-[12vw] font-bold leading-none tracking-tighter uppercase italic">
            Я <span className="text-gold">Люблю тебя</span>
          </h1>
        </div>
      </section>

      <section className="relative z-10 bg-[#0a0a0a] px-10 py-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {SECTION_DATA.map((item) => (
              <div key={item.id} className="reveal-card group cursor-pointer">
                <div className="overflow-hidden aspect-[4/5] bg-neutral-900 mb-6">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    alt={item.title}
                  />
                </div>
                {/* Название с анимацией золотого цвета */}
                <h3 className="text-3xl font-serif text-gold italic transition-all duration-300 group-hover:translate-x-2">
                  {item.title}
                </h3>
                {/* Подзаголовок */}
                <p className="text-neutral-500 uppercase tracking-widest text-sm mt-2">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Divider */}
      <section className="h-screen overflow-hidden relative">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center scale-110"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80')` }}
          data-speed="0.5"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 gap-y-8 px-4">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 gap-y-12 px-4">
            <h2 className="text-2xl md:text-6xl uppercase font-bold tracking-[1em] pl-[1em] text-center">
              Ты - моя{" "}
              <span className="text-gold inline-block transition-all duration-300 cursor-pointer hover:scale-110 hover:ring-2 hover:ring-gold hover:ring-offset-8 hover:ring-offset-gold px-2">
                крепость
              </span>
            </h2>

            <h2 className="text-2xl md:text-5xl uppercase font-bold tracking-[1em] pl-[1em] text-center">
              Ты - мой{" "}
              <span className="text-gold inline-block transition-all duration-300 cursor-pointer hover:scale-110 hover:ring-2 hover:ring-gold hover:ring-offset-8 hover:ring-offset-gold  px-2">
                дом
              </span>
            </h2>

            <h2 className="text-2xl md:text-4xl uppercase font-bold tracking-[1em] pl-[1em] text-center leading-relaxed">
              Ты - та, ради кого я{" "}
              <span className="text-gold inline-block transition-all duration-1200 cursor-pointer hover:scale-110 hover:ring-2 hover:ring-gold hover:ring-offset-8 hover:ring-offset-gold px-2">
                живу
              </span>{" "}
              и{" "}
              <span className="text-gold inline-block transition-all duration-300 cursor-pointer hover:scale-110 hover:ring-2 hover:ring-gold hover:ring-offset-8 hover:ring-offset-gold px-2">
                буду жить
              </span>
            </h2>
          </div>
        </div>
      </section>

      <div className="h-screen" /> {/* Spacer */}
       <CollageSection />
        <FinalSection /> {/* Финальный аккорд */}
    </div>
  );
}