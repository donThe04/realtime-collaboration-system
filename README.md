Collab Workspace
Hệ thống cộng tác làm việc theo thời gian thực, cho phép nhiều người cùng làm việc trên một tài liệu, theo dõi thay đổi của nhau và trao đổi ngay trong không gian làm việc chung.
Trạng thái: Đang phát triển. Các tính năng bên dưới là mục tiêu của dự án; không phải tất cả đã được triển khai.

Mục tiêu dự án
Xây dựng một ứng dụng cộng tác trực tuyến có thể:
- Cho nhiều người cùng chỉnh sửa tài liệu và đồng bộ thay đổi gần như tức thời.
- Hiển thị người đang online và con trỏ của những người cộng tác.
- Quản lý tài liệu và bảng công việc Kanban.
- Hỗ trợ chat, bình luận và lịch sử phiên bản.
- Có xác thực người dùng và phân quyền truy cập.
Tính năng dự kiến
- Tài khoản: đăng ký, đăng nhập và đăng xuất.
- Tài liệu: tạo, xem, đổi tên và xóa tài liệu.
- Rich-text editor: chỉnh sửa văn bản với nhiều người cùng lúc.
- Realtime collaboration: đồng bộ nội dung và hiển thị trạng thái người dùng.
- Kanban: tạo bảng công việc và kéo thả thẻ giữa các cột.
- Chat và bình luận: trao đổi trong tài liệu.
- Lịch sử phiên bản: tạo snapshot và khôi phục nội dung.
- Phân quyền: OWNER, EDITOR, COMMENTER, VIEWER.
Công nghệ dự kiến
Thành phần	Công nghệ	Vai trò
Frontend	React, TypeScript, Vite, Tailwind CSS	Giao diện người dùng
Trình soạn thảo	TipTap, ProseMirror	Chỉnh sửa rich-text
Bảng Kanban	dnd-kit	Kéo thả thẻ công việc
Đồng bộ dữ liệu	Yjs (CRDT)	Hợp nhất thay đổi đồng thời
Collaboration server	Hocuspocus	Kết nối và đồng bộ Yjs
Backend API	Node.js, Express, TypeScript	API, nghiệp vụ và xác thực
Realtime chat	WebSocket (ws)	Tin nhắn và trạng thái chat
Database	PostgreSQL, Prisma	Lưu dữ liệu có cấu trúc
Cache và mở rộng	Redis	Hỗ trợ giao tiếp giữa các service
Kiểm thử	Vitest, Playwright, k6	Unit test, E2E và kiểm thử tải
Triển khai	Docker, Docker Compose, Nginx	Đóng gói và triển khai ứng dụng

Khi triển khai đầy đủ, dự án dự kiến sử dụng:
- Node.js 20 trở lên
- pnpm 9 trở lên
- Git
- Docker và Docker Compose để chạy các dịch vụ phụ trợ

Đóng góp và phát triển
Trong quá trình phát triển, nên tạo nhánh riêng cho từng tính năng và sử dụng commit message rõ ràng, ví dụ:
feat: add document creation
fix: handle login error
docs: update README