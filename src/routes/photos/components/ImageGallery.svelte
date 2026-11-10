<script lang="ts">
    import { onMount } from "svelte";
    import ImageModal from "./ImageModal.svelte";
    import { photos, type Photo } from "$lib/images/photo-gallery";

    let selected = $state<{ photo: Photo; preview: string } | null>(null)

    const handleImageClick = (photo: Photo, event: MouseEvent) => {
        // Hand the modal whatever the browser already downloaded for the grid,
        // so it can show that instantly while the larger version loads.
        const preview = (event.currentTarget as HTMLImageElement).currentSrc || photo.placeholder
        selected = { photo, preview }
    }

    const handleModalClose = () => {
        selected = null
    }

    // Fade each photo in once it has decoded, over its blurred placeholder.
    // Images that finished before hydration (e.g. from cache) show immediately.
    const fadeIn = (node: HTMLElement) => {
        const img = node.querySelector('img')
        if (!img) return

        const done = () => node.classList.add('loaded')

        if (img.complete && img.naturalWidth > 0) {
            node.classList.add('instant')
            done()
            return
        }

        img.addEventListener('load', done, { once: true })
        img.addEventListener('error', done, { once: true })
        return () => {
            img.removeEventListener('load', done)
            img.removeEventListener('error', done)
        }
    }

    // CSS columns decide where each photo lands, so the stagger order is measured
    // after layout: photos higher on the page come in first, left before right on ties.
    let grid: HTMLDivElement
    let ready = $state(false)

    onMount(() => {
        const items = [...grid.querySelectorAll<HTMLElement>('.grid-item')]
        const placed = items.map((el) => ({ el, rect: el.getBoundingClientRect() }))
        placed.sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left)
        placed.forEach(({ el }, rank) => el.style.setProperty('--i', String(Math.min(rank, 10))))
        ready = true
    })
</script>

<main>
    <ImageModal
        image={selected?.photo.picture}
        meta={selected?.photo.meta}
        placeholder={selected?.preview}
        shown={selected !== null}
        closeHandler={handleModalClose}
    />

    <div class="grid" class:ready bind:this={grid}>
        {#each photos as photo, index (photo.path)}
            <div class="grid-item rise">
                <div
                    class="frame"
                    style:background-image="url({photo.placeholder})"
                    {@attach fadeIn}
                >
                    <enhanced:img
                        src={photo.picture}
                        alt={photo.meta?.alt ?? ''}
                        sizes="(max-width: 480px) calc(100vw - 32px), 302px"
                        loading={index < 4 ? 'eager' : 'lazy'}
                        fetchpriority={index < 2 ? 'high' : 'auto'}
                        decoding="async"
                        onclick={(event: MouseEvent) => handleImageClick(photo, event)}
                    />
                </div>
            </div>
        {/each}
    </div>
</main>

<style>

    .grid {
        --gap: 1em;
        --columns: 2;
        /* CSS columns fill top-to-bottom, so the load-in cascades down the left column, then the right. */
        margin: 0 auto;
        columns: var(--columns);
        gap: var(--gap);
    }

    /* Hold the load-in until the order above has been measured. */
    .grid:not(.ready) .grid-item {
        animation-play-state: paused;
    }

    .grid-item {
        break-inside: avoid;
        padding-bottom: var(--gap);
    }

    /* fallback to 1 column when viewing on a phone */
    @media (max-width: 480px) {
        .grid {
            --columns: 1;
        }
    }

    /* The blurred placeholder fills the photo's box until the real image arrives. */
    .frame {
        background-size: cover;
        background-position: center;
    }

    .frame :global(img) {
        display: block;
        width: 100%;
        height: auto;
        opacity: 0;
        transform: scale(1);
        transition: opacity 0.4s ease, transform 0.3s ease;
    }

    .frame:global(.loaded) :global(img) {
        opacity: 1;
    }

    .frame:global(.instant) :global(img) {
        transition: transform 0.3s ease;
    }

    .frame :global(img:hover) {
        transform: scale(1.02);
        cursor: pointer;
    }

    @media (prefers-reduced-motion: reduce) {
        .frame :global(img) {
            transition: none;
        }
    }
</style>
