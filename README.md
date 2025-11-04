# Vai Trò Của Dân Tộc Thiểu Số Trong Xây Dựng Chủ Nghĩa Xã Hội

Website tương tác giới thiệu về vai trò của các dân tộc thiểu số trong việc xây dựng chủ nghĩa xã hội tại Việt Nam.

## 🌟 Tính năng

### 📱 Giao diện tương tác
- **Responsive Design**: Hoạt động mượt mà trên mọi thiết bị (desktop, tablet, mobile)
- **Smooth Scrolling**: Trải nghiệm cuộn trang mượt mà, tự nhiên
- **Framer Motion Animations**: Hiệu ứng chuyển động đẹp mắt

### 🎵 Âm thanh tương tác
- **Dàn nhạc giao hưởng dân tộc**: Trải nghiệm âm thanh các nhạc cụ truyền thống
  - Đàn Tính (Tây Nguyên)
  - Đàn Bầu (Kinh)
  - Sáo Trúc
  - Chiêng (Tây Nguyên)
- Phát từng nhạc cụ riêng lẻ hoặc phát toàn bộ dàn nhạc

### 🤖 Chatbot AI
- Tích hợp **Gemini 2.0 Flash** AI
- Trả lời câu hỏi về nội dung website
- Giao diện chat hiện đại, thân thiện
- Hiểu và trả lời bằng tiếng Việt

### 📚 Nội dung chi tiết

#### 1. Vai trò Kinh tế - Xã hội
- Phát triển vùng chiến lược (3/4 lãnh thổ)
- Tạo sức mạnh nội lực
- Khối đại đoàn kết dân tộc

#### 2. Vai trò Văn hóa
- Làm phong phú văn hóa quốc gia (100+ ngôn ngữ, 7000+ lễ hội)
- Giữ gìn và phát huy truyền thống

#### 3. Vai trò An ninh - Chính trị
- Bảo vệ chủ quyền quốc gia (382 xã biên giới)
- Củng cố nền tảng chính trị

#### 4. Ẩn dụ Dàn nhạc giao hưởng
- Mỗi dân tộc như một nhạc cụ độc đáo
- Cùng tạo nên bản giao hưởng vĩ đại

### 🎯 Quiz tương tác
- 100 câu hỏi trắc nghiệm về dân tộc thiểu số
- Hệ thống chấm điểm tự động
- Hiển thị kết quả và giải thích

## 🛠 Công nghệ sử dụng

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM v7** - Navigation
- **Google Generative AI** - Gemini chatbot
- **Lucide React** - Icons

## 📦 Cài đặt

```bash
# Clone repository
git clone https://github.com/TranDuy-eth/MLN131.git
cd MLN131

# Install dependencies
npm install

# Tạo file .env và thêm API key
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env

# Run development server
npm run dev
```

## 🚀 Deploy lên Vercel

### Bước 1: Push code lên GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Bước 2: Import vào Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub
3. Click "Add New Project"
4. Chọn repository `MLN131`
5. Click "Import"

### Bước 3: Cấu hình Environment Variables
⚠️ **QUAN TRỌNG**: Thêm biến môi trường:
- **Key**: `VITE_GEMINI_API_KEY`
- **Value**: Your Gemini API key
- Environment: Production, Preview, Development

### Bước 4: Deploy
Click "Deploy" và đợi 2-3 phút.

## 📝 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## 🗂 Cấu trúc thư mục

```
src/
├── components/
│   └── ChatBot.tsx          # AI Chatbot component
├── sections/
│   ├── HeroSection.tsx      # Hero section
│   ├── EconomicRoleSection.tsx
│   ├── CulturalRoleSection.tsx
│   ├── SecurityRoleSection.tsx
│   └── MetaphorSection.tsx  # Interactive orchestra
├── pages/
│   ├── SinglePage.tsx       # Main landing page
│   └── QuizPage.tsx         # Quiz page
├── data/
│   └── questions.json       # 100 quiz questions
└── App.tsx                  # Main app component
```

## 🎨 Features Overview

### Chatbot AI
- Floating button ở góc dưới bên phải
- Click để mở chat window
- Hỏi đáp về nội dung dân tộc thiểu số
- Powered by Gemini 2.0 Flash

### Interactive Audio
- 4 nhạc cụ truyền thống Việt Nam
- Play/Pause cho từng nhạc cụ
- "Play All" để phát dàn nhạc giao hưởng
- Visual indicators (pulse, visualizer bars)
- Audio từ Archive.org (free, legal)

### Quiz System
- 100 câu hỏi đa dạng
- 4 đáp án cho mỗi câu
- Chấm điểm tự động
- Hiển thị đáp án đúng/sai

## 🔐 Environment Variables

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

**Lưu ý**: File `.env` đã được thêm vào `.gitignore` để bảo mật API key.

## 📊 Thông tin dự án

- **Chủ đề**: Vai trò của dân tộc thiểu số trong xây dựng XHCN
- **Mục đích**: Giáo dục, tuyên truyền
- **Đối tượng**: Sinh viên, người quan tâm đến vấn đề dân tộc

## 🤝 Đóng góp

Mọi đóng góp đều được hoan nghênh! Vui lòng:
1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👨‍💻 Tác giả

**TranDuy-eth**
- GitHub: [@TranDuy-eth](https://github.com/TranDuy-eth)

## 🙏 Acknowledgments

- Archive.org - Vietnamese traditional music audio
- Unsplash - High quality images
- Vietnam government tourism sites - Cultural images
- Google Generative AI - Gemini API

---

⭐ Nếu project này hữu ích, hãy cho một star nhé!
