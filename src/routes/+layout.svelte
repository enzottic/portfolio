<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import { onNavigate } from '$app/navigation';

    let { children } = $props();

    // Cross-fade between pages where the browser supports view transitions.
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<div class="container">
    <Navbar />
    {@render children?.()}
</div>

<style>
    :global(:root) {
        --bg: #0b0b0d;
        --fg: #e8e9ed;
        --muted: #9a9ba3;
        --faint: #5f6068;
        --line: #1f2024;
        --hover: #17181b;
        --accent: #c669d8;
        --column: 620px;
        color-scheme: dark;
    }

    :global(html),
    :global(body) {
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        font-family: "proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        font-size: 16px;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    :global(body) {
        background-color: var(--bg);
        color: var(--fg);
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    :global(a) {
        color: var(--fg);
        text-decoration: underline;
        text-decoration-color: var(--faint);
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
        transition: color 0.15s ease, text-decoration-color 0.15s ease;
    }

    :global(a:hover) {
        color: var(--accent);
        text-decoration-color: var(--accent);
    }

    :global(a:focus-visible),
    :global(button:focus-visible) {
        outline: 2px solid var(--accent);
        outline-offset: 3px;
        border-radius: 4px;
    }

    :global(h1) {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        line-height: 1.25;
    }

    :global(::selection) {
        background-color: var(--accent);
        color: var(--bg);
    }

    /* Load-in: add class="rise" and style="--i: n" to stagger elements in. */
    :global(.rise) {
        animation: rise 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) backwards;
        animation-delay: calc(var(--i, 0) * 60ms);
    }

    @keyframes -global-rise {
        from {
            opacity: 0;
            transform: translateY(6px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.rise) {
            animation: none;
        }
    }

    .container {
        width: calc(100% - 48px);
        max-width: var(--column);
        min-width: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 480px) {
        .container {
            width: calc(100% - 32px);
        }
    }
</style>
