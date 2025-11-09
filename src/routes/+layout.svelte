<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import Navbar from "$lib/components/Navbar.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
    <Navbar />
    {@render children?.()}
    <footer></footer>
</div>

<style>
    :global(html),
    :global(body) {
        width: 100%;
        min-height: 100vh;
        overflow: auto;
        font-family: "Roboto Mono", monospace;
    }

    :global(body) {
        background-color: #222225;
        color: #e8e9ed;
        display: flex;
        justify-content: center;
    }

    :global(a) {
        color: #c669d8;
    }

    .container {
        width: 50%;
        max-width: 1200px;
    }

    footer {
        min-height: 50px;
    }
</style>
