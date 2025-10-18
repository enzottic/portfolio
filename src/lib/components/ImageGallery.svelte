
<script>
    // @ts-nocheck

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
</script>

<main>
    <ImageModal 
        image={selectedImage} 
        shown={modalShown} 
        closeHandler={handleModalClose}
    />

    <div class="grid">
        {#each Object.entries(imageModules) as [_path, module]}
            <enhanced:img 
                class="grid-image"
                src={module.default} 
                alt="idk" 
                on:click={() => handleImageClick(module.default)}
            />
        {/each}
    </div>
</main>

<style>
    
    .grid {
        --gap: 1em;
        --columns: 3;
        margin: 0 auto;
        display: column;
        columns: var(--columns);
        gap: var(--gap);
    }

    .grid-image {
        break-inside: avoid;
        padding-bottom: var(--gap);
    }

    @supports(grid-template-rows: masonry) {
        .grid {
            display: grid;
            grid-template-columns: repeat(var(--columns), 1fr);
            grid-template-rows: masonry;
        }

        .grid > * {
            margin-bottom: 0em;
        }
    }

    /* fallback to 1 column when viewing on a phone */
    @media (max-width: 600px) {
        .grid {
            --columns: 1;
        }
    }

    img {
        max-width: 100%;
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
