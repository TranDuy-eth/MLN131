import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight } from 'lucide-react'

const ComparisonSection: React.FC = () => {
  const [activeSlider, setActiveSlider] = useState<number | null>(null)
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({
    0: 50,
    1: 50,
    2: 50,
  })

  const comparisons = [
    {
      title: 'Cơ sở hạ tầng - Đường giao thông',
      before: {
        image: 'https://dbnd.1cdn.vn/2022/09/26/images-2cae99c722739fd7811264aa24039009facec3c1c35f2f69ed48391bd31908fa1b280866d6364bdb95ac410d68c9b542b66a82e9d359780f9fbf49c98d529225-_demo_duong-sa-kho-khan.jpg',
        label: 'Trước đây',
        description: 'Đường đất hiểm trở, bùn lầy mùa mưa, đi lại khó khăn',
      },
      after: {
        image: 'https://bcp.cdnchinhphu.vn/334894974524682240/2025/7/10/a1-17521626016202010541003.jpg',
        label: 'Hiện nay',
        description: '98.4% xã có đường ô tô, đường nhựa đến tận bản',
      },
    },
    {
      title: 'Giáo dục',
      before: {
        image: 'https://static.kienviet.net/storage/uploads/2023/09/kien-viet-he-thong-truong-diem-vung-cao1-1693890020.jpg',
        label: 'Trước đây',
        description: 'Trường lớp tạm bợ, thiếu giáo viên, tỷ lệ mù chữ cao',
      },
      after: {
        image: 'https://static.kienviet.net/storage/uploads/2023/09/z4651747586381-397a85aa1429bc0917d8badbc390717c-1693891265.jpg',
        label: 'Hiện nay',
        description: '100% xã có trường học, 1032 trường phổ thông dân tộc nội trú',
      },
    },
    {
      title: 'Điện và nước sinh hoạt',
      before: {
        image: 'https://images.baodantoc.vn/uploads/2024/Thang-8/Ngay-1/Thu-Thao/z5679123410696_69a740866544a927558496d3fc455284.jpg',
        label: 'Trước đây',
        description: 'Không có điện lưới, dùng đèn dầu, thiếu nước sạch',
      },
      after: {
        image: 'https://cdnmedia.baotintuc.vn/Upload/3qVxwVtNEPp6Wp9kkF77g/files/2021/08/31/dien-310821.jpg',
        label: 'Hiện nay',
        description: '98% hộ có điện lưới quốc gia, 809 công trình nước sạch',
      },
    },
  ]

  const statistics = [
    {
      label: 'Tỷ lệ hộ nghèo',
      before: '58%',
      after: '15%',
      color: 'from-red-500 to-rose-600',
    },
    {
      label: 'Thu nhập bình quân',
      before: '8 triệu/năm',
      after: '32 triệu/năm',
      color: 'from-green-500 to-emerald-600',
    },
    {
      label: 'Tỷ lệ biết chữ',
      before: '65%',
      after: '95%+',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      label: 'Điện lưới',
      before: '35%',
      after: '99%',
      color: 'from-yellow-500 to-amber-600',
    },
  ]

  const handleSliderChange = (index: number, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [index]: value }))
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/20">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Sự chuyển biến</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trước và Sau
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Những thay đổi tích cực trong đời sống vùng dân tộc thiểu số qua các chương trình phát triển
          </p>
        </motion.div>

        {/* Image Comparisons */}
        <div className="space-y-8 mb-16">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {comparison.title}
              </h3>

              {/* Before/After Slider */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-900 mb-4">
                {/* After Image (Background) */}
                <img
                  src={comparison.after.image}
                  alt={comparison.after.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Overlay with clip) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                  }}
                >
                  <img
                    src={comparison.before.image}
                    alt={comparison.before.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPositions[index]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-4 bg-gray-600" />
                      <div className="w-0.5 h-4 bg-gray-600" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {comparison.before.label}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {comparison.after.label}
                </div>

                {/* Interactive Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPositions[index]}
                  onChange={(e) => handleSliderChange(index, Number(e.target.value))}
                  onMouseDown={() => setActiveSlider(index)}
                  onMouseUp={() => setActiveSlider(null)}
                  onTouchStart={() => setActiveSlider(index)}
                  onTouchEnd={() => setActiveSlider(null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              {/* Descriptions */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm font-semibold mb-1">
                    Trước đây
                  </p>
                  <p className="text-white/70 text-sm">
                    {comparison.before.description}
                  </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-400 text-sm font-semibold mb-1">
                    Hiện nay
                  </p>
                  <p className="text-white/70 text-sm">
                    {comparison.after.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Số liệu so sánh
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-white/60 text-sm font-semibold mb-4">
                  {stat.label}
                </p>

                <div className="space-y-3">
                  {/* Before */}
                  <div>
                    <p className="text-red-400 text-xs mb-1">Trước</p>
                    <p className="text-white/80 text-lg font-bold">{stat.before}</p>
                  </div>

                  {/* Arrow */}
                  <div className={`w-full h-1 bg-gradient-to-r ${stat.color} rounded-full relative`}>
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                  </div>

                  {/* After */}
                  <div>
                    <p className="text-green-400 text-xs mb-1">Sau</p>
                    <p className="text-white text-2xl font-bold">{stat.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection
