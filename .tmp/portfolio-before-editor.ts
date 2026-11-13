// ============================================================
// FILE CẤU HÌNH NỘI DUNG PORTFOLIO
// Chỉ cần sửa file này — toàn bộ trang sẽ tự cập nhật
// ============================================================

// THAY TÊN TẠI ĐÂY
export const name = "Trung Nghĩa";
export const copyrightYear = 2026;

// THAY CHỨC DANH TẠI ĐÂY
export const jobTitle = "Fullstack Developer";

// THAY GIỚI THIỆU NGẮN TẠI ĐÂY
export const heroIntro =
  "Mình xây dựng các sản phẩm web từ ý tưởng đến triển khai — chú trọng vào trải nghiệm người dùng, hiệu năng và kiến trúc hệ thống bền vững.";

// ============================================================
// THÔNG TIN LIÊN HỆ
// ============================================================

// THAY EMAIL TẠI ĐÂY
export const email = "hello@trungnghia.dev";

// THAY LINK GITHUB TẠI ĐÂY
export const githubUrl = "https://github.com/trungnghiadev";

// THAY LINK LINKEDIN TẠI ĐÂY
export const linkedinUrl = "https://linkedin.com/in/trungnghiadev";

// THAY LINK TWITTER/X TẠI ĐÂY (để trống nếu không dùng)
export const twitterUrl = "";

// ============================================================
// CHUYÊN MÔN
// THÊM / SỬA CHUYÊN MÔN TẠI ĐÂY
// ============================================================

export interface Expertise {
  id: string;
  number: string;
  title: string;
  description: string;
  tools: string[];
}

