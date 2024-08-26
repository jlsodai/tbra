import _ from "lodash";

export const products = [
  {
    name: "Company",
    href: "/board-roles/company",
  },
  {
    name: "Individual",
    href: "/board-roles/individual",
  },
];

export const menuLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "#",
    submenu: [
      { name: "About TBrA", href: "/about-us" },
      { name: "Our Team", href: "/our-team" },
      { name: "Our Board", href: "/our-board" },
      { name: "Our Partners", href: "/partners" },
    ],
  },
  {
    name: "Find Candidates",
    href: "/board-roles/company",
  },
  {
    name: "Executive Education",
    href: "/executive-programmes",
    submenu: [
      {
        name: "Open Doors: Certificate in Company Direction",
        href: "/executive-programmes/open-doors",
      },
      {
        name: "ESG Certificate",
        href: "/executive-programmes/esg-certificate",
      },
      {
        name: "Risk Governance Programmes",
        href: "/executive-programmes/risk-governance-programmes",
        target: "_blank",
      },
      // {
      //   name: "Ontological Growth Experience",
      //   href: "/executive-programmes/ontological-growth-experience",
      // },
    ],
  },
  {
    name: "Professional Development",
    href: "/professional-development",
  },
  {
    name: "Research",
    href: "/research",
  },
];

export const partnerLogos = [
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2020/07/BHI.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/06-british_int_inv.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/02/IoD_Black_transparent.png",
  },
  {
    src: "https://res.cloudinary.com/dqngxqaha/image/upload/v1704812910/dcro_evuog3.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2020/06/alitheia.svg",
  },
  {
    src: "https://res.cloudinary.com/tbra/image/upload/v1681809918/board-excellence_pjq2h8.jpg",
  },
];

export const advertisedClients = [
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/Unilever.png.crdownload.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/BBOXX.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/mfs-africa.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/gif.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/AIIM.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/Norfund_logo_as_of_2022.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/Norsad-.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/MedAccess.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/Next-Einstien-Forum.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/CDC_logo_Black.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/zebu.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/globeleq.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/aprica.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/IFC-Transparent.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/fsd-Africa.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/Tugende.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/International_Rescue_Committee_logo.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/HBL-1.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/dlight_logo.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/Medaccess-1.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/ahh.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/water_trust.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/07/PAYGO-Energy.jpg",
  },
];

export const clients = [
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/01-unilever.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/02-global_innovation_fund.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/03-autodesk.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/04-Norsad.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/05-ifc.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/06-british_int_inv.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/17-shell.png",
    style: { maxWidth: "100%" },
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/08-fsd.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/09-dLight.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/10-Globeleq.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/11-mfs.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/12-paygo.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/AIIM.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/14-bboxx.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/lions_head.jpg",
    style: { maxWidth: "100%" },
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/15-helios.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/16-factor_e.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/07-2collaborative.jpg",
    style: { maxWidth: "100%" },
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/22-international_rescue.png",
    style: { maxHeight: "110px" },
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/18-berkeley.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/19-norfund.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/20-fmo.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/21-medaccess.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/08/23-vision_fund.jpg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/11/swedfund.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/11/webcor.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/11/imgineworldwide.svg",
  },
];

export const teams = [
  {
    id: 1,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    twitter: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 2,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    twitter: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 3,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 4,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    twitter: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 5,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    twitter: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 6,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    twitter: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 7,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    twitter: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 8,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
  {
    id: 9,
    name: "Marcia Ashong",
    title: "CEO",
    href: "#",
    linkedin: "#",
    imageSrc:
      "https://theboardroomafrica.com/wp-content/uploads/2022/06/IMG_5589_short2.jpg",
  },
];

export const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 7,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 8,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 9,
    title: "Boost your conversion rate",
    href: "/research/research-title-slug",
    imageUrl: "https://via.placeholder.com/400x250",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Infographic", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export const bottomMenu = [
  {
    list: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Our Team",
        href: "/our-team",
      },
      {
        name: "Our Board",
        href: "/our-board",
      },
      {
        name: "Our Partners",
        href: "/partners",
      },
    ],
  },
  {
    neg: true,
    list: [
      {
        name: "Join TBrA",
        href: "/membership",
      },
      {
        name: "Advertise your Board Role",
        href: "/board-roles/company",
      },
      {
        name: "Executive Programmes",
        href: "/executive-programmes",
      },
      {
        name: "Contact Us",
        href: "/get-in-touch",
      },
    ],
  },
  {
    list: [
      {
        name: "Research",
        href: "/research",
      },
      {
        name: "FAQs",
        href: "/faqs",
      },
      {
        name: "Terms of service",
        href: "/terms-of-service",
      },
      {
        name: "Privacy Statement",
        href: "/privacy-policy",
      },
    ],
  },
];

