import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Factory, Users, Star, Brain, FileText } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: Home },
    { path: '/about', label: 'Giới thiệu', icon: BookOpen },
    { path: '/early-stage', label: 'Giai đoạn đầu', icon: Factory },
    { path: '/conditions', label: 'Điều kiện ra đời', icon: Users },
    { path: '/characteristics', label: 'Đặc trưng bản chất', icon: Star },
    { path: '/quiz', label: 'Quiz', icon: Brain },
    { path: '/sources', label: 'Nguồn & AI', icon: FileText }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-lg border-b-4 border-[#C8102E] sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#C8102E] to-[#B8001E] rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-[#FFD700]" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-gray-800 font-['Montserrat']">
                  CHỦ NGHĨA XÃ HỘI
                </h1>
                <p className="text-sm text-gray-600">Khoa học Mác - Lê nin</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-[#C8102E] text-white'
                        : 'text-gray-600 hover:text-[#C8102E] hover:bg-red-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-[#C8102E]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-[#C8102E] text-white'
                        : 'text-gray-600 hover:text-[#C8102E] hover:bg-red-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFD700]">Về dự án</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Dự án học tập tương tác về Chủ nghĩa Xã hội Khoa học, 
                được phát triển bởi sinh viên với sự hỗ trợ của AI.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFD700]">Liên kết nhanh</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Giới thiệu</Link></li>
                <li><Link to="/early-stage" className="text-gray-300 hover:text-white transition-colors">Giai đoạn đầu CNXH</Link></li>
                <li><Link to="/conditions" className="text-gray-300 hover:text-white transition-colors">Điều kiện ra đời</Link></li>
                <li><Link to="/characteristics" className="text-gray-300 hover:text-white transition-colors">Đặc trưng bản chất</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#FFD700]">Thông tin</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p>📚 Học phần: Lý luận Chính trị</p>
                <p>🏫 Trường: [Tên trường của bạn]</p>
                <p>📅 Năm học: 2024-2025</p>
                <p>👨‍🎓 Nhóm: [Tên nhóm của bạn]</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Interactive Socialist Learning. Được tạo cho mục đích học tập.</p>
            <p className="mt-2">
              Phát triển với ❤️ bởi sinh viên • Hỗ trợ bởi AI • Nội dung được kiểm duyệt
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
