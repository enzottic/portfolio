<script lang="ts">
    let { data } = $props();
    const Post = $derived(data.component);

    const canonicalUrl = $derived(`https://enzottic.me/blog/${data.slug}`);
    const ogImage = $derived(
        data.metadata.image
            ? new URL(data.metadata.image, 'https://enzottic.me').href
            : undefined
    );

    let proseEl: HTMLElement;

    $effect(() => {
        // Re-run whenever the rendered post changes.
        Post;

        if (!proseEl) return;

        const blocks = proseEl.querySelectorAll<HTMLPreElement>('pre');
        blocks.forEach((pre) => {
            if (pre.parentElement?.classList.contains('code-block')) return;

            const wrapper = document.createElement('div');
            wrapper.className = 'code-block';
            pre.replaceWith(wrapper);
            wrapper.appendChild(pre);

            const button = document.createElement('button');
            button.className = 'copy-code-btn';
            button.type = 'button';
            button.textContent = 'Copy';
            button.addEventListener('click', async () => {
                const code = pre.querySelector('code')?.innerText ?? pre.innerText;
                try {
                    await navigator.clipboard.writeText(code);
                    button.textContent = 'Copied!';
                } catch {
                    button.textContent = 'Failed';
                }
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 1500);
            });
            wrapper.appendChild(button);
        });
    });
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
    {#if data.metadata.description}
        <meta name="description" content={data.metadata.description} />
    {/if}
    <link rel="canonical" href={canonicalUrl} />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.metadata.title} />
    {#if data.metadata.description}
        <meta property="og:description" content={data.metadata.description} />
    {/if}
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:site_name" content="enzottic.me" />
    <meta property="article:published_time" content={data.metadata.date} />
    {#if ogImage}
        <meta property="og:image" content={ogImage} />
    {/if}

    <!-- Twitter -->
    <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
    <meta name="twitter:title" content={data.metadata.title} />
    {#if data.metadata.description}
        <meta name="twitter:description" content={data.metadata.description} />
    {/if}
    {#if ogImage}
        <meta name="twitter:image" content={ogImage} />
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

    <div class="prose" bind:this={proseEl}>
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

    .prose :global(.code-block) {
        position: relative;
    }

    .prose :global(.code-block .copy-code-btn) {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.6rem;
        font-family: inherit;
        font-size: 0.75rem;
        color: #e8e9ed;
        background-color: #44414280;
        border: 1px solid #ffffff20;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.15s ease, background-color 0.15s ease;
    }

    .prose :global(.code-block:hover .copy-code-btn),
    .prose :global(.code-block .copy-code-btn:focus-visible) {
        opacity: 1;
    }

    .prose :global(.code-block .copy-code-btn:hover) {
        background-color: #c669d8;
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
