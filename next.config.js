/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true
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
	async redirects() {
		// redirects old files to new domain name
		return [
			{
				source: "/wp-content/:path*",
				destination:
					"https://web.theboardroomafrica.com/wp-content/:path*",
				permanent: false,
			},

			{
				source: "/open-doors",
				destination: "/executive-programmes/open-doors",
				permanent: true,
			},
			{
				source: "/registration-form",
				destination: "/membership/application",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
