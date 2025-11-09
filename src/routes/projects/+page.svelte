
<script>
    import ImageModal from '../photos/components/ImageModal.svelte';

    const loopoverImages = import.meta.glob('$lib/images/project-images/loopover/*.{jpg,jpeg,png}', {
        eager: true,
        query: {
            enhanced: true
        }
    });

    const lexelImages = import.meta.glob('$lib/images/project-images/lexel/*.{jpg,jpeg,png}', {
        eager: true,
        query: {
            enhanced: true
        }
    });

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

    <h1>Projects</h1>

    <h2>Loopover</h2>

    <p>Winner of Best Beginner Hack at <a href="https://devpost.com/software/loopover">HackCU 10</a></p>

    <p>A 2D Rubix Cube-style puzzle game for iOS devices. Based on carykh's <a href="https://openprocessing.org/sketch/580366/">Loopover</a>. Made natively using Swift and SwiftUI.</p>

    <a href="https://github.com/enzottic/loopover-ios">View on GitHub</a>

<!-- insert image -->
    <div class = "demo-images">
        {#each Object.entries(loopoverImages) as [_path, module]}
            <enhanced:img 
                src={module.default} 
                on:click={() => handleImageClick(module.default)}
            />
        {/each}
    </div>

    <h2>Lexel</h2>
    <p>A spaced-repetition based language learning app that lets you learn by reading what you care about. Built with SwiftUI and Google's ML Kit.</p>
    <a href="https://github.com/typicel/Lexel">View on Github</a>

    <div class="demo-images">
        {#each Object.entries(lexelImages) as [_path, module]}
            <enhanced:img 
                src={module.default} 
                on:click={() => handleImageClick(module.default)}
            />
        {/each}
    </div>

</main>

<style>

    .demo-images img {
        border-radius: 10px;
        width: 300px;
        height: auto;
        cursor: pointer;
        transform: scale(1);
        transition: transform 0.3s ease;
    }

    .demo-images img:hover {
        transform: scale(1.02);
    }

    .demo-images {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 20px;
    }

    @media (max-width: 1000px) {
        .demo-images {
            flex-direction: column;
            align-items: center;
        }
    }

</style>
