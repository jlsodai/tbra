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
		],
	},
	{
		name: "Board Roles",
		href: "#",
		submenu: [
			{
				name: "For Companies",
				href: "/board-roles/company",
			},
			{
				name: "For Individuals",
				href: "/board-roles/individual",
			},
		],
	},
	{
		name: "Executive Programmes",
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
				name: "Ontological Growth Experience",
				href: "/executive-programmes/ontological-growth-experience",
			},
		],
	},
	{
		name: "Partners",
		href: "/partners",
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
				href: "#!",
			},
			{
				name: "Privacy Statement",
				href: "#!",
			},
			{
				name: "Contact Us",
				href: "/get-in-touch",
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
			"The role is advertised on the Members' Forum for a month to a membership pool of 2500+ executives.",
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
			"The role is advertised on the Members' Forum for a month to a membership pool of 2500+ executives.",
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

export const memberSlides = [
	{
		title: "Society thrives when women are equal decision makers.",
		content:
			"TheBoardroom Africa is Africa's leading private membership network that promotes exceptional female talent to boards and executive teams while transforming the presence and influence of African women on a global stage.",
		style: {
			background:
				'linear-gradient(rgba(34,35,68, 0.75), rgba(34,35,68, 0.75)), url("https://tbratest.my.canva.site/membership-landing-page/images/90710e7cced9762fbf374e15a4c488c0.jpg")',
			backgroundSize: "cover",
		},
	},
	{
		title: "Influential network of women leaders",
		content:
			"Being a woman at the top can be a lonely experience; TheBoardroom Africa enables our members to realise they don’t have to go at it alone. Join the most influential private community of women leaders on the continent and together transform your leadership while staying at the top.",
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
				"Rosalind holds a Bachelor’s degree in English from the University of Ghana, a Bachelor of Laws degree from the University of London and a Master of Laws degree from University College, London. She is a member of the Bar of England and Wales and the Chartered Institute of Arbitrators.",
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
					"Regulatory scrutiny of ESG is on the rise as a growing number of countries seem to encourage companies to report on their environmental and social risk. You will learn what’s driving new regulations and reporting standards. By the end of this session, you will understand the “alphabet soup” of regulation around ESG and how it impacts corporate strategy and compliance requirements.",
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
			title: "Unlimited Access to Members Forum",
			standard: "yes",
			prime: "yes",
		},
		{
			title: "Access to Board Roles",
			standard: "yes",
			prime: "yes",
		},
		{
			title: "Access to Member-Curated Webinars",
			standard: "yes",
			prime: "yes",
		},
		{
			title: "Get matched - Unlimited Monthly Virtual Matchings",
			standard: "yes",
			prime: "yes",
		},
		{
			title: "Board & Leadership Resource Library",
			standard: "yes",
			prime: "yes",
		},
		{
			title: "TBrA Spotlight",
			standard: "yes",
			prime: "Priority",
		},
	],
	ondemand: [
		{
			title: "Monthly Group Coaching",
			standard: "Full Fee",
			prime: "1 FREE & discounted",
		},
		{
			title: "LinkedIn Profile Audit",
			standard: "Full Fee",
			prime: "30% discount",
		},
		{
			title: "LinkedIn Makeover",
			standard: "Full Fee",
			prime: "15% discount",
		},
		{
			title: "Executive CV Consultation",
			standard: "Full Fee",
			prime: "22% discount",
		},
		{
			title: "Executive CV Makeover",
			standard: "Full Fee",
			prime: "15% discount",
		},
		{
			title: "Thought Leadership Positioning",
			standard: "Full Fee",
			prime: "15% discount",
		},
	],
	exec: [
		{
			title: "Open Doors: Certificate in Company Direction",
			standard: "Member Fee",
			prime: "Discounted Member Fee",
		},
		{
			title: "ESG Certificate",
			standard: "Member Fee",
			prime: "Discounted Member Fee",
		},
		{
			title: "Ontological Growth Experience",
			standard: "Member Fee",
			prime: "Discounted Member Fee",
		},
		{
			title: "Workshops",
			standard: "Full Fee",
			prime: "Discounted Fee",
		},
	],
};
