import React from 'react'
import { motion } from 'framer-motion'
import { Shield, MapPin, Users2, Flag } from 'lucide-react'

const SecurityRoleSection: React.FC = () => {
  const securityRoles = [
    {
      icon: Shield,
      title: 'Bảo vệ chủ quyền quốc gia',
      description:
        'Do DTTs cư trú ở các vùng biên giới, hải đảo và các vị trí trọng yếu, họ đóng vai trò quan trọng trong việc tăng cường sức mạnh bảo vệ tổ quốc, giữ vững an ninh chính trị, trật tự an toàn xã hội.',
      color: 'from-green-500 to-emerald-600',
      stat: '382 xã biên giới',
    },
    {
      icon: Flag,
      title: 'Củng cố nền tảng chính trị',
      description:
        'Tín đồ các tôn giáo trong DTTs (phần lớn là nhân dân lao động) có lòng yêu nước, tinh thần dân tộc, cùng nhau đoàn kết xây dựng cuộc sống "tốt đời, đẹp đạo", qua đó củng cố cơ sở chính trị - xã hội cho sự lãnh đạo của Đảng Cộng sản Việt Nam và chế độ xã hội chủ nghĩa.',
      color: 'from-red-500 to-rose-600',
      stat: 'Đoàn kết dân tộc',
    },
  ]

  return (
    <section className="min-h-screen w-full snap-start bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Vai trò An ninh - Chính trị</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            An ninh và Chính trị
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dân tộc thiểu số - Lá chắn vững chắc bảo vệ chủ quyền và an ninh quốc gia
          </p>
        </motion.div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {securityRoles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 border-l-8 border-transparent hover:border-green-500">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {role.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {role.description}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-3 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-green-700">
                      {role.stat}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Strategic Map Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 md:h-auto">
                <img
                  src="https://cdn.accgroup.vn/wp-content/uploads/2023/07/chien-luoc-bao-ve-bien-gioi-quoc-gia-la-gi.jpg"
                  alt="Vùng biên giới Việt Nam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold">Vùng Chiến Lược</h3>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Vị trí chiến lược đặc biệt quan trọng
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Biên giới đất liền
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Tiếp giáp với Trung Quốc, Lào, Campuchia - 382 xã biên giới
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Hải đảo
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Vùng biển, đảo xa - những tiền đồn của Tổ quốc
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users2 className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Lực lượng nòng cốt
                      </h4>
                      <p className="text-gray-600 text-sm">
                        DTTs là lực lượng chủ thể trong bảo vệ biên cương
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500">
                  <p className="text-gray-700 leading-relaxed italic">
                    "Dân tộc thiểu số là những người gác cổng Tổ quốc, là lá chắn
                    vững chắc bảo vệ chủ quyền thiêng liêng của đất nước."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecurityRoleSection
