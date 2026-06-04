
<script lang="ts">
    import Bluesky from '$lib/assets/bluesky.svelte';
    import Mail from '$lib/assets/mail.svelte';
    import Github from '$lib/assets/github.svelte';
    import enzoGif from '$lib/assets/enzo.gif';

</script>

<svelte:head>
    <title>enzo</title>
</svelte:head>

<main>
    <div class="hero-layout">
        <div class="hero-left">
            <img class="hero-gif" src={enzoGif} alt="Enzo animation" />
        </div>
        <div class="hero-right">
            <p>I'm a full time software engineer and hobbyist photographer.</p>
            <p>I'm currently working on an expense tracking app called <a href="/sage">Sage</a>.</p>
            <p>I'm mostly building it for myself, but I will post it once it's ready.</p>

            <div class="socials">
                <div class="social-icon">
                    <a href="https://bsky.app/profile/enzo.social" target="_blank" rel="noopener noreferrer">
                        <Bluesky />
                    </a>
                </div>
                <div class="social-icon">
                    <a href="https://github.com/enzottic" target="_blank" rel="noopener noreferrer">
                        <Github/>
                    </a>
                </div>
                <div class="social-icon">
                    <a href="mailto:mail@enzottic.me">
                        <Mail/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<style>

    .extras-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10;
    }

    .extras-button a {
        display: inline-block;
        padding: 12px 24px;
        background-color: #2c292a;
        color: #fff;
        text-decoration: none;
        border-radius: 12px;
        transition: background-color 0.3s ease;
    }

    .extras-button a:hover {
        background-color: #575455;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        min-height: 0;
        position: relative;
    }

    .hero-layout {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 64px;
        max-width: 900px;
        width: 100%;
        padding: 0 24px;
    }

    .hero-left {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
    }

    .hero-gif {
        display: block;
        width: 160px;
        max-width: 40vw;
        image-rendering: pixelated;
    }

    .social-icon {
        width: 38px;
        height: 38px;
        background-color: transparent;
        border: 1px solid #3f3f46;
        border-radius: 12px;
        padding: 4px;
        transition: border-color 0.3s ease;
    }

    .social-icon:hover {
        background-color: transparent;
        border-color: #6b7280;
        cursor: pointer;
    }

    .socials {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 20px;
    }

    @media (max-width: 1100px) {
        .hero-layout {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 24px;
            padding: 0 16px;
        }

        .hero-right {
            align-items: center;
            white-space: normal;
            text-align: center;
        }

        .socials {
            justify-content: center;
        }
    }

</style>
