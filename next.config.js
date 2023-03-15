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
};

module.exports = nextConfig;
