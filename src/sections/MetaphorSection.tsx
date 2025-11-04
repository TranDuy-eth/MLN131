import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Music, Volume2, Users, Sparkles, Play, Pause } from 'lucide-react'

const MetaphorSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playingInstrument, setPlayingInstrument] = useState<number | null>(null)

  // Tạo ref cho các audio elements
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  const instruments = [
    {
      icon: Music,
      title: 'Đàn Tính (Tây Nguyên)',
      description: 'Nhạc cụ truyền thống',
      detail: 'Dân tộc Ba Na, Gia Rai',
      color: 'from-violet-500 to-purple-600',
      sound: 'https://archive.org/download/ClassicVietnameseInstrumentalPieces/24.Xechiluonkim-danca.mp3',
    },
    {
      icon: Volume2,
      title: 'Đàn Bầu',
      description: 'Nhạc cụ dân tộc Kinh',
      detail: 'Tiếng đàn truyền thống',
      color: 'from-red-500 to-rose-600',
      sound: 'https://archive.org/download/cd-ost-dong-doi-oan-trai/17.%20Doc%20Tau%20Dan%20Bau.mp3',
    },
    {
      icon: Users,
      title: 'Sáo Trúc',
      description: 'Giai điệu nhẹ nhàng',
      detail: 'Phổ biến nhiều dân tộc',
      color: 'from-blue-500 to-cyan-600',
      sound: 'https://archive.org/download/lp_music-of-viet-nam_various/disc1/02.07.%20Solo%20Flute%3A%20Phuong%20Vu.mp3',
    },
    {
      icon: Sparkles,
      title: 'Chiêng',
      description: 'Nhạc cụ văn hóa Gong',
      detail: 'Tây Nguyên - Di sản văn hóa',
      color: 'from-amber-500 to-orange-600',
      sound: 'https://archive.org/download/lp_music-of-viet-nam_various/disc1/01.03.%20Concert%20Of%20Gongs.mp3',
    },
  ]

  const playInstrument = (index: number) => {
    // Dừng tất cả các âm thanh khác
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause()
        audio.currentTime = 0
      }
    })

    const audio = audioRefs.current[index]
    if (audio) {
      if (playingInstrument === index) {
        // Nếu đang phát thì dừng
        audio.pause()
        audio.currentTime = 0
        setPlayingInstrument(null)
      } else {
        // Phát âm thanh mới
        audio.play()
        setPlayingInstrument(index)
      }
    }
  }

  const playAllTogether = () => {
    if (isPlaying) {
      // Dừng tất cả
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause()
          audio.currentTime = 0
        }
      })
      setIsPlaying(false)
      setPlayingInstrument(null)
    } else {
      // Phát tất cả cùng lúc
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.currentTime = 0
          audio.play()
        }
      })
      setIsPlaying(true)
    }
  }

  return (
    <section className="min-h-screen w-full snap-start bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
            <Music className="w-5 h-5" />
            <span className="font-semibold">Ẩn dụ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dàn nhạc giao hưởng của dân tộc
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Việc giải quyết vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội là một nhiệm vụ phức tạp, giống như việc điều chỉnh một dàn nhạc giao hưởng khổng lồ
          </p>
        </motion.div>

        {/* Play All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <button
            onClick={playAllTogether}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              isPlaying
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
            } text-white shadow-2xl transform hover:scale-105`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-6 h-6" />
                Dừng Dàn nhạc
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                Phát Dàn nhạc giao hưởng
              </>
            )}
          </button>
        </motion.div>

        {/* Orchestra Instruments - Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {instruments.map((instrument, index) => {
            const Icon = instrument.icon
            const isCurrentlyPlaying = playingInstrument === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Hidden audio element */}
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  src={instrument.sound}
                  onEnded={() => setPlayingInstrument(null)}
                  loop
                />

                <button
                  onClick={() => playInstrument(index)}
                  className={`w-full bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 transition-all duration-300 h-full text-left group ${
                    isCurrentlyPlaying
                      ? 'border-yellow-400 bg-white/20 shadow-lg shadow-yellow-500/50 scale-105'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${instrument.color} rounded-xl flex items-center justify-center ${
                        isCurrentlyPlaying ? 'animate-pulse' : ''
                      }`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isCurrentlyPlaying
                          ? 'bg-yellow-400 text-gray-900'
                          : 'bg-white/20 text-white group-hover:bg-white/30'
                      }`}
                    >
                      {isCurrentlyPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {instrument.title}
                  </h3>
                  <p className="text-white/70 mb-2 font-medium">
                    {instrument.description}
                  </p>
                  <p className="text-sm text-white/50">{instrument.detail}</p>

                  {isCurrentlyPlaying && (
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-1 h-4 bg-yellow-400 rounded-full animate-pulse"></span>
                        <span className="w-1 h-6 bg-yellow-400 rounded-full animate-pulse delay-75"></span>
                        <span className="w-1 h-5 bg-yellow-400 rounded-full animate-pulse delay-150"></span>
                        <span className="w-1 h-4 bg-yellow-400 rounded-full animate-pulse"></span>
                      </div>
                      <span className="text-xs text-yellow-400 font-semibold">Đang phát...</span>
                    </div>
                  )}
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Main Metaphor Explanation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://nld.mediacdn.vn/2020/10/19/13-anh-chot201020-16031105946461178478428.jpg"
                  alt="Dàn nhạc giao hưởng"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-50 blur-2xl" />
            </div>

            {/* Right Side - Content */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">
                Sự hài hòa trong đa dạng
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Điều chỉnh (Hỗ trợ phát triển)</h4>
                    <p className="text-white/70 text-sm">
                      Đảm bảo mỗi dân tộc đều được hỗ trợ để phát triển toàn diện
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Không gian (Bình đẳng, tự quyết)</h4>
                    <p className="text-white/70 text-sm">
                      Mỗi dân tộc có quyền bình đẳng và tự quyết trong phát triển
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hòa hợp (Đoàn kết)</h4>
                    <p className="text-white/70 text-sm">
                      Tất cả cùng đoàn kết tạo nên bản giao hưởng phát triển xã hội
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white/90 leading-relaxed italic">
                  "Mỗi dân tộc là một nhạc cụ độc đáo, và mục tiêu là tạo nên bản
                  giao hưởng vĩ đại của sự phát triển và tiến bộ xã hội"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Trong dàn nhạc dân tộc Việt Nam, không có tiếng nào cao hơn, không có
            tiếng nào thấp hơn - tất cả đều hòa quyện tạo nên giai điệu hùng vĩ của
            đất nước
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MetaphorSection
