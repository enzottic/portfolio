<script>
    import ImageGallery from "./components/ImageGallery.svelte";
    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
    title="Photos"
    description="Photo gallery for enzottic.me"
/>

<main>
    <ImageGallery />
</main>

<style>
    main {
        margin-bottom: 2rem;
    }
</style>
