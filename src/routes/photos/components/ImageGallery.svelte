
<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import ImageModal from "./ImageModal.svelte";

    const imageModules = import.meta.glob('$lib/images/photo-gallery/*.{jpg,jpeg}', {
        eager: true,
        query: {
            enhanced: true
        }
    })

    let modalShown = $state(false)
    let selectedImage = $state(null)

    const handleImageClick = (image) => {
        modalShown = true
        selectedImage = image
    }

    const handleModalClose = () => {
        modalShown = false
        selectedImage = null
    }

    // CSS columns decide where each photo lands, so the stagger order is measured
    // after layout: photos higher on the page come in first, left before right on ties.
    let grid
    let ready = $state(false)

    onMount(() => {
        const items = [...grid.querySelectorAll('.grid-item')]
        const placed = items.map((el) => ({ el, rect: el.getBoundingClientRect() }))
        placed.sort((a, b) => a.rect.top - b.rect.top || a.rect.left - b.rect.left)
        placed.forEach(({ el }, rank) => el.style.setProperty('--i', String(Math.min(rank, 10))))
        ready = true
    })
</script>

<main>
    <ImageModal
        image={selectedImage}
        shown={modalShown}
        closeHandler={handleModalClose}
    />

    <div class="grid" class:ready bind:this={grid}>
        {#each Object.entries(imageModules) as [_path, module]}
            <div class="grid-item rise">
                <enhanced:img
                    src={module.default}
                    alt="idk"
                    on:click={() => handleImageClick(module.default)}
                />
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

    /*@media (max-width: 1500px) {
        .grid {
            --columns: 2;
        }
    }*/

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    img {
        transform: scale(1);
        transition: transform 0.3s ease;
    }

    img:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
</style>
