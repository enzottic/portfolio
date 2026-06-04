<script lang="ts">
    import image from '$lib/images/project-images/sage/sage.png';
    import downloadIcon from '$lib/images/project-images/sage/download.svg';
</script>

<main>
    <div class="columns">
        <div class="leftside">
            <h1>Sage</h1>
            <p>A simple expense tracking app</p>
            <p>Coming soon to the App Store</p>
            <!-- <a href="/#">
                <img src={downloadIcon} alt="Download on the App Store" class="download-icon" />
            </a> -->
        </div>

        <div class="rightside">
            <img src={image} class="responsive-image" alt="sage on ios"/>
        </div>
    </div>
</main>

<style>
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

.rightside {
    flex: 1;
    padding: 1rem;
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
</style>