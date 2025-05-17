document.addEventListener('DOMContentLoaded', () => {
    const themeDropdownButton = document.getElementById('theme-dropdown-button');
    const currentThemeNameSpan = document.getElementById('current-theme-name');
    const themeMenu = document.getElementById('theme-menu');
    const exerciseCardElement = document.querySelector('.exercise-card'); // Elementul cardului propriu-zis
    const cardPreviewArea = document.querySelector('.card-preview-area'); // Zona care își schimbă fundalul

    const metaThemeToggleButton = document.getElementById('meta-theme-toggle');
    const bodyElement = document.body; // Pentru meta-tema și tema cardului

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Lista completă de teme pentru card
    const cardThemes = [
        { id: 'theme-original-neon', name: 'Original Neon', icon: 'fa-atom', vars: { '--page-bg': '#0D1117', '--card-bg': '#1C2128', '--card-border-glow': '#30363D', '--card-content-border': '#30363D', '--text-primary': '#58A6FF', '--text-secondary': '#8B949E', '--text-on-accent': '#0D1117', '--accent-primary': '#2EA043', '--accent-primary-darker': '#238636', '--tag-secondary-bg': '#21262D', '--tag-secondary-text': '#8B949E', '--icon-container-bg': '#21262D', '--progress-bar-track-bg': '#30363D', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-robot', name: 'Robot Gold', icon: 'fa-robot', vars: { '--page-bg': '#1E1F22', '--card-bg': '#2C2F33', '--card-border-glow': '#4F545C', '--card-content-border': '#4F545C', '--text-primary': '#E0E0E0', '--text-secondary': '#A0A0A0', '--text-on-accent': '#1E1F22', '--accent-primary': '#B08D57', '--accent-primary-darker': '#8c7045', '--tag-secondary-bg': '#40444B', '--icon-container-bg': '#36393F', '--progress-bar-track-bg': '#40444B', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.2)'} },
        { id: 'theme-demon', name: 'Demon Red', icon: 'fa-fire', vars: { '--page-bg': '#1A0000', '--card-bg': '#0F0303', '--card-border-glow': '#770000', '--card-content-border': '#550808', '--text-primary': '#E8C5C5', '--text-secondary': '#A38C8C', '--text-on-accent': '#FFFFFF', '--accent-primary': '#E60000', '--accent-primary-darker': '#B30000', '--tag-secondary-bg': '#330A0A', '--icon-container-bg': '#2c0808', '--progress-bar-track-bg': '#330A0A', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-cyberpunk', name: 'Cyberpunk Orange', icon: 'fa-bolt', vars: { '--page-bg': '#050508', '--card-bg': '#101015', '--card-border-glow': '#FF6F00', '--card-content-border': '#332000', '--text-primary': '#00E5FF', '--text-secondary': '#709FB0', '--text-on-accent': '#000000', '--accent-primary': '#FF9100', '--accent-primary-darker': '#E65100', '--tag-secondary-bg': '#222228', '--icon-container-bg': '#1A1A1F', '--progress-bar-track-bg': '#222228', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-brutalist', name: 'Brutalist Grey', icon: 'fa-building', vars: { '--page-bg': '#2D333B', '--card-bg': '#3C444C', '--card-border-glow': '#586069', '--card-content-border': '#505860', '--text-primary': '#C9D1D9', '--text-secondary': '#8B949E', '--text-on-accent': '#FFFFFF', '--accent-primary': '#347D73', '--accent-primary-darker': '#285E56', '--tag-secondary-bg': '#30363D', '--icon-container-bg': '#30363D', '--progress-bar-track-bg': '#48515B', '--card-border-radius': '6px', '--card-box-shadow': '0 2px 5px rgba(0,0,0,0.2)'} },
        { id: 'theme-fitness', name: 'Fitness Light', icon: 'fa-dumbbell', vars: { '--page-bg': '#F6F8FA', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#E1E4E8', '--text-primary': '#24292F', '--text-secondary': '#57606A', '--text-on-accent': '#FFFFFF', '--accent-primary': '#007AFF', '--accent-primary-darker': '#0056B3', '--tag-secondary-bg': '#F1F1F1', '--icon-container-bg': '#F1F1F1', '--progress-bar-track-bg': '#E1E4E8', '--card-border-radius': '12px', '--card-box-shadow': '0 4px 15px rgba(0,0,0,0.1), 0 0 0 1px #E1E4E8'} },
        // Adaugă aici TOATE celelalte teme pentru card, fiecare cu obiectul 'vars' corespunzător.
        // Exemplu pentru o temă neomorfică:
        { id: 'theme-neomorphic-light', name: 'Neomorphic Light', icon: 'fa-circle-notch', vars: {
            '--page-bg': '#E0E5EC', '--card-bg': '#E0E5EC', '--card-border-glow': 'transparent', '--card-content-border': '#C8D0D8',
            '--text-primary': '#5A6779', '--text-secondary': '#8895A7', '--text-on-accent': '#FFFFFF',
            '--accent-primary': '#4B70F5', '--accent-primary-darker': '#3A5CDC',
            '--tag-secondary-bg': '#E0E5EC', '--tag-secondary-text': '#718093', '--icon-container-bg': '#E0E5EC', '--progress-bar-track-bg': '#D1D9E6',
            '--card-border-radius': '12px',
            '--card-box-shadow': '7px 7px 15px #A3B1C6, -7px -7px 15px #FFFFFF',
            '--neo-shadow-main': '5px 5px 10px #A3B1C6, -5px -5px 10px #FFFFFF',
            '--neo-shadow-inset': 'inset 3px 3px 6px #A3B1C6, inset -3px -3px 6px #FFFFFF',
            '--icon-container-shadow': 'var(--neo-shadow-main)'
        } },
        // ... Continuă cu restul temelor pentru card
         { id: 'theme-apocalypse-purple', name: 'Apocalypse Purple', icon: 'fa-skull-crossbones', vars: { '--page-bg': '#100C1C', '--card-bg': '#241B3A', '--card-border-glow': '#FF3F00', '--card-content-border': '#4A2A63', '--text-primary': '#E0CFFC', '--text-secondary': '#A992C7', '--text-on-accent': '#FFFFFF', '--accent-primary': '#D400FF', '--accent-primary-darker': '#A000CC', '--tag-secondary-bg': '#4A2A63', '--icon-container-bg': '#4A2A63', '--progress-bar-track-bg': '#4A2A63', '--card-border-radius': '12px', '--card-box-shadow': '0 10px 30px rgba(255, 63, 0, 0.3), 0 0 15px rgba(212, 0, 255, 0.2)'} },
         { id: 'theme-glassmorphism-clear', name: 'Glassmorphism Clear', icon: 'fa-layer-group', vars: { '--page-bg': '#3D5A80', '--card-bg': 'rgba(255, 255, 255, 0.15)', '--card-border-glow': 'rgba(255, 255, 255, 0.25)', '--card-content-border': 'rgba(255, 255, 255, 0.18)', '--text-primary': '#FFFFFF', '--text-secondary': '#E0E0E0', '--text-on-accent': '#111111', '--accent-primary': '#98C1D9', '--accent-primary-darker': '#7BA8C0', '--tag-secondary-bg': 'rgba(255, 255, 255, 0.1)', '--icon-container-bg': 'rgba(255, 255, 255, 0.1)', '--progress-bar-track-bg': 'rgba(255, 255, 255, 0.15)', '--card-border-radius': '15px', '--card-box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.2)'} }
    ];


    // --- Funcționalitate Meta Theme (Light/Dark pentru Platformă) ---
    function applyMetaTheme(isDark) {
        const iconElement = metaThemeToggleButton.querySelector('i');
        if (isDark) {
            bodyElement.classList.add('dark-mode');
            iconElement.classList.remove('fa-sun');
            iconElement.classList.add('fa-moon');
            localStorage.setItem('metaTheme', 'dark');
        } else {
            bodyElement.classList.remove('dark-mode');
            iconElement.classList.remove('fa-moon');
            iconElement.classList.add('fa-sun');
            localStorage.setItem('metaTheme', 'light');
        }
    }

    metaThemeToggleButton.addEventListener('click', () => {
        applyMetaTheme(!bodyElement.classList.contains('dark-mode'));
    });

    // Aplică meta-tema salvată sau cea preferată de sistem
    const storedMetaTheme = localStorage.getItem('metaTheme');
    if (storedMetaTheme) {
        applyMetaTheme(storedMetaTheme === 'dark');
    } else {
        applyMetaTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }


    // --- Funcționalitate Teme Card (Dropdown și Aplicare) ---
    function populateCardThemeMenu() {
        themeMenu.innerHTML = ''; // Golește meniul existent
        cardThemes.forEach(theme => {
            const listItem = document.createElement('li');
            listItem.setAttribute('role', 'menuitem');
            listItem.dataset.theme = theme.id;
            // Adăugăm un spațiu după iconiță pentru lizibilitate
            listItem.innerHTML = `<i class="fas ${theme.icon}" style="margin-right: 10px; width: 18px; text-align: center;"></i>${theme.name}`;
            listItem.addEventListener('click', () => {
                applyCardTheme(theme.id);
                closeCardThemeMenu();
            });
            listItem.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    applyCardTheme(theme.id);
                    closeCardThemeMenu();
                }
            });
            listItem.tabIndex = -1;
            themeMenu.appendChild(listItem);
        });
    }

    function applyCardTheme(themeId) {
        const selectedThemeObject = cardThemes.find(t => t.id === themeId);
        if (!selectedThemeObject || !selectedThemeObject.vars) {
            console.warn(`Tema cardului ${themeId} nu a fost găsită sau nu are variabile definite.`);
            return;
        }

        // Aplică variabilele CSS pe elementul root (sau un wrapper specific dacă preferi)
        // pentru a afecta doar cardul și zona sa de preview
        const rootStyle = document.documentElement.style; 
        // Sau, dacă vrem să afectăm doar cardul: const rootStyle = exerciseCardElement.style;
        // Dar pentru --page-bg, e mai bine pe root sau un wrapper mare.

        // Resetează clasele de temă vechi de pe body (dacă le-am adăuga acolo)
        cardThemes.forEach(t => bodyElement.classList.remove(t.id)); // Asigură-te că nu se suprapun
        bodyElement.classList.add(themeId); // Adaugă clasa specifică pentru CSS-ul @supports sau efecte de glow

        for (const [key, value] of Object.entries(selectedThemeObject.vars)) {
            rootStyle.setProperty(key, value);
        }
        
        // Actualizează fundalul zonei de preview a cardului
        if (cardPreviewArea && selectedThemeObject.vars['--page-bg']) {
            cardPreviewArea.style.backgroundColor = selectedThemeObject.vars['--page-bg'];
        }
         if (cardPreviewArea && selectedThemeObject.vars['--card-border-glow']) {
            cardPreviewArea.style.borderColor = selectedThemeObject.vars['--card-border-glow'];
        }


        localStorage.setItem('selectedCardTheme', themeId);

        if (currentThemeNameSpan && selectedThemeObject) {
            currentThemeNameSpan.innerHTML = `<i class="fas ${selectedThemeObject.icon}" style="margin-right: 8px;"></i> ${selectedThemeObject.name}`;
        }

        const menuItems = themeMenu.querySelectorAll('li');
        menuItems.forEach(item => {
            const isActive = item.dataset.theme === themeId;
            item.classList.toggle('active-theme', isActive);
            item.tabIndex = isActive ? 0 : -1;
        });
    }

    function openCardThemeMenu() {
        themeMenu.classList.add('menu-open');
        themeDropdownButton.classList.add('menu-open');
        themeDropdownButton.setAttribute('aria-expanded', 'true');
        const activeItem = themeMenu.querySelector('.active-theme') || themeMenu.querySelector('li');
        if (activeItem) activeItem.focus();
    }

    function closeCardThemeMenu() {
        themeMenu.classList.remove('menu-open');
        themeDropdownButton.classList.remove('menu-open');
        themeDropdownButton.setAttribute('aria-expanded', 'false');
    }

    if (themeDropdownButton) {
        themeDropdownButton.addEventListener('click', () => {
            if (themeMenu.classList.contains('menu-open')) {
                closeCardThemeMenu();
            } else {
                openCardThemeMenu();
            }
        });
    }

    if (themeMenu) {
        themeMenu.addEventListener('keydown', (e) => {
            const items = Array.from(themeMenu.querySelectorAll('li'));
            if (!items.length) return;
            const currentIndex = items.indexOf(document.activeElement);
            let targetIndex = currentIndex;

            if (e.key === 'ArrowDown') { e.preventDefault(); targetIndex = (currentIndex + 1) % items.length; }
            else if (e.key === 'ArrowUp') { e.preventDefault(); targetIndex = (currentIndex - 1 + items.length) % items.length; }
            else if (e.key === 'Home') { e.preventDefault(); targetIndex = 0; }
            else if (e.key === 'End') { e.preventDefault(); targetIndex = items.length - 1; }
            
            if (targetIndex !== currentIndex && items[targetIndex]) {
                items[targetIndex].focus();
            }
        });
    }
    
    document.addEventListener('click', (event) => {
        if (themeDropdownButton && themeMenu && !themeDropdownButton.contains(event.target) && !themeMenu.contains(event.target)) {
            closeCardThemeMenu();
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if (themeMenu && themeMenu.classList.contains('menu-open') && event.key === 'Escape') {
            closeCardThemeMenu();
            if (themeDropdownButton) themeDropdownButton.focus();
        }
    });

    // Inițializare meniu teme card și aplicare temă salvată/default
    if (themeMenu) populateCardThemeMenu();
    const storedCardTheme = localStorage.getItem('selectedCardTheme');
    const initialCardThemeId = cardThemes.find(t => t.id === storedCardTheme) ? storedCardTheme : 'theme-original-neon';
    applyCardTheme(initialCardThemeId);

});
