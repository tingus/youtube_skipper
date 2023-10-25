console.log('------------------------');
console.log('Youtube Skipper - Initiating');
console.log('------------------------');

function skipVideoAds() {
    // Check to see if video player is present, as we only want to attempt to skip ads on the video
    const videoPlayer = document.querySelector('#player');
    if (videoPlayer) {
        // get skip button
        const videoSkipButton = document.querySelector('.ytp-ad-skip-button');
        if (videoSkipButton) {
            // skip the ad
            videoSkipButton.click();
        }
    }
}

function removeAdBlockerWarning() {
    const warningBackdrop = document.querySelector('tp-yt-iron-overlay-backdrop');
    const warningBox = document.querySelector('tp-yt-paper-dialog');
    if (warningBackdrop) {
        warningBackdrop.remove();
    }
    if (warningBox) {
        warningBox.remove();
    }
}

// Start an interval and skip ads or remove the adblock warning
setInterval(() => {
    skipVideoAds();
    removeAdBlockerWarning();
}, 300);
