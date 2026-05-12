<script lang="ts">
    let { data } = $props();
    const Post = $derived(data.component);
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
    {#if data.metadata.description}
        <meta name="description" content={data.metadata.description} />
    {/if}
</svelte:head>

<article>
    <a class="back-link" href="/blog">← All posts</a>

    <header>
        <h1>{data.metadata.title}</h1>
        <time datetime={data.metadata.date}>
            {new Date(data.metadata.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </time>
    </header>

    <div class="prose">
        <Post />
    </div>
</article>

<style>
    article {
        max-width: 720px;
        margin: 0 auto;
        padding: 1rem 0 4rem;
    }

    .back-link {
        display: inline-block;
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
        text-decoration: none;
    }

    .back-link:hover {
        text-decoration: underline;
    }

    header h1 {
        margin: 0 0 0.25rem;
    }

    header time {
        font-size: 0.875rem;
        opacity: 0.7;
    }

    .prose {
        margin-top: 2rem;
        line-height: 1.7;
    }

    .prose :global(h2) {
        margin-top: 2rem;
        color: #c669d8;
    }

    .prose :global(h3) {
        margin-top: 1.5rem;
    }

    .prose :global(p) {
        margin: 1rem 0;
    }

    .prose :global(a) {
        color: #c669d8;
    }

    .prose :global(code) {
        background-color: #2c292a;
        padding: 0.15rem 0.4rem;
        border-radius: 4px;
        font-size: 0.9em;
    }

    .prose :global(pre) {
        background-color: #2c292a;
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
    }

    .prose :global(pre code) {
        background: transparent;
        padding: 0;
    }

    .prose :global(blockquote) {
        border-left: 3px solid #c669d8;
        margin: 1rem 0;
        padding: 0.25rem 1rem;
        opacity: 0.9;
    }

    .prose :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }
</style>
