/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['localhost', 'res.cloudinary.com', 'boletostore.com'],
	},
};

module.exports = nextConfig;
