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

    // Masonry that reads left to right: each photo goes into whichever column is
    // currently shorter, so the 1st and 2nd photos sit side by side, and so on.
    // Heights are known up front from the image dimensions (as a multiple of the
    // column width), plus a rough allowance for the gap below each photo.
    const COLUMNS = 2
    const GAP = 0.05
    const columns = (() => {
        const cols: { photo: Photo; index: number }[][] = Array.from({ length: COLUMNS }, () => [])
        const heights = new Array(COLUMNS).fill(0)
        photos.forEach((photo, index) => {
            const shortest = heights.indexOf(Math.min(...heights))
            cols[shortest].push({ photo, index })
            heights[shortest] += photo.picture.img.h / photo.picture.img.w + GAP
        })
        return cols
    })()

    // Layout decides where each photo lands, so the stagger order is measured
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
        {#each columns as column}
        <div class="column">
        {#each column as { photo, index } (photo.path)}
            <div class="grid-item rise" style:order={index}>
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
        {/each}
    </div>
</main>

<style>

    .grid {
        --gap: 1em;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        gap: var(--gap);
    }

    .column {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
    }

    /* Hold the load-in until the order above has been measured. */
    .grid:not(.ready) .grid-item {
        animation-play-state: paused;
    }

    .grid-item {
        padding-bottom: var(--gap);
    }

    /* On a phone, merge the columns into one list, back in metadata.json order. */
    @media (max-width: 480px) {
        .grid {
            flex-direction: column;
            align-items: stretch;
        }

        .column {
            display: contents;
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
        transition: opacity 0.4s ease;
        cursor: pointer;
    }

    .frame:global(.loaded) :global(img) {
        opacity: 1;
    }

    .frame:global(.instant) :global(img) {
        transition: none;
    }

    @media (prefers-reduced-motion: reduce) {
        .frame :global(img) {
            transition: none;
        }
    }
</style>