export const programmes = [
  {
    title: "Open Doors, Accredited Certificate in Company Direction",
    date: "July 2023",
    learnMoreUrl: "#",
    registerUrl: "#",
    imageUrl:
      "https://tbratest.my.canva.site/executive-development-page/images/128b157c5a41f2c2b630bbb9d2543b69.jpg",
  },
  {
    title: "Environmental Social and Governance (ESG) Certificate",
    date: "July 2023",
    learnMoreUrl: "#",
    registerUrl: "#",
    imageUrl:
      "https://tbratest.my.canva.site/executive-development-page/images/88e7b20a6ba11f0b588dfb7139864e09.jpg",
  },
  {
    title: "Open Doors, Accredited Certificate in Company Direction",
    date: "July 2023",
    learnMoreUrl: "#",
    registerUrl: "#",
    imageUrl:
      "https://tbratest.my.canva.site/executive-development-page/images/128b157c5a41f2c2b630bbb9d2543b69.jpg",
  },
  {
    title: "Open Doors, Accredited Certificate in Company Direction",
    date: "July 2023",
    learnMoreUrl: "#",
    registerUrl: "#",
    imageUrl:
      "https://tbratest.my.canva.site/executive-development-page/images/128b157c5a41f2c2b630bbb9d2543b69.jpg",
  },
];

export const esgIcons = [
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/aif.jpeg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/africa_gifted_foundation.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/results4development.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/tullow.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/unep.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/natixis.png",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/discoverIE.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/giin.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/mjHudson-1.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/dutchfounders-1.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/ideo-1.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/calbank.svg",
  },
  {
    src: "https://theboardroomafrica.com/wp-content/uploads/2022/10/cambridge_u.svg",
  },
];

export const pricingTable = [
  {
    title: "Standard Ad *",
    amount: "500",
    once: true,
    recruiters: true,
    list: [
      "The role is advertised on our Members' Forum for a month to a membership pool of 3500+ executives.",
      "One-month feature in the weekly newsletter. The newsletter reaches a broader audience which includes our members, clients, partners, subscribers and other stakeholders.",
      "Applicant profiles are shared every two weeks.",
      "The client manages the recruitment process and communicates directly with applicants regarding the status of their applications.",
    ],
    formUrl: "/advertisement-form",
  },
  {
    title: "Standard Ad Plus *",
    amount: "1000",
    once: true,
    recruiters: true,
    colored: true,
    list: [
      "The role is advertised on our Members' Forum for a month to a membership pool of 3500+ executives.",
      "One-month feature in the weekly newsletter. The newsletter reaches a broader audience which includes our members, clients, partners, subscribers and other stakeholders.",
      "Applicant profiles are shared on a weekly basis.",
      "The client manages the recruitment process and communicates directly with applicants regarding the status of their applications.",
      "Targeted outreach by our talent team to candidates within our network who fit the criteria for the role.",
    ],
    formUrl: "standard-advertisement-plus-request",
  },
  {
    title: "Premium – Custom Plan",
    amount: "",
    list: [
      "Designed based on your needs and requirements.",
      "End-to-end board recruitment search service.",
      "Dedicated talent team.",
      "Management of the entire recruitment process, including initial candidate screening and interviews, as well as application review and longlist development. ",
      "Support from defining role requirements to a thorough search and headhunter intervention.",
    ],
    formUrl: "/get-in-touch",
  },
];

export const corporateBacked = [
  {
    title: "Exposure Plan",
    amount: "",
    list: [
      "Nominate up to 3 women executives for an enhanced TBrA membership experience",
      "3 complimentary MBTI Assessments and follow-on executive coaching sessions",
      "Corporate discounts on member services",
      "Monthly Corporate Members newsletter -targeted to business",
      "Corporate LinkedIn session",
      "TBrA corporate membership status with logo on TBrA's website and marketing materials - signalling a commitment to diversity",
    ],
  },
  {
    title: "Discovery Plan",
    colored: true,
    list: [
      "Nominate up to 5 women executives for an enhanced TBrA membership experience",
      "5 complimentary MBTI Assessments and follow-on executive coaching sessions",
      "Corporate discounts on member services",
      "Monthly Corporate Membership Newsletter",
      "Corporate LinkedIn session",
      "TBrA corporate membership status with logo on TBrA's website and marketing materials - signalling a commitment to diversity",
    ],
  },
  {
    title: "Growth Plan",
    amount: "",
    list: [
      "Nominate up to 10 women executives for an enhanced TBrA membership experience ",
      "10 complimentary MBTI Assessments and follow-on executive coaching sessions",
      "Corporate discounts on member services",
      "Monthly Corporate Membership Newsletter",
      "Corporate LinkedIn session",
      "TBrA corporate membership status with logo on TBrA's website and marketing materials - signalling a commitment to diversity",
      "TBrA Talent team's support with executive recruitment - customised to needs",
    ],
  },
];

