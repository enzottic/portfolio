<script lang="ts">
    import routes from "$lib/nav-routes"
</script>

<div>
    <div class="buttons">
        {#each routes as route}
            <a class="hover-underline-animation" href={route.href}>{route.label}</a>
        {/each}
    </div>
</div>

<style>

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
        content: '';
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

</style>