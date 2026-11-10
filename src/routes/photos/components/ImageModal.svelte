<script lang="ts">
    import { fade } from 'svelte/transition'

    type Picture = {
        sources: Record<string, string>;
        img: { src: string; w: number; h: number };
    }

    let props = $props<{
        image?: Picture | string | null,
        // An already-loaded image (e.g. the grid thumbnail) to show while the
        // full-size version downloads.
        placeholder?: string,
        shown: boolean,
        closeHandler: () => void
    }>()

    function closeModal() {
        props.closeHandler()
    }
</script>

{#if props.shown}
<main>
    <div
        class="modal-backdrop"
        role="button"
        tabindex="0"
        onclick={closeModal}
        onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeModal(); }}
        aria-label="Close modal"
        transition:fade={{ duration: 100 }}
    >
        {#if props.image}
            <button class="close-button" onclick={closeModal} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') closeModal(); }}>x</button>
            <enhanced:img
                src={props.image}
                alt=""
                sizes="100vw"
                style:background-image={props.placeholder ? `url(${props.placeholder})` : undefined}
            />
        {/if}
    </div>
</main>
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-backdrop :global(img) {
        max-width: 100%;
        max-height: 80vh;
        width: auto;
        height: auto;
        object-fit: contain;
        /* The preview sits underneath, stretched to the same box, until the full image paints over it. */
        background-size: 100% 100%;
    }
</style>