export const memberSlides = [
  {
    title: "Diverse leadership talent to the world.",
    content:
      "TheBoardroom Africa (TBrA) is the region’s premier business dedicated to promoting exceptional, diverse talent to board and executive positions and providing comprehensive executive education to empower leaders to transform the businesses they lead.",
    style: {
      background:
        'linear-gradient(rgba(34,35,68, 0.75), rgba(34,35,68, 0.75)), url("https://tbratest.my.canva.site/membership-landing-page/images/90710e7cced9762fbf374e15a4c488c0.jpg")',
      backgroundSize: "cover",
    },
  },
  {
    title: "Influential network of women leaders",
    content:
      "Being a woman at the top can be a lonely experience; TheBoardroom Africa enables our members to realise they don't have to go at it alone. Join the most influential private community of women leaders on the continent and together transform your leadership while staying at the top.",
    style: {
      background:
        'linear-gradient(rgba(34,35,68, 0.75), rgba(34,35,68, 0.75)), url("https://res.cloudinary.com/tbra/image/upload/v1680257493/influential_axcerl.jpg")',
      backgroundSize: "cover",
    },
  },
  {
    title: "Transforming the face \nof leadership",
    content:
      "To disrupt the status quo, we must intentionally cultivate a pipeline of leaders. Connect to a network of other leading women and together, unlock access to opportunities, transform your presence through executive development, peer networking, in-person gatherings and more.",
    style: {
      background:
        'linear-gradient(rgba(34,35,68, 0.75), rgba(34,35,68, 0.75)), url("https://res.cloudinary.com/tbra/image/upload/v1680257489/face_of_leadership_pwc0pk.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "300px",
    },
  },
  {
    title: "A membership that understands your journey.",
    content:
      "Whether you are looking to transform your presence in the boardroom, position yourself for global opportunities, or lead your business and teams to success given our new global context, our membership offerings are uniquely designed to open the doors to leadership spaces and keep you there.",
    style: {
      background:
        'linear-gradient(rgba(32,41,69, 0.78), rgba(32,41,69, 0.78)), url("https://tbratest.my.canva.site/membership-learn-more-page/images/0f612383af2d574682a658377f9293e0.jpg")',
      // backgroundPosition: "bottom",
      backgroundSize: "cover",
    },
  },
];

export const communityLogos = [
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/07ac9c648896884839a7828b8f0326f5.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/3416b56f2251d37b65709d0fa4552450.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/33aa494eabea26672bce3a46737b89ea.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/49c491728eed967fabd566e23dc16bbc.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/3a8073546891237ce1f0f4d74b3ccc33.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/a5ea6f38707f636764b785b115e2018e.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/20974cddd5cef1843f8f431e5aff3075.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/31551412761d41166018f7f6c8661ea3.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/56d48768bb3996b103b48ac10766815d.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/87a6bca3558e4960815db41f7045b91c.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/b00450952ccd477c23e6fda1edbfdc0c.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/ad8260d53e1edecb7da72e4842824f08.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/20f9eaa11cb9368aeec35536a4788c77.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/7b4e45cd5d9c2dfbfbac0cf3c363348b.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/948105581ea01ee3135d0e58315ba59a.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/2527cab2d888152fc858f4fd7682f6a0.png",
  },
  {
    src: "https://tbratest.my.canva.site/membership-learn-more-page/images/922ad3d63afdd33b4601375975c33662.png",
  },
];

export const instructorDetails = {
  esg: [
    {
      name: "Rosalind Kainyah MBE",
      imageUrl:
        "https://theboardroomafrica.com/wp-content/uploads/2022/10/rosalind_pic2.jpg",
      profile: [
        " Rosalind Kainyah MBE is an authority on Sustainability and responsible business with over 30 years of combined legal, international, executive and board level experience. She is a trusted advisor to Boards and Senior Executives of companies on leveraging opportunities and managing Sustainability related risk. Rosalind has advised companies across various sectors, including the extractives industry, energy, private equity, financial services, healthcare, agriculture, consumer goods, logistics, manufacturing and technology.",
        "Rosalind is also an experienced non-executive director.  She currently serves on the boards of discoverIE plc, Gem Diamonds Limited, CalBank Plc, Lekela Power and BTE Renewables. In the not-for-profit sector, she is a trustee and Vice Chairperson of the Africa Gifted Foundation and a Board member of Results for Development (R4D). She has previously served on the Boards of Aker Energy, the Ghana Food &Drugs Authority and The Africa-America Institute.",
        "Rosalind holds a Bachelor's degree in English from the University of Ghana, a Bachelor of Laws degree from the University of London and a Master of Laws degree from University College, London. She is a member of the Bar of England and Wales and the Chartered Institute of Arbitrators.",
      ],
    },
    {
      name: "Jacqueline Musiitwa",
      imageUrl:
        "https://theboardroomafrica.com/wp-content/uploads/2022/10/jacqueline.jpg",
      profile: [
        "Ms Jacqueline Musiitwa is an international attorney specialising in business transformation, innovation and sustainability.  Jacqueline has over 17 years' experience in leading legal and corporate relations functions in financial services and the industrial sectors.  She is a member of faculty at Georgetown University.",
        "Jacqueline sits on the boards of Bushveld Minerals (AIM: BMN), PPC Zimbabwe Limited  and is the Chair of the New York State Bar Association's Energy and Natural Resources Committee. She has experience as a board chair and chairing governance and risk committees.  She previously served in various leadership capacities at Rio Tinto, the Trade and Development Bank (TDB Group), World Trade Organization.",
        "She holds a Juris Doctor from the University of Melbourne Law School and a Bachelor of Arts from Davidson College.  She holds a Certificate of Company Direction from the Institute of Directors UK.",
      ],
    },
    {
      name: "Harald Walkate",
      imageUrl:
        "https://theboardroomafrica.com/wp-content/uploads/2022/10/harald.jpg",
      profile: [
        "Harald Walkate is the founder of Finding Ways Ahead, an independent ESG and impact investment advisory firm. From 2019 to 2021 he was the Head of Responsible Investment (ESG) and member of the Executive Committee at Natixis Investment Managers. Prior to that, he worked for Aegon for fifteen years in different capacities, lastly as Global Head of Responsible Investment at Aegon Asset Management.",
        "His work in ESG has included working with portfolio managers and analysts to integrate ESG considerations into investments, active ownership, policy and organizational issues, and identifying positive impact investment opportunities within different asset classes, with a particular focus on blended finance.",
        "Harald is a Senior Fellow with the University of Zurich Center for Sustainable Finance and Private Wealth (CSP) and a regular contributor to University of Cambridge Institute for Sustainability Leadership (CISL) programs. He was also an advisor to the Impact Management Project and on the board of the AIF Center for ESG and Sustainable Finance.",
      ],
    },
  ],
};

