<script lang="ts">
    let { data } = $props();
</script>

<svelte:head>
    <title>Posts</title>
</svelte:head>

<main>
    <h1>Posts</h1>

    {#if data.posts.length === 0}
        <p>No posts yet.</p>
    {:else}
        <ul class="post-list">
            {#each data.posts as post (post.slug)}
                <li class="post-item">
                    <a href={`/blog/${post.slug}`}>
                        <h2>{post.title}</h2>
                        <time datetime={post.date}>
                            {new Date(post.date).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
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
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .post-item a {
        display: block;
        padding: 1.25rem 1.5rem;
        background-color: #2c292a;
        border-radius: 12px;
        text-decoration: none;
        color: inherit;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .post-item a:hover {
        background-color: #3a3739;
        transform: translateY(-2px);
    }

    .post-item h2 {
        margin: 0 0 0.25rem;
        color: #c669d8;
    }

    .post-item time {
        font-size: 0.875rem;
        opacity: 0.7;
    }

    .post-item p {
        margin: 0.5rem 0 0;
    }
</style>
