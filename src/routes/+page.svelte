<script lang="ts">
    import enzoGif from '$lib/assets/enzo.gif';
    import enzoClosedGif from '$lib/assets/enzo-closed.gif';
    import Seo from '$lib/components/Seo.svelte';
    import { photos } from '$lib/images/photo-gallery';

    let { data } = $props();

    const strip = photos.slice(0, 5);

    type Row = {
        title: string;
        description?: string;
        meta: string;
        href: string;
        external?: boolean;
        preview?: string;
    };

    const building: Row[] = [
        {
            title: 'Syl',
            description: 'Expense tracking app',
            meta: 'Now',
            href: 'https://getsyl.app',
            external: true
        }
    ];

    const projects: Row[] = [
        {
          title: "Steamdle",
          description: "Guess which Steam game has more concurrent players!",
          meta: "May 2026",
          href: 'https://steamdle.xyz',
          external: true,
        },
        {
            title: 'Loopover',
            description: 'Sliding puzzle game · Best Beginner Hack, HackCU 10',
            meta: 'SwiftUI',
            href: '/projects#loopover',
        },
        {
            title: 'Lexel',
            description: 'Learn a language by reading what you care about',
            meta: 'SwiftUI',
            href: '/projects#lexel',
        }
    ];

    const writing: Row[] = $derived(
        data.posts.map((post) => ({
            title: post.title,
            meta: new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
                timeZone: 'UTC'
            }),
            href: `/blog/${post.slug}`
        }))
    );

    // --- Hover preview: the image resolves from chunky pixels, like the GIF above. ---
    const MAX_SIDE = 300;
    const STEPS = [6, 12, 22, 40, 72];
    const STEP_MS = 55;

    let canvas: HTMLCanvasElement;
    let shown = $state(false);
    let box = $state({ w: 0, h: 0 });
    let pos = $state({ x: 0, y: 0 });
    let run = 0;
    const loaded = new Map<string, HTMLImageElement>();

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    function loadImage(src: string) {
        return new Promise<HTMLImageElement>((resolve, reject) => {
            const cached = loaded.get(src);
            if (cached) return resolve(cached);
            const image = new Image();
            image.onload = () => {
                loaded.set(src, image);
                resolve(image);
            };
            image.onerror = reject;
            image.src = src;
        });
    }

    function place(event: PointerEvent) {
        const gap = 24;
        let x = event.clientX + gap;
        if (x + box.w > window.innerWidth - 12) x = event.clientX - gap - box.w;
        const y = Math.min(
            Math.max(12, event.clientY - box.h / 2),
            window.innerHeight - box.h - 12
        );
        pos = { x, y };
    }
</script>

<Seo
    title="enzo"
/>