export const programDetails = {
  esg: {
    outline: [
      {
        title: "Introduction to ESG: Past and Present",
        content:
          "This introductory session explores the historical role corporations have played in advancing social good, from corporate social responsibility to corporate philanthropy and impact. You will learn about the journey from Socially Responsible Investment (SRI) to environmental, social and governance (ESG) criteria. Participants will also be introduced to the roles and responsibilities of different actors in the system, from investors to governments and nonprofits.",
      },
      {
        title: "Global Trends Driving the Sustainability Agenda",
        content:
          "ESG is not only in the mainstream, but it also shapes the market. The session probes the factors driving growing momentum around the ESG agenda. You will dive into the role of key stakeholders, including investors, consumers, the media, regulators and more, in accelerating pressure for disclosure and action.",
      },
      {
        title: "The Role of Regulation in Advancing ESG",
        content:
          "Regulatory scrutiny of ESG is on the rise as a growing number of countries seem to encourage companies to report on their environmental and social risk. You will learn what's driving new regulations and reporting standards. By the end of this session, you will understand the “alphabet soup” of regulation around ESG and how it impacts corporate strategy and compliance requirements.",
      },
    ],
  },
};

export const filteredMeta = (meta) => {
  const seo = {
    title: meta?.metaTitle,
    description: meta?.metaDescription,
    keywords: null,
  };
  return _.omitBy(seo, _.isNil);
};

export const primePricing = {
  access: [
    {
      title: "Unlimited Access to <<<Members Forum<<<",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "agc",
    },
    {
      title: "Access to <<<Board Roles<<<",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "fnf",
    },
    {
      title: "Access to <<<Member-Curated Webinars<<<",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "676",
    },
    {
      title: "<<<Get matched<<< - Unlimited Monthly Virtual Matchings",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "c8y",
    },
    {
      title: "Board & Leadership <<<Resource Library<<<",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "uno",
    },
    {
      title: "Harvard Business Review <<<Concept Submission<<<",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "2u8",
    },
    {
      title: "25 % Havard Business <<<Review Subscription<<<",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "vja",
    },
    {
      title: "25% Discount on <<<IoD Membership<<<",
      standard: "yes",
      prime: "yes",
      corporate: "yes",
      id: "soa",
    },
    {
      title: "TBrA <<<Spotlight<<<",
      standard: "yes",
      prime: "Priority",
      corporate: "Priority",
      id: "fiy",
    },
    {
      title: "Personal Talent Consultation",
      standard: "no",
      prime: "30 minutes",
      corporate: "yes",
      // id: "fnf"
    },
    {
      title: "Regular Tailored Resources",
      standard: "no",
      prime: "yes",
      corporate: "no",
      // id: "xuf"
    },
  ],
  ondemand: [
    {
      title: "Monthly <<<Group Coaching<<<",
      standard: "Full fee",
      prime: "Full fee",
      corporate: "Full fee",
      id: "63p",
    },
    {
      title: "LinkedIn <<<Profile Audit<<<",
      standard: "Full fee",
      prime: "Complimentary",
      corporate: "29% discount",
      id: "3mk",
    },
    {
      title: "LinkedIn <<<Makeover<<<",
      standard: "Full fee",
      prime: "9% discount",
      corporate: "18% discount",
      id: "imo",
    },
    {
      title: "Corporate Linkedin Session",
      standard: "no",
      prime: "no",
      corporate: "yes",
      // id: "fnf"
    },
    {
      title: "<<<Executive CV Consultation<<<",
      standard: "Full fee",
      prime: "Complimentary",
      corporate: "33% discount",
      id: "wx8",
    },
    {
      title: "Executive <<<CV Makeover<<<",
      standard: "Full fee",
      prime: "3% discount",
      corporate: "7% discount",
      id: "980",
    },
    {
      title: "<<<Thought Leadership<<< Positioning",
      standard: "Full fee",
      prime: "discounted",
      corporate: "discounted",
      id: "i4h",
    },
    {
      title:
        "Complimentary MBTI Assessments and follow-on executive coaching session",
      standard: "no",
      prime: "no",
      corporate: "yes",
      // id: "fnf"
    },
    {
      title: "Role Application Supporting Statement",
      standard: "Full fee",
      prime: "9% discount",
      corporate: "14% discount",
    },
    {
      title: "Interview Preparation",
      standard: "Full fee",
      prime: "9% discount",
      corporate: "14% discount",
    },
  ],
  exec: [
    {
      title: "Open Doors: Certificate in Company Direction Virtual",
      standard: "Member fee",
      prime: "4% discount",
      corporate: "10% discount",
      // id: "fnf"
    },
    {
      title: "ESG Certificate",
      standard: "Member fee",
      prime: "4% discount",
      corporate: "12% discount",
      // id: "fnf"
    },
    {
      title: "Ontological Growth Experience",
      standard: "Member fee",
      prime: "7% discount",
      corporate: "14% discount",
      // id: "fnf"
    },
    {
      title: "Workshops",
      standard: "Full fee",
      prime: "17% discount",
      corporate: "53% discount",
      // id: "fnf"
    },
  ],
};

