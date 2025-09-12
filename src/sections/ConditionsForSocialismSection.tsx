import React, { useState } from 'react';
import { Factory, Users, Flag, Scale, UserCheck, Handshake, X } from 'lucide-react';

interface CardData {
  id: string;
  title: string;
  bullets: string[];
  tooltip: string;
  icon: React.ComponentType<any>;
  category: 'objective' | 'subjective';
}



const CONDITIONS_DATA: CardData[] = [
  // Điều kiện khách quan
  {
    id: 'llsx-phat-trien',
    title: 'Phát triển lực lượng sản xuất',
    bullets: [
      'Công nghiệp hiện đại, năng suất lao động tăng cao',
      'Tính xã hội hoá sản xuất ngày càng sâu rộng'
    ],
    tooltip: 'Cơ sở vật chất – kỹ thuật cho xã hội mới',
    icon: Factory,
    category: 'objective'
  },
  {
    id: 'mau-thuan-giai-cap',
    title: 'Mâu thuẫn giai cấp gay gắt',
    bullets: [
      'Mâu thuẫn giữa tính xã hội của sản xuất và sở hữu tư nhân TLSX',
      'Đòi hỏi quan hệ sản xuất mới phù hợp'
    ],
    tooltip: 'Động lực thúc đẩy cải biến quan hệ sở hữu',
    icon: Scale,
    category: 'objective'
  },
  {
    id: 'phong-trao-cong-nhan',
    title: 'Phong trào công nhân phát triển',
    bullets: [
      'Đấu tranh có tổ chức, nâng cao ý thức giai cấp',
      'Liên kết quốc tế, sức ảnh hưởng lan rộng'
    ],
    tooltip: 'Lực lượng xã hội thúc đẩy chuyển biến',
    icon: Users,
    category: 'objective'
  },
  // Điều kiện chủ quan
  {
    id: 'dang-cong-san',
    title: 'Vai trò lãnh đạo của Đảng Cộng sản',
    bullets: [
      'Đảng là tiên phong, đại biểu lợi ích giai cấp công nhân',
      'Định hướng chiến lược, tổ chức và lãnh đạo cách mạng'
    ],
    tooltip: 'Nhân tố quyết định thắng lợi',
    icon: Flag,
    category: 'subjective'
  },
  {
    id: 'y-thuc-to-chuc',
    title: 'Ý thức và tổ chức của giai cấp công nhân',
    bullets: [
      'Từ tự phát đến tự giác',
      'Kỷ luật, đoàn kết, năng lực làm chủ'
    ],
    tooltip: 'Biến sức mạnh tiềm năng thành hiện thực',
    icon: UserCheck,
    category: 'subjective'
  },
  {
    id: 'lien-minh-cn-nong-tri',
    title: 'Liên minh công – nông – trí thức',
    bullets: [
      'Mở rộng nền tảng xã hội của cách mạng',
      'Huy động và phát huy mọi nguồn lực'
    ],
    tooltip: 'Cơ sở chính trị – xã hội rộng rãi',
    icon: Handshake,
    category: 'subjective'
  }
];



const ConditionsForSocialismSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const getCardColor = (category: 'objective' | 'subjective') => {
    return category === 'objective' ? '#1F6FEB' : '#C8102E';
  };

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center snap-start relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
        {/* Header Zone */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-montserrat">
            Điều kiện ra đời của Chủ nghĩa Xã hội
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-5xl mx-auto leading-relaxed">
            Sự trưởng thành của giai cấp công nhân gắn liền với vai trò lãnh đạo của Đảng, dựa trên cơ sở khách quan của xã hội tư bản phát triển.
          </p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Objective Conditions */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Factory size={24} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Điều kiện khách quan</h2>
            </div>
            
            {/* Cards for objective conditions */}
            <div className="space-y-4">
              {CONDITIONS_DATA.filter(card => card.category === 'objective').map((card) => {
                const IconComponent = card.icon;
                
                return (
                  <div
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className="bg-white rounded-xl p-4 shadow-md cursor-pointer transition-all duration-300 border-l-4 border-blue-600 hover:scale-105 hover:shadow-lg"
                    title={card.tooltip}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <IconComponent size={20} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm">{card.title}</h3>
                        <ul className="space-y-1">
                          {card.bullets.map((bullet, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start">
                              <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Subjective Conditions */}
          <div className="bg-yellow-50 rounded-2xl p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Flag size={24} className="text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Điều kiện chủ quan</h2>
            </div>
            
            {/* Cards for subjective conditions */}
            <div className="space-y-4">
              {CONDITIONS_DATA.filter(card => card.category === 'subjective').map((card) => {
                const IconComponent = card.icon;
                
                return (
                  <div
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className="bg-white rounded-xl p-4 shadow-md cursor-pointer transition-all duration-300 border-l-4 border-red-600 hover:scale-105 hover:shadow-lg"
                    title={card.tooltip}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <IconComponent size={20} className="text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm">{card.title}</h3>
                        <ul className="space-y-1">
                          {card.bullets.map((bullet, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start">
                              <span className="w-1 h-1 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* Key Takeaway */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-6 bg-gray-50 py-6 rounded-r-lg">
            "CNXH hình thành khi nền tảng vật chất – xã hội của CNTB phát triển tới hạn và được dẫn dắt bởi nhân tố chính trị – tổ chức tiên phong."
          </blockquote>
        </div>
      </div>

      {/* Modal for Card Details */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Modal Header */}
            <div 
              className="p-6 border-b-4"
              style={{ borderBottomColor: getCardColor(selectedCard.category) }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${getCardColor(selectedCard.category)}20` }}
                  >
                    <selectedCard.icon size={24} style={{ color: getCardColor(selectedCard.category) }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedCard.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Tooltip as description */}
              <div>
                <h4 
                  className="text-lg font-bold mb-3"
                  style={{ color: getCardColor(selectedCard.category) }}
                >
                  Ý nghĩa:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCard.tooltip}
                </p>
              </div>

              {/* Bullets Details */}
              <div>
                <h4 
                  className="text-lg font-bold mb-3"
                  style={{ color: getCardColor(selectedCard.category) }}
                >
                  Đặc điểm chính:
                </h4>
                <ul className="space-y-2">
                  {selectedCard.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: getCardColor(selectedCard.category) }}
                      ></div>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">Loại điều kiện:</span>
                  <span 
                    className="ml-2 px-2 py-1 rounded text-white text-xs font-medium"
                    style={{ backgroundColor: getCardColor(selectedCard.category) }}
                  >
                    {selectedCard.category === 'objective' ? 'Khách quan' : 'Chủ quan'}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
              <button
                onClick={() => setSelectedCard(null)}
                className="w-full py-3 px-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ConditionsForSocialismSection;
