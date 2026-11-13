// Verified against Fullstack-NguyenTrungNghia.pdf. All editable portfolio content lives here.
export type Language = "vi" | "en";
export type Localized = Record<Language, string>;
export const name = "Nguyễn Trung Nghĩa";
export const jobTitle = "Full-Stack Developer";
export const copyrightYear = 2026;
export const email = "ntrungnghia102@gmail.com";
export const githubUrl = "https://github.com/nan-ntn36";
export const linkedinUrl = "";
export const twitterUrl = "";
export const phone = "0385637299";
export const portrait = "/images/portrait.jpg";
export const heroIntro = "Lập trình viên Full-Stack với kinh nghiệm xây dựng ứng dụng doanh nghiệp bằng React, Next.js, C# và ASP.NET Core.";
export const profile = {
  frontend: ["React.js", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "AG Grid"],
  backend: ["C#", "ASP.NET Core", ".NET Framework", "Node.js", "Express.js"],
  database: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "Postman", "Figma", "Vercel", "Backlog"],
  ai: ["Claude Code", "OpenAI Codex", "Google Antigravity"],
};
export const navItems = ["trang-chu", "chuyen-mon", "du-an", "kinh-nghiem", "lien-he"] as const;
export const translations = {
  vi: {
    nav: ["trang chủ", "chuyên môn", "dự án", "kinh nghiệm", "liên hệ"],
    navLabel: "Điều hướng chính", openMenu: "Mở điều hướng", closeMenu: "Đóng điều hướng", skip: "Chuyển đến nội dung", language: "Chọn ngôn ngữ",
    greeting: "Xin chào, mình là", role: "Lập trình viên Full-Stack", scroll: "Cuộn để khám phá", editorLabel: "Hồ sơ lập trình viên bằng TypeScript", codeComment: "Từ giao diện đến hệ thống doanh nghiệp", avatarAlt: "Ảnh chân dung Nguyễn Trung Nghĩa", intro: heroIntro,
    expertise: "Chuyên môn.", expertiseSub: "THIẾT KẾ TRẢI NGHIỆM. XÂY DỰNG HỆ THỐNG.",
    work: "Dự án.", workIntro: "Những hệ thống doanh nghiệp mình đã tham gia phát triển — từ quản lý nghiệp vụ, vận hành nội bộ đến bản vẽ kỹ thuật.", featured: "DỰ ÁN TIÊU BIỂU", illustration: "Minh họa khái niệm · Không phải ảnh sản phẩm", responsibilities: "Đóng góp chính", projectRole: "Lập trình viên Full-Stack", details: "Xem đóng góp", closeDetails: "Thu gọn",
    experience: "Kinh nghiệm\nchuyên môn.", journey: "HÀNH TRÌNH PHÁT TRIỂN", education: "Học vấn & ghi nhận", educationField: "Công nghệ thông tin", university: "Đại học Công nghệ TP. Hồ Chí Minh (HUTECH)", gpa: "Điểm trung bình", awards: "Giải thưởng", languages: "Ngoại ngữ", languageDetail: "Tiếng Anh: đọc hiểu tài liệu. Tiếng Nhật: năng lực tương đương N3.",
    contact: "Một ý tưởng hay\nbắt đầu từ lời chào.", contactSub: "Bạn có một bài toán thú vị hoặc một cơ hội hợp tác? Hãy cùng trao đổi về sản phẩm tiếp theo.", contactCta: "Cùng trò chuyện", contactLabel: "KẾT NỐI", phoneLabel: "Điện thoại", footer: "Được tạo nên bằng sự tỉ mỉ.", backTop: "Về đầu trang", codeOpen: "<ý_tưởng>", codeClose: "</sản_phẩm>",
  },
  en: {
    nav: ["home", "expertise", "projects", "experience", "contact"],
    navLabel: "Main navigation", openMenu: "Open navigation", closeMenu: "Close navigation", skip: "Skip to content", language: "Select language",
    greeting: "Hello, I am", role: "Full-Stack Developer", scroll: "Scroll to explore", editorLabel: "Developer profile in TypeScript", codeComment: "From interfaces to enterprise systems", avatarAlt: "Portrait of Nguyen Trung Nghia", intro: "Full-Stack Developer experienced in building enterprise applications with React, Next.js, C# and ASP.NET Core.",
    expertise: "My Expertise.", expertiseSub: "DESIGN EXPERIENCES. BUILD SYSTEMS.",
    work: "My Work.", workIntro: "Enterprise systems I have contributed to — from business operations and internal management to technical drawings.", featured: "SELECTED PROJECT", illustration: "Concept illustration · Not a product screenshot", responsibilities: "Key contributions", projectRole: "Full-Stack Developer", details: "View contributions", closeDetails: "Show less",
    experience: "Professional\nexperience.", journey: "THE JOURNEY SO FAR", education: "Education & recognition", educationField: "Information Technology", university: "Ho Chi Minh City University of Technology (HUTECH)", gpa: "GPA", awards: "Awards", languages: "Languages", languageDetail: "English: reading comprehension. Japanese: N3-equivalent proficiency.",
    contact: "Great ideas\nstart with hello.", contactSub: "Have an interesting challenge or an opportunity to collaborate? Let’s talk about what comes next.", contactCta: "Let’s talk", contactLabel: "GET IN TOUCH", phoneLabel: "Phone", footer: "Built with care and attention.", backTop: "Back to top", codeOpen: "<idea>", codeClose: "</product>",
  },
} satisfies Record<Language, Record<string, string | string[]>>;
export const expertiseList = [
  {id:"frontend", title:{vi:"Kỹ thuật giao diện",en:"Frontend Engineering"}, description:{vi:"Xây dựng giao diện responsive bằng React, Next.js và TypeScript. Chuyển thiết kế Figma thành giao diện nhất quán; phát triển bảng dữ liệu, biểu mẫu và tích hợp RESTful API.",en:"Building responsive interfaces with React, Next.js and TypeScript. Translating Figma designs into consistent UIs, developing data grids and forms, and integrating RESTful APIs."}, tools:profile.frontend},
  {id:"backend", title:{vi:"Kỹ thuật máy chủ",en:"Backend Engineering"}, description:{vi:"Phát triển RESTful API bằng C# và ASP.NET Core. Xử lý logic nghiệp vụ, xác thực, quy trình phê duyệt và tích hợp giữa ứng dụng web, di động và dịch vụ nền.",en:"Developing RESTful APIs with C# and ASP.NET Core. Implementing business logic, authentication, approval workflows and integrations across web, mobile and backend services."}, tools:profile.backend},
  {id:"database", title:{vi:"Dữ liệu & hệ thống doanh nghiệp",en:"Database & Enterprise Systems"}, description:{vi:"Làm việc với SQL Server và PostgreSQL, tối ưu truy vấn và stored procedure. Duy trì tính nhất quán dữ liệu trong các quy trình quản lý và hệ thống doanh nghiệp hiện hữu.",en:"Working with SQL Server and PostgreSQL, optimizing queries and stored procedures. Maintaining data consistency across business workflows and existing enterprise systems."}, tools:profile.database},
];
export const projects = [
  {id:"es-core", name:"ES Core", subtitle:{vi:"Hệ thống quản lý khí gas",en:"Gas Management System"}, period:"01/2025 — 05/2026", technologies:["JavaScript","AG Grid",".NET Framework","SQL Server"], description:{vi:"Phát triển và bảo trì giao diện nghiệp vụ phức tạp, chuyển đổi tính năng bảng tính từ SpreadJS sang AG Grid trong hệ thống hiện hữu.",en:"Developed and maintained complex enterprise interfaces, migrating spreadsheet functionality from SpreadJS to AG Grid within an existing system."}, responsibilities:{vi:["Xây dựng Cell Renderer, Cell Editor, bộ lọc và lựa chọn nhiều hàng, nhiều ô theo vùng.","Xử lý sự kiện lưới, kiểm tra dữ liệu và logic giao diện tái sử dụng.","Điều chỉnh truy vấn SQL Server, stored procedure; kiểm thử và tài liệu kỹ thuật bằng tiếng Nhật."],en:["Built custom Cell Renderers, Cell Editors, filters and Excel-like multi-row and range selection.","Handled complex grid events, validation and reusable UI logic.","Updated SQL Server queries and stored procedures; contributed to testing and Japanese technical documentation."]}, accent:"#55c6d6"},
  {id:"kvn", name:"KVN Management", subtitle:{vi:"Hệ thống quản lý nội bộ",en:"Internal Management System"}, period:"10/2024 — 05/2026", technologies:["C#","ASP.NET Core","Next.js","React Native","PostgreSQL"], description:{vi:"Ứng dụng web và di động hỗ trợ quản lý công việc, nhân sự, chấm công và tài sản, kết nối qua hệ thống API và cơ sở dữ liệu dùng chung.",en:"Web and mobile applications for task management, human resources, attendance and assets, connected through backend APIs and a shared database."}, responsibilities:{vi:["Phát triển component, biểu mẫu, bảng dữ liệu và tính năng di động với React Native.","Xây dựng API phân công, theo dõi tiến độ, phê duyệt và tổng hợp báo cáo.","Xử lý logic nghiệp vụ, tối ưu truy vấn PostgreSQL và hỗ trợ triển khai, bảo trì."],en:["Developed reusable components, forms, data tables and React Native mobile features.","Built APIs for task assignment, progress tracking, approvals and reporting.","Implemented business logic, optimized PostgreSQL queries and supported deployment and maintenance."]}, accent:"#b36cff"},
  {id:"tdms", name:"TDMS", subtitle:{vi:"Hệ thống quản lý bản vẽ kỹ thuật",en:"Technical Drawing Management System"}, period:"10/2024 — 05/2026", technologies:["Next.js","React.js","TypeScript","Flutter","C#","ASP.NET Core","PostgreSQL"], description:{vi:"Quản lý, tìm kiếm và theo dõi bản vẽ kỹ thuật, hỗ trợ xem trước tài liệu, lịch sử phiên bản và quy trình check-in/check-out.",en:"Technical drawing management, search and tracking, supporting document previews, version history and check-in/check-out workflows."}, responsibilities:{vi:["Phát triển tải lên, tải xuống, truy xuất và xem trước PDF, DWG, hình ảnh.","Xây dựng lịch sử chỉnh sửa và phân quyền theo người dùng, dự án.","Phát triển API, xử lý PostgreSQL và tích hợp ứng dụng di động Flutter."],en:["Developed upload, download, retrieval and previews for PDF, DWG and image files.","Implemented revision history and user/project-based permissions.","Developed APIs, managed PostgreSQL data and integrated a Flutter mobile app."]}, accent:"#ff916b"},
];
export const experiences = [
  {id:"katsura", company:"Katsura Viet Nam JSC", period:"10/2024 — 05/2026", role:{vi:"Lập trình viên Full-Stack",en:"Full-Stack Developer"}, responsibilities:{vi:["Phát triển và bảo trì ứng dụng doanh nghiệp với Next.js, React.js, C# và ASP.NET Core.","Tham gia ES Core và các hệ thống quản lý nội bộ, phân tích nghiệp vụ, kiểm thử và bảo trì.","Phối hợp BrSE và khách hàng Nhật Bản để làm rõ yêu cầu và chuẩn bị tài liệu kỹ thuật."],en:["Developed and maintained enterprise applications with Next.js, React.js, C# and ASP.NET Core.","Contributed to ES Core and internal management systems, analysis, testing and maintenance.","Collaborated with BrSEs and Japanese clients to clarify requirements and prepare technical documentation."]}, technologies:["Next.js","C#","ASP.NET Core","SQL Server","PostgreSQL"]},
  {id:"onetech", company:"Onetech Asia JSC", period:"04/2024 — 10/2024", role:{vi:"Thực tập sinh phát triển giao diện",en:"Frontend Developer Intern"}, responsibilities:{vi:["Phát triển ứng dụng Next.js, TypeScript với mã nguồn dễ bảo trì.","Chuyển thiết kế Figma thành giao diện responsive bằng HTML/CSS.","Tích hợp RESTful API và tối ưu chức năng, hiệu năng giao diện."],en:["Developed Next.js and TypeScript applications with maintainable code.","Translated Figma designs into responsive HTML/CSS interfaces.","Integrated RESTful APIs and optimized functionality and frontend performance."]}, technologies:["Next.js","TypeScript","HTML","CSS","RESTful API"]},
  {id:"mindx", company:"MindX Technology School JSC", period:"10/2023 — 04/2024", role:{vi:"Giảng viên lập trình cho trẻ em",en:"Programming Instructor for Children"}, responsibilities:{vi:["Giảng dạy kiến thức lập trình cơ bản và tư duy logic thông qua dự án trò chơi, website.","Hướng dẫn học sinh xây dựng sản phẩm phù hợp với lứa tuổi."],en:["Taught programming fundamentals and logical thinking through simple game and web projects.","Guided students in building age-appropriate games and websites."]}, technologies:[]},
];
export const education = {period:"2020 — 2024",gpa:"3.75 / 4.0",awards:[{vi:"Sinh viên xuất sắc toàn khóa 2020–2024",en:"Outstanding Student of the Entire Course (2020–2024)"},{vi:"Học bổng tài năng hạng 1 năm 2023",en:"Talent Scholarship Level 1 2023"},{vi:"Sinh viên xuất sắc năm 2023",en:"Outstanding Student of the Year 2023"}]};
// Legacy exports retained for inactive components; the active UI uses translations above.
export const ui={heroCta1:"Xem dự án",heroCta2:"Liên hệ"};
export const design={heroRole:translations.vi.role};

