<script lang="ts">
    import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
    title="Syl Privacy Policy"
    description="Privacy policy for the Syl expense tracking app."
/>

<main>
    <h1>Syl Privacy Policy</h1>
    <p>Last updated: September 14, 2026</p>


    Syl keeps your financial data on your devices and, if you choose, in your private
    iCloud storage. Your expenses are never sent to the developer. Syl does not
    sell your data, show advertisements, or use your financial data for advertising
    or profiling.

    <h2>Your expense data</h2>

    Expenses, budgets, tags, recurring rules, and settings are stored on
    your device. Syl can also send spending summaries to your paired Apple Watch
    for display in the Watch app and its widgets, independently of iCloud Sync.

    Receipt scanning uses Apple's on-device text recognition and Apple Intelligence
    features. Receipt images and recognized text are not uploaded to the developer
    or an external receipt-processing service. Information you save from a receipt
    is treated like any other expense.

    <h2>iCloud Sync</h2>

    iCloud Sync is optional and off by default on each device. When enabled, Syl
    syncs your financial records through your private iCloud database and supported
    settings through Apple's iCloud preference storage. Apple operates iCloud under
    its own terms and <a href="https://www.apple.com/legal/privacy/">privacy policy</a>.

    You can turn sync off in <em>Settings → Backup → Enable iCloud Sync</em>. Settings
    sync stops immediately; fully close and reopen Syl to apply the change to expense
    sync. Previously queued activity may still finish. Turning sync off does not
    delete existing local or iCloud data.

    <h2>Retention and deletion</h2>

    Your saved data remains until you delete it. In Syl's Settings:

    <ul>
        <li><em>Delete Expense Data</em> removes expenses, with an option to also remove recurring expense rules.</li>
        <li><em>Delete All Data</em> removes expenses, recurring rules, tags, and preferences.</li>
    </ul>

    Data in iCloud is deleted when you delete an expense with sync still enabled. If sync is off,
    cloud copies will remain in iCloud until removed through a device with sync enabled, or
    if data is deleted manually in your Apple Account settings. Other devices, such as your
    Apple Watch, may retain older data until they receive an update. Removing the iPhone app
    does not delete iCloud data or copies on other devices.

    <h2>Imports and exports</h2>

    Syl can import files you select and export JSON backups or CSV files to a
    location you choose. Exported files contain readable expense data and are not
    encrypted by Syl. Files saved or shared outside Syl, including original import
    files, must be deleted separately. Deleting data in Syl cannot recall those copies.

    <h2>Permissions</h2>

    Syl requests camera access for receipt scanning and notification permission for
    optional reminders. You can change these permissions in iOS Settings and turn
    reminders off in Syl's notification settings.

    <h2>Feedback and support</h2>

    If you email the developer, your email address, message, and any attachments are
    used to respond and help resolve your request. Syl's feedback email includes
    your app version, iOS version, and device model. You can edit or cancel the
    message before sending it; your expense database is not automatically attached.

    You can request deletion of support correspondence by emailing hi@enzottic.me.

    <h2>This website</h2>

    The website displaying this policy, including when opened inside Syl, uses
    Cloudflare Web Analytics to measure page visits and loading performance.
    Cloudflare states that this service does not collect or use visitors' personal
    data. Its documentation describes seven days of unsampled analytics data and
    access to historical analytics for six months. See
    <a href="https://developers.cloudflare.com/web-analytics/faq/">Cloudflare's documentation</a>.
    These website metrics do not include your Syl expense records.

    The page also loads fonts from Adobe, which involves requests to Adobe's servers.
    See <a href="https://www.adobe.com/privacy/policy.html">Adobe's privacy policy</a> for its
    data-handling practices.

    <h2>Contact</h2>

    For privacy questions or requests, send an email to <a href="mailto:hi@enzottic.me">hi@enzottic.me</a>

</main>
