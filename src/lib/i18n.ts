export type Locale = "en" | "uz";

export const translations = {
  en: {
    // Navbar
    nav: {
      events: "Events",
      blog: "Blog",
      terminal: "Terminal",
      jobs: "Jobs",
      about: "About",
      partner: "Partner us",
      menu: "menu",
    },
    // Footer
    footer: {
      tagline: "by developers for developers",
      resources: "Resources",
      blog: "Blog",
      projects: "Projects",
      about: "About",
      aboutUs: "About us",
      contributors: "Contributors",
      contactUs: "Contact us",
    },
    // StatsBar
    stats: {
      showStats: "show stats",
      donate: "donate$",
      supportAddress: "support address: @devpevuz",
    },
    // Home page
    home: {
      heroHeading: "Build with your friends.",
      heroSubtitle:
        "Meet developers in Uzbekistan, learn in public, and build useful things together.",
      joinCta: "Join the community",
      eventsCta: "See next meetup",
      whyLabel: "why devpev",
      whyHeading: "A local community with a clear job to do.",
      whatLabel: "what happens here",
      whatHeading: "Less posturing. More practical momentum.",
      meetups: "meetups",
      meetupsText: "Sessions focused on what local builders are making now.",
      projectsLabel: "projects",
      projectsText:
        "Shared experiments, open-source repos, and side projects worth continuing.",
      communityLabel: "community",
      communityText:
        "A place to ask questions, find collaborators, and stay close to the people pushing local developer culture forward.",
      notesLabel: "community notes",
      notesHeading: "Why people come back.",
      learnMore: "Learn more about DevPev",
      finalLabel: "final call",
      finalHeading:
        "If you want a stronger local developer scene, help build it.",
      finalSub:
        "Join the Telegram channel, come to the next meetup, or reach out to partner with the community.",
      joinTelegram: "Join on Telegram",
      partnerCta: "Partner with DevPev",
      // Pathways
      vibePath: "/vibe",
      vibeDesc: "A local developer circle that feels easy to join.",
      vibePoint1: "Meet people building in Uzbekistan",
      vibePoint2: "Stay close to local tech news",
      learnPath: "/learn",
      learnDesc: "Talks and workshops focused on practical skills.",
      learnPoint1: "Frontend, backend, AI, and career sessions",
      learnPoint2: "Shared notes and post-event recaps",
      buildPath: "/build",
      buildDesc: "Turn conversations into open-source work.",
      buildPoint1: "Collaborate with contributors",
      buildPoint2: "Ship demos, tools, and experiments together",
      // Testimonials
      t1: "DevPev is one of the few communities where meetup conversations turn into real collaboration.",
      t1name: "Aziza",
      t1role: "Frontend engineer",
      t2: "Useful talks, strong people in the room, and enough space to ask beginner questions.",
      t2name: "Bekzod",
      t2role: "CS student",
      t3: "It gives local developers a place to show work, find collaborators, and stay close to what others are building.",
      t3name: "Sardor",
      t3role: "Product engineer",
      // Event card
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
      terminal: "Terminal",
      jobs: "Ishlar",
      about: "Haqida",
      partner: "Hamkor bo'ling",
      menu: "menyu",
    },
    footer: {
      tagline: "dasturchilar tomonidan dasturchilar uchun",
      resources: "Manbalar",
      blog: "Blog",
      projects: "Loyihalar",
      about: "Haqida",
      aboutUs: "Biz haqimizda",
      contributors: "Hissachilar",
      contactUs: "Bog'lanish",
    },
    stats: {
      showStats: "statistika",
      donate: "qo'llab-quvvatlash$",
      supportAddress: "qo'llab-quvvatlash: @devpevuz",
    },
    home: {
      heroHeading: "Do'stlar bilan birga quramiz.",
      heroSubtitle:
        "O'zbekistondagi dasturchilar bilan tanishing, ochiq o'rganing va birgalikda foydali narsalar yarating.",
      joinCta: "Hamjamiyatga qo'shiling",
      eventsCta: "Keyingi uchrashuvni ko'ring",
      whyLabel: "nima uchun devpev",
      whyHeading: "Aniq maqsadli mahalliy jamiyat.",
      whatLabel: "bu yerda nima bo'ladi",
      whatHeading: "Kam ko'rinish. Ko'proq amaliy natija.",
      meetups: "uchrashuvlar",
      meetupsText:
        "Mahalliy dasturchilarning joriy ishlari haqidagi sessiyalar.",
      projectsLabel: "loyihalar",
      projectsText:
        "Umumiy tajribalar, ochiq manba repolari va davom ettirishga arziydi yangi loyihalar.",
      communityLabel: "jamiyat",
      communityText:
        "Savol berish, hamkorlar topish va mahalliy dasturchilar madaniyatini oldinga olib borayotganlar bilan yaqin bo'lish joyi.",
      notesLabel: "jamiyat izohlari",
      notesHeading: "Nima uchun odamlar qaytib keladi.",
      learnMore: "DevPev haqida ko'proq",
      finalLabel: "yakuniy chaqiriq",
      finalHeading:
        "Kuchli mahalliy dasturchilar muhitini xohlasangiz, uni birga qurishga yordam bering.",
      finalSub:
        "Telegram kanaliga qo'shiling, keyingi uchrashuvga keling yoki hamjamiyat bilan hamkorlik qilish uchun bog'laning.",
      joinTelegram: "Telegramga qo'shiling",
      partnerCta: "DevPev bilan hamkorlik",
      vibePath: "/vibe",
      vibeDesc: "Qo'shilish oson mahalliy dasturchilar doirasi.",
      vibePoint1: "O'zbekistonda qurayotgan odamlar bilan tanishing",
      vibePoint2: "Mahalliy texnologiya yangiliklari bilan yaqin bo'ling",
      learnPath: "/o'rganish",
      learnDesc: "Amaliy ko'nikmalarga yo'naltirilgan ma'ruzalar va seminarlar.",
      learnPoint1: "Frontend, backend, AI va karyera sessiyalari",
      learnPoint2: "Umumiy qo'llanmalar va tadbirdan keyingi xulosalar",
      buildPath: "/qurish",
      buildDesc: "Suhbatlarni ochiq manba ishiga aylantiring.",
      buildPoint1: "Hissachilar bilan hamkorlik qiling",
      buildPoint2: "Demolar, vositalar va tajribalarni birga yuboring",
      t1: "DevPev — uchrashuvdagi suhbatlar haqiqiy hamkorlikka aylanadigan kamdan-kam jamiyatlardan biri.",
      t1name: "Aziza",
      t1role: "Frontend muhandis",
      t2: "Foydali ma'ruzalar, kuchli odamlar va boshlang'ich savollar berish uchun yetarli muhit.",
      t2name: "Bekzod",
      t2role: "CS talabasi",
      t3: "Bu mahalliy dasturchilar uchun ish ko'rsatish, hamkorlar topish va boshqalar nimalar qilayotganini kuzatib borish joyi.",
      t3name: "Sardor",
      t3role: "Mahsulot muhandisi",
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

export type Translations = typeof translations.en | typeof translations.uz;
