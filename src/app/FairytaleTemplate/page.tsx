// ...existing code...
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FairytaleTemplate() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [activeGiftTab, setActiveGiftTab] = useState('digital');

  const placeholderStyle = `
    .custom-placeholder::placeholder {
      color: #F39FDD !important;
      font-size: 20px !important;
      font-family: 'Times New Roman' !important;
      font-weight: 400 !important;
    }
    
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #D9D9D9;
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #F042C5;
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #E03BB0;
    }
  `;

  // Photo gallery state
  const photos = [
    '/assets/images/foto1.jpg',
    '/assets/images/mainfoto.jpg', 
    '/assets/images/foto2.jpg',
    '/assets/images/foto3.jpg',
    '/assets/images/foto4.jpg'
  ];
  
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-03-15T08:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  // Wedding Registry slider items
  const registryItems = [
    {
      name: 'Kotak Kado',
      img: '/assets/images/kadokotak.png',
    },
    {
      name: 'Vas Bunga Hias',
      img: '/assets/images/vasbunga.png',
    },
    {
      name: 'Selimut',
      img: '/assets/images/selimut.png',
    },
  ];

  const [registryIndex, setRegistryIndex] = useState(0);

  const handleRegistryPrev = () => {
    setRegistryIndex((prev) => (prev === 0 ? registryItems.length - 1 : prev - 1));
  };
  const handleRegistryNext = () => {
    setRegistryIndex((prev) => (prev === registryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ${placeholderStyle}
        .wedding-gift-tab-btn {
          font-size: clamp(9px, 3vw, 12px) !important;
        }
        @media (max-width: 400px) {
          .wedding-gift-tab-btn {
            font-size: 10px !important;
            padding: 6px 4px !important;
          }
        }
        @media (max-width: 340px) {
          .wedding-gift-tab-btn {
            font-size: 9px !important;
            padding: 5px 2px !important;
          }
        }
        /* bordercdhd responsive scale: desktop 1.30, mobile 1.43 */
        .bordercdhd-scale {
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          transform: scale(1.30);
        }
        @media (max-width: 640px) {
          .bordercdhd-scale {
            transform: scale(1.43);
          }
        }
      ` }} />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-x-hidden">
      
      {/* Opening Cover Section */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center relative"
        style={{
          background: `
            linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 240, 245, 0.9) 100%),
            url('/assets/images/backgroundistana.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Additional gradient overlay for better text readability */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 240, 245, 0.7) 70%, rgba(255, 235, 245, 0.95) 100%)'
          }}
        ></div>

        
        <div className="text-center p-6 max-w-sm mx-auto z-10 mt-16">
          {/* Top title with ribbon background */}
          <div className="mb-2">
            <div 
              className="inline-block px-6 py-3 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/images/pita.svg')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <h2 className="text-center" style={{color: '#F042C5', fontSize: '20px', fontFamily: 'Times New Roman', fontWeight: 700, wordWrap: 'break-word'}}>
                The Royal Wedding of
              </h2>
            </div>
          </div>
          
          {/* Couple names - with background frame */}
          <div className="mb-6 relative z-10">
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/assets/images/framenama.png')",
                backgroundSize: '110% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="relative z-10 px-8 py-8">
              <h1 className="text-3xl mb-3 font-bold" style={{fontFamily: 'Times New Roman', color: '#8D2072'}}>
                Prince Alexander
              </h1>
              <div className="flex items-center justify-center mb-3">
                <div className="w-20 h-0.5" style={{backgroundColor: '#F042C5'}}></div>
                <div className="text-2xl mx-4" style={{fontFamily: 'Times New Roman', color: '#F042C5'}}>&</div>
                <div className="w-20 h-0.5" style={{backgroundColor: '#F042C5'}}></div>
              </div>
              <h1 className="text-3xl font-bold" style={{fontFamily: 'Times New Roman', color: '#8D2072'}}>
                Princess Isabella
              </h1>
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="w-32 h-px bg-pink-300 mx-auto mb-3"></div>
          
          {/* Invitation text - with capsule background */}
          <div className="-mt-6 mb-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-1 shadow-lg">
              <p className="text-sm mb-1" style={{fontFamily: 'Times New Roman', color: '#8D2072', fontSize: '20px', fontWeight: 400, wordWrap: 'break-word', marginBottom: '4px'}}>
                Dear Dear Beloved Guest,
              </p>
              <p className="text-sm" style={{fontFamily: 'Times New Roman', color: '#F042C5', fontSize: '14px', fontWeight: 400, wordWrap: 'break-word'}}>
                We joyfully invite you to celebrate our fairytale beginning
              </p>
          </div>
          
          {/* Open invitation button with exact Figma styling */}
          <div 
            className="mx-auto mt-4 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg inline-flex justify-center items-center gap-2 mb-8"
            style={{
              background: 'linear-gradient(90deg, #DB4A94 0%, #CD2F76 50%, #DC4B95 100%)'
            }}
          >
            <div 
              className="text-white font-bold"
              style={{
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Times New Roman',
                fontWeight: 700,
                wordWrap: 'break-word'
              }}
            >
              Open Invitation
            </div>
            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-transparent">
              <Image src="/assets/images/bintang.png" width={20} height={20} alt="bintang" />
            </div>
          </div>
        </div>
        
        {/* Bottom mouse scroll indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            {/* Mouse shape */}
            <div className="w-6 h-10 border-2 border-pink-300/80 rounded-full bg-pink-100/20 backdrop-blur-sm flex items-start justify-center pt-2">
              {/* Scroll wheel dot */}
              <div className="w-1 h-2 bg-pink-400/80 rounded-full animate-pulse">
                <div className="w-full h-full bg-pink-500/80 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            {/* Scroll text */}
            <div className="text-pink-300/80 text-xs mt-1 text-center font-medium">Scroll</div>
          </div>
        </div>
      </section>

      {/* Words of Blessing Section */}
  <section className="py-16 px-4" style={{ background: '#FBDEF0' }}>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-2">
              <Image 
                src="/assets/images/mahkota.png" 
                alt="Crown" 
                width={48} height={48}
                className="w-12 h-12 mr-3"
                style={{objectFit: 'contain'}}
                priority
              />
              <h2 className="text-2xl font-serif text-rose-800">Words of Blessing</h2>
              <Image 
                src="/assets/images/mahkota.png" 
                alt="Crown" 
                width={48} height={48}
                className="w-12 h-12 ml-3"
                style={{objectFit: 'contain'}}
                priority
              />
            </div>
            <p className="text-rose-600 text-sm" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Sacred verses that guide our royal journey</p>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-rose-300"></div>
            <Image 
              src="/assets/images/bintang.png" 
              alt="Star" 
              width={48} height={48}
              className="w-12 h-12 mx-4"
              style={{objectFit: 'contain'}}
              priority
            />
            <div className="flex-1 h-px bg-rose-300"></div>
          </div>
          
          <div className="bg-white rounded-lg px-6 pt-8 pb-6 shadow-md text-center relative" style={{border: '2px solid #F042C5'}}>
            {/* Top-left flower icon */}
            <Image 
              src="/assets/images/blesinkirihd.png" 
              alt="Flower decoration" 
              width={96} height={96}
              className="absolute -top-6 -left-6 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            {/* Bottom-right flower icon - larger size */}
            <Image 
              src="/assets/images/blesingkananhd.png" 
              alt="Flower decoration" 
              width={96} height={96}
              className="absolute -bottom-6 -right-6 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            
            <div className="mb-3 text-rose-800 leading-relaxed" style={{fontFamily: 'serif', fontSize: '14px'}}>
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </div>
            
            <div className="mb-2" style={{color: '#F042C5', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>
              Artinya: &ldquo;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
            </div>
            
            <div className="text-xs font-medium" style={{color: '#F042C5'}}>-QS. Ar-Rum: 21</div>
          </div>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-2">
              <Image 
                src="/assets/images/burungkirihd.png" 
                alt="Bird decoration" 
                width={56} height={56}
                className="w-14 h-14 mr-2"
                style={{objectFit: 'contain'}}
                priority
              />
              <h2 className="text-2xl font-serif text-rose-800">Our Love Story Begins</h2>
              <Image 
                src="/assets/images/burungkananhd.png" 
                alt="Bird decoration" 
                width={56} height={56}
                className="w-14 h-14 ml-2"
                style={{objectFit: 'contain'}}
                priority
              />
            </div>
            <p className="text-sm" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Two hearts, one destiny</p>
          </div>
          
          {/* Groom */}
          <div className="mb-16 bg-white rounded-lg p-6 shadow-md" style={{border: '2px solid #F042C5'}}>
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full relative">
                <Image 
                  src="/assets/images/cwok.jpg" 
                  alt="Alexander William Thompson"
                  width={160} height={160}
                  className="w-40 h-40 object-cover rounded-full absolute top-4 left-4"
                  style={{objectFit: 'cover'}}
                  priority
                />
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
                  style={{
                    backgroundImage: "url('/assets/images/boderbungamempelai.png')"
                  }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="mb-2" style={{color: '#F042C5', fontSize: '24px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Alexander William Thompson</h3>
              <p className="text-sm mb-2" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Putra dari:</p>
              <p className="text-sm" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>William Thompson & Elizabeth Thompson</p>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm flex items-center mx-auto">
                <svg className="mr-2 w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @alexanderson
              </button>
            </div>
          </div>
          
          {/* Bride */}
          <div className="mb-16 bg-white rounded-lg p-6 shadow-md" style={{border: '2px solid #F042C5'}}>
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full relative">
                <Image 
                  src="/assets/images/cwek.jpg" 
                  alt="Isabella Grace Martinez"
                  width={160} height={160}
                  className="w-40 h-40 object-cover rounded-full absolute top-4 left-4"
                  style={{objectFit: 'cover'}}
                  priority
                />
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
                  style={{
                    backgroundImage: "url('/assets/images/boderbungamempelai.png')"
                  }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="mb-2" style={{color: '#F042C5', fontSize: '24px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Isabella Grace Martinez</h3>
              <p className="text-sm mb-2" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Putra/Putri dari:</p>
              <p className="text-sm" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Roberto Martinez & Sofia Martinez</p>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm flex items-center mx-auto">
                <svg className="mr-2 w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @princess_bella
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50 relative">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <h2 style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Our Fairytale Journey</h2>
            <p style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Every love story is beautiful, but ours is our favorite</p>
          </div>
          
          {/* Horse icon */}
          <div className="text-center mb-6">
            <Image 
              src="/assets/images/kudaponihd.png" 
              alt="Horse decoration" 
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          
          <div className="relative">
  {/* Timeline line */}
  <div
    className="absolute left-4 top-0 bottom-0 w-2"
    style={{ background: "#F042C5" }}
  ></div>

  {/* Timeline items */}
  <div className="space-y-8">
    <div className="flex items-start">
      {/* Bullet */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 ml-1" 
        style={{ background: "#F042C5" }}
      ></div>

      {/* Content */}
      <div className="ml-6 bg-white p-4 rounded-lg shadow-md flex-1">
        <div
          className="px-2 py-1 rounded-full inline-block mb-2"
          style={{
            color: "#9A4C86",
            fontSize: "14px",
            fontFamily: "Georgia",
            fontWeight: 400,
            wordWrap: "break-word",
            background: "#F042C524",
          }}
        >
          2020
        </div>
        <h4 className="font-semibold text-rose-800 mb-2">Once Upon a Time</h4>
        <p
          style={{
            color: "#F042C5",
            fontSize: "16px",
            fontFamily: "Times New Roman",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          We first met at a magical coffee shop where Alex accidentally spilled
          coffee on Isabella&apos;s fairy tale book. Love at first sight (and
          spill)! ☕️💕
        </p>
      </div>
    </div>

    <div className="flex items-start">
      {/* Bullet */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 ml-1"
        style={{ background: "#F042C5" }}
      ></div>

      {/* Content */}
      <div className="ml-6 bg-white p-4 rounded-lg shadow-md flex-1">
        <div
          className="px-2 py-1 rounded-full inline-block mb-2"
          style={{
            color: "#9A4C86",
            fontSize: "14px",
            fontFamily: "Georgia",
            fontWeight: 400,
            wordWrap: "break-word",
            background: "#F042C524",
          }}
        >
          2021
        </div>
        <h4 className="font-semibold text-rose-800 mb-2">The First Date</h4>
        <p
          style={{
            color: "#F042C5",
            fontSize: "16px",
            fontFamily: "Times New Roman",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          Our first official date was a romantic picnic under the stars. Alex
          brought his guitar and serenaded Isabella with her favorite song. 🌟🎵
        </p>
      </div>
    </div>

    <div className="flex items-start">
      {/* Bullet */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 ml-1"
        style={{ background: "#F042C5" }}
      ></div>

      {/* Content */}
      <div className="ml-6 bg-white p-4 rounded-lg shadow-md flex-1">
        <div
          className="px-2 py-1 rounded-full inline-block mb-2"
          style={{
            color: "#9A4C86",
            fontSize: "14px",
            fontFamily: "Georgia",
            fontWeight: 400,
            wordWrap: "break-word",
            background: "#F042C524",
          }}
        >
          2023
        </div>
        <h4 className="font-semibold text-rose-800 mb-2">The Proposal</h4>
        <p
          style={{
            color: "#F042C5",
            fontSize: "16px",
            fontFamily: "Times New Roman",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          Alex proposed in a beautiful garden filled with pink roses, getting
          down on one knee with a crown-shaped ring box. She said yes! 👑💍
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
        
        {/* Bottom left flower decoration */}
        <Image 
          src="/assets/images/kirihdb.png" 
          alt="Flower decoration" 
          width={128} height={128}
          className="absolute -bottom-12 -left-2 w-32 h-32"
          style={{objectFit: 'contain'}}
          priority
        />
        {/* Bottom right flower decoration */}
        <Image 
          src="/assets/images/kananhdb.png" 
          alt="Flower decoration" 
          width={128} height={128}
          className="absolute -bottom-8 -right-2 w-32 h-32"
          style={{objectFit: 'contain'}}
          priority
        />
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/assets/images/Countdown.png" 
              alt="Countdown decoration" 
              width={48} height={48}
              className="w-12 h-12 mr-3"
              style={{objectFit: 'contain'}}
              priority
            />
            <h2 style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', lineHeight: '1.2'}}>
              Counting Down to<br/>Our Reception
            </h2>
            <Image 
              src="/assets/images/cd2.png" 
              alt="Countdown decoration" 
              width={48} height={48}
              className="w-12 h-12 ml-3"
              style={{objectFit: 'contain'}}
              priority
            />
          </div>
          <p className="text-sm mb-8" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Until our fairytale begins...</p>
          
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="relative">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.days.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>DAYS</div>
              </div>
              <div 
                className="absolute inset-0 bordercdhd-scale pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercdhd.png')",
                }}
              ></div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>HOURS</div>
              </div>
              <div 
                className="absolute inset-0 bordercdhd-scale pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercdhd.png')",
                }}
              ></div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>MINUTES</div>
              </div>
              <div 
                className="absolute inset-0 bordercdhd-scale pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercdhd.png')",
                }}
              ></div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>SECONDS</div>
              </div>
              <div 
                className="absolute inset-0 bordercdhd-scale pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercdhd.png')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* When & Where Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50 relative">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12 relative">
            {/* Left decoration */}
            <Image 
              src="/assets/images/kiriwhere.png" 
              alt="Left decoration" 
              width={96} height={96}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            
            {/* Right decoration */}
            <Image 
              src="/assets/images/kananwhere.png" 
              alt="Right decoration" 
              width={96} height={96}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            
            <h2 className="text-3xl font-serif text-rose-800 mb-2">When & Where</h2>
            <p className="text-sm" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Join us in celebrating our special day</p>
          </div>
          
          {/* Holy Matrimony */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-md" style={{border: '2px solid #F042C5'}}>
            <h3 className="text-xl font-serif text-rose-800 mb-4 text-center">Holy Matrimony</h3>
            <div className="w-24 h-1 bg-rose-300 mx-auto mb-6"></div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Image src="/assets/images/tanggal.svg" alt="Date" width={20} height={20} className="w-5 h-5 mr-3" style={{objectFit: 'contain'}} priority />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Saturday, March 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Image src="/assets/images/jam.svg" alt="Time" width={20} height={20} className="w-5 h-5 mr-3" style={{objectFit: 'contain'}} priority />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>08:00 AM</span>
              </div>
              <div className="flex items-center">
                <Image src="/assets/images/lokasi.svg" alt="Location" width={20} height={20} className="w-5 h-5 mr-3" style={{objectFit: 'contain'}} priority />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Masjid Al-Barokah</span>
              </div>
            </div>
            
            <p className="text-center mb-4" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Jl. Kebahagiaan No. 123, Jakarta Selatan</p>
            
            <div className="space-y-3">
              <button className="w-full text-white py-2 rounded-lg text-sm flex items-center justify-center" style={{backgroundColor: '#FF3EA0'}}>
                <span className="mr-2">+</span>
                Add to Calendar
              </button>
              
              <div className="w-full h-32 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194637395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMasjid%20Istiqlal!5e0!3m2!1sen!2sid!4v1642678901234!5m2!1sen!2sid"
                  width="100%" 
                  height="128" 
                  style={{border: 0}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <button className="w-full text-white py-2 rounded-lg text-sm flex items-center justify-center bg-white" style={{border: '2px solid #F042C5', color: '#F042C5'}}>
                <Image src="/assets/images/lokasi.svg" alt="Map" width={16} height={16} className="w-4 h-4 mr-2" style={{objectFit: 'contain'}} priority />
                View on Maps
              </button>
            </div>
          </div>
          
          {/* Wedding Reception */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-md" style={{border: '2px solid #F042C5'}}>
            <h3 className="text-xl font-serif text-rose-800 mb-4 text-center">Wedding Reception</h3>
            <div className="w-24 h-1 bg-rose-300 mx-auto mb-6"></div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Image src="/assets/images/tanggal.svg" alt="Date" width={20} height={20} className="w-5 h-5 mr-3" />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Saturday, March 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Image src="/assets/images/jam.svg" alt="Time" width={20} height={20} className="w-5 h-5 mr-3" />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>07:00 PM</span>
              </div>
              <div className="flex items-center">
                <Image src="/assets/images/lokasi.svg" alt="Location" width={20} height={20} className="w-5 h-5 mr-3" />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>The Royal Ballroom</span>
              </div>
            </div>
            
            <p className="text-center mb-4" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Jl. Cinta Sejati No. 456, Jakarta Selatan</p>
            
            <div className="space-y-3">
              <button className="w-full text-white py-2 rounded-lg text-sm flex items-center justify-center" style={{backgroundColor: '#FF3EA0'}}>
                <span className="mr-2">+</span>
                Add to Calendar
              </button>
              
              <div className="w-full h-32 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.8229!3d-6.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42e16ba315d%3A0x3d3efc0dd610c4ab!2sGrand%20Indonesia!5e0!3m2!1sen!2sid!4v1642678901234!5m2!1sen!2sid"
                  width="100%" 
                  height="128" 
                  style={{border: 0}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <button className="w-full text-white py-2 rounded-lg text-sm flex items-center justify-center bg-white" style={{border: '2px solid #F042C5', color: '#F042C5'}}>
                <Image src="/assets/images/lokasi.svg" alt="Map" width={16} height={16} className="w-4 h-4 mr-2" />
                View on Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flower decoration for Dress Code - positioned outside section */}
      <div className="relative w-full">
        <Image 
          src="/assets/images/bungahddress.png" 
          alt="Flower decoration" 
          width={224} height={56}
          className="absolute left-1/2 transform -translate-x-1/2 w-56 h-14"
          style={{top: '8px', zIndex: 1, objectFit: 'contain'}}
          priority
        />
      </div>

      {/* Dress Code Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
  <div className="max-w-md mx-auto" style={{position: 'relative'}}>
          <div className="p-6 relative" style={{width: '100%', height: '100%', background: '#FBDEF0', borderRadius: '10px', zIndex: 2}}>
            
            <div className="text-center mb-8">
              <h2 style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Dress Code</h2>
              <p style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Coquette Theme</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center bg-white rounded-lg p-4 relative">
                <div className="w-16 h-16 rounded-full bg-pink-200 mx-auto mb-2"></div>
                <p style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Soft Pink</p>
                
                {/* Bottom left corner decoration - positioned with perfect corner alignment */}
                <Image 
                  src="/assets/images/bungakirihd.png" 
                  alt="Left corner decoration" 
                  width={112} height={112}
                  className="absolute w-28 h-28"
                  style={{
                    bottom: '-28px',
                    left: '-36px',
                    zIndex: 10,
                    pointerEvents: 'none',
                    objectFit: 'contain'
                  }}
                  priority
                />
              </div>  
              <div className="text-center bg-white rounded-lg p-4 relative">
                <div className="w-16 h-16 rounded-full bg-rose-300 mx-auto mb-2"></div>
                <p style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Rose</p>
                
                {/* Bottom right corner decoration - positioned with perfect corner alignment */}
                <Image 
                  src="/assets/images/bungakananhd.png" 
                  alt="Right corner decoration" 
                  width={112} height={112}
                  className="absolute w-28 h-28"
                  style={{
                    bottom: '-28px',
                    right: '-36px',
                    zIndex: 10,
                    pointerEvents: 'none',
                    objectFit: 'contain'
                  }}
                  priority
                />
              </div>
            </div>
            
            <p style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', textAlign: 'center'}}>
              We kindly request our guests to avoid wearing white or bright colors
            </p>
          </div>
        </div>
      </section>

      {/* Moments Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 relative">
            {/* Left decoration */}
            <Image 
              src="/assets/images/kiriourmoment.png" 
              alt="Left decoration" 
              width={96} height={96}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            
            {/* Right decoration */}
            <Image 
              src="/assets/images/kananourmoment.png" 
              alt="Right decoration" 
              width={96} height={96}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            
            <h2 className="mb-0" style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Our Moments</h2>
            <p className="text-sm" style={{color: '#CD3FAA', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>A glimpse of our beautiful journey together</p>
          </div>
          
          <div className="mb-8">
            {/* Main Photo with fade transition */}
            <div className="w-full h-64 rounded-lg mb-4 overflow-hidden relative">
              {photos.map((photo, index) => (
                <Image 
                  key={index}
                  src={photo} 
                  alt={`Our special moments ${index + 1}`}
                  width={400} height={256}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{objectFit: 'cover'}}
                  priority={index === currentPhotoIndex}
                />
              ))}
              
              {/* Photo indicator dots */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPhotoIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Horizontal scrollable thumbnail gallery */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 pb-2">
                {photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentPhotoIndex 
                        ? 'ring-2 ring-pink-400 scale-105' 
                        : 'hover:ring-2 hover:ring-pink-200'
                    }`}
                  >
                    <Image 
                      src={photo} 
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="rounded-lg p-6 text-center" style={{background: '#FBDEF0'}}>
            <h3 className="mb-2" style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Share Your Moments</h3>
            <p className="mb-4" style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Tag us in your photos and videos from our special day using</p>
            
            <div style={{width: '100%', height: '100%', padding: '10px', background: 'white', borderRadius: '10px', outline: '1px #9A4C86 solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
              <div style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Consolas', fontWeight: 400, wordWrap: 'break-word'}}>#WeddingMempelai2025</div>
              <div style={{padding: '4px', background: 'white', borderRadius: '5px', outline: '1px #9A4C86 solid', outlineOffset: '-1px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                  src="/assets/images/copyy.svg" 
                  alt="Copy" 
                  width={16} height={16}
                  className="w-4 h-4"
                  style={{objectFit: 'contain'}}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 relative">
            {/* Left decoration */}
            <Image 
              src="/assets/images/pitakirihd.png" 
              alt="Left ribbon decoration" 
              width={96} height={96}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            
            {/* Right decoration */}
            <Image 
              src="/assets/images/pitakananhd.png" 
              alt="Right ribbon decoration" 
              width={96} height={96}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-24"
              style={{objectFit: 'contain'}}
              priority
            />
            
            <h2 className="mb-2" style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>RSVP</h2>
            <p style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Please confirm your attendance</p>
          </div>
          
          <div className="bg-white rounded-lg p-6" style={{border: '2px solid #F042C5'}}>
            <form className="space-y-6">
              <div>
                <label className="block mb-2" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Nama Lengkap</label>
                <div style={{width: '100%', height: '100%', padding: '10px', background: '#FEEAF9', borderRadius: '5px', outline: '1px #D38CC1 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                  <input 
                    type="text" 
                    placeholder="Alif & partner"
                    className="w-full bg-transparent border-none outline-none"
                    style={{
                      textAlign: 'left', 
                      color: '#000000', 
                      fontSize: '20px', 
                      fontFamily: 'Times New Roman', 
                      fontWeight: 400, 
                      wordWrap: 'break-word'
                    }}
                  />
                  <style jsx>{`
                    input::placeholder {
                      color: #F39FDD !important;
                      font-size: 20px;
                      font-family: Times New Roman;
                      font-weight: 400;
                    }
                  `}</style>
                </div>
              </div>
              
              <div>
                <label className="block mb-2" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Konfirmasi Kehadiran</label>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <div className="mr-2 w-4 h-4 relative overflow-hidden rounded-full">
                      <div style={{width: '13.33px', height: '13.33px', left: '1.33px', top: '1.33px', position: 'absolute', outline: '1.50px #9A4C86 solid', outlineOffset: '-0.75px', borderRadius: '50%'}}></div>
                      <input type="radio" name="attendance" className="absolute opacity-0 w-full h-full peer" />
                      <div className="peer-checked:block hidden" style={{width: '8px', height: '8px', left: '4px', top: '4px', position: 'absolute', background: '#F042C5', borderRadius: '50%'}}></div>
                    </div>
                    <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Hadir</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <div className="mr-2 w-4 h-4 relative overflow-hidden rounded-full">
                      <div style={{width: '13.33px', height: '13.33px', left: '1.33px', top: '1.33px', position: 'absolute', outline: '1.50px #9A4C86 solid', outlineOffset: '-0.75px', borderRadius: '50%'}}></div>
                      <input type="radio" name="attendance" className="absolute opacity-0 w-full h-full peer" />
                      <div className="peer-checked:block hidden" style={{width: '8px', height: '8px', left: '4px', top: '4px', position: 'absolute', background: '#F042C5', borderRadius: '50%'}}></div>
                    </div>
                    <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Tidak Hadir</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block mb-2" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Jumlah tamu</label>
                <div style={{width: '100%', height: '100%', padding: '10px', background: '#FEEAF9', borderRadius: '5px', outline: '1px #D38CC1 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', display: 'inline-flex'}}>
                  <select 
                    className="w-full bg-transparent border-none outline-none" 
                    style={{textAlign: 'left', color: '#000000', fontSize: '20px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}
                  >
                    <option style={{background: '#FEEAF9', color: '#F39FDD'}}>1 orang</option>
                    <option style={{background: '#FEEAF9', color: '#F39FDD'}}>2 orang</option>
                    <option style={{background: '#FEEAF9', color: '#F39FDD'}}>3 orang</option>
                    <option style={{background: '#FEEAF9', color: '#F39FDD'}}>4 orang</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block mb-2" style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Pesan untuk Mempelai (Opsional)</label>
                <div style={{width: '100%', height: '100%', padding: '10px', background: '#FEEAF9', borderRadius: '5px', outline: '1px #D38CC1 solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '10px', display: 'inline-flex'}}>
                  <textarea 
                    placeholder="Tulis Pesan anda..."
                    rows={4}
                    className="w-full bg-transparent border-none outline-none resize-none"
                    style={{
                      color: '#000000', 
                      fontSize: '20px', 
                      fontFamily: 'Times New Roman', 
                      fontWeight: 400, 
                      wordWrap: 'break-word'
                    }}
                  ></textarea>
                  <style jsx>{`
                    textarea::placeholder {
                      color: #F39FDD !important;
                      font-size: 20px;
                      font-family: Times New Roman;
                      font-weight: 400;
                    }
                  `}</style>
                </div>
              </div>
              
              <div style={{width: '100%', height: '100%', padding: '10px', background: '#FF3EA0', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', cursor: 'pointer'}}>
                <Image 
                  src="/assets/images/telegram.png" 
                  alt="Send" 
                  width={16} height={16}
                  className="w-4 h-4"
                  style={{objectFit: 'contain'}}
                  priority
                />
                <div style={{textAlign: 'center', color: 'white', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Kirim RSVP</div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Wedding Wishes Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 relative">
            {/* Left star decoration */}
            <Image 
              src="/assets/images/hdwiseskiri.png" 
              alt="Left star decoration" 
              width={48} height={80}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-20"
              style={{objectFit: 'contain'}}
              priority
            />
            
            {/* Right star decoration */}
            <Image 
              src="/assets/images/hdwiseskanan.png" 
              alt="Right star decoration" 
              width={48} height={80}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-20"
              style={{objectFit: 'contain'}}
              priority
            />
            
            <h2 className="mb-2" style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Wedding Wishes</h2>
            <p style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Send your love and best wishes</p>
          </div>
          
          {/* Send Wishes Form */}
          <div className="bg-white rounded-lg p-6 shadow-md mb-8 border-2 border-pink-300">
            <div className="flex items-center mb-4">
              <Image src="/assets/images/Heart.svg" alt="Heart" width={20} height={20} className="mr-2" style={{objectFit: 'contain'}} priority />
              <h3 style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Kirim Ucapan</h3>
            </div>
            
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Alif & partner"
                className="custom-placeholder"
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#FEEAF9',
                  borderRadius: '5px',
                  outline: '1px #D38CC1 solid',
                  outlineOffset: '-1px',
                  border: 'none',
                  color: 'black',
                  fontSize: '20px',
                  fontFamily: 'Times New Roman',
                  fontWeight: 400,
                  wordWrap: 'break-word'
                }}
              />
              
              <textarea 
                placeholder="Tulis ucapan atau doa untuk mempelai..."
                rows={4}
                className="custom-placeholder"
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#FEEAF9',
                  borderRadius: '5px',
                  outline: '1px #D38CC1 solid',
                  outlineOffset: '-1px',
                  border: 'none',
                  color: 'black',
                  fontSize: '20px',
                  fontFamily: 'Times New Roman',
                  fontWeight: 400,
                  wordWrap: 'break-word',
                  resize: 'vertical'
                }}
              ></textarea>
              
              <button 
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#FF3EA0',
                  borderRadius: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <Image src="/assets/images/Heart.svg" alt="Heart" width={16} height={16} style={{filter: 'brightness(0) invert(1)', objectFit: 'contain'}} priority />
                <span style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Times New Roman',
                  fontWeight: 400,
                  wordWrap: 'break-word'
                }}>Kirim Ucapan</span>
              </button>
            </div>
          </div>
          
          {/* Wishes List */}
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-pink-300">
            <div className="flex items-center mb-6">
              <Image src="/assets/images/user.svg" alt="User" width={20} height={20} className="mr-2" style={{objectFit: 'contain'}} priority />
              <h3 style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Ucapan dari Tamu (3)</h3>
            </div>
            
            <div 
              className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#F042C5 #D9D9D9'
              }}
            >
              <div 
                className="p-4"
                style={{
                  background: '#F4CFE2',
                  borderRadius: '10px',
                  borderLeft: '4px #F042C5 solid',
                  boxShadow: '4px 4px 8px rgba(240, 66, 197, 0.3)'
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 style={{color: '#9A4C86', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Sarah & David</h4>
                  <span style={{color: '#F042C5', fontSize: '12px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>2 hari yang lalu</span>
                </div>
                <p style={{color: '#F042C5', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu! 💕</p>
              </div>
              
              <div 
                className="p-4"
                style={{
                  background: '#F4CFE2',
                  borderRadius: '10px',
                  borderLeft: '4px #F042C5 solid',
                  boxShadow: '4px 4px 8px rgba(240, 66, 197, 0.3)'
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 style={{color: '#9A4C86', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Maya</h4>
                  <span style={{color: '#F042C5', fontSize: '12px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>1 hari yang lalu</span>
                </div>
                <p style={{color: '#F042C5', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Finally! Kalian memang couple goals banget. Semoga langgeng sampai kakek nenek ya! 👰🤵</p>
              </div>
              
              <div 
                className="p-4"
                style={{
                  background: '#F4CFE2',
                  borderRadius: '10px',
                  borderLeft: '4px #F042C5 solid',
                  boxShadow: '4px 4px 8px rgba(240, 66, 197, 0.3)'
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 style={{color: '#9A4C86', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Ahmad & Sari</h4>
                  <span style={{color: '#F042C5', fontSize: '12px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>8 jam yang lalu</span>
                </div>
                <p style={{color: '#F042C5', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Barakallahu lakuma wa baraka alaikuma wa jama&apos;a bainakuma fi khair. Selamat menempuh hidup baru! 🤲</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Gift Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}} className="mb-2">Wedding Gift</h2>
            <p style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Your presence is the greatest gift, but if you wish to honor us with something special...</p>
          </div>
          
          {/* Star background icon (kanan bawah, behind frame) */}
          {/* Gift Options Container */}
          <div style={{width: '100%', height: '100%', position: 'relative', zIndex: 1}}>
            {/* Star icon inside the frame, absolutely positioned */}
            <Image 
              src="/assets/images/Groupbintang.png" 
              alt="Star background" 
              width={270} height={300}
              style={{
                position: 'absolute',
                right: '-40px',
                bottom: '-60px',
                width: '270px',
                height: '300px',
                maxWidth: 'none',
                maxHeight: 'none',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.85,
                userSelect: 'none',
                objectFit: 'contain'
              }}
              priority
            />
          {/* Gift Options Container */}
          {/* ...existing code... (Gift Options Container content remains unchanged) */}
            {/* Tab Navigation */}
            <div style={{width: '100%', height: '100%', background: '#F4CFE2', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <button
                className="wedding-gift-tab-btn"
                onClick={() => setActiveGiftTab('digital')}
                style={{
                  width: '128px',
                  height: '19px',
                  padding: '10px',
                  background: activeGiftTab === 'digital' ? 'white' : 'transparent',
                  borderRadius: '50px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                <div style={{textAlign: 'center', color: '#9A4C86', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Digital Transfer</div>
              </button>
              <button
                className="wedding-gift-tab-btn"
                onClick={() => setActiveGiftTab('registry')}
                style={{
                  width: '127px',
                  height: '19px',
                  padding: '10px',
                  borderRadius: '50px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                  background: activeGiftTab === 'registry' ? 'white' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                <div style={{textAlign: 'center', color: '#9A4C86', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Wedding Registry</div>
              </button>
              <button
                className="wedding-gift-tab-btn"
                onClick={() => { console.log('Kirim Kado tab clicked'); setActiveGiftTab('kado'); }}
                style={{
                  width: '127px',
                  height: '19px',
                  padding: '10px',
                  borderRadius: '50px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  display: 'flex',
                  background: activeGiftTab === 'kado' ? 'white' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
              >
                <div style={{textAlign: 'center', color: '#9A4C86', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Kirim Kado</div>
              </button>
            </div>
            
            {/* Content Container with smooth transition */}
            <div style={{width: '100%', height: '294px', position: 'relative', marginTop: '20px'}}>
              {/* Digital Transfer Tab Content */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1), visibility 0.4s cubic-bezier(0.4,0,0.2,1)',
                  opacity: activeGiftTab === 'digital' ? 1 : 0,
                  visibility: activeGiftTab === 'digital' ? 'visible' : 'hidden',
                  zIndex: activeGiftTab === 'digital' ? 2 : 1
                }}
              >
                <div style={{width: '100%', height: '294px', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '10px', border: '1px #F042C5 solid', position: 'relative', padding: '20px'}}>
                  {/* Transfer Bank Header */}
                  <div style={{width: '100%', paddingTop: '5px', paddingBottom: '10px', paddingRight: '10px', justifyContent: 'flex-start', alignItems: 'center', gap: '10px', display: 'flex', marginBottom: '15px'}}>
                    <Image 
                      src="/assets/images/bankk.svg" 
                      alt="Bank Icon" 
                      width={24} height={24}
                      style={{width: '24px', height: '24px', objectFit: 'contain'}}
                      priority
                    />
                    <div style={{textAlign: 'center', color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Transfer Bank</div>
                  </div>
                  {/* Bank Mandiri */}
                  <div style={{width: '100%', height: '85px', background: '#F4CFE2', borderRadius: '10px', position: 'relative', marginBottom: '15px', padding: '10px'}}>
                    {/* Copy Button */}
                    <div style={{width: '24px', height: '23.64px', padding: '1px', position: 'absolute', right: '10px', top: '10px', background: 'white', overflow: 'hidden', borderRadius: '5px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex'}}>
                      <Image 
                        src="/assets/images/copy-01.png" 
                        alt="Copy" 
                        width={20} height={20}
                        style={{width: '20px', height: '20px', objectFit: 'contain'}}
                        priority
                      />
                    </div>
                    <div style={{textAlign: 'left', color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginBottom: '5px'}}>Bank Mandiri</div>
                    <div style={{textAlign: 'left', color: '#9A4C86', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginBottom: '5px'}}>Alexander W. Thompson</div>
                    <div style={{textAlign: 'left', color: '#9A4C86', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>1234567890123</div>
                  </div>
                  {/* Bank BCA */}
                  <div style={{width: '100%', height: '85px', background: '#F4CFE2', borderRadius: '10px', position: 'relative', padding: '10px', marginBottom: '10px'}}>
                    {/* Copy Button */}
                    <div style={{width: '24px', height: '23.64px', padding: '1px', position: 'absolute', right: '10px', top: '10px', background: 'white', overflow: 'hidden', borderRadius: '5px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex'}}>
                      <Image 
                        src="/assets/images/copy-01.png" 
                        alt="Copy" 
                        width={20} height={20}
                        style={{width: '20px', height: '20px', objectFit: 'contain'}}
                        priority
                      />
                    </div>
                    <div style={{textAlign: 'left', color: '#9A4C86', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginBottom: '5px'}}>Bank BCA</div>
                    <div style={{textAlign: 'left', color: '#9A4C86', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginBottom: '5px'}}>Isabella G. Martinez</div>
                    <div style={{textAlign: 'left', color: '#9A4C86', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>9876543210987</div>
                  </div>
                </div>
              </div>

              {/* Wedding Registry Tab Content */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1), visibility 0.4s cubic-bezier(0.4,0,0.2,1)',
                  opacity: activeGiftTab === 'registry' ? 1 : 0,
                  visibility: activeGiftTab === 'registry' ? 'visible' : 'hidden',
                  zIndex: activeGiftTab === 'registry' ? 2 : 1
                }}
              >
                <div style={{
                  width: '100%',
                  height: '294px',
                  background: 'white',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '10px',
                  border: '1px #F042C5 solid',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxSizing: 'border-box'
                }}>
                  {/* Header - left aligned, rest centered */}
                  <div style={{width: '100%', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', justifyContent: 'flex-start'}}>
                    <Image src="/assets/images/gift.png" alt="Gift Icon" width={20} height={20} style={{width: '20px', height: '20px', objectFit: 'contain'}} priority />
                    <div style={{textAlign: 'left', color: '#9A4C86', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Gift Recomendation</div>
                  </div>
                  {/* Gift Image with Arrows */}
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', margin: '10px 0'}}>
                    <button
                      style={{width: '50px', height: '50px', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                      onClick={handleRegistryPrev}
                      aria-label="Sebelumnya"
                      type="button"
                    >
                      <Image src="/assets/images/panahkiri.png" alt="Sebelumnya" width={32} height={32} style={{width: '32px', height: '32px', objectFit: 'contain'}} priority />
                    </button>
                    <Image
                      style={{width: '90px', height: '90px', margin: '0 10px', display: 'block', objectFit: 'contain'}}
                      src={registryItems[registryIndex].img}
                      alt={registryItems[registryIndex].name}
                      width={90} height={90}
                      priority
                    />
                    <button
                      style={{width: '50px', height: '50px', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                      onClick={handleRegistryNext}
                      aria-label="Selanjutnya"
                      type="button"
                    >
                      <Image src="/assets/images/panahkanan.png" alt="Selanjutnya" width={32} height={32} style={{width: '32px', height: '32px', objectFit: 'contain'}} priority />
                    </button>
                  </div>
                  {/* Item Name */}
                  <div style={{width: '100%', textAlign: 'center', color: '#9A4C86', fontSize: '20px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginBottom: '10px'}}>
                    {registryItems[registryIndex].name}
                  </div>
                  {/* Description */}
                  <div style={{width: '100%', textAlign: 'center', color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginTop: '10px'}}>
                    We&apos;ve created a special wishlist of items that would help us start our new journey together.
                  </div>
                </div>
              </div>

              {/* Kirim Kado Tab Content */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1), visibility 0.4s cubic-bezier(0.4,0,0.2,1)',
                  opacity: activeGiftTab === 'kado' ? 1 : 0,
                  visibility: activeGiftTab === 'kado' ? 'visible' : 'hidden',
                  zIndex: activeGiftTab === 'kado' ? 2 : 1
                }}
              >
                {activeGiftTab === 'kado' && (
                  <div style={{
                    width: '100%',
                    height: '320px',
                    background: 'white',
                    borderRadius: '10px',
                    border: '2px #F042C5 solid',
                    boxShadow: '0px 4px 12px 0px rgba(240, 66, 197, 0.10)',
                    padding: '0',
                    marginTop: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxSizing: 'border-box',
                  }}>
                    {/* Header dengan icon dan label */}
                    <div style={{width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '18px 20px 0 20px'}}>
                      <Image src="/assets/images/lokasi.svg" alt="Alamat Pengiriman Kado" width={22} height={22} style={{width: '22px', height: '22px', objectFit: 'contain'}} priority />
                      <span style={{color: '#9A4C86', fontSize: '15px', fontFamily: 'Times New Roman', fontWeight: 600}}>Alamat Pengiriman Kado</span>
                    </div>
                    {/* Card pink alamat + catatan di dalamnya */}
                    <div style={{
                      width: 'calc(100% - 32px)',
                      background: '#F9D6F0',
                      borderRadius: '10px',
                      margin: '24px 0 0 0',
                      padding: '28px 20px 32px 20px',
                      position: 'relative',
                      boxSizing: 'border-box',
                      minHeight: '170px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      marginBottom: '18px',
                    }}>
                      <div style={{
                        color: '#9A4C86',
                        fontSize: '16px',
                        fontFamily: 'Times New Roman',
                        fontWeight: 400,
                        wordWrap: 'break-word',
                        marginBottom: '6px'
                      }}>Alamat Penerima:</div>
                      <div style={{color: '#9A4C86', fontSize: '13px', fontFamily: 'Times New Roman', fontWeight: 400, marginBottom: '6px', whiteSpace: 'pre-line'}}>
                        <div style={{
                          color: '#9A4C86',
                          fontSize: '16px',
                          fontFamily: 'Times New Roman',
                          fontWeight: 400,
                          wordWrap: 'break-word',
                          lineHeight: 1.4
                        }}>
                          <div>Alexander &amp; Isabella Wedding</div>
                          <div>Jl. Bahagia Selalu No. 789 Kelurahan</div>
                          <div>Cinta, Kecamatan Kasih Jakarta Selatan 12345</div>
                          <div style={{fontSize: '15px', marginTop: '2px'}}>Phone: +62-812-3456-7890</div>
                          {/* Pink separator line */}
                          <div style={{width: '100%', height: '2px', background: '#F042C5', borderRadius: '1px', margin: '12px 0 8px 0'}}></div>
                        </div>
                      </div>
                      {/* Tombol copy di pojok kanan atas */}
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('Alexander & Isabella Wedding\nJl. Bahagia Selalu No. 789 Kelurahan Cinta, Kecamatan Kasih Jakarta Selatan 12345\nPhone: +62-812-3456-7890');
                        }}
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                        }}
                        aria-label="Copy Alamat"
                      >
                        <Image src="/assets/images/copy-01.png" alt="Copy" width={22} height={22} style={{width: '22px', height: '22px', objectFit: 'contain'}} priority />
                      </button>
                      {/* Catatan pengiriman di dalam pink card */}
                      <div style={{color: '#9A4C86', fontSize: '12px', fontFamily: 'Times New Roman', fontWeight: 400, margin: '10px 0 0 0', textAlign: 'left'}}>
                        <span style={{fontWeight: 600}}>Catatan:</span> Kado dapat dikirim mulai dari H-7 sampai H+7 acara pernikahan. Mohon cantumkan nama pengirim pada paket.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div style={{position: 'relative'}}>
            <div style={{
              width: '100%',
              background: '#FBDEF0',
              borderRadius: '10px',
              padding: '32px 24px',
              boxSizing: 'border-box',
              position: 'relative',
              zIndex: 0
            }}>
              <Image 
                src="/assets/images/mah.png" 
                alt="Thank You Icon" 
                width={72} 
                height={72} 
                style={{objectFit: 'contain', margin: '0 auto 8px auto', display: 'block'}} 
                priority
              />
              <h2 
                className="mb-2"
                style={{
                  color: '#9A4C86',
                  fontSize: '32px',
                  fontFamily: 'Times New Roman',
                  fontWeight: 400,
                  wordWrap: 'break-word',
                  textAlign: 'center'
                }}
              >
                Terima Kasih
              </h2>
              <p 
                className="mb-0"
                style={{
                  color: '#CD3FAA',
                  fontSize: '16px',
                  fontFamily: 'Times New Roman',
                  fontWeight: 400,
                  wordWrap: 'break-word',
                  marginBottom: 0,
                  textAlign: 'center'
                }}
              >
                Kehadiran Anda di hari bahagia kami adalah hadiah terindah. Namun jika ingin memberikan hadiah, kami akan menerimanya dengan penuh rasa syukur.
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* QR Code Section */}
  <section className="py-16 px-4" style={{ background: '#FBDEF0' }}>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-2" style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Guest Check-in</h2>
            <p style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Scan this QR code when you arrive at the venue</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md" style={{ border: '2px solid #F042C5' }}>
            <div className="text-center mb-6">
              <h3 className="mb-2" style={{color: '#9A4C86', fontSize: '24px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Welcome,</h3>
              <p className="text-sm mb-1" style={{fontFamily: 'Times New Roman', color: '#8D2072', fontSize: '20px', fontWeight: 400, wordWrap: 'break-word', marginBottom: '4px'}}>
              Dear Dear Beloved Guest,
            </p>
              <p style={{color: '#CD3FAA', fontSize: '20px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Guest ID: G2025-001</p>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-visible">
                <Image
                  src="/assets/images/qr-code.png"
                  alt="QR Code"
                  width={160}
                  height={160}
                  style={{ objectFit: 'contain', width: '100%', height: '100%', position: 'relative', zIndex: 10 }}
                  priority
                />
                {/* Left icon: push further left so it's flush with QR left edge */}
                <Image
                  src="/assets/images/kiriqrhd.png"
                  alt="Left QR decoration"
                  width={72}
                  height={72}
                  style={{
                    position: 'absolute',
                    left: '-72px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    zIndex: 20
                  }}
                  priority
                />
                {/* Right icon: push further right so it's flush with QR right edge */}
                <Image
                  src="/assets/images/kananqrhd.png"
                  alt="Right QR decoration"
                  width={72}
                  height={72}
                  style={{
                    position: 'absolute',
                    right: '-72px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                    zIndex: 20
                  }}
                  priority
                />
              </div>
            </div>
            
            {/* Generate QR Code button from Figma - placed below QR image */}
            <div className="flex justify-center mb-4">
              <div style={{width: '100%', maxWidth: 220, height: 'auto', padding: 10, background: '#FF3EA0', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src="/assets/images/qr-code2.png" alt="generate-icon" width={20} height={20} style={{objectFit: 'contain'}} priority />
                </div>
                <div style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Generate QR Code</div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="text-center mb-2" style={{color: '#9A4C86', fontSize: '20px', fontFamily: 'Times New Roman', fontWeight: 700, wordWrap: 'break-word'}}>Tips:</h4>
              <ul style={{color: '#CD3FAA', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}} className="space-y-1">
                <li>• Save QR code to your phone</li>
                <li>• Show to reception team upon arrival</li>
                <li>• Keep your phone charged</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

  {/* Final Thank You */}
  <section className="py-16 px-4" style={{ background: '#FBDEF0' }}>
        <div className="max-w-md mx-auto text-center">
          <h2 className="mb-4" style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Thank You</h2>
          <p className="mb-8" style={{color: '#CD3FAA', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>
            Your presence and wishes mean the world to us. Thank<br/>thank you for being part of our fairytale beginning.
          </p>
          
          <div className="w-full h-px bg-rose-300 mb-6"></div>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center">
              <span style={{color: '#CD3FAA', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginRight: '8px'}}>Made with</span>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 4px'}}>
                <Image src="/assets/images/Heart.svg" alt="Heart" width={16} height={16} style={{objectFit: 'contain'}} priority />
              </span>
              <span style={{color: '#CD3FAA', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', marginLeft: '8px'}}>for our special day</span>
            </div>
            <p style={{color: '#CD3FAA', fontSize: '14px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>© 2025 Digital Wedding Invitation. Built with Figma Make</p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer'}} aria-label="WhatsApp">
              <Image src="/assets/images/whatsapp2.png" alt="WhatsApp" width={36} height={36} style={{objectFit: 'contain'}} priority />
            </button>
            <button style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer'}} aria-label="Instagram">
              <Image src="/assets/images/instagram2.png" alt="Instagram" width={36} height={36} style={{objectFit: 'contain'}} priority />
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
