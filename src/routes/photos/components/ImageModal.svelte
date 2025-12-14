<script lang="ts">
    import { fade } from 'svelte/transition'

    let props = $props<{
        image: string,
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
            <enhanced:img src={props.image} />

            <div class="tile1"></div>
            <h1>Yass</h1>
        {/if}
    </div>
</main>
{/if}

<style>
    .tile1 {
        width: 120px;
        height: 120px;
        background: url(props.image);
        background-position: left top;
    }

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

    img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    }
</style>
