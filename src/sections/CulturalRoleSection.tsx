import React from 'react'
import { motion } from 'framer-motion'
import { Palette, BookOpen, Heart, Globe } from 'lucide-react'

const CulturalRoleSection: React.FC = () => {
  const culturalAspects = [
    {
      icon: Palette,
      title: 'Làm phong phú nền văn hóa quốc gia',
      description:
        'Mỗi dân tộc thiểu số đều có bản sắc văn hóa riêng, góp phần tạo nên sự phong phú, đa dạng của nền văn hóa Việt Nam thống nhất.',
      highlight: '54 dân tộc',
      image: 'https://images.vietnamtourism.gov.vn/vn//images/2023/thang_9/gac1.jpeg',
    },
    {
      icon: BookOpen,
      title: 'Giữ gìn truyền thống',
      description:
        'DTTs có trách nhiệm giữ gìn và phát huy những giá trị, bản sắc văn hóa truyền thống của mình, đồng thời tiếp thu tinh hoa văn hóa nhân loại để xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.',
      highlight: 'Bản sắc văn hóa',
      image: 'https://cdn.nhandan.vn/images/22f099ca8bc7ae81aa2a8d3416a84bf8536ddc8a4cc3b52fe06485d1d59f7e29d869f92959b32329537994301e9c712955c0666ecfb3e922e4487045543c253c3c7c4f229359aba580a4e2f637103b66/8-blpp-1-9294.jpg.webp',
    },
  ]

  return (
    <section className="min-h-screen w-full snap-start bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Vai trò Văn hóa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Văn hóa và Bảo tồn Bản sắc
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mỗi dân tộc thiểu số là một màu sắc độc đáo góp phần tạo nên bức tranh văn hóa đa dạng của Việt Nam
          </p>
        </motion.div>

        {/* Cultural Aspects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {culturalAspects.map((aspect, index) => {
            const Icon = aspect.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={aspect.image}
                      alt={aspect.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                          {aspect.highlight}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {aspect.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {aspect.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Cultural Diversity Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Đa dạng văn hóa - Thống nhất dân tộc
              </h3>
              <p className="text-gray-600">
                Tinh hoa văn hóa của 54 dân tộc anh em
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                100+
              </div>
              <div className="text-gray-700 font-medium">Ngôn ngữ</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                7,000+
              </div>
              <div className="text-gray-700 font-medium">Lễ hội truyền thống</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">∞</div>
              <div className="text-gray-700 font-medium">
                Giá trị văn hóa vô giá
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CulturalRoleSection
