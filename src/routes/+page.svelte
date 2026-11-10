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

    const making: Row[] = [
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
                <a href="https://bsky.app/profile/enzo.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky" title="Bluesky">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>
                </a>
                <a href="https://github.com/enzottic" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <a href="mailto:mail@enzottic.me" aria-label="Email" title="Email">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </a>
            </p>
        </div>
    </header>

    <p class="bio rise" style="--i: 1">
        I'm a full time software engineer and hobbyist photographer. I'm currently working on an
        expense tracking app called <a href="https://getsyl.app">Syl</a>.
    </p>

    {@render rows('Making', making, 2)}
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
        margin: 0.375rem 0 0;
    }

    .contact a {
        display: inline-flex;
        color: var(--muted);
        text-decoration: none;
        transition: color 0.15s ease;
    }

    .contact svg {
        display: block;
        width: 18px;
        height: 18px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.75;
        stroke-linecap: round;
        stroke-linejoin: round;
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

        .rows:hover .row:not(:hover) {
            opacity: 0.5;
        }
    }

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
