<script lang="ts">
    import appIcon from '$lib/images/project-images/sage/app_icon.png';
    import sageHero from '$lib/images/project-images/sage/sage_hero.png';
    import Seo from '$lib/components/Seo.svelte';

      const features = [
        {
            tagline: '100% free',
            caption: 'Sage will be free, forever. No features will be gated behind any kind paywall',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>'
        },
        {
            tagline: 'Local storage',
            caption: 'All expenses are stored locally on device, no need to create an account',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M17 22v-4h-4"/><path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607"/><path d="M7 10v4h4"/><path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5"/></svg>'
        },
        {
            tagline: 'Sync with iCloud',
            caption: 'Optionally sync your expenses across Apple devices',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M17 22v-4h-4"/><path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607"/><path d="M7 10v4h4"/><path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5"/></svg>'
        },
        {
            tagline: 'Tags',
            caption: 'Optionally tag your expenses to better organize them',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag-icon lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>'
        },
        {
            tagline: 'Receipt parsing',
            caption: 'Scan and parse receipts using an on-device model',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt-icon lucide-receipt"><path d="M12 17V7"/><path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/><path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/></svg>'
        },
        {
            tagline: 'Spending stats',
            caption: 'View historical spending trends over time',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-icon lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>'

        },
        {
            tagline: 'Custom colors',
            caption: 'Personalize your spending category colors',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush-icon lucide-paintbrush"><path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/></svg>'
        },
        {
            tagline: 'CSV export',
            caption: 'Export and import all your expense data via CSV',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>'
        },
        {
            tagline: 'Splitwise',
            caption: 'Integrates directly with your Splitwise account, import from Splitwise or export to it',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-split-icon lucide-split"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg>'
        },
        {
            tagline: 'Home screen widgets',
            caption: 'Monthly summaries right on your home screen.',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid2x2-icon lucide-grid-2x2"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'
        }
    ];

    const comingSoon = [
        {
            tagline: 'Better Siri integration',
            caption: 'Add and manage expenses hands-free with improved Siri support in iOS 27',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>'
        },
        {
            tagline: 'Better receipt parsing',
            caption: 'A more accurate on-device model for scanning receipts',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-text-icon lucide-scan-text"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/></svg>'
        },
        {
            tagline: 'Improved stats screen',
            caption: 'A richer, more detailed view of your spending trends',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>'
        }
    ];
</script>

<Seo
    title="Sage"
    description="A simple expense tracking app for iOS."
    image={sageHero}
/>

<main>
    <div class="hero">
        <div class="hero-text">
            <div class="title-row">
                <img src={appIcon} class="app-icon" alt="Sage app icon" />
                <h1 class="title">Sage</h1>
            </div>
            <p>A simple, free expense tracking app. Available for iOS, iPadOS, and macOS.</p>
            <a href="https://testflight.apple.com/join/RWj66HUZ">
                <text>Download now on TestFlight</text>
            </a>
        </div>

        <div class="hero-image">
            <img src={sageHero} class="responsive-image" alt="sage on ios"/>
        </div>
    </div>


    <section class="features">
        <h1 class="title features-title">Features</h1>
        <div class="feature-grid">
            {#each features as feature}
                <div class="feature">
                    <div class="feature-icon">
                        {@html feature.icon}
                    </div>
                    <h3 class="feature-tagline">{feature.tagline}</h3>
                    <p class="feature-caption">{feature.caption}</p>
                </div>
            {/each}
        </div>
    </section>

    <section class="coming-soon">
        <h2 class="coming-soon-title">And coming soon...</h2>
        <div class="feature-grid">
            {#each comingSoon as feature}
                <div class="feature">
                    <div class="feature-icon feature-icon--outline">
                        {@html feature.icon}
                    </div>
                    <h3 class="feature-tagline">{feature.tagline}</h3>
                    <p class="feature-caption">{feature.caption}</p>
                </div>
            {/each}
        </div>
    </section>
</main>

<style>
main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.hero-text {
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

.hero-image {
    flex: 2;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
}

.hero-image .responsive-image {
    width: 100%;
    max-width: 100%;
    height: auto;
}

.title {
    font-size: 3rem;
}

.features {
    padding: 2rem 1rem;
}

.features-title {
    text-align: center;
    margin-bottom: 2.5rem;
}

.feature-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem 1.5rem;
    max-width: 960px;
    margin: 0 auto;
}

.feature {
    flex: 0 1 calc((100% - 3rem) / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-bottom: 1rem;
    color: #8FB374;
    background-color: hsl(90, 23%, 9%);
}

.feature-tagline {
    font-size: 1.15rem;
    margin: 0 0 0.4rem;
}

.feature-caption {
    margin: 0;
    color: rgba(232, 233, 237, 0.65);
    font-size: 0.95rem;
    line-height: 1.4;
    max-width: 22ch;
}

.coming-soon {
    padding: 2rem 1rem 3rem;
    text-align: center;
}

.coming-soon-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

.feature-icon--outline {
    background-color: transparent;
    border: 2px dotted #8FB374;
}

@media (max-width: 1110px) {
    .hero {
        flex-direction: column;
    }

    .hero-text {
        text-align: center;
        order: -1;
    }

    .title-row {
        justify-content: center;
    }

    .hero-image {
        justify-content: center;
    }

    .hero-image .responsive-image {
        max-width: 480px;
    }

    .feature {
        flex-basis: calc((100% - 1.5rem) / 2);
    }
}

@media (max-width: 600px) {
    .feature {
        flex-basis: 100%;
    }
}
</style>