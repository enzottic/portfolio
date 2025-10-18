
<script>
    const loopoverImages = import.meta.glob('$lib/images/project-images/loopover/*.{jpg,jpeg,png}', {
        eager: true,
        query: {
            enhanced: true
        }
    });

    const lexelImages = import.meta.glob('$lib/images/project-images/lexel/*.{jpg,jpeg,png}', {
        eager: true,
        query: {
            enhanced: true
        }
    });
</script>

<main>
    <h1>Projects</h1>

    <h2>Loopover</h2>

    <p>Winner of Best Beginner Hack at [HackCU 10](https://devpost.com/software/loopover)</p>

    <p>A 2D Rubix Cube-style puzzle game for iOS devices. Based on carykh's [Loopover](https://openprocessing.org/sketch/580366/). Made natively using Swift and SwiftUI.</p>

    <a href="https://github.com/enzottic/loopover-ios">View on GitHub</a>

<!-- insert image -->
    <div class = "demo-images">
        {#each Object.entries(loopoverImages) as [_path, module]}
            <enhanced:img src={module.default} />
        {/each}
    </div>

    <h2>Lexel</h2>
    <p>A spaced-repetition based language learning app that lets you learn by reading what you care about. Built with SwiftUI and Google's ML Kit.</p>
    <a href="https://github.com/typicel/Lexel">View on Github</a>

    <div class="demo-images">
        {#each Object.entries(lexelImages) as [_path, module]}
            <enhanced:img src={module.default} />
        {/each}
    </div>

</main>

<style>

    .demo-images img {
        border-radius: 10px;
        width: 300px;
        height: auto;
    }

    .demo-images {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 20px;
    }

</style>