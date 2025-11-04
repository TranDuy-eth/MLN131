# Hướng dẫn Deploy lên Vercel

## Các bước deploy:

### 1. Push code lên GitHub
```bash
git add .
git commit -m "Add chatbot with Gemini AI"
git push origin main
```

### 2. Deploy lên Vercel

1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub account
3. Click "Add New Project"
4. Chọn repository `interactive-socialist`
5. Click "Import"

### 3. Cấu hình Environment Variables (QUAN TRỌNG!)

Trong phần **Environment Variables**, thêm:
- **Key**: `VITE_GEMINI_API_KEY`
- **Value**: `AIzaSyBJL_pX-cFvUohEMs4cFoHvCknjf-7VqU0`
- Chọn: Production, Preview, Development (tất cả)

### 4. Deploy

Click "Deploy" và đợi khoảng 2-3 phút.

## Lưu ý:

- File `.env` đã được gitignore nên không push lên GitHub (bảo mật)
- API key được lưu trên Vercel Environment Variables
- Mỗi lần update code, chỉ cần `git push` là Vercel tự động deploy lại
- Domain sẽ có dạng: `https://your-project.vercel.app`

## Kiểm tra chatbot:

Sau khi deploy xong:
1. Mở website
2. Click vào nút chatbot ở góc dưới bên phải
3. Thử hỏi câu hỏi về dân tộc thiểu số
4. Chatbot sẽ trả lời dựa trên nội dung website

## Troubleshooting:

Nếu chatbot không hoạt động:
1. Kiểm tra Console trong DevTools (F12)
2. Đảm bảo Environment Variable đã được set đúng trên Vercel
3. Rebuild lại project: Settings → General → Redeploy