{#snippet rows(label: string, items: Row[], index: number)}
    <section class="rise" style="--i: {index}">
        <h2>{label}</h2>
        <ul class="rows">
            {#each items as item (item.href)}
                <li>
                    <a
                        class="row"
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                        <span class="row-title">
                            {item.title}{#if item.external}<span class="arrow" aria-hidden="true">↗</span>{/if}
                        </span>
                        {#if item.description}
                            <span class="row-description">{item.description}</span>
                        {/if}
                        <span class="row-meta">{item.meta}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </section>
{/snippet}

<main>
    <header class="rise" style="--i: 0">
        <span class="avatar">
            <img src={enzoGif} alt="" />
            <img class="avatar-hover" src={enzoClosedGif} alt="" />
        </span>
        <div>
            <h1>Enzo</h1>
            <p class="contact">
                <a href="https://bsky.app/profile/enzo.social" target="_blank" rel="noopener noreferrer">Bluesky</a>
                <a href="https://github.com/enzottic" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:mail@enzottic.me">Email</a>
            </p>
        </div>
    </header>

    <p class="bio rise" style="--i: 1">
        I'm a full time software engineer and hobbyist photographer. I'm currently working on an
        expense tracking app called <a href="https://getsyl.app">Syl</a>.
    </p>

    {@render rows('Making', building, 2)}
    {@render rows('Projects', projects, 3)}
    {#if writing.length > 0}
        {@render rows('Writing', writing, 4)}
    {/if}

    {#if strip.length > 0}
        <section class="rise" style="--i: 5">
            <h2>Photos</h2>
            <a class="strip" href="/photos" aria-label="Open the photo gallery">
                {#each strip as photo (photo.path)}
                    <enhanced:img
                        src={photo.picture}
                        alt=""
                        sizes="140px"
                        loading="lazy"
                        style:background-image="url({photo.placeholder})"
                    />
                {/each}
            </a>
        </section>
    {/if}
</main>

<canvas
    class="preview"
    class:shown
    bind:this={canvas}
    aria-hidden="true"
    style="width: {box.w}px; height: {box.h}px; transform: translate3d({pos.x}px, {pos.y}px, 0);"
></canvas>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 2.75rem;
        padding-bottom: 5rem;
    }

    /* Header */
    header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .avatar {
        position: relative;
        display: block;
        flex-shrink: 0;
        width: 88px;
    }

    .avatar img {
        display: block;
        width: 100%;
        height: auto;
        image-rendering: pixelated;
    }

    .avatar .avatar-hover {
        position: absolute;
        inset: 0;
        visibility: hidden;
    }

    .avatar:hover img:first-child {
        visibility: hidden;
    }

    .avatar:hover .avatar-hover {
        visibility: visible;
    }

    h1 {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0;
    }

    .contact {
        display: flex;
        gap: 0.875rem;
        margin: 0.125rem 0 0;
        font-size: 0.875rem;
    }

    .contact a {
        color: var(--muted);
        text-decoration: none;
    }

    .contact a:hover {
        color: var(--accent);
    }

    .bio {
        margin: -1rem 0 0;
        max-width: 34rem;
        color: var(--fg);
    }

    /* Sections */
    section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    h2 {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--muted);
    }

    .rows {
        list-style: none;
        margin: 0 -0.625rem;
        padding: 0;
    }

    .row {
        display: flex;
        align-items: baseline;
        gap: 0.875rem;
        padding: 0.5rem 0.625rem;
        border-radius: 8px;
        color: var(--fg);
        text-decoration: none;
        transition: background-color 0.15s ease, opacity 0.2s ease;
    }

    .row-title {
        flex: 0 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .arrow {
        margin-left: 0.25rem;
        color: var(--faint);
        font-size: 0.8em;
    }

    .row-description {
        flex: 1 1 0;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--muted);
    }

    .row-meta {
        flex: none;
        margin-left: auto;
        color: var(--faint);
        font-size: 0.875rem;
        font-variant-numeric: tabular-nums;
    }

    @media (hover: hover) {
        .row:hover {
            background-color: var(--hover);
            color: var(--fg);
        }

        /* Dim the neighbours so the hovered row reads as selected. */
        .rows:hover .row:not(:hover) {
            opacity: 0.5;
        }
    }

    /* Photo strip */
    .strip {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
        margin-top: 0.25rem;
        text-decoration: none;
    }

    .strip :global(picture) {
        display: block;
        aspect-ratio: 1;
        overflow: hidden;
        border-radius: 6px;
        background-color: var(--hover);
    }

    .strip :global(img) {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-size: cover;
        background-position: center;
        opacity: 0.85;
        transition: opacity 0.2s ease, transform 0.4s ease;
    }

    @media (hover: hover) {
        .strip:hover :global(img) {
            opacity: 1;
        }

        .strip :global(picture:hover img) {
            transform: scale(1.04);
        }
    }

    /* Hover preview */
    .preview {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        pointer-events: none;
        border-radius: 10px;
        border: 1px solid var(--line);
        background-color: var(--hover);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        image-rendering: pixelated;
        opacity: 0;
        visibility: hidden;
    }

    .preview.shown {
        opacity: 1;
        visibility: visible;
    }

    @media (prefers-reduced-motion: reduce) {
        .row,
        .strip :global(img) {
            transition: none;
        }
    }

    @media (max-width: 560px) {
        .row {
            flex-wrap: wrap;
            row-gap: 0;
        }

        .row-title {
            flex: 1 1 0;
        }

        .row-description {
            order: 3;
            flex: 1 1 100%;
            white-space: normal;
            font-size: 0.875rem;
        }

        .strip {
            gap: 0.375rem;
        }
    }
</style>