export const offers = {
  executive: {
    heading: "Executive Development Offerings",
    offering: [
      {
        title: "Open Doors: Certificate in Company Direction",
        text: "Designed and delivered in partnership with the Institute of Directors UK (IoD), Open Doors is a globally recognised and accredited director certificate programme suited to existing and aspiring directors. The programme provides a comprehensive curriculum covering the essential components of leadership, strategy, finance and governance and offers additional insights into board dynamics and ontological leadership through curated workshops.",
      },
      {
        title: "Environmental, Social and Governance (ESG) Certificate",
        text: "TheBoardroom Africa's ESG Certificate programme targets women directors and executives looking to develop their understanding of ESG issues and concepts, equipping them with the tools required to drive ESG agendas in their respective organisations. This expert-led curriculum incorporates ESG theoretical frameworks and trends, situating them within a global context, with practical inputs intended to support executives as they review their roles in driving the ESG agenda. ",
      },
      {
        title: "Ontological Growth Experience",
        text: "Designed with the belief that organisational transformation must be anchored in authentic power, values-based, strengths-based and courageous leadership. This experience merges research and practice from neuroscience, psychology, biomimicry and ontology, offering delegates a unique opportunity to deeply transform themselves first and in turn to transform the teams and systems they lead.",
      },
      {
        title: "Workshops",
        text: "This series of workshops cover a range of topics from board dynamics, committees and strategic decision-making. Each workshop offers a quick immersion into select learning areas and provides practical tools and techniques that can immediately be applied.",
      },
    ],
  },
  ondemand: {
    heading: "On-Demand Offerings",
    offering: [
      {
        title: "Monthly Group Coaching",
        text: "We provide members with the chance to connect with our expert executive coach partners and other TBR Africa members in small group coaching sessions to improve their leadership skills. The monthly group coaching sessions are designed for our members to focus on life-changing topics to help them identify their true potential and leadership styles. ",
      },
      {
        title: "LinkedIn Profile Audit",
        text: "TBrA career coaches evaluate members' professional LinkedIn profiles based on their experiences and then provide feedback on strengths, weaknesses and areas of improvement. Our team of experts will assess your profile and offer a thorough report to enhance your chances of being noticed.",
      },
      {
        title: "LinkedIn Makeover",
        text: "Represent yourself in the best way by optimising your LinkedIn presence to make it more polished and attractive. Get comprehensive assistance to utilise your LinkedIn profile to build relationships, expand your network, and showcase your expertise to be seen and gain opportunities. ",
      },
      {
        title: "Executive CV Consultation",
        text: "Get matched with a resume expert who will meet with you for an hour to discuss your aspirations for your resume and give you the tools to overhaul it, focusing on formatting, keyword optimisation, and writing style to help you put your best foot forward to board recruiters.",
      },
      {
        title: "Executive CV Makeover",
        text: "Craft a well-tailored resume for your need as a woman executive. Our expert CV coach provides a comprehensive and personalised in-depth analysis of your CV over a series of calls emphasising your most significant accomplishments which creates impact  ",
      },
      {
        title: "Thought Leadership Positioning",
        text: "Being a leader is also about the influence you make in your field often through the creation and sharing of insightful ideas. To become a successful thought leader, it is crucial to enhance your authority and influence through content marketing, social media, and other relevant mediums. These tools can help you establish yourself as an expert in your field, build credibility, and increase your visibility among the audience. Work with our experts to play a vital role in achieving thought leadership.",
      },
    ],
  },
};

