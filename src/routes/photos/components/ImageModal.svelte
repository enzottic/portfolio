<script lang="ts">
    import { fade } from 'svelte/transition'
    import type { PhotoMeta } from '$lib/images/photo-gallery'

    type Picture = {
        sources: Record<string, string>;
        img: { src: string; w: number; h: number };
    }

    let props = $props<{
        image?: Picture | string | null,
        meta?: PhotoMeta,
        // An already-loaded image (e.g. the grid thumbnail) to show while the
        // full-size version downloads.
        placeholder?: string,
        shown: boolean,
        closeHandler: () => void
    }>()

    function closeModal() {
        props.closeHandler()
    }

    // Known up front from the build, so the frame can take its final size
    // before the full image downloads and the caption never jumps.
    const aspect = $derived(
        props.image && typeof props.image !== 'string'
            ? props.image.img.w / props.image.img.h
            : null
    )
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
            <figure class="photo" class:sized={aspect !== null} style:--aspect={aspect}>
                <enhanced:img
                    src={props.image}
                    alt={props.meta?.alt ?? ''}
                    sizes="100vw"
                    style:background-image={props.placeholder ? `url(${props.placeholder})` : undefined}
                />
                {#if props.meta}
                    <figcaption class="glass">
                        <span><span class="label">Camera:</span> {props.meta.camera}</span>
                        <span><span class="label">Location:</span> {props.meta.location}</span>
                    </figcaption>
                {/if}
            </figure>
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

    /* Shrink-wraps the photo so the caption can sit on its bottom-left corner. */
    .photo {
        position: relative;
        margin: 0;
        max-width: 100%;
    }

    .photo :global(img) {
        display: block;
        max-width: 100vw;
        max-height: 80vh;
        width: auto;
        height: auto;
        object-fit: contain;
        /* The preview sits underneath, stretched to the same box, until the full image paints over it. */
        background-size: 100% 100%;
    }

    /* Reserve the photo's final box (fit within 100vw × 80vh) with a grey
       placeholder, so the caption sits in its final spot from the first frame. */
    .photo.sized {
        width: min(100vw, calc(80vh * var(--aspect)));
        aspect-ratio: var(--aspect);
        background-color: #3a3a3c;
    }

    .photo.sized :global(img) {
        width: 100%;
        height: 100%;
    }

    /* Liquid-glass panel: a frosted, slightly brightened copy of the photo behind it,
       a light rim along the top edge, and a soft shadow to lift it off the image. */
    .glass {
        position: absolute;
        left: 12px;
        bottom: 12px;
        max-width: calc(100% - 24px);
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 9px 13px 10px;
        border-radius: 16px;
        background: rgba(120, 120, 128, 0.28);
        backdrop-filter: blur(18px) saturate(180%) brightness(0.9);
        -webkit-backdrop-filter: blur(18px) saturate(180%) brightness(0.9);
        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            inset 0 0 0 0.5px rgba(255, 255, 255, 0.18),
            0 6px 20px rgba(0, 0, 0, 0.25);
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
        font-size: 11px;
        line-height: 1.3;
        font-weight: 500;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        pointer-events: none;
        animation: glass-in 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.2) 0.1s both;
    }

    .label {
        color: #f5d547;
        font-weight: 600;
    }

    @keyframes glass-in {
        from {
            opacity: 0;
            transform: translateY(6px) scale(0.96);
        }
    }

    /* Browsers without backdrop-filter get a solid, still-readable panel. */
    @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
        .glass {
            background: rgba(40, 40, 44, 0.85);
        }
    }

    @media (max-width: 480px) {
        .glass {
            left: 8px;
            bottom: 8px;
            max-width: calc(100% - 16px);
            padding: 7px 10px 8px;
            border-radius: 13px;
            font-size: 10px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .glass {
            animation: none;
        }
    }
</style>
