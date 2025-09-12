import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center snap-start relative bg-cover bg-center" style={{ backgroundImage: "url('https://redsvn.net/wp-content/uploads/2023/06/Lenin.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 font-['Montserrat']">
          CHỦ NGHĨA XÃ HỘI
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-2xl">
          VÀ THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
