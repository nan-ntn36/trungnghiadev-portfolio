# Nguyễn Trung Nghĩa · Full-Stack Developer

Portfolio cá nhân giới thiệu kinh nghiệm phát triển phần mềm, chuyên môn và các dự án doanh nghiệp đã tham gia. Website được xây dựng bằng **Next.js, React và TypeScript**, hỗ trợ **tiếng Việt / tiếng Anh**, kết hợp hiệu ứng chuyển động với GSAP.

[GitHub](https://github.com/nan-ntn36) · [Email](mailto:ntrungnghia102@gmail.com)

## Giới thiệu

Mình là Nguyễn Trung Nghĩa, lập trình viên Full-Stack với kinh nghiệm xây dựng ứng dụng doanh nghiệp bằng React, Next.js, C# và ASP.NET Core. Portfolio tập trung trình bày vai trò, công nghệ và đóng góp thực tế trong từng dự án, cùng quá trình làm việc, học vấn và thông tin liên hệ.

Các hệ thống doanh nghiệp được giới thiệu là những dự án mình từng tham gia phát triển; mã nguồn trong repository này là website portfolio. Hình minh họa dự án trên website là minh họa khái niệm, không phải ảnh chụp sản phẩm.

## Tính năng

- **Nội dung song ngữ:** chuyển đổi VI/EN và ghi nhớ lựa chọn trên trình duyệt.
- **Giao diện responsive:** bố cục phù hợp với máy tính và thiết bị di động.
- **Hồ sơ chuyên môn:** giới thiệu kỹ năng, dự án, đóng góp, kinh nghiệm và học vấn.
- **Chuyển động tương tác:** hiệu ứng cuộn, chiều sâu và hover bằng GSAP / ScrollTrigger; hỗ trợ tùy chọn giảm chuyển động của hệ điều hành.
- **Liên hệ trực tiếp:** email, điện thoại và GitHub.
- **Metadata chia sẻ:** tiêu đề, mô tả và Open Graph được khai báo trong ứng dụng.

## Công nghệ

| Thành phần | Công nghệ |
| --- | --- |
| Framework | Next.js 16 · App Router |
| Giao diện | React 19 · TypeScript |
| Styling | Tailwind CSS 4 · CSS transforms |
| Animation | GSAP 3 · ScrollTrigger |
| Hình ảnh và font | next/image · next/font |
| Kiểm tra mã nguồn | ESLint · TypeScript |

Phiên bản dependency cụ thể được quản lý trong `package.json` và `package-lock.json`.

## Chạy trên máy cá nhân

**Yêu cầu:** Node.js từ **20.9** trở lên theo tài liệu của phiên bản Next.js đang cài, cùng npm. Dùng một phiên bản Node.js LTS còn được hỗ trợ và thống nhất phiên bản giữa máy phát triển với môi trường deploy.

Tại thư mục gốc dự án:

```sh
npm ci
npm run dev
```

Mở [localhost:3000](http://localhost:3000). Nếu cổng đã được sử dụng, truy cập địa chỉ được hiển thị trong terminal.

Ứng dụng hiện dùng dữ liệu tĩnh và không yêu cầu cơ sở dữ liệu, API key hay file `.env` để chạy. Quá trình build cần kết nối mạng để tải font từ Google nếu chưa có cache.

### Các lệnh thường dùng

| Lệnh | Chức năng |
| --- | --- |
| `npm run dev` | Chạy môi trường phát triển |
| `npm run lint` | Kiểm tra mã nguồn bằng ESLint |
| `npx tsc --noEmit --incremental false` | Kiểm tra kiểu TypeScript |
| `npm run build` | Tạo bản production |
| `npm start` | Chạy bản production sau khi build thành công |

## Cấu trúc dự án

```text
app/
  layout.tsx          Layout gốc, font và metadata
  page.tsx            Trang portfolio
  globals.css         Style và responsive
components/           Các phần giao diện, ngôn ngữ và animation
data/
  portfolio.ts        Hồ sơ, dự án, kinh nghiệm và nội dung VI/EN
public/
  images/portrait.jpg Ảnh chân dung
next.config.ts        Cấu hình Next.js và Turbopack
```

### Cập nhật nội dung

- Chỉnh thông tin cá nhân, kỹ năng, dự án, kinh nghiệm và bản dịch tại `data/portfolio.ts`.
- Thay ảnh chân dung tại `public/images/portrait.jpg`, hoặc cập nhật đường dẫn `portrait` trong dữ liệu.
- Chỉnh metadata mặc định tại `app/layout.tsx`; phần cập nhật metadata khi đổi ngôn ngữ nằm trong `components/LanguageProvider.tsx`.
- Chỉnh bố cục và màu sắc tại `app/globals.css`; logic chuyển động nằm trong `components/Motion.tsx`.

## Deploy

Trước khi đưa website lên môi trường production, chạy:

```sh
npm ci
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm start
```

Kiểm tra bản production tại [localhost:3000](http://localhost:3000), đặc biệt là menu trên di động, chuyển ngôn ngữ, nội dung dự án và các liên kết liên hệ.

### Vercel

1. Đưa mã nguồn lên repository GitHub của bạn và import repository vào Vercel.
2. Chọn framework **Next.js**, đặt Root Directory là thư mục chứa `package.json`.
3. Dùng Install Command `npm ci` và Build Command `npm run build`; giữ Output Directory mặc định của framework.
4. Chọn phiên bản Node.js được nền tảng hỗ trợ, đáp ứng yêu cầu của Next.js và khớp với môi trường đã kiểm tra.
5. Deploy, sau đó kiểm tra website bằng URL được cấp. Có thể gắn tên miền riêng trong cấu hình dự án.

Cấu hình hiện tại không yêu cầu biến môi trường. Sau khi có URL chính thức, thêm liên kết website vào đầu README, hồ sơ GitHub và CV để nhà tuyển dụng truy cập nhanh.

### Máy chủ Node.js

Trên môi trường hỗ trợ Node.js, cài dependency, build và chạy ứng dụng:

```sh
npm ci
npm run build
npm start
```

Nếu cần đổi cổng:

```sh
npm start -- --port 3005
```

Với máy chủ tự quản lý, cấu hình tiến trình chạy liên tục và reverse proxy có HTTPS. Cấu hình dự án hiện tại dùng bản build Next.js; chưa cấu hình static export để đưa trực tiếp lên GitHub Pages.

## Liên hệ

**Nguyễn Trung Nghĩa · Full-Stack Developer**

- Email: [ntrungnghia102@gmail.com](mailto:ntrungnghia102@gmail.com)
- GitHub: [nan-ntn36](https://github.com/nan-ntn36)
