import { getAllPosts } from '$lib/posts';

const SITE_URL = 'https://enzottic.me';

const staticRoutes = [
	{ path: '/', priority: '1.0', changefreq: 'monthly' },
	{ path: '/blog', priority: '0.8', changefreq: 'weekly' },
	{ path: '/photos', priority: '0.7', changefreq: 'monthly' },
	{ path: '/projects', priority: '0.7', changefreq: 'monthly' },
	{ path: '/sage', priority: '0.6', changefreq: 'monthly' },
	{ path: '/sage/privacy', priority: '0.3', changefreq: 'yearly' }
];

export const prerender = true;

export function GET() {
	const posts = getAllPosts();

	const urls = [
		...staticRoutes.map(
			(route) => `	<url>
		<loc>${SITE_URL}${route.path}</loc>
		<changefreq>${route.changefreq}</changefreq>
		<priority>${route.priority}</priority>
	</url>`
		),
		...posts.map(
			(post) => `	<url>
		<loc>${SITE_URL}/blog/${post.slug}</loc>
		<lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>`
		)
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
