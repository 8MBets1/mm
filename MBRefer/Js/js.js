function shakeChild(index) {
    var flowChildren = document.querySelectorAll('.flow-child');
    flowChildren.forEach(function(child, idx) {
        if (idx === index) {
            child.classList.add('shaking');
        } else {
            child.classList.remove('shaking');
        }
    });
}

function shakeLoop() {
    var index = 0;
    setInterval(function() {
        shakeChild(index);
        index = (index + 1) % 3;
    }, 3000); // Repeat the animation every 3 seconds
}

shakeLoop();


// ******************click on top and appear bottom contents 

document.addEventListener('DOMContentLoaded', function() {
    var topTitles = document.querySelectorAll('.top-tittle');

    topTitles.forEach(function(tittle) {
        tittle.addEventListener('click', function() {
            var mediaPhoto = tittle.nextElementSibling;
            var isActive = mediaPhoto.classList.contains('active');

            if (!isActive) {
                mediaPhoto.classList.add('active');
            } else {
                mediaPhoto.classList.remove('active');
            }
        });
    });
});

  



        // ****************Downloading time popup 

        document.addEventListener('DOMContentLoaded', function() {
            var downloadButtons = document.querySelectorAll('.download-button');
            var loadingOverlay = document.getElementById('loading-overlay');
        
            downloadButtons.forEach(function(downloadButton) {
                downloadButton.addEventListener('click', function() {
                    // Show loading overlay
                    loadingOverlay.textContent = 'Downloading 0%';
                    loadingOverlay.classList.add('active');
        
                    var progress = 0;
                    var interval = setInterval(function() {
                        progress += 1;
                        loadingOverlay.textContent = 'Downloading ' + progress + '%';
                        if (progress >= 100) {
                            clearInterval(interval);
                            // Change text to "Downloaded"
                            loadingOverlay.textContent = 'Downloaded ✔️';
                            // After 2 seconds, hide loading overlay
                            setTimeout(function() {
                                loadingOverlay.classList.remove('active');
                            }, 2000);
                        }
                    }, 8); // Adjust the interval here for faster counting
                });
            });
        });



        // Select all img elements on the page
const images = document.querySelectorAll('img');

// Loop through each img element and set its loading attribute to "lazy"
images.forEach(img => {
    img.setAttribute('loading', 'lazy');
});






