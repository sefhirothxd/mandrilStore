/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'localhost',
			'res.cloudinary.com',
			'boletostore.com',
			'rockfordpe.vtexassets.com',
		],
	},
};

module.exports = nextConfig;
