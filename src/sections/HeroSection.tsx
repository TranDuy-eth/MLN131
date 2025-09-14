import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center snap-start relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://redsvn.net/wp-content/uploads/2023/06/Lenin.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 font-['Montserrat']">
          CHỦ NGHĨA XÃ HỘI
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-2xl">
          VÀ THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
        </p>

        {/* Quiz Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/quiz"
            className="group bg-gradient-to-r from-[#C8102E] to-[#B8001E] hover:from-[#B8001E] hover:to-[#A8001E] text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg"
          >
            <Brain className="w-6 h-6" />
            Kiểm tra kiến thức
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="text-white/80 text-sm text-center">
            <p>🎯 20 câu hỏi ngẫu nhiên</p>
            <p>📊 Kết quả chi tiết</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
