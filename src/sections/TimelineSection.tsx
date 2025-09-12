import React, { useState, useEffect } from 'react';
import { Factory, Flag, Globe } from 'lucide-react';

const TIMELINE = [
  {
    id: 'cntb',
    title: 'Chủ nghĩa tư bản (CNTB)',
    color: '#1F2937',
    accentColor: '#555555',
    icon: Factory,
    summary: 'Công nghiệp phát triển + sở hữu tư nhân TLSX → mâu thuẫn giai cấp đến đỉnh.',
    details: {
      economy: 'Công nghiệp hiện đại, năng suất cao nhưng sở hữu tư nhân chi phối.',
      society: 'Tồn tại mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản.',
      meaning: 'CNTB tạo ra cơ sở vật chất – kỹ thuật, đồng thời đẩy mâu thuẫn giai cấp lên đỉnh cao.'
    },
    tooltip: 'CNTB phát triển LLSX, nhưng mâu thuẫn giai cấp đến đỉnh điểm.'
  },
  {
    id: 'cnxh-early',
    title: 'Chủ nghĩa Xã hội',
    color: '#C8102E',
    accentColor: '#FFD700',
    icon: Flag,
    summary: 'Công hữu bước đầu; kinh tế nhiều thành phần; dân chủ XHCN mở rộng; cũ–mới đan xen.',
    details: {
      economy: 'Công hữu TLSX chủ yếu mới hình thành, kinh tế nhiều thành phần; kinh tế nhà nước giữ vai trò chủ đạo.',
      politics: 'Nhà nước chuyên chính vô sản, dưới sự lãnh đạo của Đảng.',
      society: 'Nguyên tắc phân phối theo lao động là chủ yếu, có phúc lợi xã hội hỗ trợ.',
      examplesVN: [
        'Đổi mới 1986: chuyển từ cơ chế bao cấp sang kinh tế thị trường định hướng XHCN. Chương trình mục tiêu giảm nghèo, phát triển bền vững.',
        'Chương trình mục tiêu giảm nghèo, phát triển bền vững.'
      ]
    },
    tooltip: 'Thời kỳ quá độ: vừa cải biến vừa xây dựng mới; cũ – mới cùng tồn tại.'
  },
  {
    id: 'cscn',
    title: 'Cộng sản chủ nghĩa (CSCN)',
    color: '#2E8B57',
    accentColor: '#1F6FEB',
    icon: Globe,
    summary: 'Công hữu hoàn thiện; không còn giai cấp; "làm theo năng lực, hưởng theo nhu cầu".',
    details: {
      economy: 'Lực lượng sản xuất phát triển cực cao, công hữu toàn diện.',
      society: 'Không còn giai cấp, bất công xã hội.',
      distribution: "Nguyên tắc 'Làm theo năng lực, hưởng theo nhu cầu'.",
      culture: 'Con người tự do, bình đẳng, phát triển toàn diện.'
    },
    tooltip: 'Đích đến: xã hội không giai cấp, công bằng, con người phát triển toàn diện.'
  }
];