export const newoffers = {
  access: {
    heading: "All Access",
    offering: [
      {
        title: "Unlimited Access to Members Forum",
        text: "Get unlimited access to TBrA's private online community through the Members Forum. Engage with over 2,500 other women leaders, collaborate around shared interests, apply for board roles, register for events, and access resources to support your board and leadership journey.",
        id: "agc",
      },
      {
        title: "Access Board Roles",
        text: "We partner with companies and organisations to bridge the diversity gap on their boards by leveraging our robust network to deliver a diverse range of board opportunities to you. Upgrade to Prime and get the additional positioning you need to gain board roles.",
        id: "fnf",
      },
      {
        title: "Access Member-Curated Webinars",
        text: "Exclusive-content webinars designed for members featuring global experts from diverse sectors, featuring topics from preparing for commercial board opportunities to building an effective board.",
        id: "676",
      },
      {
        title: "Board & Leadership Resource Library",
        text: "Browse our rich library of resources tailored to boards and leadership. In addition, you can access our collection of pre-recorded webinars on trending topics.",
        id: "uno",
      },
    ],
  },
  network: {
    heading: "Connect with Others",
    offering: [
      {
        title: "Get matched",
        subTitle: "Orbiit Monthly Matching",
        text: "- Opt in every month to be matched for a 45-minute curated virtual conversation with another member. You are matched based on compatible goals and experiences. Keep an eye out for the monthly email notification to opt-in.",
        id: "c8y",
      },
      {
        title: "Join Industry Groups",
        subTitle:
          "Connect with other members along areas of shared interest through Groups",
        text: "- Expand your network today. Members can stay connected with other industry professionals through prepopulated virtual industry groups on the Members Forum. You may also join any group of interest.",
        id: "5de",
      },
    ],
  },
  partner: {
    heading: "Partner Offers",
    offering: [
      {
        title: "Harvard Business Review Concept Submission",
        text: "In collaboration with Harvard Business Review, members are periodically invited to share article concepts to be considered for Ascend, HBR's publication targeting the next generation of business leaders. Keep an eye out for email announcements notifications.",
        id: "2u8",
      },
      {
        title: "25% Off HBR Subscription",
        text: "Exclusive to TBrA members, Harvard Business Review offers a 25% discount on its online publication",
        id: "vja",
      },
      {
        title: "25% Off IoD Membership",
        text: "Exclusive to TBrA members, the Institute of Directors in London offers a 25% discount on its full membership. The membership is designed for practising executives and non-executive directors. Benefits range from but are not limited to calls to IoD's tax and legal specialist and director advice, and access to the exclusive 116 Pall Mall in London and our hubs across the UK.",
        id: "soa",
      },
    ],
  },
  presence: {
    heading: "Personal Branding & Presence",
    offering: [
      {
        title: "Monthly Group Coaching",
        text: "Connect with our executive coaches in small group sessions to explore intimate topics from deconstructing limiting beliefs, dealing with microaggressions and more.",
        id: "63p",
      },
      {
        title: "LinkedIn Profile Audit",
        text: "We work with expert coaches to review your LinkedIn presence with the goal of positioning you for visibility. This service includes:\n- A review of your LinkedIn profile\n- A detailed report with recommendations for changes to your profile.",
        id: "3mk",
      },
      {
        title: "LinkedIn Makeover",
        text: "Work with a visibility expert for a complete LinkedIn makeover with the goal of optimising your LinkedIn presence. This service includes:\n- An exploratory call on personal branding\n- Assessment of your CV\n- Maximum two drafts for your LinkedIn profile\n- Uploading changes to your LinkedIn on your behalf (optional)",
        id: "imo",
      },
      {
        title: "Executive CV Consultation",
        text: "Get matched with a resume expert for an hour's consultation. Gain first-hand insight into what's working and what isn't. Learn ways to stand out through your CV and ways to position yourself for board or other executive roles.",
        id: "wx8",
      },
      {
        title: "Executive CV Makeover",
        text: "Take the complication out of it and work with a CV writing expert and former Executive Search leader to craft a professional CV designed to position you for the opportunities you seek. This service includes:\n- An in-depth consultation to identify your career aspirations\n- 3-hour session with the expert to review your CV\n- Maximum two new CV drafts",
        id: "980",
      },
      {
        title: "Member Spotlight",
        text: "Join a pipeline of members featured in our monthly spotlight newsletter, designed to position you for board opportunities. Prime members get priority spotlight features.",
        id: "fiy",
      },
      {
        title: "Role Application Supporting Statement",
        text: "Experience the power of unlocking new possibilities and taking your applications to the next level with a personalised narrative that highlights your qualifications and aspirations. Collaborate with a skilled expert who will help you craft a concise summary showcasing your abilities and experiences when applying for prestigious board positions or executive roles. By working together, you can create a compelling story that sets you apart from the competition and maximises your chances of success.",
        id: "qry",
      },
      {
        title: "Interview Preparation",
        text: "The interview preparation is designed to assist members in leaving a lasting impression on potential recruiters. Collaborate with an expert to employ guided strategies that enhance your confidence for any interview.",
        id: "uvw",
      },
    ],
  },
  thoughtLeadership: {
    heading: "Thought Leadership Positioning",
    offering: [
      {
        title: "Build Influence",
        subTitle: "Position Yourself as a Global Thought Leader",
        text: "- How do you get yourself heard and become a person of influence – not just in your own sector but across wider industries? A thought leadership presence has become important for today's leaders. We pair you with experts to help you brainstorm and share your ideas with the world. Sign up today and take advantage of our bundled thought leadership offers.",
        id: "i4h",
      },
    ],
  },
};

