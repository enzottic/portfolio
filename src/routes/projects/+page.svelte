
<script lang="ts">
    import ImageModal from '../photos/components/ImageModal.svelte';
    import Seo from '$lib/components/Seo.svelte';

    type ImageModule = { default: string };

    const loopoverImages = import.meta.glob<ImageModule>(
        '$lib/images/project-images/loopover/*.{jpg,jpeg,png}',
        {
            eager: true,
            query: { enhanced: true }
        }
    );

    const lexelImages = import.meta.glob<ImageModule>(
        '$lib/images/project-images/lexel/*.{jpg,jpeg,png}',
        {
            eager: true,
            query: { enhanced: true }
        }
    );

    let modalShown = $state(false);
    let selectedImage = $state<string>('');

    const handleImageClick = (image: string) => {
        modalShown = true;
        selectedImage = image;
    };

    const handleModalClose = () => {
        modalShown = false;
        selectedImage = '';
    };
</script>

<Seo
    title="Projects"
/>

<main>
    <ImageModal
        image={selectedImage}
        shown={modalShown}
        closeHandler={handleModalClose}
    />

    <h1>Projects</h1>

    <h2 id="loopover">Loopover</h2>

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

    <h2 id="lexel">Lexel</h2>
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
    /* enhanced:img renders <picture><img>, so target both through :global */
    .demo-images {
        display: flex;
        gap: 16px;
        align-items: flex-start;
        margin-top: 20px;
    }

    .demo-images :global(picture) {
        flex: 1 1 0;
        min-width: 0;
    }

    .demo-images :global(img) {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 10px;
        cursor: pointer;
        transform: scale(1);
        transition: transform 0.3s ease;
    }

    .demo-images :global(img:hover) {
        transform: scale(1.02);
    }

    @media (max-width: 480px) {
        .demo-images {
            flex-direction: column;
        }

        .demo-images :global(picture) {
            width: 100%;
        }
    }
</style>
