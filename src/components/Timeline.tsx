import React, { useState } from 'react';
import { ChevronRight, Users, Factory, Star } from 'lucide-react';

interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const Timeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<string>('cntb');

  const events: TimelineEvent[] = [
    {
      id: 'cntb',
      period: 'Thời kỳ đầu',
      title: 'Chủ nghĩa Tư bản (CNTB)',
      description: 'Giai đoạn phát triển của phương thức sản xuất tư bản chủ nghĩa',
      details: [
        'Sự xuất hiện và phát triển của giai cấp tư sản',
        'Quan hệ sản xuất dựa trên sở hữu tư nhân về tư liệu sản xuất',
        'Mâu thuẫn cơ bản giữa tính chất xã hội của sản xuất và tính chất tư nhân của chiếm hữu',
        'Sự bóc lột giá trị thặng dư từ giai cấp công nhân'
      ],
      icon: Factory,
      color: 'bg-blue-600'
    },
    {
      id: 'cnxh',
      period: 'Giai đoạn chuyển tiếp',
      title: 'Chủ nghĩa Xã hội (CNXH)',
      description: 'Giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa',
      details: [
        'Sở hữu xã hội chủ nghĩa về tư liệu sản xuất',
        'Phân phối theo lao động "ai làm nhiều hưởng nhiều"',
        'Nhà nước vô sản thực hiện chuyên chính',
        'Xóa bỏ giai cấp bóc lột và xây dựng xã hội không giai cấp'
      ],
      icon: Users,
      color: 'bg-red-600'
    },
    {
      id: 'cscn',
      period: 'Giai đoạn cao',
      title: 'Cộng sản Chủ nghĩa (CSCN)',
      description: 'Giai đoạn cao của hình thái kinh tế - xã hội cộng sản chủ nghĩa',
      details: [
        'Sở hữu chung về tư liệu sản xuất được phát triển hoàn thiện',
        'Phân phối theo nhu cầu "ai cần gì có nấy"',
        'Nhà nước tàn lụi, xã hội tự quản',
        'Con người phát triển toàn diện, tự do và bình đẳng hoàn toàn'
      ],
      icon: Star,
      color: 'bg-amber-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Timeline Phát Triển Lịch Sử
          </h2>
          <p className="text-slate-600 text-lg">
            Khám phá hành trình từ Chủ nghĩa Tư bản đến Cộng sản Chủ nghĩa
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 bg-slate-100 rounded-full p-2">
            {events.map((event, index) => (
              <React.Fragment key={event.id}>
                <button
                  onClick={() => setActiveEvent(event.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activeEvent === event.id
                      ? `${event.color} text-white shadow-lg transform scale-105`
                      : 'bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <event.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{event.title}</span>
                </button>
                {index < events.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Active Event Detail */}
        {events.map((event) => (
          <div
            key={event.id}
            className={`transition-all duration-500 ${
              activeEvent === event.id
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            {activeEvent === event.id && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${event.color} text-white`}>
                    <event.icon className="w-5 h-5 mr-2" />
                    <span className="font-medium">{event.period}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-800 mb-4">
                      Đặc điểm chính:
                    </h4>
                    <ul className="space-y-3">
                      {event.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full ${event.color} mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className={`w-48 h-48 rounded-full ${event.color} flex items-center justify-center shadow-2xl`}>
                    <event.icon className="w-20 h-20 text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Source Citation */}
      <div className="mt-8 bg-slate-100 rounded-lg p-6">
        <h4 className="font-semibold text-slate-800 mb-2">Nguồn tham khảo:</h4>
        <p className="text-slate-600 text-sm">
          Chủ nghĩa Xã hội Khoa học Mác - Lê nin, Phần I: Chủ nghĩa xã hội, 
          Mục I.1: Chủ nghĩa xã hội, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa
        </p>
      </div>
    </div>
  );
};

export default Timeline;