const TimelineSection: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen w-full snap-start relative overflow-hidden">
      {/* Background Sections */}
      <div className="absolute inset-0 grid grid-cols-3">
        {/* CNTB Background */}
        <div 
          className="relative bg-cover bg-center " 
          style={{ 
            backgroundImage: "url('https://yeulichsu.edu.vn/upload/2024/01/tim-hieu-su-ra-doi-cua-chu-nghia-tu-ban-phuong-tay.webp')",
            filter: 'grayscale(100%)'
          }}
        >
          <div className="absolute inset-0 bg-[#1F2937]/60"></div>
        </div>
        
        {/* CNXH Background */}
        <div 
          className="relative bg-cover bg-center " 
          style={{ 
            backgroundImage: "url('https://lyluanchinhtri-statics.melisoft.vn/2023/10/26/anh_1._cnxh_1698315961584.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#C8102E]/40"></div>
        </div>
        
        {/* CSCN Background */}
        <div 
          className="relative bg-cover bg-center " 
          style={{ 
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lenin_and_soldiers_of_Red_Army_on_the_way_to_Poland_by_Isaak_Brodsky.jpg/330px-Lenin_and_soldiers_of_Red_Army_on_the_way_to_Poland_by_Isaak_Brodsky.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#2E8B57]/50"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#111827] font-['Montserrat'] bg-white/90 backdrop-blur-sm rounded-lg px-8 py-4 shadow-lg">
            TIẾN TRÌNH LỊCH SỬ
          </h2>
          
          {/* Desktop Timeline - Horizontal */}
          <div className="hidden md:flex items-start gap-x-40 justify-center w-full max-w-[90rem] relative px-16">
            {/* Extended Progress line */}
            <div className="absolute top-16 -left-32 -right-32 h-2 bg-gradient-to-r from-[#1F2937] via-[#C8102E] to-[#2E8B57] opacity-40 rounded-full shadow-lg"></div>
            <div className="absolute top-[68px] -left-32 -right-32 h-0.5 bg-white/50 rounded-full"></div>
          
          {TIMELINE.map((step) => (
            <div key={step.id} className="flex flex-col items-center flex-1 group">
              {/* Step Circle with Enhanced Styling */}
              <button
                className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 transition-all duration-500 transform hover:scale-110 z-20"
                style={{
                  background: hovered === step.id || active === step.id 
                    ? `linear-gradient(135deg, ${step.color}, ${step.accentColor})` 
                    : 'rgba(255,255,255,0.95)',
                  borderColor: step.color,
                  boxShadow: `0 12px 35px ${step.color}60`
                }}
                
                onClick={() => setActive(active === step.id ? null : step.id)}
              >
                <step.icon 
                  className="w-9 h-9" 
                  color={hovered === step.id || active === step.id ? '#FFFFFF' : step.color}
                  strokeWidth={2}
                />
              </button>
              
              {/* Content Card with Background */}
              <div className="mt-8 text-center max-w-xs bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <h3 
                  className="font-bold text-xl mb-3 font-['Montserrat']" 
                  style={{color: step.color}}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#111827] leading-relaxed">
                  {step.summary}
                </p>
              </div>
              
              {/* Enhanced Hover Tooltip */}
              {hovered === step.id && (
                <div 
                  className="absolute top-24 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl text-white text-sm shadow-xl z-30 max-w-xs backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}e6, ${step.accentColor}e6)`
                  }}
                >
                  {step.tooltip}
                  <div 
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45"
                    style={{backgroundColor: step.color}}
                  ></div>
                </div>
              )}
            </div>
          ))}
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="md:hidden space-y-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            {TIMELINE.map((step, idx) => (
              <div key={step.id} className="flex items-start space-x-4 relative">
                {/* Step Circle */}
                <button
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 transition-all duration-300 flex-shrink-0 z-10"
                  style={{
                    background: hovered === step.id || active === step.id 
                      ? `linear-gradient(135deg, ${step.color}, ${step.accentColor})` 
                      : 'rgba(255,255,255,0.95)',
                    borderColor: step.color,
                    boxShadow: `0 8px 25px ${step.color}40`
                  }}
                  onMouseEnter={() => setHovered(step.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === step.id ? null : step.id)}
                >
                  <step.icon 
                    className="w-7 h-7" 
                    color={hovered === step.id || active === step.id ? '#FFFFFF' : step.color}
                    strokeWidth={2}
                  />
                </button>
                
                {/* Content */}
                <div className="flex-1 bg-white/70 rounded-xl p-4 backdrop-blur-sm">
                  <h3 
                    className="font-bold text-lg mb-2 font-['Montserrat']" 
                    style={{color: step.color}}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#111827] leading-relaxed">
                    {step.summary}
                  </p>
                </div>
                
                {/* Vertical connecting line */}
                {idx < TIMELINE.length - 1 && (
                  <div 
                    className="absolute left-8 top-16 w-1 h-12 rounded-full opacity-40 z-0"
                    style={{
                      background: `linear-gradient(180deg, ${step.color}, ${TIMELINE[idx + 1].color})`
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setActive(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div 
              className="p-6 text-white rounded-t-2xl"
              style={{
                background: `linear-gradient(135deg, ${TIMELINE.find(t => t.id === active)?.color}, ${TIMELINE.find(t => t.id === active)?.accentColor})`
              }}
            >
              <button 
                className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none"
                onClick={() => setActive(null)}
              >
                ×
              </button>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  {React.createElement(TIMELINE.find(t => t.id === active)?.icon!, {
                    className: "w-8 h-8",
                    color: "#FFFFFF"
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-['Montserrat']">
                    {TIMELINE.find(t => t.id === active)?.title}
                  </h3>
                  <p className="text-white/90 mt-2">{TIMELINE.find(t => t.id === active)?.summary}</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-6">
              {Object.entries(TIMELINE.find(t => t.id === active)?.details || {}).map(([key, value], i) => (
                <div key={i} className="border-l-4 pl-4" style={{borderColor: TIMELINE.find(t => t.id === active)?.color}}>
                  <h4 className="font-bold text-lg text-[#111827] mb-2 font-['Montserrat']">
                    {key === 'examplesVN' ? 'Ví dụ Việt Nam' : 
                     key === 'economy' ? 'Kinh tế' :
                     key === 'society' ? 'Xã hội' :
                     key === 'politics' ? 'Chính trị' :
                     key === 'distribution' ? 'Phân phối' :
                     key === 'culture' ? 'Văn hóa' :
                     key === 'meaning' ? 'Ý nghĩa lịch sử' :
                     key.charAt(0).toUpperCase() + key.slice(1)}
                  </h4>
                  {Array.isArray(value) ? (
                    <ul className="space-y-2">
                      {value.map((v, idx) => (
                        <li key={idx} className="text-[#111827] flex items-start">
                          <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: TIMELINE.find(t => t.id === active)?.color}}></span>
                          {v}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[#111827] leading-relaxed">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TimelineSection;
