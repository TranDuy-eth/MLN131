import React, { useState } from 'react';
import { Factory, Scale, BookOpen, X } from 'lucide-react';

interface CardData {
  id: string;
  title: string;
  color: string;
  icon: React.ComponentType<any>;
  bullets: string[];
  modalContent: {
    theory: string;
    example: string;
  };
}

const CARDS: CardData[] = [
  {
    id: 'economy',
    title: 'Kinh tế: Công hữu bước đầu',
    color: '#C8102E',
    icon: Factory,
    bullets: [
      'Công hữu TLSX chủ yếu bước đầu hình thành.',
      'Kinh tế nhiều thành phần cùng tồn tại.',
      'Kinh tế nhà nước giữ vai trò chủ đạo.'
    ],
    modalContent: {
      theory: 'Xác lập công hữu dần dần, kết hợp cơ chế thị trường với định hướng XHCN.',
      example: 'Đổi mới 1986, chuyển từ cơ chế bao cấp → kinh tế thị trường định hướng XHCN.'
    }
  },
  {
    id: 'politics',
    title: 'Chính trị: Nhà nước chuyên chính vô sản',
    color: '#FFD700',
    icon: Scale,
    bullets: [
      'Quyền lực thuộc về nhân dân.',
      'Sự lãnh đạo của Đảng Cộng sản.',
      'Dân chủ XHCN gắn với pháp quyền.'
    ],
    modalContent: {
      theory: 'Nhà nước XHCN là công cụ của giai cấp công nhân và nhân dân lao động.',
      example: 'Xây dựng Nhà nước pháp quyền XHCN, cải cách thể chế, phát huy dân chủ cơ sở.'
    }
  },
  {
    id: 'culture',
    title: 'Văn hóa – Xã hội: Phân phối theo lao động',
    color: '#2E8B57',
    icon: BookOpen,
    bullets: [
      'Lao động là nguyên tắc phân phối chủ yếu.',
      'Có phúc lợi xã hội, hạn chế bất công.',
      'Mục tiêu: công bằng, tiến bộ, phát triển con người.'
    ],
    modalContent: {
      theory: 'Lấy con người làm trung tâm, kết hợp phân phối theo lao động + an sinh xã hội.',
      example: 'Mở rộng giáo dục, y tế, BHXH; chương trình giảm nghèo, phát triển nguồn nhân lực.'
    }
  }
];

const SocialismEarlyStageSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col justify-center snap-start relative overflow-hidden" >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
        {/* Header Zone */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 font-montserrat">
            Chủ nghĩa xã hội – Giai đoạn đầu
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Thời kỳ quá độ: vừa cải biến, vừa xây dựng cái mới
          </p>
          {/* Gradient Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content - 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`
                  bg-white rounded-3xl p-8 shadow-lg cursor-pointer transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl group relative overflow-hidden
                  border-l-4 hover:border-l-8 border-transparent
                `}
                style={{ 
                  '--hover-color': card.color,
                  borderLeftColor: 'transparent'
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderLeftColor = card.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderLeftColor = 'transparent';
                }}
              >
                {/* Icon Circle */}
                <div 
                  className="w-18 h-18 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${card.color}20` }}
                >
                  <IconComponent 
                    size={32} 
                    style={{ color: card.color }}
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center min-h-[3rem] flex items-center justify-center">
                  {card.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-3">
                  {card.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: card.color }}
                      ></div>
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Click indicator */}
                <div className="mt-6 text-center">
                  <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click để xem chi tiết
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed border-l-4 border-red-500 pl-6 bg-gray-50 py-6 rounded-r-lg">
            "Giai đoạn đầu CNXH là nền móng cho sự phát triển lên CSCN – còn cũ và mới đan xen nhưng xu hướng tiến bộ chiếm ưu thế."
          </blockquote>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Modal Header */}
            <div 
              className="p-6 border-b-4"
              style={{ borderBottomColor: selectedCard.color }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${selectedCard.color}20` }}
                  >
                    <selectedCard.icon size={24} style={{ color: selectedCard.color }} />
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
              {/* Theory Section */}
              <div>
                <h4 
                  className="text-lg font-bold mb-3"
                  style={{ color: selectedCard.color }}
                >
                  Lý thuyết:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCard.modalContent.theory}
                </p>
              </div>

              {/* Example Section */}
              <div>
                <h4 
                  className="text-lg font-bold mb-3"
                  style={{ color: selectedCard.color }}
                >
                  Ví dụ Việt Nam:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCard.modalContent.example}
                </p>
              </div>

              {/* Bullets Review */}
              <div>
                <h4 
                  className="text-lg font-bold mb-3"
                  style={{ color: selectedCard.color }}
                >
                  Đặc điểm chính:
                </h4>
                <ul className="space-y-2">
                  {selectedCard.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: selectedCard.color }}
                      ></div>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
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

export default SocialismEarlyStageSection;
