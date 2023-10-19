console.log('------------------------');
console.log('Youtube Skipper - Initiating');
console.log('------------------------');

function skipVideoAds() {
    // Check to see if video player is present, as we only want to attempt to skip ads on the video
    const videoPlayer = document.querySelector('#player');
    if (videoPlayer) {
        // Start an interval and check if skip button is present on the video
        setInterval(() => {
            // get skip button
            const videoSkipButton = document.querySelector('.ytp-ad-skip-button');
            if (videoSkipButton) {
                // skip the ad
                videoSkipButton.click();
            }
        }, 300);
    }
}

skipVideoAds();