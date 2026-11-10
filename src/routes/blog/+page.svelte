<script lang="ts">
    import Seo from '$lib/components/Seo.svelte';
    let { data } = $props();
</script>

<Seo
    title="Posts"
/>

<main>
    <h1 class="rise" style="--i: 0">Posts</h1>

    {#if data.posts.length === 0}
        <p class="rise" style="--i: 1">No posts yet.</p>
    {:else}
        <ul class="post-list">
            {#each data.posts as post, index (post.slug)}
                <li class="post-item rise" style="--i: {Math.min(index + 1, 10)}">
                    <a href={`/blog/${post.slug}`}>
                        <h2>{post.title}</h2>
                        <time datetime={post.date}>
                            {new Date(post.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                timeZone: 'UTC'
                            })}
                        </time>
                        {#if post.description}
                            <p>{post.description}</p>
                        {/if}
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</main>

<style>
    .post-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem -0.625rem 4rem;
    }

    .post-item a {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: 1rem;
        align-items: baseline;
        padding: 0.75rem 0.625rem;
        border-radius: 8px;
        text-decoration: none;
        color: var(--fg);
        transition: background-color 0.15s ease, opacity 0.2s ease;
    }

    .post-item h2 {
        margin: 0;
        font-size: 1rem;
        font-weight: 400;
    }

    .post-item time {
        color: var(--faint);
        font-size: 0.875rem;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
    }

    .post-item p {
        grid-column: 1 / -1;
        margin: 0.125rem 0 0;
        color: var(--muted);
        font-size: 0.875rem;
    }

    @media (hover: hover) {
        .post-item a:hover {
            background-color: var(--hover);
        }

        .post-list:hover .post-item a:not(:hover) {
            opacity: 0.5;
        }
    }
</style>
