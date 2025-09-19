"use client";

import { useState, useEffect } from 'react';

export default function FairytaleTemplate() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  return (
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
                backgroundSize: 'contain',
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
          <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-full px-8 py-2 shadow-lg">
            <p className="text-sm mb-1" style={{fontFamily: 'Times New Roman', color: '#8D2072', fontSize: '20px', fontWeight: 400}}>
              Dear Dear Beloved Guest,
            </p>
            <p className="text-sm" style={{fontFamily: 'Times New Roman', color: '#F042C5', fontSize: '16px', fontWeight: 400}}>
              We joyfully invite you to celebrate our fairytale beginning
            </p>
          </div>
          
          {/* Open invitation button with exact Figma styling */}
          <div 
            className="w-full px-2.5 py-2.5 rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg inline-flex justify-center items-center gap-2.5 mb-8"
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
            <div className="w-5 h-5 bg-yellow-300 rounded-full flex items-center justify-center">
              <span className="text-xs">⭐</span>
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
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-2">
              <img 
                src="/assets/images/mahkota.png" 
                alt="Crown" 
                className="w-8 h-8 mr-3"
              />
              <h2 className="text-2xl font-serif text-rose-800">Words of Blessing</h2>
              <img 
                src="/assets/images/mahkota.png" 
                alt="Crown" 
                className="w-8 h-8 ml-3"
              />
            </div>
            <p className="text-rose-600 text-sm" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Sacred verses that guide our royal journey</p>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-rose-300"></div>
            <img 
              src="/assets/images/bintang.png" 
              alt="Star" 
              className="w-8 h-8 mx-4"
            />
            <div className="flex-1 h-px bg-rose-300"></div>
          </div>
          
          <div className="bg-white rounded-lg px-6 py-4 shadow-md text-center relative" style={{border: '2px solid #F042C5'}}>
            {/* Top-left flower icon */}
            <img 
              src="/assets/images/bungakiri22.png" 
              alt="Flower decoration" 
              className="absolute -top-2 -left-2 w-16 h-16"
            />
            
            {/* Bottom-right flower icon - larger size */}
            <img 
              src="/assets/images/bungavariasi.png" 
              alt="Flower decoration" 
              className="absolute -bottom-2 -right-2 w-16 h-16"
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
              <img 
                src="/assets/images/burungkiri.png" 
                alt="Bird decoration" 
                className="w-9 h-9 mr-2"
              />
              <h2 className="text-2xl font-serif text-rose-800">Our Love Story Begins</h2>
              <img 
                src="/assets/images/burungkanan.png" 
                alt="Bird decoration" 
                className="w-9 h-9 ml-2"
              />
            </div>
            <p className="text-sm" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Two hearts, one destiny</p>
          </div>
          
          {/* Groom */}
          <div className="mb-16 bg-white rounded-lg p-6 shadow-md" style={{border: '2px solid #F042C5'}}>
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full relative">
                <img 
                  src="/assets/images/cwok.jpg" 
                  alt="Alexander William Thompson"
                  className="w-40 h-40 object-cover rounded-full absolute top-4 left-4"
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
                <img 
                  src="/assets/images/cwek.jpg" 
                  alt="Isabella Grace Martinez"
                  className="w-40 h-40 object-cover rounded-full absolute top-4 left-4"
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
            <img 
              src="/assets/images/kuda.png" 
              alt="Horse decoration" 
              className="mx-auto"
            />
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-2" style={{background: '#F042C5'}}></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center relative z-10" style={{background: '#F042C5'}}>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md flex-1">
                  <div className="px-2 py-1 rounded-full inline-block mb-2" style={{color: '#9A4C86', fontSize: '14px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word', background: '#F042C524'}}>
                    2020
                  </div>
                  <h4 className="font-semibold text-rose-800 mb-2">Once Upon a Time</h4>
                  <p style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>We first met at a magical coffee shop where Alex accidentally spilled coffee on Isabella&apos;s fairy tale book. Love at first sight (and spill)! ☕️💕</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center relative z-10" style={{background: '#F042C5'}}>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md flex-1">
                  <div className="px-2 py-1 rounded-full inline-block mb-2" style={{color: '#9A4C86', fontSize: '14px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word', background: '#F042C524'}}>
                    2021
                  </div>
                  <h4 className="font-semibold text-rose-800 mb-2">The First Date</h4>
                  <p style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Our first official date was a romantic picnic under the stars. Alex brought his guitar and serenaded Isabella with her favorite song. 🌟🎵</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center relative z-10" style={{background: '#F042C5'}}>
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md flex-1">
                  <div className="px-2 py-1 rounded-full inline-block mb-2" style={{color: '#9A4C86', fontSize: '14px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word', background: '#F042C524'}}>
                    2023
                  </div>
                  <h4 className="font-semibold text-rose-800 mb-2">The Proposal</h4>
                  <p style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Alex proposed in a beautiful garden filled with pink roses, getting down on one knee with a crown-shaped ring box. She said yes! 👑💍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom left flower decoration */}
        <img 
          src="/assets/images/bunga23.png" 
          alt="Flower decoration" 
          className="absolute -bottom-12 -left-2 w-32 h-32"
        />
        
        {/* Bottom right flower decoration */}
        <img 
          src="/assets/images/bunga244.png" 
          alt="Flower decoration" 
          className="absolute -bottom-8 -right-2 w-32 h-32"
        />
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <img 
              src="/assets/images/Countdown.png" 
              alt="Countdown decoration" 
              className="w-12 h-12 mr-3"
            />
            <h2 style={{color: '#9A4C86', fontSize: '32px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word', lineHeight: '1.2'}}>
              Counting Down to<br/>Our Reception
            </h2>
            <img 
              src="/assets/images/cd2.png" 
              alt="Countdown decoration" 
              className="w-12 h-12 ml-3"
            />
          </div>
          <p className="text-sm mb-8" style={{color: '#F042C5', fontSize: '16px', fontFamily: 'Times New Roman', fontWeight: 400, wordWrap: 'break-word'}}>Until our fairytale begins...</p>
          
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="relative">
              <div className="bg-rose-100 rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.days.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>DAYS</div>
              </div>
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercontdown.png')",
                  transform: 'scale(1.3)'
                }}
              ></div>
            </div>
            <div className="relative">
              <div className="bg-rose-100 rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>HOURS</div>
              </div>
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercontdown.png')",
                  transform: 'scale(1.3)'
                }}
              ></div>
            </div>
            <div className="relative">
              <div className="bg-rose-100 rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>MINUTES</div>
              </div>
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercontdown.png')",
                  transform: 'scale(1.3)'
                }}
              ></div>
            </div>
            <div className="relative">
              <div className="bg-rose-100 rounded-lg p-4">
                <div className="text-2xl relative" style={{color: '#8D2072', fontFamily: 'Consolas, Monaco, "Lucida Console", monospace', fontSize: '28px', fontWeight: 400, fontVariantNumeric: 'slashed-zero'}}>{countdown.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-wide" style={{color: '#F042C5', fontFamily: 'Times New Roman', fontWeight: 400}}>SECONDS</div>
              </div>
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none"
                style={{
                  backgroundImage: "url('/assets/images/bordercontdown.png')",
                  transform: 'scale(1.3)'
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
            <img 
              src="/assets/images/kiriwhere.png" 
              alt="Left decoration" 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24"
            />
            
            {/* Right decoration */}
            <img 
              src="/assets/images/kananwhere.png" 
              alt="Right decoration" 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-24"
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
                <img src="/assets/images/tanggal.svg" alt="Date" className="w-5 h-5 mr-3" />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Saturday, March 15, 2025</span>
              </div>
              <div className="flex items-center">
                <img src="/assets/images/jam.svg" alt="Time" className="w-5 h-5 mr-3" />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>08:00 AM</span>
              </div>
              <div className="flex items-center">
                <img src="/assets/images/lokasi.svg" alt="Location" className="w-5 h-5 mr-3" />
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
                <img src="/assets/images/lokasi.svg" alt="Map" className="w-4 h-4 mr-2" />
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
                <img src="/assets/images/tanggal.svg" alt="Date" className="w-5 h-5 mr-3" />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>Saturday, March 15, 2025</span>
              </div>
              <div className="flex items-center">
                <img src="/assets/images/jam.svg" alt="Time" className="w-5 h-5 mr-3" />
                <span style={{color: '#9A4C86', fontSize: '16px', fontFamily: 'Georgia', fontWeight: 400, wordWrap: 'break-word'}}>07:00 PM</span>
              </div>
              <div className="flex items-center">
                <img src="/assets/images/lokasi.svg" alt="Location" className="w-5 h-5 mr-3" />
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
                <img src="/assets/images/lokasi.svg" alt="Map" className="w-4 h-4 mr-2" />
                View on Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-rose-800 mb-2">Dress Code</h2>
            <p className="text-rose-600 text-sm">Coquette Theme</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-pink-200 mx-auto mb-2"></div>
                <p className="text-sm text-rose-700">Soft Pink</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-300 mx-auto mb-2"></div>
                <p className="text-sm text-rose-700">Rose</p>
              </div>
            </div>
            
            <p className="text-center text-sm text-rose-600">
              We kindly request our guests to avoid wearing white or bright colors
            </p>
          </div>
        </div>
      </section>

      {/* Moments Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-rose-800 mb-2">Our Moments</h2>
            <p className="text-rose-600 text-sm">A glimpse of our beautiful journey together</p>
          </div>
          
          <div className="mb-8">
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
              Main Photo
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                  {i}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl font-serif text-rose-800 mb-2">Share Your Moments</h3>
            <p className="text-sm text-rose-600 mb-4">Tag us in your photos and videos from our special day using</p>
            
            <button className="bg-rose-500 text-white px-6 py-3 rounded-lg flex items-center mx-auto">
              <span className="mr-2">#WeddingMempelai2025</span>
              <span>📋</span>
            </button>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-rose-800 mb-2">RSVP</h2>
            <p className="text-rose-600 text-sm">Please confirm your attendance</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-rose-700 text-sm font-medium mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="Alif & partner"
                  className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>
              
              <div>
                <label className="block text-rose-700 text-sm font-medium mb-2">Konfirmasi Kehadiran</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="attendance" className="mr-2" />
                    <span className="text-rose-700">Hadir</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="attendance" className="mr-2" />
                    <span className="text-rose-700">Tidak Hadir</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-rose-700 text-sm font-medium mb-2">Jumlah tamu</label>
                <select className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3 orang</option>
                  <option>4 orang</option>
                </select>
              </div>
              
              <div>
                <label className="block text-rose-700 text-sm font-medium mb-2">Pesan untuk Mempelai (Opsional)</label>
                <textarea 
                  placeholder="Tulis Pesan anda..."
                  rows={4}
                  className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                ></textarea>
              </div>
              
              <button className="w-full bg-rose-500 text-white py-3 rounded-lg flex items-center justify-center">
                <span className="mr-2">📨</span>
                Kirim RSVP
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Wedding Wishes Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-rose-800 mb-2">Wedding Wishes</h2>
            <p className="text-rose-600 text-sm">Send your love and best wishes</p>
          </div>
          
          {/* Send Wishes Form */}
          <div className="bg-white rounded-lg p-6 shadow-md mb-8">
            <div className="flex items-center mb-4">
              <span className="text-rose-500 mr-2">💕</span>
              <h3 className="text-lg font-medium text-rose-800">Kirim Ucapan</h3>
            </div>
            
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Alif & partner"
                className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
              
              <textarea 
                placeholder="Tulis ucapan atau doa untuk mempelai..."
                rows={4}
                className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              ></textarea>
              
              <button className="w-full bg-rose-500 text-white py-3 rounded-lg flex items-center justify-center">
                <span className="mr-2">💕</span>
                Kirim Ucapan
              </button>
            </div>
          </div>
          
          {/* Wishes List */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-6">
              <span className="text-rose-500 mr-2">👥</span>
              <h3 className="text-lg font-medium text-rose-800">Ucapan dari Tamu (3)</h3>
            </div>
            
            <div className="space-y-4 max-h-80 overflow-y-auto">
              <div className="bg-rose-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-rose-800">Sarah & David</h4>
                  <span className="text-xs text-rose-600">2 hari yang lalu</span>
                </div>
                <p className="text-sm text-rose-700">Selamat atas pernikahan kalian! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu! 💕</p>
              </div>
              
              <div className="bg-rose-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-rose-800">Maya</h4>
                  <span className="text-xs text-rose-600">1 hari yang lalu</span>
                </div>
                <p className="text-sm text-rose-700">Finally! Kalian memang couple goals banget. Semoga langgeng sampai kakek nenek ya! 👰🤵</p>
              </div>
              
              <div className="bg-rose-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-rose-800">Ahmad & Sari</h4>
                  <span className="text-xs text-rose-600">8 jam yang lalu</span>
                </div>
                <p className="text-sm text-rose-700">Barakallahu lakuma wa baraka alaikuma wa jama&apos;a bainakuma fi khair. Selamat menempuh hidup baru! 🤲</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Gift Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-rose-800 mb-2">Wedding Gift</h2>
            <p className="text-rose-600 text-sm">Your presence is the greatest gift, but if you wish to honor us with something special...</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-lg font-medium text-rose-800 mb-4">Digital Wedding Gift</h3>
              <p className="text-sm text-rose-600 mb-6">
                If you wish to give us a wedding gift, you can send it via digital transfer
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center">
                  <span className="mr-2">🏦</span>
                  Bank Transfer
                </button>
                
                <button className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center">
                  <span className="mr-2">💳</span>
                  E-Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="text-4xl mb-4">🙏</div>
            <h2 className="text-2xl font-serif text-rose-800 mb-4">Terima Kasih</h2>
            <p className="text-sm text-rose-600 mb-6">
              Kehadiran Anda di hari bahagia kami adalah hadiah terindah. Namun jika ingin memberikan hadiah, kami akan menerimanya dengan penuh rasa syukur.
            </p>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-rose-800 mb-2">Guest Check-in</h2>
            <p className="text-rose-600 text-sm">Scan this QR code when you arrive at the venue</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-rose-800 mb-2">Welcome,</h3>
              <p className="text-rose-700 mb-1">Dear Beloved Guest</p>
              <p className="text-sm text-rose-600">Guest ID: G2025-001</p>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">QR Code</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <button className="bg-rose-500 text-white px-4 py-2 rounded-lg text-sm flex items-center mx-auto">
                <span className="mr-2">📱</span>
                Generate QR Code
              </button>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="text-center font-medium text-rose-800 mb-2">Tips:</h4>
              <ul className="text-sm text-rose-600 space-y-1">
                <li>• Save QR code to your phone</li>
                <li>• Show to reception team upon arrival</li>
                <li>• Keep your phone charged</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thank You */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-serif text-rose-800 mb-4">Thank You</h2>
          <p className="text-rose-600 text-sm mb-8">
            Your presence and wishes mean the world to us. Thank you for being part of our fairytale beginning.
          </p>
          
          <div className="w-full h-px bg-rose-300 mb-6"></div>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-center">
              <span className="text-rose-600 text-sm mr-2">Made with</span>
              <span className="text-rose-500">💕</span>
              <span className="text-rose-600 text-sm ml-2">for our special day</span>
            </div>
            <p className="text-xs text-rose-500">© 2025 Digital Wedding Invitation. Built with Figma Make</p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button className="text-green-600 text-2xl">📱</button>
            <button className="text-pink-600 text-2xl">📷</button>
          </div>
        </div>
      </section>
    </div>
  );
}
