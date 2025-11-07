import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center snap-start relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.elleman.vn/app/uploads/2018/06/01/hinh-anh-noi-bat-dan-toc-viet-nam-elle-man-feature.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-6 font-['Montserrat']">
          VAI TRÒ CỦA DÂN TỘC THIỂU SỐ
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-4 max-w-4xl">
          TRONG XÂY DỰNG XÃ HỘI CHỦ NGHĨA
        </p>
        <p className="text-base md:text-lg text-white/80 mb-12 max-w-3xl">
          Dân tộc thiểu số là bộ phận không thể tách rời của cộng đồng quốc gia Việt Nam và đóng vai trò vô cùng quan trọng trong sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa
        </p>

        {/* Quiz Button - Enhanced */}
        <div className="mt-8">
          <Link
            to="/quiz"
            className="group relative inline-block"
          >
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

            {/* Main button */}
            <div className="relative bg-gradient-to-r from-[#C8102E] to-[#B8001E] hover:from-[#B8001E] hover:to-[#A8001E] text-white font-bold py-5 px-10 rounded-full shadow-2xl transform group-hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg border-2 border-white/20">
              <Brain className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl">Kiểm tra kiến thức</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </Link>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-semibold">🎯 20 câu hỏi ngẫu nhiên</span>
            </div>    
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
