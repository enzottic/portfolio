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
        overflow-x: hidden;
        font-family: "Roboto Mono", monospace;
    }

    :global(body) {
        background-color: #222225;
        color: #e8e9ed;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    :global(a) {
        color: #c669d8;
    }

    .container {
        width: 70%;
        max-width: 1200px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    footer {
        min-height: 50px;
    }
</style>
