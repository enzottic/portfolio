<script lang="ts">
    import routes from "$lib/nav-routes";
    import { page } from '$app/state';

    const isCurrent = (href: string) =>
        href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
</script>

<nav aria-label="Main">
    {#each routes as route}
        <a href={route.href} aria-current={isCurrent(route.href) ? 'page' : undefined}>
            {route.label}
        </a>
    {/each}
</nav>

<style>
    /* Always sits on the narrow column, so it doesn't jump on wide pages. */
    nav {
        display: flex;
        gap: 1.25rem;
        width: 100%;
        max-width: var(--column);
        margin: 0 auto;
        padding: 2.5rem 0 3rem;
        font-size: 0.875rem;
    }

    a {
        color: var(--muted);
        text-decoration: none;
        padding: 0.25rem 0;
    }

    a:hover {
        color: var(--fg);
    }

    a[aria-current='page'] {
        color: var(--fg);
    }

    @media (max-width: 480px) {
        nav {
            padding: 1.5rem 0 2rem;
        }
    }
</style>
