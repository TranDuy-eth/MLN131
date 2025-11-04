import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, MapPin, Users, Home, Landmark } from 'lucide-react'

interface Region {
  id: string
  name: string
  ethnicGroups: string[]
  population: string
  highlights: string[]
  color: string
  position: { top: string; left: string }
}

const InteractiveMapSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const regions: Region[] = [
    {
      id: 'northwest',
      name: 'Tây Bắc',
      ethnicGroups: ['Thái', 'H\'Mông', 'Dao', 'Tày', 'Nùng', 'Mường'],
      population: '3.2 triệu người',
      highlights: [
        'Ruộng bậc thang Sapa',
        'Văn hóa chợ phiên',
        'Lễ hội Gầu Tào',
      ],
      color: 'from-blue-500 to-cyan-600',
      position: { top: '13%', left: '16%' },
    },
    {
      id: 'northeast',
      name: 'Đông Bắc',
      ethnicGroups: ['Tày', 'Nùng', 'Dao', 'H\'Mông', 'Sán Dìu'],
      population: '4.1 triệu người',
      highlights: [
        'Lễ hội Then',
        'Nghệ thuật hát Sli',
        'Làng văn hóa du lịch',
      ],
      color: 'from-green-500 to-emerald-600',
      position: { top: '07%', left: '30%' },
    },
    {
      id: 'northern-central',
      name: 'Bắc Trung Bộ',
      ethnicGroups: ['Thái', 'Mường', 'Thổ', 'H\'Mông'],
      population: '1.8 triệu người',
      highlights: [
        'Di sản Phong Nha',
        'Lễ hội Lim',
        'Nghề thủ công truyền thống',
      ],
      color: 'from-yellow-500 to-amber-600',
      position: { top: '25%', left: '25%' },
    },
    {
      id: 'central-highlands',
      name: 'Tây Nguyên',
      ethnicGroups: ['Ê Đê', 'Gia Rai', 'Ba Na', 'Xơ Đăng', 'M\'Nông'],
      population: '2.5 triệu người',
      highlights: [
        'Không gian văn hóa Gong',
        'Nhà Rông',
        'Lễ hội Cà phê',
      ],
      color: 'from-red-500 to-rose-600',
      position: { top: '65%', left: '45%' },
    },
    {
      id: 'southern-central',
      name: 'Nam Trung Bộ',
      ethnicGroups: ['Chăm', 'Raglai', 'Chu Ru'],
      population: '600 nghìn người',
      highlights: [
        'Tháp Chăm Po Nagar',
        'Nghệ thuật dệt thổ cẩm',
        'Lễ hội Kate',
      ],
      color: 'from-purple-500 to-violet-600',
      position: { top: '70%', left: '55%' },
    },
    {
      id: 'mekong',
      name: 'Đồng bằng sông Cửu Long',
      ethnicGroups: ['Khmer', 'Hoa', 'Chăm'],
      population: '1.3 triệu người',
      highlights: [
        'Chùa Khmer',
        'Lễ hội Ok Om Bok',
        'Văn hóa sông nước',
      ],
      color: 'from-teal-500 to-cyan-600',
      position: { top: '80%', left: '30%' },
    },
  ]

  const selectedRegionData = regions.find((r) => r.id === selectedRegion)

  const overallStats = [
    {
      icon: Users,
      label: '54 dân tộc',
      value: '14.3% dân số',
      color: 'text-blue-600',
    },
    {
      icon: MapPin,
      label: 'Diện tích',
      value: '3/4 lãnh thổ',
      color: 'text-green-600',
    },
    {
      icon: Home,
      label: 'Xã biên giới',
      value: '382 xã',
      color: 'text-red-600',
    },
    {
      icon: Landmark,
      label: 'Vùng chiến lược',
      value: '503 huyện',
      color: 'text-purple-600',
    },
  ]

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full mb-6 border border-blue-200">
            <Map className="w-5 h-5" />
            <span className="font-semibold">Phân bố địa lý</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Bản đồ Dân tộc Việt Nam
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            54 dân tộc anh em phân bố khắp các vùng miền, tạo nên bức tranh đa dạng văn hóa của đất nước
          </p>
        </motion.div>

        {/* Overall Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {overallStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Interactive Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Bản đồ tương tác
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Click vào từng vùng để xem chi tiết
            </p>

            {/* Vietnam Map Representation */}
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-gray-200 bg-white">
              {/* Vietnam Map Image with Hoang Sa & Truong Sa */}
              <img
                src="https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2025/TVPL-NHA-DAT/DTT/25022025/ban-do-viet-nam.jpg"
                alt="Bản đồ Việt Nam có Hoàng Sa và Trường Sa"
                className="absolute inset-0 w-full h-full object-contain p-2"
              />

              {/* Region Markers */}
              {regions.map((region) => (
                <motion.button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`absolute w-16 h-16 rounded-full border-4 border-white shadow-lg cursor-pointer transition-all duration-300 ${
                    selectedRegion === region.id
                      ? 'scale-125 ring-4 ring-offset-2 ring-blue-500'
                      : 'hover:scale-110'
                  }`}
                  style={{
                    top: region.position.top,
                    left: region.position.left,
                    transform: 'translate(-50%, -50%)',
                    background: `linear-gradient(to bottom right, ${region.color.split(' ')[1]}, ${region.color.split(' ')[3]})`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="w-8 h-8 text-white mx-auto" />
                </motion.button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`text-sm p-2 rounded-lg transition-all duration-200 ${
                    selectedRegion === region.id
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Region Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <AnimatePresence mode="wait">
              {selectedRegionData ? (
                <motion.div
                  key={selectedRegionData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${selectedRegionData.color} text-white font-semibold mb-4`}
                  >
                    {selectedRegionData.name}
                  </div>

                  <div className="space-y-6">
                    {/* Population */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Dân số
                      </h4>
                      <p className="text-2xl font-bold text-gray-800">
                        {selectedRegionData.population}
                      </p>
                    </div>

                    {/* Ethnic Groups */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">
                        Các dân tộc chính
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedRegionData.ethnicGroups.map((group, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {group}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">
                        Đặc trưng văn hóa
                      </h4>
                      <ul className="space-y-2">
                        {selectedRegionData.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center text-center"
                >
                  <div>
                    <Map className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      Chọn một vùng trên bản đồ
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      để xem thông tin chi tiết
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveMapSection
