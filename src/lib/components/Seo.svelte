<script lang="ts">
    import { page } from '$app/state';

    const SITE_URL = 'https://enzottic.me';
    const SITE_NAME = 'enzottic.me';
    const DEFAULT_DESCRIPTION = 'full time software engineer and hobbyist photographer';
    let {
        title,
        description = DEFAULT_DESCRIPTION,
        image,
        type = 'website',
        noindex = false
    }: {
        title: string;
        description?: string;
        image?: string;
        type?: 'website' | 'article' | 'profile';
        noindex?: boolean;
    } = $props();

    const fullTitle = $derived(
        title === SITE_NAME ? title : `${title} · ${SITE_NAME}`
    );
    const canonicalUrl = $derived(new URL(page.url.pathname, SITE_URL).href);
    const ogImage = $derived(image ? new URL(image, SITE_URL).href : undefined);
</script>

<svelte:head>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl} />
    <link rel="stylesheet" href="https://use.typekit.net/sdo3luh.css">
    {#if noindex}
        <meta name="robots" content="noindex, nofollow" />
    {/if}

    <!-- Open Graph -->
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:site_name" content={SITE_NAME} />
    {#if ogImage}
        <meta property="og:image" content={ogImage} />
    {/if}

    <!-- Twitter -->
    <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {#if ogImage}
        <meta name="twitter:image" content={ogImage} />
    {/if}
</svelte:head>
