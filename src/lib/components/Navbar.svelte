<script lang="ts">
    import routes from "$lib/nav-routes";

    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }
</script>

<nav>
    <div class="buttons">
        {#each routes as route}
            <a class="hover-underline-animation" href={route.href}>{route.label}</a>
        {/each}
    </div>

    <button class="burger" aria-label="Toggle menu" aria-expanded={menuOpen} onclick={toggleMenu}>
        <span class="bar" class:open={menuOpen}></span>
        <span class="bar" class:open={menuOpen}></span>
        <span class="bar" class:open={menuOpen}></span>
    </button>

    {#if menuOpen}
        <div class="mobile-menu">
            {#each routes as route}
                <a href={route.href} onclick={closeMenu}>{route.label}</a>
            {/each}
        </div>
    {/if}
</nav>

<style>
    nav {
        position: relative;
    }

    .buttons {
        text-align: center;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
    }

    .hover-underline-animation::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #c669d8;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    /* Burger button — hidden on desktop */
    .burger {
        display: none;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
    }

    .bar {
        display: block;
        width: 24px;
        height: 2px;
        background-color: #e8e9ed;
        border-radius: 2px;
        transition: transform 0.25s ease, opacity 0.25s ease;
    }

    /* Animate bars into an X when open */
    .burger .bar:nth-child(1).open {
        transform: translateY(7px) rotate(45deg);
    }
    .burger .bar:nth-child(2).open {
        opacity: 0;
    }
    .burger .bar:nth-child(3).open {
        transform: translateY(-7px) rotate(-45deg);
    }

    /* Mobile dropdown menu */
    .mobile-menu {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        background-color: #18181b;
        border: 1px solid #3f3f46;
        border-radius: 10px;
        padding: 8px 0;
        min-width: 140px;
        z-index: 100;
    }

    .mobile-menu a {
        padding: 10px 20px;
        color: #e8e9ed;
        text-decoration: none;
        font-size: 0.95rem;
    }

    .mobile-menu a:hover {
        background-color: #27272a;
    }

    @media (max-width: 1100px) {
        .buttons {
            display: none;
        }

        .burger {
            display: flex;
        }
    }
</style>
