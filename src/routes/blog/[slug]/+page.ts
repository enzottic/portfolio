import { error } from '@sveltejs/kit';
import type { PostModule } from '$lib/posts';
import { getAllPosts } from '$lib/posts';

export const prerender = 'auto';

export function entries() {
	return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function load({ params }) {
	const modules = import.meta.glob<PostModule>('$lib/posts/*.md');
	const match = modules[`/src/lib/posts/${params.slug}.md`];

	if (!match) {
		throw error(404, `Post "${params.slug}" not found`);
	}

	const post = await match();

	return {
		slug: params.slug,
		metadata: post.metadata,
		component: post.default
	};
}