export const expertiseList: Expertise[] = [
  {
    id: "frontend",
    number: "01",
    title: "Phát triển giao diện",
    description:
      "Xây dựng giao diện người dùng hiện đại, tối ưu hiệu năng với hệ sinh thái React. Tập trung vào trải nghiệm người dùng mượt mà, khả năng tiếp cận và các chỉ số hiệu năng web.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  },
  {
    id: "backend",
    number: "02",
    title: "Phát triển máy chủ",
    description:
      "Thiết kế và xây dựng REST API, GraphQL và kiến trúc vi dịch vụ có khả năng mở rộng cao. Đảm bảo bảo mật, hiệu năng và độ tin cậy cho hệ thống.",
    tools: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "architecture",
    number: "03",
    title: "Kiến trúc hệ thống",
    description:
      "Tư vấn và thiết kế kiến trúc cho các hệ thống phức tạp. Từ kiến trúc nguyên khối đến vi dịch vụ, từ hạ tầng nội bộ đến nền tảng đám mây, đảm bảo khả năng mở rộng và dễ bảo trì.",
    tools: ["System Design", "AWS", "CI/CD", "Kubernetes", "Linux"],
  },
];

// ============================================================
// DỰ ÁN NỔI BẬT
// THÊM / SỬA DỰ ÁN TẠI ĐÂY
// ============================================================

export interface Project {
  published?: boolean;
  image?: string;
  imageAlt?: string;
  id: string;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  githubUrl?: string;
  demoUrl?: string;
  year: string;
  featured: boolean;
  // Màu gradient placeholder (thay bằng ảnh thật nếu có)
  accentColor: string;
}

export const projects: Project[] = [
  // THÊM DỰ ÁN TẠI ĐÂY
  {
    id: "project-01",
    name: "[Tên Dự Án 01]",
    description:
      "Mô tả ngắn về dự án này. Dự án giải quyết vấn đề gì, dành cho ai và kết quả đạt được.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    role: "Fullstack Developer",
    githubUrl: "https://github.com/trungnghiadev/project-01",
    demoUrl: "https://project-01.vercel.app",
    year: "2024",
    featured: true,
    accentColor: "#1a1a2e",
  },
  {
    id: "project-02",
    name: "[Tên Dự Án 02]",
    description:
      "Mô tả ngắn về dự án này. Dự án giải quyết vấn đề gì, dành cho ai và kết quả đạt được.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    role: "Frontend Lead",
    githubUrl: "https://github.com/trungnghiadev/project-02",
    demoUrl: "",
    year: "2024",
    featured: true,
    accentColor: "#0f2027",
  },
  {
    id: "project-03",
    name: "[Tên Dự Án 03]",
    description:
      "Mô tả ngắn về dự án này. Dự án giải quyết vấn đề gì, dành cho ai và kết quả đạt được.",
    technologies: ["Vue.js", "FastAPI", "Redis", "Kubernetes"],
    role: "Backend Developer",
    githubUrl: "https://github.com/trungnghiadev/project-03",
    demoUrl: "",
    year: "2023",
    featured: true,
    accentColor: "#16213e",
  },
];

// ============================================================
// KINH NGHIỆM LÀM VIỆC
// THÊM / SỬA KINH NGHIỆM TẠI ĐÂY
// ============================================================

export interface Experience {
  published?: boolean;
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  // THÊM KINH NGHIỆM TẠI ĐÂY
  {
    id: "exp-01",
    period: "2024 — Hiện tại",
    role: "[Chức Danh Hiện Tại]",
    company: "[Tên Công Ty]",
    companyUrl: "https://example.com",
    description:
      "Mô tả trách nhiệm và thành tích tại vị trí này. Những gì bạn đã xây dựng, cải thiện hoặc dẫn dắt. Điền thông tin thực tế vào đây.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "exp-02",
    period: "2022 — 2024",
    role: "[Chức Danh Trước Đó]",
    company: "[Tên Công Ty]",
    companyUrl: "https://example.com",
    description:
      "Mô tả trách nhiệm và thành tích tại vị trí này. Những gì bạn đã xây dựng, cải thiện hoặc dẫn dắt. Điền thông tin thực tế vào đây.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "exp-03",
    period: "2020 — 2022",
    role: "[Chức Danh Đầu Tiên]",
    company: "[Tên Công Ty]",
    companyUrl: "",
    description:
      "Nơi bạn bắt đầu hành trình phát triển phần mềm chuyên nghiệp. Điền thông tin thực tế vào đây.",
    technologies: ["JavaScript", "PHP", "MySQL"],
  },
];

// ============================================================
// NHÃN ĐIỀU HƯỚNG & VĂN BẢN GIAO DIỆN
// ============================================================

export const nav = {
  home: "trang-chủ",
  expertise: "chuyên-môn",
  projects: "dự-án",
  experience: "kinh-nghiệm",
  contact: "liên-hệ",
};

export const ui = {
  heroGreeting: "Xin chào, mình là",
  heroAvailable: "Sẵn sàng cho cơ hội mới",
  heroCta1: "Xem dự án",
  heroCta2: "Liên hệ",
  expertiseTitle: "Chuyên Môn",
  expertiseSub: "Những lĩnh vực mình tập trung",
  projectsTitle: "Dự Án Của Mình",
  projectsSub: "Một số sản phẩm mình đã xây dựng",
  projectGithub: "GitHub",
  projectDemo: "Live demo",
  projectRole: "Vai trò",
  experienceTitle: "Kinh Nghiệm",
  experienceSub: "Hành trình phát triển",
  contactTitle: "Hãy cùng xây dựng điều gì đó.",
  contactSub:
    "Mình luôn mở cửa đón nhận các cơ hội thú vị, dự án mới hay chỉ đơn giản là một cuộc trò chuyện hay. Hãy gửi tin nhắn nhé.",
  contactCta: "Gửi email cho mình",
  footerCopyright: `© ${copyrightYear} ${name}`,
};

// Các bản ghi cũ phía trên là dữ liệu mẫu. Chỉ đặt published: true khi
// đã thay bằng thông tin thật. Giữ lại để bạn có thể chỉnh sửa về sau.
export const publishedProjects = projects.filter((project) => project.published === true);
export const publishedExperiences = experiences.filter((experience) => experience.published === true);

export const design = {
  brand: "nghĩa",
  skip: "Chuyển đến nội dung",
  navigation: "Điều hướng chính",
  openMenu: "Mở điều hướng",
  closeMenu: "Đóng điều hướng",
  heroEyebrow: "Ý tưởng. Mã nguồn. Trải nghiệm.",
  heroRole: "Lập trình viên toàn diện",
  heroScroll: "Cuộn để khám phá",
  heroIndex: "01 — GIỚI THIỆU",
  heroNote: "Từ giao diện đến hệ thống.",
  expertiseTitle: "Chuyên môn",
  expertiseLabel: "01 / NHỮNG GÌ MÌNH LÀM",
  codeOpen: "<ý_tưởng>",
  codeClose: "</sản_phẩm>",
  philosophy: "Giao diện có chiều sâu.\nHệ thống có nền tảng.",
  philosophySub: "Kết nối thiết kế và công nghệ để tạo nên trải nghiệm web chỉn chu, từ chi tiết nhỏ đến kiến trúc tổng thể.",
  workTitle: "Dự án\ncủa mình.",
  workLabel: "02 / TỪ Ý TƯỞNG ĐẾN THỰC TẾ",
  workIntro: "Mỗi sản phẩm là một bài toán về trải nghiệm, công nghệ và cách tạo ra giá trị cho người sử dụng.",
  workEmptyTitle: "Những sản phẩm,\nnhững câu chuyện.",
  workEmptyText: "Thông tin chi tiết về các dự án sẽ được cập nhật tại đây. Bạn có thể khám phá mã nguồn của mình trên GitHub.",
  workEmptyAction: "Khám phá GitHub",
  workEmptyLabel: "KHÔNG GIAN DỰ ÁN",
  featured: "Dự án nổi bật",
  projectSource: "Mã nguồn",
  projectDemo: "Xem trực tiếp",
  experienceLabel: "03 / HÀNH TRÌNH",
  experienceTitle: "Kinh nghiệm\nchuyên môn.",
  experienceEmptyTitle: "Hành trình vẫn đang tiếp diễn.",
  experienceEmptyText: "Thông tin kinh nghiệm làm việc sẽ được cập nhật. Nếu bạn muốn trao đổi về chuyên môn hoặc cơ hội hợp tác, hãy liên hệ với mình.",
  experienceAction: "Bắt đầu trò chuyện",
  contactLabel: "04 / KẾT NỐI",
  contactTitle: "Một ý tưởng hay\nbắt đầu từ lời chào.",
  contactText: "Bạn đang có một ý tưởng, một bài toán thú vị hay một cơ hội hợp tác? Mình rất muốn lắng nghe.",
  contactAction: "Cùng trò chuyện",
  footerText: "Được tạo nên bằng sự tỉ mỉ.",
  backTop: "Về đầu trang",
};


