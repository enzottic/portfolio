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
</div>

<style>
    :global(html),
    :global(body) {
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        font-family: "proxima-nova", sans-serif;
        font-size: 18px;
    }

    :global(body) {
        background-color: #0b0b0d;
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
        min-width: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        .container {
            width: 90%;
        }
    }

    @media (max-width: 480px) {
        .container {
            width: 94%;
        }
    }

    footer {
        min-height: 50px;
    }
</style>
