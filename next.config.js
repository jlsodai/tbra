/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placeholder.com",
				port: "",
				pathname: "/*",
			},
		],
	},
	// async redirects() { // redirects old files to new domain name
	// 	return [
	// 		{
	// 			source: "/wp-content/:path*",
	// 			destination: "https://theboardroomafrica.com/wp-content/:path*",
	// 			permanent: false,
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
