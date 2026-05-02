// Theme Switcher — toggles between Original and Minimal themes
// Set SHOW_SWITCHER to true to re-enable the floating toggle button
var SHOW_SWITCHER = false;
(function () {
    const STORAGE_KEY = 'druckmann-lab-theme';

    // Apply saved theme immediately (before DOM renders) to avoid flash
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'minimal') {
        document.documentElement.classList.add('theme-minimal');
    }

    if (!SHOW_SWITCHER) return;

    document.addEventListener('DOMContentLoaded', function () {
        // Create switcher UI
        const switcher = document.createElement('div');
        switcher.className = 'theme-switcher';
        switcher.innerHTML =
            '<button class="theme-switcher__btn" data-theme="original">Original</button>' +
            '<button class="theme-switcher__btn" data-theme="minimal">Minimal</button>';
        document.body.appendChild(switcher);

        const buttons = switcher.querySelectorAll('.theme-switcher__btn');
        const isMinimal = document.documentElement.classList.contains('theme-minimal');

        // Set initial active state
        buttons.forEach(function (btn) {
            const theme = btn.getAttribute('data-theme');
            if ((theme === 'minimal' && isMinimal) || (theme === 'original' && !isMinimal)) {
                btn.classList.add('active');
            }
        });

        // Handle clicks
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const theme = this.getAttribute('data-theme');
                buttons.forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');

                if (theme === 'minimal') {
                    document.documentElement.classList.add('theme-minimal');
                    localStorage.setItem(STORAGE_KEY, 'minimal');
                } else {
                    document.documentElement.classList.remove('theme-minimal');
                    localStorage.setItem(STORAGE_KEY, 'original');
                }
            });
        });
    });
})();
