import React, { useState } from 'react';
import { Factory, Scale, Handshake, BookOpen, Globe, X } from 'lucide-react';

interface NodeData {
  id: string;
  title: string;
  accent: string;
  icon: React.ComponentType<any>;
  bullets: string[];
  modal: {
    theory: string;
    examplesVN: string[];
  };
}

const NODES_DATA: NodeData[] = [
  {
    id: 'dac-trung-1',
    title: '1) Cơ sở vật chất – kỹ thuật: Sản xuất công nghiệp hiện đại',
    accent: '#1F6FEB',
    icon: Factory,
    bullets: [
      'Lực lượng sản xuất hiện đại, công nghiệp hoá – hiện đại hoá.',
      'Năng suất lao động xã hội cao, nền tảng kỹ thuật tiên tiến.'
    ],
    modal: {
      theory: 'Nền sản xuất công nghiệp hiện đại là cơ sở vật chất – kỹ thuật của CNXH, bảo đảm năng suất cao và khả năng thoả mãn nhu cầu xã hội.',
      examplesVN: [
        'Đẩy mạnh CNH–HĐH gắn chuyển đổi số, kinh tế tri thức.',
        'Phát triển hạ tầng số, logistics, năng lượng tái tạo.'
      ]
    }
  },
  {
    id: 'dac-trung-2',
    title: '2) Xoá bỏ tư hữu TBCN, thiết lập công hữu TLSX chủ yếu',
    accent: '#C8102E',
    icon: Scale,
    bullets: [
      'Công hữu về TLSX chủ yếu giữ vai trò chi phối.',
      'Tạo nền tảng khắc phục bóc lột, định hướng công bằng.'
    ],
    modal: {
      theory: 'Công hữu TLSX chủ yếu thay thế sở hữu tư nhân tư bản chủ nghĩa ở lĩnh vực then chốt, là nền tảng quan hệ sản xuất mới.',
      examplesVN: [
        'Kinh tế nhà nước giữ vai trò chủ đạo ở ngành, lĩnh vực trọng yếu.',
        'Đa sở hữu nhưng công hữu chi phối khu vực then chốt.'
      ]
    }
  },
  {
    id: 'dac-trung-3',
    title: '3) Tổ chức lao động và kỷ luật lao động mới',
    accent: '#10B981',
    icon: Handshake,
    bullets: [
      'Kỷ luật, hợp tác, khoa học; phát huy sáng kiến người lao động.',
      'Quản trị hiện đại, công nghệ và dữ liệu dẫn dắt.'
    ],
    modal: {
      theory: 'CNXH thiết lập kiểu tổ chức và kỷ luật lao động mới: tự giác, khoa học, đề cao trách nhiệm xã hội và sáng tạo.',
      examplesVN: [
        'Chuẩn hoá quy trình sản xuất tinh gọn (Lean), Kaizen.',
        'Bảo hộ lao động, an toàn vệ sinh, tiêu chuẩn ESG.'
      ]
    }
  },
  {
    id: 'dac-trung-4',
    title: '4) Phân phối theo lao động là nguyên tắc cơ bản',
    accent: '#F59E0B',
    icon: BookOpen,
    bullets: [
      'Hưởng theo số lượng, chất lượng lao động đã cống hiến.',
      'Kết hợp phúc lợi xã hội để bảo đảm công bằng.'
    ],
    modal: {
      theory: 'Nguyên tắc phân phối theo lao động bảo đảm gắn lợi ích với đóng góp; song song có kênh phúc lợi để hỗ trợ nhóm yếu thế.',
      examplesVN: [
        'Tiền lương gắn năng suất, chất lượng; BHXH, BHYT, trợ cấp.',
        'Chương trình giảm nghèo, an sinh đa tầng.'
      ]
    }
  },
  {
    id: 'dac-trung-5',
    title: '5) Nhà nước XHCN kiểu mới: của dân, do dân, vì dân',
    accent: '#FFD700',
    icon: Globe,
    bullets: [
      'Mang bản chất giai cấp công nhân, tính nhân dân rộng rãi, tính dân tộc sâu sắc.',
      'Thực hiện quyền lực và lợi ích của nhân dân, dưới sự lãnh đạo của Đảng.'
    ],
    modal: {
      theory: 'Nhà nước XHCN bảo đảm dân chủ gắn với pháp quyền, quản trị vì phát triển con người và công bằng xã hội.',
      examplesVN: [
        'Xây dựng Nhà nước pháp quyền XHCN, cải cách thể chế.',
        'Phát huy dân chủ cơ sở, minh bạch – trách nhiệm giải trình.'
      ]
    }
  },
  {
    id: 'dac-trung-6',
    title: '6) Giải phóng con người; công bằng, bình đẳng, tiến bộ xã hội',
    accent: '#8B5CF6',
    icon: Handshake,
    bullets: [
      'Xoá bỏ áp bức, bóc lột; bảo đảm quyền con người, quyền công dân.',
      'Tạo điều kiện phát triển toàn diện con người.'
    ],
    modal: {
      theory: 'Đặc trưng giá trị – mục tiêu: con người được giải phóng và phát triển toàn diện trong một xã hội công bằng, bình đẳng, văn minh.',
      examplesVN: [
        'Phổ cập giáo dục, chăm sóc sức khoẻ toàn dân, bình đẳng giới.',
        'Chính sách văn hoá, phát triển con người, chuyển đổi số vì mọi người.'
      ]
    }
  }
];

const SocialismCharacteristicsSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  // Calculate positions for mindmap nodes in a circle around center
  const getNodePosition = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const radius = 380; // Further increased distance from center for 6 nodes
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle };
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center snap-start relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
        {/* Header Zone */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-montserrat">
            Những đặc trưng bản chất của Chủ nghĩa Xã hội
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-5xl mx-auto leading-relaxed">
            6 đặc trưng theo cơ sở lý luận Mác – Lênin và thực tiễn xây dựng CNXH
          </p>
        </div>

        {/* Mindmap Container - Desktop Only */}
        <div className="hidden xl:block relative max-w-7xl mx-auto mb-16">
          <div className="relative h-[1000px] flex items-center justify-center">
            {/* Center Node */}
            <div className="absolute z-20 w-40 h-40 bg-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-white font-bold text-xl text-center leading-tight">
                Chủ nghĩa<br />Xã hội
              </span>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1200 1000">
              {NODES_DATA.map((node, index) => {
                const { x, y } = getNodePosition(index, NODES_DATA.length);
                const centerX = 600; // SVG center X
                const centerY = 500; // SVG center Y
                const nodeX = centerX + x;
                const nodeY = centerY + y;

                return (
                  <line
                    key={node.id}
                    x1={centerX}
                    y1={centerY}
                    x2={nodeX}
                    y2={nodeY}
                    stroke={node.accent}
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="opacity-50"
                  />
                );
              })}
            </svg>

            {/* Node Cards */}
            {NODES_DATA.map((node, index) => {
              const { x, y } = getNodePosition(index, NODES_DATA.length);
              const IconComponent = node.icon;
              
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className="absolute z-20 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div 
                    className="bg-white rounded-2xl p-3 w-52 shadow-xl border-l-4 border-r-4 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-white/95"
                    style={{ 
                      borderLeftColor: node.accent,
                      borderRightColor: node.accent,
                      boxShadow: `0 12px 32px ${node.accent}30`
                    }}
                  >
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto border-2"
                      style={{ 
                        backgroundColor: `${node.accent}15`, 
                        borderColor: node.accent 
                      }}
                    >
                      <IconComponent size={20} style={{ color: node.accent }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-900 mb-2 text-center leading-tight">
                      {node.title}
                    </h3>

                    {/* Bullets */}
                    <ul className="space-y-1 text-xs">
                      {node.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-gray-700">
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0"
                            style={{ backgroundColor: node.accent }}
                          ></div>
                          <span className="leading-tight">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Click indicator */}
                    <div className="mt-2 text-center">
                      <span 
                        className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: node.accent }}
                      >
                        Chi tiết
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cards grid for tablets and mobile */}
        <div className="block xl:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {NODES_DATA.map((node) => {
              const IconComponent = node.icon;
              
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className="bg-white rounded-2xl p-6 shadow-lg border-t-4 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{ 
                    borderTopColor: node.accent,
                    boxShadow: `0 8px 24px ${node.accent}20`
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${node.accent}20` }}
                  >
                    <IconComponent size={24} style={{ color: node.accent }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {node.title}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-2 text-sm">
                    {node.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start text-gray-700">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0"
                          style={{ backgroundColor: node.accent }}
                        ></div>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-lg md:text-xl italic text-gray-700 leading-relaxed border-l-4 border-red-500 pl-6 bg-gray-50 py-6 rounded-r-lg">
            "Sáu đặc trưng hợp thành bản chất CNXH: cơ sở vật chất hiện đại, công hữu TLSX chủ yếu, lao động – kỷ luật mới, phân phối theo lao động, nhà nước XHCN của dân – do dân – vì dân, và giải phóng – phát triển toàn diện con người."
          </blockquote>
        </div>
      </div>

      {/* Modal for Node Details */}
      {selectedNode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Modal Header */}
            <div 
              className="p-6 border-b-4"
              style={{ borderBottomColor: selectedNode.accent }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${selectedNode.accent}20` }}
                  >
                    <selectedNode.icon size={24} style={{ color: selectedNode.accent }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedNode.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
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
                  style={{ color: selectedNode.accent }}
                >
                  Lý thuyết:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedNode.modal.theory}
                </p>
              </div>

              {/* Vietnam Examples Section */}
              <div>
                <h4 
                  className="text-lg font-bold mb-3"
                  style={{ color: selectedNode.accent }}
                >
                  Ví dụ Việt Nam:
                </h4>
                <ul className="space-y-2">
                  {selectedNode.modal.examplesVN.map((example, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: selectedNode.accent }}
                      ></div>
                      <span className="leading-relaxed">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Characteristics Review */}
              <div>
                <h4 
                  className="text-lg font-bold mb-3"
                  style={{ color: selectedNode.accent }}
                >
                  Đặc điểm chính:
                </h4>
                <ul className="space-y-2">
                  {selectedNode.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: selectedNode.accent }}
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
                onClick={() => setSelectedNode(null)}
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

export default SocialismCharacteristicsSection;