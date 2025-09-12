import React, { useState, useEffect } from 'react';
import { Users, Factory, Globe, BookOpen, Heart, Zap } from 'lucide-react';

interface CharacteristicNode {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position: { x: number; y: number };
  connections: string[];
}

const Infographic: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [animatedNodes, setAnimatedNodes] = useState<Set<string>>(new Set());

  const characteristics: CharacteristicNode[] = [
    {
      id: 'ownership',
      title: 'Sở hữu xã hội chủ nghĩa',
      description: 'Về tư liệu sản xuất',
      details: [
        'Loại bỏ sở hữu tư nhân về tư liệu sản xuất chủ yếu',
        'Thiết lập sở hữu công về tư liệu sản xuất',
        'Tạo điều kiện để mọi người được tham gia lao động',
        'Phục vụ lợi ích chung của toàn xã hội'
      ],
      icon: Factory,
      color: 'bg-red-600',
      position: { x: 50, y: 20 },
      connections: ['distribution', 'politics']
    },
    {
      id: 'distribution',
      title: 'Phân phối theo lao động',
      description: 'Nguyên tắc "Ai làm nhiều hưởng nhiều"',
      details: [
        'Phân phối dựa trên số lượng và chất lượng lao động',
        'Bảo đảm công bằng trong phân phối',
        'Khuyến khích tích cực lao động sản xuất',
        'Từng bước xóa bỏ chế độ bóc lột'
      ],
      icon: Users,
      color: 'bg-blue-600',
      position: { x: 20, y: 60 },
      connections: ['ownership', 'society']
    },
    {
      id: 'politics',
      title: 'Chuyên chính vô sản',
      description: 'Quyền lực chính trị của giai cấp công nhân',
      details: [
        'Giai cấp công nhân nắm giữ quyền lực nhà nước',
        'Đảng Cộng sản đóng vai trò lãnh đạo',
        'Dân chủ xã hội chủ nghĩa cho nhân dân lao động',
        'Trấn áp các thế lực thù địch với chế độ mới'
      ],
      icon: Globe,
      color: 'bg-emerald-600',
      position: { x: 80, y: 60 },
      connections: ['ownership', 'culture']
    },
    {
      id: 'culture',
      title: 'Văn hóa xã hội chủ nghĩa',
      description: 'Dân tộc, khoa học, đại ch중',
      details: [
        'Kế thừa và phát triển tinh hoa văn hóa dân tộc',
        'Ứng dụng thành tựu khoa học vào thực tiễn',
        'Phục vụ quần chúng nhân dân rộng rãi',
        'Đấu tranh chống văn hóa phẩm đồi trụy'
      ],
      icon: BookOpen,
      color: 'bg-purple-600',
      position: { x: 70, y: 90 },
      connections: ['politics', 'society']
    },
    {
      id: 'society',
      title: 'Xã hội không giai cấp đối kháng',
      description: 'Hòa hợp và đoàn kết xã hội',
      details: [
        'Xóa bỏ giai cấp bóc lột và bị bóc lột',
        'Liên minh công nhân - nông dân - trí thức',
        'Phát triển quan hệ hợp tác, tương trợ',
        'Từng bước xây dựng con người mới'
      ],
      icon: Heart,
      color: 'bg-pink-600',
      position: { x: 30, y: 90 },
      connections: ['distribution', 'culture']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const randomNode = characteristics[Math.floor(Math.random() * characteristics.length)];
      setAnimatedNodes(prev => new Set(prev).add(randomNode.id));
      
      setTimeout(() => {
        setAnimatedNodes(prev => {
          const newSet = new Set(prev);
          newSet.delete(randomNode.id);
          return newSet;
        });
      }, 2000);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getConnectionPath = (from: CharacteristicNode, to: CharacteristicNode) => {
    const fromX = from.position.x;
    const fromY = from.position.y;
    const toX = to.position.x;
    const toY = to.position.y;
    
    return `M ${fromX} ${fromY} Q ${(fromX + toX) / 2} ${(fromY + toY) / 2 - 10} ${toX} ${toY}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Sơ Đồ Tư Duy Động
          </h2>
          <p className="text-slate-600 text-lg">
            Đặc trưng bản chất của Chủ nghĩa Xã hội
          </p>
        </div>

        <div className="relative">
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-96 pointer-events-none" style={{ zIndex: 1 }}>
            {characteristics.map((node) => 
              node.connections.map((connectionId) => {
                const connectedNode = characteristics.find(n => n.id === connectionId);
                if (!connectedNode) return null;
                
                return (
                  <path
                    key={`${node.id}-${connectionId}`}
                    d={getConnectionPath(node, connectedNode)}
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    fill="none"
                    className="opacity-60"
                  />
                );
              })
            )}
          </svg>

          {/* Interactive nodes */}
          <div className="relative h-96" style={{ zIndex: 2 }}>
            {characteristics.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;
              const isAnimated = animatedNodes.has(node.id);
              
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(isSelected ? null : node.id)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isSelected 
                      ? 'scale-125 z-10' 
                      : isAnimated 
                      ? 'scale-110 animate-pulse' 
                      : 'scale-100 hover:scale-105'
                  }`}
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`
                  }}
                >
                  <div className={`w-20 h-20 rounded-full ${node.color} flex items-center justify-center shadow-lg ${
                    isAnimated ? 'animate-bounce' : ''
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mt-2 text-center max-w-24">
                    <h4 className="text-xs font-semibold text-slate-800">
                      {node.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central connecting element */}
        <div className="flex justify-center mt-8 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Detail panel */}
        {selectedNode && (
          <div className="mt-8 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 transform transition-all duration-500 translate-y-0 opacity-100">
            {characteristics.filter(node => node.id === selectedNode).map((node) => {
              const Icon = node.icon;
              return (
                <div key={node.id} className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full ${node.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {node.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-4">
                      {node.description}
                    </p>
                    
                    <div className="space-y-2">
                      {node.details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full ${node.color} mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-slate-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!selectedNode && (
          <div className="text-center text-slate-500 py-8">
            <p className="text-lg">Click vào các nút để khám phá chi tiết</p>
            <p className="text-sm mt-2">Các nút sẽ tự động nhấp nháy để thu hút sự chú ý</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-8 bg-slate-100 rounded-lg p-6">
        <h4 className="font-semibold text-slate-800 mb-4">Chú thích:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-600 text-sm mb-2">
              • Các đường nối thể hiện mối quan hệ tương tác giữa các đặc trưng
            </p>
            <p className="text-slate-600 text-sm">
              • Click vào từng nút để xem thông tin chi tiết
            </p>
          </div>
          <div>
            <h5 className="font-medium text-slate-800 mb-2">Nguồn tham khảo:</h5>
            <p className="text-slate-600 text-sm">
              Chủ nghĩa Xã hội Khoa học Mác - Lê nin, Phần I: Chủ nghĩa xã hội
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;