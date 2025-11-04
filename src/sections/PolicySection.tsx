import React from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Heart,
  Home,
  Sprout,
  Users,
  TrendingUp,
  ExternalLink,
} from 'lucide-react'

const PolicySection: React.FC = () => {
  const programs = [
    {
      icon: Sprout,
      title: 'Chương trình 135',
      period: '1998 - nay',
      description:
        'Chương trình hỗ trợ phát triển kinh tế - xã hội vùng đặc biệt khó khăn, xã, thôn đặc biệt khó khăn, vùng dân tộc và miền núi',
      achievements: [
        'Hơn 4,000 xã được hỗ trợ',
        'Cải thiện hạ tầng cơ sở',
        'Nâng cao đời sống người dân',
      ],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: Home,
      title: 'Chương trình 30a',
      period: '1992 - 2010',
      description:
        'Chương trình định canh, định cư cho đồng bào dân tộc thiểu số và miền núi. Giải quyết tình trạng du canh, du cư, ổn định đời sống',
      achievements: [
        '1.5 triệu hộ được định canh định cư',
        'Xây dựng 2,500 điểm dân cư mới',
        'Cải thiện điều kiện sống',
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: GraduationCap,
      title: 'Chính sách Giáo dục',
      period: '2010 - nay',
      description:
        'Miễn giảm học phí, hỗ trợ chi phí học tập, xây dựng trường lớp, đào tạo giáo viên dân tộc, dạy và học tiếng dân tộc',
      achievements: [
        'Tỷ lệ biết chữ tăng 95%+',
        'Hàng nghìn trường được xây mới',
        'Chính sách ưu tiên tuyển sinh',
      ],
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: Heart,
      title: 'Chính sách Y tế',
      period: '2008 - nay',
      description:
        'Bảo hiểm y tế miễn phí, trạm y tế xã, bác sĩ về vùng sâu vùng xa, hỗ trợ dinh dưỡng, phòng chống dịch bệnh',
      achievements: [
        '100% xã có trạm y tế',
        'Giảm tỷ lệ tử vong trẻ em',
        'Cải thiện sức khỏe cộng đồng',
      ],
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      icon: TrendingUp,
      title: 'Chương trình Giảm nghèo',
      period: '2016 - 2025',
      description:
        'Chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn 2016-2025. Tập trung vào vùng dân tộc thiểu số và miền núi',
      achievements: [
        'Tỷ lệ hộ nghèo giảm từ 58% xuống 15%',
        'Phát triển sinh kế bền vững',
        'Nâng cao thu nhập',
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      icon: BookOpen,
      title: 'Chính sách Văn hóa',
      period: '2005 - nay',
      description:
        'Bảo tồn, phát huy bản sắc văn hóa các dân tộc. Hỗ trợ lễ hội, nghệ thuật truyền thống, ghi chép ngôn ngữ chữ viết',
      achievements: [
        'Không gian văn hóa Gong được UNESCO công nhận',
        'Hàng trăm di sản được bảo tồn',
        'Phát triển du lịch văn hóa',
      ],
      color: 'from-pink-500 to-fuchsia-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
    },
  ]

  const newsLinks = [
    {
      title: 'Ủy ban Dân tộc',
      url: 'http://www.cema.gov.vn',
      icon: Users,
    },
    {
      title: 'Báo VietnamPlus',
      url: 'https://www.vietnamplus.vn',
      icon: BookOpen,
    },
  ]

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full mb-6 border border-indigo-200">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Chính sách của Đảng và Nhà nước</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Các Chương trình Phát triển
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Đảng và Nhà nước luôn quan tâm đặc biệt đến phát triển vùng dân tộc
            thiểu số thông qua các chính sách và chương trình cụ thể
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${program.bgColor} rounded-2xl p-6 border-2 ${program.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}
              >
                {/* Icon & Period */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full">
                    {program.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {program.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Thành tựu:
                  </p>
                  {program.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* News Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Cập nhật tin tức
            </h3>
            <p className="text-gray-600">
              Theo dõi các chính sách và tin tức mới nhất về dân tộc thiểu số
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {newsLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl border border-indigo-200 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">
                      {link.title}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PolicySection
