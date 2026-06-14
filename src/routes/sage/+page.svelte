<script lang="ts">
    import mainPreview from '$lib/images/project-images/sage/sage_2.png';
    import previewImage from '$lib/images/project-images/sage/sage_preview.png';
    import appIcon from '$lib/images/project-images/sage/app_icon.png';
    import addingPreview from '$lib/images/project-images/sage/sage_adding_preview.png';
    import downloadIcon from '$lib/images/project-images/sage/download.svg';
    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
    title="Sage"
    description="A simple expense tracking app for iOS."
    image={previewImage}
/>

<main>
    <div class="columns">
        <div class="leftside">
            <div class="title-row">
                <img src={appIcon} class="app-icon" alt="Sage app icon" />
                <h1 class="title">Sage</h1>
            </div>
            <p>A simple expense tracking app</p>
            <a href="https://testflight.apple.com/join/RWj66HUZ">
                <text>Download now on TestFlight</text>
                <!-- <img src={downloadIcon} alt="Download on the App Store" class="download-icon" /> -->
            </a>
        </div>

        <div class="rightside">
            <img src={mainPreview} class="responsive-image" alt="sage on ios"/>
        </div>
    </div>

    <div class="columns">

        <div class="rightside">
            <img src={addingPreview} class="responsive-image" alt="Adding an expense in Sage"/>
        </div>

        <div class="leftside">
            <h1 class="title">About</h1>

            <p>Sage is simple expense tracking app that splits your monthly income between three main categories: needs, wants, and savings.</p>
            <p>All expenses are stored locally on-device, with the option to sync between your Apple devices using iCloud.</p>
            <p>I've been working on Sage for the past 8 months, it is not vibe coded. If you download the app and have any suggestions, please send me an <a href="mailto:hi@enzottic.me">email</a>.</p>
        </div>

    </div>
</main>

<style>
main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.columns {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.leftside {
    flex: 1;
    padding: 1rem;
}

.title-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}

.app-icon {
    width: 100px;
    height: auto;
}

.rightside {
    flex: 1;
    padding: 1rem;
}

.title {
    font-size: 3rem;
}

.responsive-image {
    max-width: 100%;
    height: auto;
}

.download-icon {
    margin-top: 1rem;
    height: 50px;
    width: auto;
}

@media (max-width: 1110px) {
    .columns {
        flex-direction: column;
    }

    .leftside {
        text-align: center;
        order: -1;
    }

    .title-row {
        justify-content: center;
    }

    .responsive-image {
        width: 100%;
        max-width: 480px;
    }
}
</style>