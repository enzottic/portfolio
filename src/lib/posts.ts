import type { Component } from 'svelte';

export type PostMetadata = {
	title: string;
	date: string;
	description?: string;
	image?: string;
};

export type PostSummary = PostMetadata & {
	slug: string;
};

export type PostModule = {
	default: Component;
	metadata: PostMetadata;
};

/**
 * Eagerly load metadata for every markdown post in $lib/posts.
 * Returns posts sorted by date, newest first.
 */
export function getAllPosts(): PostSummary[] {
	const modules = import.meta.glob<PostModule>('$lib/posts/*.md', { eager: true });

	const posts: PostSummary[] = Object.entries(modules).map(([path, mod]) => {
		const slug = path.split('/').pop()!.replace(/\.md$/, '');
		return { slug, ...mod.metadata };
	});

	return posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
}
