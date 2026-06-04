<script lang="ts">
    let {
        src,
        alt,
        caption
    }: {
        src: string;
        alt: string;
        caption?: string;
    } = $props();
</script>

<figure>
    <img {src} {alt} loading="lazy" />
    {#if caption}
        <figcaption>{caption}</figcaption>
    {/if}
</figure>

<style>
    figure {
        margin: 2rem 0;
    }

    img {
        display: block;
        max-width: 100%;
        min-width: 0;
        width: 100%;
        height: auto;
        margin: 0 auto;
        border-radius: 8px;
    }

    figcaption {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        text-align: center;
        opacity: 0.7;
    }
</style>
