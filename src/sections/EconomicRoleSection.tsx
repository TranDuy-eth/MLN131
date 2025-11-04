import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Map, Users, Sparkles } from 'lucide-react'

const EconomicRoleSection: React.FC = () => {
  const economicRoles = [
    {
      icon: Map,
      title: 'Đóng góp vào phát triển vùng chiến lược',
      description:
        'DTTs cư trú trên ¾ diện tích lãnh thổ, bao gồm những vùng sâu, vùng xa, biên giới, hải đảo. Việc phát triển toàn diện về kinh tế, văn hóa, xã hội trên các địa bàn này do DTTs là chủ thể là yếu tố quyết định sự phát triển bền vững của đất nước.',
      color: 'from-blue-500 to-cyan-500',
      stats: '¾ diện tích lãnh thổ',
    },
    {
      icon: Sparkles,
      title: 'Phát huy nội lực',
      description:
        'DTTs có vai trò quan trọng trong việc phát huy nội lực, tinh thần tự lực, tự cường để xây dựng và phát triển vùng miền của mình.',
      color: 'from-purple-500 to-pink-500',
      stats: 'Tự lực, tự cường',
    },
    {
      icon: Users,
      title: 'Tham gia vào khối đại đoàn kết',
      description:
        'DTTs cùng với dân tộc đa số và các tầng lớp khác tạo nên sức mạnh tổng hợp của khối đại đoàn kết toàn dân tộc, tạo động lực cho công cuộc đổi mới, xây dựng xã hội chủ nghĩa.',
      color: 'from-orange-500 to-red-500',
      stats: '54 dân tộc đoàn kết',
    },
  ]

  return (
    <section className="min-h-screen w-full snap-start bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Vai trò Kinh tế - Xã hội</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Phát triển Kinh tế và Xã hội
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dân tộc thiểu số đóng vai trò then chốt trong phát triển kinh tế vùng chiến lược và xây dựng khối đại đoàn kết toàn dân tộc
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {economicRoles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border-t-4 border-transparent hover:border-blue-500">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {role.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">
                      {role.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://storage.googleapis.com/blogvxr-uploads/2021/07/hg9_1250768.jpg"
            alt="Vùng cao Việt Nam"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Vùng đất chiến lược của Tổ quốc
              </h3>
              <p className="text-white/90">
                DTTs sinh sống tại 503 huyện và 5,468 xã, trong đó có 382 xã biên giới - những vị trí quan trọng về an ninh quốc phòng
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EconomicRoleSection
