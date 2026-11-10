<script>
    import ImageGallery from "./components/ImageGallery.svelte";
    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
    title="Photos"
    description="A gallery of photography."
/>

<main>
    <ImageGallery />
</main>

<style>
    main {
        margin-bottom: 2rem;
    }
</style>
