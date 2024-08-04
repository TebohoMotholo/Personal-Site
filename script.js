document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        const progressText = bar.querySelector('.progress-text');
        const finalWidth = parseFloat(bar.style.getPropertyValue('--progress-width'));
        let width = 0;

        const interval = setInterval(() => {
            if (width >= finalWidth) {
                clearInterval(interval);
            } else {
                width += 1;
                bar.style.width = width + '%';
                progressText.textContent = width + '%';
            }
        }, 20); // Adjust the speed of the animation here
    });
});

function toggleDetails(element) {
    element.classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', function() {
    const educationEntries = document.querySelectorAll('.education-entry');

    educationEntries.forEach(entry => {
        entry.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});