export const maleFaqs = [
  {
    title:
      "Why is TheBoardroom Africa expanding its membership to include male candidates?",
    text: "We believe the inclusion of men in our community will make our impact more transformational, and we also see this as a way to engage men broadly around conversations of inclusion and diversity - and truly make them part of the solution.\n\nIn order to make leadership teams diverse, we need to be equally intentional and ensure that all leaders, regardless of gender, are provided with the right tools and that our mission to enhance leadership opportunities for women is made richer in discourse and networks that are also diverse. We recognise that for women to advance in leadership, they need to be part of a supportive community and expand their access to men who hold the majority of leadership positions.",
  },
  {
    title: "When will this change take effect?",
    text: "Expanding our membership to include men will come into effect on 19 June 2024.",
  },
  {
    title:
      "Will the focus on promoting women executives for leadership positions change with this new development?",
    text: "TBrA will continue its commitment to fostering leadership diversity with particular emphasis on advocating for women in leadership roles given the data on gender disparity in governance and executive leadership.",
  },
  {
    title:
      "How will this change benefit the current members and the organisation as a whole?",
    text: "Incorporating men into our membership will create a more diverse and inclusive network, enhancing the richness of our community. This diversity will lead to more robust discussions, innovative ideas, and a stronger collective influence on corporate governance across the continent.\n\nThe organisations we support with our recruitment services will benefit from a wider pool of talent to ensure their need for both quality candidates and diversity are adequately met.",
  },
  {
    title: "How can current members refer male candidates for membership?",
    text: "Current members can refer exceptional male candidates for membership via [submitting a referral form](https://forms.theboardroomafrica.com/hchaeqcb). We encourage you to recommend professionals who meet our membership criteria and share our commitment to diversity and leadership excellence.",
  },
  {
    title: "What criteria will be used to select new male members?",
    text: "New male members will be selected based on their professional achievements, commitment to leadership excellence, and alignment with TBrA's values and mission. We seek individuals who will contribute positively to our community and support our goals.",
  },
  {
    title:
      "Will there be any changes to the existing programmes and initiatives?",
    text: "While our membership base is expanding, our existing programmes and initiatives and their content will remain unchanged.",
  },
  {
    title:
      "How will TBrA ensure that the inclusion of men does not dilute its mission?",
    text: "TBrA is committed to maintaining its core mission of driving leadership diversity with a strong focus on promoting women for executive and board positions. The inclusion of men is intended to enhance our efforts and the impact of our work by bringing additional perspectives and support. We will closely monitor the integration process to ensure that our mission remains strong and effective.",
  },
  {
    title: "How can members provide feedback about this change?",
    text: "If there are questions we have not addressed in this Q&A, you may email them to <info@theboardroomafrica.com>.",
  },
];

