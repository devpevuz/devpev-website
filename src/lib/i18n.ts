export type Locale = "en" | "uz";

export const translations = {
  en: {
    // Navbar
    nav: {
      events: "Events",
      blog: "Blog",
      projects: "Projects",
      terminal: "Terminal",
      jobs: "Jobs",
      about: "About",
      resources: "Resources",
      menu: "menu",
    },
    // Footer
    footer: {
      tagline: "by developers for developers",
      community: "Community",
      events: "Events",
      blog: "Blog",
      projects: "Projects",
      resources: "Resources",
      terminal: "Terminal",
      jobs: "Jobs",
      about: "About",
      aboutUs: "About us",
      contributors: "Contributors",
      contactUs: "Contact us",
    },
    // StatsBar
    stats: {
      showStats: "show stats",
      donate: "donate$",
    },
    // Home page
    home: {
      heroHeading: "Build with your friends.",
      heroSubtitle:
        "Meet developers in Uzbekistan, learn in public, and build useful things together.",
      joinCta: "Join the community",
      eventsCta: "See next meetup",
      finalHeading:
        "If you want a stronger local developer scene, help build it.",
      joinTelegram: "Join on Telegram",
      partnerCta: "Partner with DevPev",
      nextEvent: "next event",
      registerLuma: "Register on Luma",
      latestArticle: "latest article",
      readArticle: "Read article →",
      noEventsTitle: "More coming soon.",
      noEventsCta: "See past events →",
    },
    // Events page
    events: {
      title: "Events",
      upcoming: "Upcoming",
      past: "Past",
    },
    // Blog page
    blog: {
      title: "Blog",
      searchPlaceholder: "search articles...",
      noResults: 'no articles found for "{query}"',
    },
    // Jobs page
    jobs: {
      title: "Jobs",
      positions: "Positions",
      freelance: "Freelance",
      searchPlaceholder: "search jobs...",
      noResults: 'no jobs found for "{query}"',
      noPositions: "no {tab} positions available right now.",
    },
    // About page
    about: {
      title: "About",
      aboutHeading: "/about us",
      aboutText:
        "DevPev is an open-source developer community platform based in Uzbekistan. We build projects together, share knowledge, and foster the open-source ecosystem.",
      contributorsHeading: "/contributors",
      contributorsText:
        "Our community is built by developers for developers. Join us and contribute to our open-source projects.",
      contactHeading: "/contact us",
      partnerHeading: "/partner us",
      partnerText:
        "Interested in partnering with DevPev? We welcome sponsorships, collaborations, and community partnerships.",
    },
  },

  uz: {
    nav: {
      events: "Tadbirlar",
      blog: "Blog",
      projects: "Loyihalar",
      terminal: "Terminal",
      jobs: "Ishlar",
      about: "Haqida",
      resources: "Manbalar",
      menu: "menyu",
    },
    footer: {
      tagline: "dasturchilar tomonidan dasturchilar uchun",
      community: "Hamjamiyat",
      events: "Tadbirlar",
      blog: "Blog",
      projects: "Loyihalar",
      resources: "Manbalar",
      terminal: "Terminal",
      jobs: "Ishlar",
      about: "Haqida",
      aboutUs: "Biz haqimizda",
      contributors: "Hissachilar",
      contactUs: "Bog'lanish",
    },
    stats: {
      showStats: "statistika",
      donate: "qo'llab-quvvatlash$",
    },
    home: {
      heroHeading: "Do'stlar bilan birga quramiz.",
      heroSubtitle:
        "O'zbekistondagi dasturchilar bilan tanishing, ochiq o'rganing va birgalikda foydali narsalar yarating.",
      joinCta: "Hamjamiyatga qo'shiling",
      eventsCta: "Keyingi uchrashuvni ko'ring",
      finalHeading:
        "Kuchli mahalliy dasturchilar muhitini xohlasangiz, uni birga qurishga yordam bering.",
      joinTelegram: "Telegramga qo'shiling",
      partnerCta: "DevPev bilan hamkorlik",
      nextEvent: "keyingi tadbir",
      registerLuma: "Luma'da ro'yxatdan o'ting",
      latestArticle: "so'nggi maqola",
      readArticle: "Maqolani o'qing →",
      noEventsTitle: "Tez orada.",
      noEventsCta: "O'tgan tadbirlarni ko'ring →",
    },
    events: {
      title: "Tadbirlar",
      upcoming: "Kelajak",
      past: "O'tgan",
    },
    blog: {
      title: "Blog",
      searchPlaceholder: "maqolalarni qidiring...",
      noResults: '"{query}" bo\'yicha maqola topilmadi',
    },
    jobs: {
      title: "Ishlar",
      positions: "Lavozimlar",
      freelance: "Frilanser",
      searchPlaceholder: "ishlarni qidiring...",
      noResults: '"{query}" bo\'yicha ish topilmadi',
      noPositions: "hozirda {tab} bo'sh o'rin yo'q.",
    },
    about: {
      title: "Haqida",
      aboutHeading: "/biz haqimizda",
      aboutText:
        "DevPev — O'zbekistondagi ochiq manbali dasturchilar hamjamiyati platformasi. Biz birgalikda loyihalar quramiz, bilim almashimiz va ochiq manba ekotizimini rivojlantiramiz.",
      contributorsHeading: "/hissachilar",
      contributorsText:
        "Hamjamiyatimiz dasturchilar tomonidan dasturchilar uchun qurilgan. Bizga qo'shiling va ochiq manba loyihalarimizga hissa qo'shing.",
      contactHeading: "/bog'lanish",
      partnerHeading: "/hamkorlik",
      partnerText:
        "DevPev bilan hamkorlik qilmoqchimisiz? Biz homiylik, hamkorlik va jamiyat sherikliklarini qabul qilamiz.",
    },
  },
} as const;

