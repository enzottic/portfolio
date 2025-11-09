
<script lang="ts">
    import Bluesky from '$lib/assets/bluesky.svelte';
    import Mail from '$lib/assets/mail.svelte';
    import Github from '$lib/assets/github.svelte';

</script>

<svelte:head>
    <title>enzo</title>


</svelte:head>

<main>
    <svg class="background-circles" opacity="0.07" preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
        <defs>
            <style>
                @keyframes rotate {
                        0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                .out-top {
                    animation: rotate 20s linear infinite;
                    transform-origin: 13px 25px;
                }
                .in-top {
                    animation: rotate 10s linear infinite;
                    transform-origin: 13px 25px;
                }
                .out-bottom {
                    animation: rotate 25s linear infinite;
                    transform-origin: 84px 93px;
                }
                .in-bottom {
                    animation: rotate 15s linear infinite;
                    transform-origin: 84px 93px;
                }
            </style>
        </defs>
        <path fill="#c669d8" class="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
        <path fill="#222225" class="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"/>
        <path fill="#c669d8" class="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"/>
        <path fill="#222225" class="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"/>
    </svg>

    <div class="fade-in">
        <h1>enzo</h1>
        <h3>Full-time software engineer and hobbyist photographer</h3>

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
                <a href="mailto:hi@enzottic.me">
                    <Mail/>
                </a>
            </div>
        </div>
    </div>
</main>

<style>

    h1 {
        text-align: center;
        font-size: 4rem;
        margin: 0;
    }

    h3 {
        text-align: center;
        white-space: nowrap;
        margin: 10px 0;
        font-weight: normal;
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

    .fade-in {
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 1s;
    }

    @keyframes fadeInOpacity {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .social-icon {
        width: 50px;
        height: 50px;
        background-color: #2c292a;
        border-radius: 12px;
        padding: 6px;
    }

    .social-icon:hover {
        background-color: #575455;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .socials {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }

    .background-circles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 0;
    }

    @media (prefers-reduced-motion: reduce) {
        .background-circles {
            display: none;
        }
    }

    @media (max-width: 600px) {
        h3 {
            white-space: normal;
            font-size: 0.9rem;
        }
    }

</style>