export const faqs = [
  {
    title: "What is TheBoardroom Africa",
    text: "TheBoardroom Africa (TBrA) is the region's premier business dedicated to promoting exceptional, diverse talent to board and executive positions in Africa and across the globe. We are especially committed to addressing underrepresentation in leadership roles and transforming the presence and influence of African talent on a global stage. Our services are unique and comprehensive, offering a one-stop solution for talented executives seeking to advance their leadership careers and a sanctuary for businesses needing support in transforming their leadership spaces.",
  },
  {
    title: "Why is diversity important in leadership roles and on boards?",
    text: "Diversity in leadership roles and on boards is crucial for several reasons:\n\n**Enhanced Decision-Making:** Diverse boards bring a variety of perspectives and experiences, leading to more innovative and well-rounded decision-making. This can result in better problem-solving and more effective strategies that take into account a broader range of viewpoints.\n\n**Improved Financial Performance:** Studies have shown that companies with diverse leadership teams tend to perform better financially. Diverse boards are better equipped to understand and tap into diverse markets, customer bases, and global opportunities, which can drive higher profitability and growth.\n\n**Reflecting Stakeholder Diversity:** A diverse board is more likely to understand and represent the interests of a diverse group of stakeholders, including employees, customers, and the communities in which they operate. This alignment can enhance trust and loyalty among these groups.\n\n**Fostering Innovation:** Diversity fosters a culture of innovation by encouraging different ways of thinking. Leaders from varied backgrounds can introduce new ideas and challenge the status quo, leading to creative solutions and advancements.Strengthening Corporate Governance: A diverse board is less likely to suffer from groupthink, where decision-making is impaired due to a lack of critical questioning and debate. Diverse perspectives promote rigorous discussions and healthier governance practices.\n\n**Social Responsibility and Reputation:** Demonstrating a commitment to diversity shows that a company values inclusivity and equality. This can enhance its reputation and appeal to socially conscious consumers, investors, and potential employees.\n\nOverall, diversity in leadership and on boards is not just a moral imperative but a strategic advantage that can drive long-term success and sustainability for organizations.",
  },
  {
    title: "How is TBrA improving diversity in the corporate space?",
    text: "Africa doesn't have a shortage of talented leaders, but investors and companies still have challenges finding existing talent, especially women. That's where we come in. To solve the pipeline problem that is preventing more diverse talent from reaching the boardroom, we've created a trusted community of leading executives from every sector across the continent. We pledge to promote our members for all available board positions continent-wide, and we hope to double the representation of women in Africa's boardrooms over the next 10 years.",
  },
  {
    title: "How are you improving business performance in Africa?",
    text: "Diverse boards mean embracing diversity of thought of experience. Research has shown that diverse companies outperform non-diverse companies. By changing the dynamics at the top of business, the impact of diversity radiates to across all levels of the company from employees to users and consumers. Improving gender parity means improved work environments for employees, and helps companies develop products tailored to broader segments of the population.",
  },
  {
    title:
      "How do you bridge the challenge of executives who have no board experience, but want to get on boards as most board roles require previous board experience?",
    text: "We work with business networks, companies, investors, and TBrA members to identify rising stars, and provide them with the additional training or certification to help get them “board ready”. We always assess the boards of our clients to understand the skills currently on the board and the essential skills required – prior board experience is not always a requirement.",
  },
  // {
  //   title: "Are you a for-profit business?",
  //   text: "TheBoardroom Africa is a nonprofit foundation.",
  // },
  {
    title: "How do I become a member of TheBoardroom Africa?",
    text: "To apply for membership with TheBoardroom Africa, please review our membership criteria [here](https://theboardroomafrica.com/membership/application/) and submit your application through the provided link. We will respond within 10 working days to inform you of the status of your application.",
  },
  {
    title: "How do I apply to board opportunities through TheBoardroom Africa",
    text: "To apply for board opportunities through TheBoardroom Africa, you must first become a member. Our membership application process is simple. Please review our membership criteria [here](https://theboardroomafrica.com/membership/application/) and submit your application through the provided link. We will respond within 10 working days to inform you of your membership status.",
  },
  {
    title:
      "How do I engage TheBoardroom Africa to find candidates for an open board seat at my company",
    text: "To engage TheBoardroom Africa in finding suitable candidates for an open board seat at your company, you can reach us at [search@theboardroomafrica.com](mailto:search@theboardroomafrica.com). We are eager to learn more about the role requirements and committed to exploring the solution that best suits your needs.",
  },
  {
    title: "Is there a cost to search TheBoardroom Africa for Candidates?",
    text: "Our deep industry knowledge and specialised focus enable us to tap into exclusive networks and access top-tier candidates. Companies seeking placement support through TheBoardroom Africa are charged a fee that varies based on the type of service selected, which could be an advertisement or a tailored recruitment service. For more details regarding our service rates, please contact us at [search@theboardroomafrica.com](mailto:search@theboardroomafrica.com).",
  },
  {
    title:
      "I applied as an Member and haven't heard back yet, how do I get in touch?",
    text: "We pride ourselves on efficient responses to membership requests. If you have not heard back from us within 10 working days of submitting your request, please get in contact with us via info@theboardoomafrica.com",
  },
  {
    title:
      "I'm a TBrA member, how do I make my profile more appealing for board searches?",
    text: "Our processes are designed to gather extensive details about our members' professional backgrounds, including their current and previous board and investment committee roles, as well as their preferences for types of boards and industries. Providing us with comprehensive information allows us to advocate more effectively for you during the board search process.\n\nFurthermore, we strongly encourage candidates to include a cover letter along with their CV when applying for board roles. A cover letter enables you to express your interest in the role and provides an opportunity to further emphasise your qualifications. This allows you to demonstrate how well you align with the role requirements and the value you can offer, thereby enhancing your application",
  },
  {
    title: "What countries/regions does TBrA cover?",
    text: "TheBoardroom Africa has a membership network of over 3,500 leaders across 70 countries globally. We pride ourselves in our curated community of geographically diverse talent.",
  },
  {
    title:
      "TheBoardroom Africa is strengthening it's mission of fostering diversity within the leadership landscape by opening up membership to male candidates. Why has this decision been made and what implication(s) does it have on it's work around advocating for women in leadership positions?",
    text: "We believe the inclusion of men in our community will make our impact more transformational, and we also see this as a way to engage men broadly around conversations of inclusion and diversity - and truly make them part of the solution.\n\nIn order to make leadership teams diverse, we need to be equally intentional and ensure that all leaders, regardless of gender, are provided with the right tools and that our mission to enhance leadership opportunities for women is made richer in discourse and networks and communities that are also diverse. We recognise that for women to advance in leadership, they need to be part of a supportive community and expand their access to men who hold the majority of leadership positions.",
  },
];
