document.addEventListener('DOMContentLoaded', () => {
    const themeDropdownButton = document.getElementById('theme-dropdown-button');
    const currentThemeNameSpan = document.getElementById('current-theme-name');
    const themeMenu = document.getElementById('theme-menu');
    // const exerciseCardElement = document.querySelector('.exercise-card'); // Nu mai e necesar să-l referențiem direct pentru aplicarea variabilelor
    const cardPreviewArea = document.querySelector('.card-preview-area');

    const metaThemeToggleButton = document.getElementById('meta-theme-toggle');
    const bodyElement = document.body;

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const hamburgerMenuButton = document.querySelector('.platform-hamburger-menu');
    const mobileNavContainer = document.getElementById('mobile-nav-container');


    // Lista completă de teme pentru card
    const cardThemes = [
        { id: 'theme-original-neon', name: 'Original Neon', icon: 'fa-atom', vars: { '--page-bg': '#0D1117', '--card-bg': '#1C2128', '--card-border-glow': '#30363D', '--card-content-border': '#30363D', '--text-primary': '#58A6FF', '--text-secondary': '#8B949E', '--text-on-accent': '#0D1117', '--accent-primary': '#2EA043', '--accent-primary-darker': '#238636', '--tag-secondary-bg': '#21262D', '--tag-secondary-text': '#8B949E', '--icon-container-bg': '#21262D', '--progress-bar-track-bg': '#30363D', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-robot', name: 'Robot Gold', icon: 'fa-robot', vars: { '--page-bg': '#1E1F22', '--card-bg': '#2C2F33', '--card-border-glow': '#4F545C', '--card-content-border': '#4F545C', '--text-primary': '#E0E0E0', '--text-secondary': '#A0A0A0', '--text-on-accent': '#1E1F22', '--accent-primary': '#B08D57', '--accent-primary-darker': '#8c7045', '--tag-secondary-bg': '#40444B', '--icon-container-bg': '#36393F', '--progress-bar-track-bg': '#40444B', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.2)'} },
        { id: 'theme-demon', name: 'Demon Red', icon: 'fa-fire', vars: { '--page-bg': '#1A0000', '--card-bg': '#0F0303', '--card-border-glow': '#770000', '--card-content-border': '#550808', '--text-primary': '#E8C5C5', '--text-secondary': '#A38C8C', '--text-on-accent': '#FFFFFF', '--accent-primary': '#E60000', '--accent-primary-darker': '#B30000', '--tag-secondary-bg': '#330A0A', '--icon-container-bg': '#2c0808', '--progress-bar-track-bg': '#330A0A', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-cyberpunk', name: 'Cyberpunk Orange', icon: 'fa-bolt', vars: { '--page-bg': '#050508', '--card-bg': '#101015', '--card-border-glow': '#FF6F00', '--card-content-border': '#332000', '--text-primary': '#00E5FF', '--text-secondary': '#709FB0', '--text-on-accent': '#000000', '--accent-primary': '#FF9100', '--accent-primary-darker': '#E65100', '--tag-secondary-bg': '#222228', '--icon-container-bg': '#1A1A1F', '--progress-bar-track-bg': '#222228', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-brutalist', name: 'Brutalist Grey', icon: 'fa-building', vars: { '--page-bg': '#2D333B', '--card-bg': '#3C444C', '--card-border-glow': '#586069', '--card-content-border': '#505860', '--text-primary': '#C9D1D9', '--text-secondary': '#8B949E', '--text-on-accent': '#FFFFFF', '--accent-primary': '#347D73', '--accent-primary-darker': '#285E56', '--tag-secondary-bg': '#30363D', '--icon-container-bg': '#30363D', '--progress-bar-track-bg': '#48515B', '--card-border-radius': '6px', '--card-box-shadow': '0 2px 5px rgba(0,0,0,0.2)'} },
        { id: 'theme-fitness', name: 'Fitness Light', icon: 'fa-dumbbell', vars: { '--page-bg': '#F6F8FA', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#E1E4E8', '--text-primary': '#24292F', '--text-secondary': '#57606A', '--text-on-accent': '#FFFFFF', '--accent-primary': '#007AFF', '--accent-primary-darker': '#0056B3', '--tag-secondary-bg': '#F1F1F1', '--icon-container-bg': '#F1F1F1', '--progress-bar-track-bg': '#E1E4E8', '--card-border-radius': '12px', '--card-box-shadow': '0 4px 15px rgba(0,0,0,0.1), 0 0 0 1px #E1E4E8'} },
        { id: 'theme-moonstars', name: 'Moon & Stars', icon: 'fa-moon', vars: { '--page-bg': '#191E36', '--card-bg': '#0F1223', '--card-border-glow': '#F7C854', '--card-content-border': '#2A3055', '--text-primary': '#F0E6D2', '--text-secondary': '#A0A8C8', '--text-on-accent': '#0F1223', '--accent-primary': '#F7C854', '--accent-primary-darker': '#E0B03D', '--tag-secondary-bg': '#20284E', '--icon-container-bg': '#20284E', '--progress-bar-track-bg': '#2A3055', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-raccoon', name: 'Raccoon Picnic', icon: 'fa-paw', vars: { '--page-bg': '#FFB74D', '--card-bg': '#FFF3E0', '--card-border-glow': 'transparent', '--card-content-border': '#BCAAA4', '--text-primary': '#4E342E', '--text-secondary': '#795548', '--text-on-accent': '#FFFFFF', '--accent-primary': '#FF7043', '--accent-primary-darker': '#F4511E', '--tag-secondary-bg': '#A5D6A7', '--icon-container-bg': '#D7CCC8', '--progress-bar-track-bg': '#D7CCC8', '--card-border-radius': '15px', '--card-box-shadow': '0 5px 15px rgba(80,50,20,0.2), 0 0 0 1px #A1887F'} },
        { id: 'theme-parchment', name: 'Parchment Classic', icon: 'fa-scroll', vars: { '--page-bg': '#F5E8C5', '--card-bg': '#EFE0B0', '--card-border-glow': '#D8C0A0', '--card-content-border': '#D8C0A0', '--text-primary': '#6B4F34', '--text-secondary': '#8C705A', '--text-on-accent': '#FFFFFF', '--accent-primary': '#A0522D', '--accent-primary-darker': '#80381E', '--tag-secondary-bg': '#D8C0A0', '--icon-container-bg': '#D8C0A0', '--progress-bar-track-bg': '#D8C0A0', '--card-border-radius': '12px', '--card-box-shadow': '0 4px 10px rgba(107, 79, 52, 0.2)'} },
        { id: 'theme-vintage-book', name: 'Vintage Book', icon: 'fa-book-dead', vars: { '--page-bg': '#3B2F2F', '--card-bg': '#5D4037', '--card-border-glow': '#795548', '--card-content-border': '#795548', '--text-primary': '#E0D8C0', '--text-secondary': '#B0A890', '--text-on-accent': '#3B2F2F', '--accent-primary': '#B8860B', '--accent-primary-darker': '#906709', '--tag-secondary-bg': '#795548', '--icon-container-bg': '#795548', '--progress-bar-track-bg': '#795548', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-slate-chalk', name: 'Slate & Chalk', icon: 'fa-chalkboard', vars: { '--page-bg': '#3A3A3A', '--card-bg': '#4A4A4A', '--card-border-glow': '#5A5A5A', '--card-content-border': '#5A5A5A', '--text-primary': '#E0E0E0', '--text-secondary': '#B0B0B0', '--text-on-accent': '#3A3A3A', '--accent-primary': '#FFFFFF', '--accent-primary-darker': '#E0E0E0', '--tag-secondary-bg': '#5A5A5A', '--icon-container-bg': '#5A5A5A', '--progress-bar-track-bg': '#5A5A5A', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-aurora-glow', name: 'Aurora Glow', icon: 'fa-rainbow', vars: { '--page-bg': '#03071E', '--card-bg': '#0B132B', '--card-border-glow': '#8338EC', '--card-content-border': '#1C2541', '--text-primary': '#CAF0F8', '--text-secondary': '#90E0EF', '--text-on-accent': '#FFFFFF', '--accent-primary': '#F72585', '--accent-primary-darker': '#B30C5D', '--tag-secondary-bg': '#1C2541', '--icon-container-bg': '#1C2541', '--progress-bar-track-bg': '#1C2541', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-deep-space-nebula', name: 'Deep Space Nebula', icon: 'fa-meteor', vars: { '--page-bg': '#000000', '--card-bg': '#0C001F', '--card-border-glow': '#6A0DAD', '--card-content-border': '#2A004F', '--text-primary': '#E0C3FC', '--text-secondary': '#C7A2F0', '--text-on-accent': '#FFFFFF', '--accent-primary': '#FF00A0', '--accent-primary-darker': '#CC0080', '--tag-secondary-bg': '#2A004F', '--icon-container-bg': '#2A004F', '--progress-bar-track-bg': '#2A004F', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-lava-flow', name: 'Lava Flow', icon: 'fa-volcano', vars: { '--page-bg': '#101010', '--card-bg': '#2B2B2B', '--card-border-glow': '#FF4500', '--card-content-border': '#444444', '--text-primary': '#E0E0E0', '--text-secondary': '#A0A0A0', '--text-on-accent': '#000000', '--accent-primary': '#FF4500', '--accent-primary-darker': '#CC3700', '--tag-secondary-bg': '#444444', '--icon-container-bg': '#444444', '--progress-bar-track-bg': '#444444', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-corporate-blue', name: 'Corporate Blue', icon: 'fa-briefcase', vars: { '--page-bg': '#F4F6F8', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#DEE2E6', '--text-primary': '#003366', '--text-secondary': '#0056B3', '--text-on-accent': '#FFFFFF', '--accent-primary': '#007BFF', '--accent-primary-darker': '#0056B3', '--tag-secondary-bg': '#E9ECEF', '--icon-container-bg': '#E9ECEF', '--progress-bar-track-bg': '#DEE2E6', '--card-border-radius': '12px', '--card-box-shadow': '0 2px 8px rgba(0, 51, 102, 0.1)'} },
        { id: 'theme-minimalist-mono', name: 'Minimalist Mono', icon: 'fa-square', vars: { '--page-bg': '#F8F9FA', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#E0E0E0', '--text-primary': '#212529', '--text-secondary': '#6C757D', '--text-on-accent': '#FFFFFF', '--accent-primary': '#343A40', '--accent-primary-darker': '#212529', '--tag-secondary-bg': '#E9ECEF', '--icon-container-bg': '#F1F3F5', '--progress-bar-track-bg': '#E9ECEF', '--card-border-radius': '12px', '--card-box-shadow': '0 1px 3px rgba(0,0,0,0.05), 0 0 0 1px #E0E0E0'} },
        { id: 'theme-eco-green', name: 'Eco Green', icon: 'fa-leaf', vars: { '--page-bg': '#F0F7F0', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#D0E0D0', '--text-primary': '#2E7D32', '--text-secondary': '#558B2F', '--text-on-accent': '#FFFFFF', '--accent-primary': '#7CB342', '--accent-primary-darker': '#558B2F', '--tag-secondary-bg': '#E8F5E9', '--icon-container-bg': '#E8F5E9', '--progress-bar-track-bg': '#C8E6C9', '--card-border-radius': '12px', '--card-box-shadow': '0 3px 10px rgba(76, 175, 80, 0.15)'} },
        { id: 'theme-frosted-glass', name: 'Frosted Glass', icon: 'fa-igloo', vars: { '--page-bg': '#607D8B', '--card-bg': 'rgba(224, 231, 234, 0.85)', '--card-border-glow': 'rgba(255, 255, 255, 0.3)', '--card-content-border': 'rgba(176, 190, 197, 0.5)', '--text-primary': '#263238', '--text-secondary': '#455A64', '--text-on-accent': '#FFFFFF', '--accent-primary': '#03A9F4', '--accent-primary-darker': '#0288D1', '--tag-secondary-bg': 'rgba(176, 190, 197, 0.4)', '--icon-container-bg': 'rgba(176, 190, 197, 0.4)', '--progress-bar-track-bg': 'rgba(176, 190, 197, 0.5)', '--card-border-radius': '12px', '--card-box-shadow': '0 5px 20px rgba(0,0,0,0.1)'} },
        { id: 'theme-neomorphic-light', name: 'Neomorphic Light', icon: 'fa-circle-notch', vars: { '--page-bg': '#E0E5EC', '--card-bg': '#E0E5EC', '--card-border-glow': 'transparent', '--card-content-border': '#C8D0D8', '--text-primary': '#5A6779', '--text-secondary': '#8895A7', '--text-on-accent': '#FFFFFF', '--accent-primary': '#4B70F5', '--accent-primary-darker': '#3A5CDC', '--tag-secondary-bg': '#E0E5EC', '--icon-container-bg': '#E0E5EC', '--progress-bar-track-bg': '#D1D9E6', '--card-border-radius': '12px', '--card-box-shadow': '7px 7px 15px #A3B1C6, -7px -7px 15px #FFFFFF', '--neo-shadow-main': '5px 5px 10px #A3B1C6, -5px -5px 10px #FFFFFF', '--neo-shadow-inset': 'inset 3px 3px 6px #A3B1C6, inset -3px -3px 6px #FFFFFF', '--icon-container-shadow': 'var(--neo-shadow-main)'} },
        { id: 'theme-neomorphic-dark', name: 'Neomorphic Dark', icon: 'fa-dot-circle', vars: { '--page-bg': '#2C3038', '--card-bg': '#2C3038', '--card-border-glow': 'transparent', '--card-content-border': '#23262C', '--text-primary': '#A0A8B8', '--text-secondary': '#788090', '--text-on-accent': '#FFFFFF', '--accent-primary': '#5A8CFF', '--accent-primary-darker': '#476ECC', '--tag-secondary-bg': '#2C3038', '--icon-container-bg': '#2C3038', '--progress-bar-track-bg': '#25282E', '--card-border-radius': '12px', '--card-box-shadow': '7px 7px 15px #1F2227, -7px -7px 15px #393E49', '--neo-shadow-main': '5px 5px 10px #1F2227, -5px -5px 10px #393E49', '--neo-shadow-inset': 'inset 3px 3px 6px #1F2227, inset -3px -3px 6px #393E49', '--icon-container-shadow': 'var(--neo-shadow-main)'} },
        { id: 'theme-ocean-deep', name: 'Ocean Deep', icon: 'fa-water', vars: { '--page-bg': '#003B46', '--card-bg': '#07575B', '--card-border-glow': '#66A5AD', '--card-content-border': '#044347', '--text-primary': '#C4DFE6', '--text-secondary': '#9FBEC6', '--text-on-accent': '#003B46', '--accent-primary': '#A2D5F2', '--accent-primary-darker': '#79A8D0', '--tag-secondary-bg': '#044347', '--icon-container-bg': '#044347', '--progress-bar-track-bg': '#044347', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-sunset-vibes', name: 'Sunset Vibes', icon: 'fa-cloud-sun', vars: { '--page-bg': '#4A001F', '--card-bg': '#6A002C', '--card-border-glow': '#FF8C00', '--card-content-border': '#8C0037', '--text-primary': '#FFD9C7', '--text-secondary': '#FFB0A0', '--text-on-accent': '#FFFFFF', '--accent-primary': '#E83E8C', '--accent-primary-darker': '#C0246E', '--tag-secondary-bg': '#8C0037', '--icon-container-bg': '#8C0037', '--progress-bar-track-bg': '#8C0037', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-forest-mist', name: 'Forest Mist', icon: 'fa-tree', vars: { '--page-bg': '#3A4F41', '--card-bg': '#4F6353', '--card-border-glow': '#788A7C', '--card-content-border': '#405243', '--text-primary': '#D8E0D9', '--text-secondary': '#A8B8A9', '--text-on-accent': '#2F3E33', '--accent-primary': '#A2D2FF', '--accent-primary-darker': '#7AB8E0', '--tag-secondary-bg': '#405243', '--icon-container-bg': '#405243', '--progress-bar-track-bg': '#405243', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-candy-pop', name: 'Candy Pop', icon: 'fa-candy-cane', vars: { '--page-bg': '#FFF0F5', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#FFC0CB', '--text-primary': '#DB2777', '--text-secondary': '#EC4899', '--text-on-accent': '#FFFFFF', '--accent-primary': '#10B981', '--accent-primary-darker': '#059669', '--tag-secondary-bg': '#FBCFE8', '--icon-container-bg': '#FCE7F3', '--progress-bar-track-bg': '#FBCFE8', '--card-border-radius': '12px', '--card-box-shadow': '0 4px 12px rgba(219, 39, 119, 0.15)'} },
        { id: 'theme-steampunk-gear', name: 'Steampunk Gear', icon: 'fa-cogs', vars: { '--page-bg': '#4A3B32', '--card-bg': '#6F5E53', '--card-border-glow': '#B08D57', '--card-content-border': '#5D4A3F', '--text-primary': '#EAE0D5', '--text-secondary': '#C0B2A8', '--text-on-accent': '#4A3B32', '--accent-primary': '#CD7F32', '--accent-primary-darker': '#A46627', '--tag-secondary-bg': '#5D4A3F', '--icon-container-bg': '#5D4A3F', '--progress-bar-track-bg': '#5D4A3F', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-arctic-ice', name: 'Arctic Ice', icon: 'fa-snowflake', vars: { '--page-bg': '#EBF8FF', '--card-bg': '#F7FCFF', '--card-border-glow': 'transparent', '--card-content-border': '#B3E5FC', '--text-primary': '#01579B', '--text-secondary': '#29B6F6', '--text-on-accent': '#00274D', '--accent-primary': '#81D4FA', '--accent-primary-darker': '#4FC3F7', '--tag-secondary-bg': '#E1F5FE', '--icon-container-bg': '#E1F5FE', '--progress-bar-track-bg': '#B3E5FC', '--card-border-radius': '12px', '--card-box-shadow': '0 3px 10px rgba(129, 212, 250, 0.2)'} },
        { id: 'theme-desert-oasis', name: 'Desert Oasis', icon: 'fa-tint', vars: { '--page-bg': '#FADDAF', '--card-bg': '#FFF3DA', '--card-border-glow': 'transparent', '--card-content-border': '#D2B48C', '--text-primary': '#8B4513', '--text-secondary': '#A0522D', '--text-on-accent': '#FFFFFF', '--accent-primary': '#20B2AA', '--accent-primary-darker': '#1A8E87', '--tag-secondary-bg': '#FFEBCD', '--icon-container-bg': '#FFEBCD', '--progress-bar-track-bg': '#D2B48C', '--card-border-radius': '12px', '--card-box-shadow': '0 4px 12px rgba(139, 69, 19, 0.15)'} },
        { id: 'theme-gothic-night', name: 'Gothic Night', icon: 'fa-chess-rook', vars: { '--page-bg': '#0A0A0A', '--card-bg': '#1A1A1A', '--card-border-glow': '#4B0082', '--card-content-border': '#2A2A2A', '--text-primary': '#D8BFD8', '--text-secondary': '#A9A9A9', '--text-on-accent': '#FFFFFF', '--accent-primary': '#800020', '--accent-primary-darker': '#600018', '--tag-secondary-bg': '#2A2A2A', '--icon-container-bg': '#2A2A2A', '--progress-bar-track-bg': '#2A2A2A', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-apocalypse-purple', name: 'Apocalypse Purple', icon: 'fa-skull-crossbones', vars: { '--page-bg': '#100C1C', '--card-bg': '#241B3A', '--card-border-glow': '#FF3F00', '--card-content-border': '#4A2A63', '--text-primary': '#E0CFFC', '--text-secondary': '#A992C7', '--text-on-accent': '#FFFFFF', '--accent-primary': '#D400FF', '--accent-primary-darker': '#A000CC', '--tag-secondary-bg': '#4A2A63', '--icon-container-bg': '#4A2A63', '--progress-bar-track-bg': '#4A2A63', '--card-border-radius': '12px', '--card-box-shadow': '0 10px 30px rgba(255, 63, 0, 0.3), 0 0 15px rgba(212, 0, 255, 0.2)'} },
        { id: 'theme-glassmorphism-clear', name: 'Glassmorphism Clear', icon: 'fa-layer-group', vars: { '--page-bg': '#3D5A80', '--card-bg': 'rgba(255, 255, 255, 0.15)', '--card-border-glow': 'rgba(255, 255, 255, 0.25)', '--card-content-border': 'rgba(255, 255, 255, 0.18)', '--text-primary': '#FFFFFF', '--text-secondary': '#E0E0E0', '--text-on-accent': '#111111', '--accent-primary': '#98C1D9', '--accent-primary-darker': '#7BA8C0', '--tag-secondary-bg': 'rgba(255, 255, 255, 0.1)', '--icon-container-bg': 'rgba(255, 255, 255, 0.1)', '--progress-bar-track-bg': 'rgba(255, 255, 255, 0.15)', '--card-border-radius': '15px', '--card-box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.2)'} },
        { id: 'theme-crystal-flower', name: 'Crystal Flower', icon: 'fa-gem', vars: { '--page-bg': '#0A0A0F', '--card-bg': 'rgba(200, 210, 230, 0.1)', '--card-border-glow': 'rgba(255, 255, 255, 0.3)', '--card-content-border': 'rgba(220, 220, 240, 0.15)', '--text-primary': '#EFEFF5', '--text-secondary': '#C0C0D0', '--text-on-accent': '#FFFFFF', '--accent-primary': '#D90429', '--accent-primary-darker': '#A80320', '--tag-secondary-bg': 'rgba(255, 255, 255, 0.08)', '--icon-container-bg': 'rgba(255, 255, 255, 0.08)', '--progress-bar-track-bg': 'rgba(255, 255, 255, 0.1)', '--card-border-radius': '15px', '--card-box-shadow': '0 6px 25px rgba(100, 100, 150, 0.15)'} },
        { id: 'theme-blog-light', name: 'Blog - Light', icon: 'fa-feather-alt', vars: { '--page-bg': '#FDFDFD', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#EDEDED', '--text-primary': '#333333', '--text-secondary': '#666666', '--text-on-accent': '#FFFFFF', '--accent-primary': '#0073B1', '--accent-primary-darker': '#00527D', '--tag-secondary-bg': '#F0F0F0', '--icon-container-bg': '#F0F0F0', '--progress-bar-track-bg': '#EAEAEA', '--card-border-radius': '12px', '--card-box-shadow': '0 2px 10px rgba(0,0,0,0.08)'} },
        { id: 'theme-blog-dark', name: 'Blog - Dark', icon: 'fa-newspaper', vars: { '--page-bg': '#1A1A1B', '--card-bg': '#272729', '--card-border-glow': '#3A3A3C', '--card-content-border': '#3A3A3C', '--text-primary': '#D7DADC', '--text-secondary': '#A8AAAD', '--text-on-accent': '#FFFFFF', '--accent-primary': '#4A90E2', '--accent-primary-darker': '#357ABD', '--tag-secondary-bg': '#3A3A3C', '--icon-container-bg': '#3A3A3C', '--progress-bar-track-bg': '#3A3A3C', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-landscape-photo-light', name: 'Landscape - Light', icon: 'fa-image', vars: { '--page-bg': '#FAFAFA', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#F0F0F0', '--text-primary': '#2C3333', '--text-secondary': '#5E6666', '--text-on-accent': '#FFFFFF', '--accent-primary': '#4E8D7C', '--accent-primary-darker': '#3B6A5C', '--tag-secondary-bg': '#EBF0EE', '--icon-container-bg': '#EBF0EE', '--progress-bar-track-bg': '#E0E5E3', '--card-border-radius': '12px', '--card-box-shadow': '0 4px 15px rgba(0,0,0,0.07)'} },
        { id: 'theme-landscape-photo-dark', name: 'Landscape - Dark', icon: 'fa-mountain', vars: { '--page-bg': '#121619', '--card-bg': '#1A2025', '--card-border-glow': '#2A3238', '--card-content-border': '#2A3238', '--text-primary': '#E0E5E9', '--text-secondary': '#A0A8AF', '--text-on-accent': '#FFFFFF', '--accent-primary': '#77A6B6', '--accent-primary-darker': '#5C8391', '--tag-secondary-bg': '#2A3238', '--icon-container-bg': '#2A3238', '--progress-bar-track-bg': '#2A3238', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} },
        { id: 'theme-tech-portfolio-light', name: 'Tech Portfolio - Light', icon: 'fa-microchip', vars: { '--page-bg': '#F7F9FC', '--card-bg': '#FFFFFF', '--card-border-glow': 'transparent', '--card-content-border': '#E4E7EB', '--text-primary': '#1D2C3C', '--text-secondary': '#5A6877', '--text-on-accent': '#FFFFFF', '--accent-primary': '#3498DB', '--accent-primary-darker': '#217DBB', '--tag-secondary-bg': '#EDF2F7', '--icon-container-bg': '#EDF2F7', '--progress-bar-track-bg': '#DAE1E7', '--card-border-radius': '12px', '--card-box-shadow': '0 3px 12px rgba(0,0,0,0.06)'} },
        { id: 'theme-tech-portfolio-dark', name: 'Tech Portfolio - Dark', icon: 'fa-code', vars: { '--page-bg': '#0F172A', '--card-bg': '#1E293B', '--card-border-glow': '#334155', '--card-content-border': '#334155', '--text-primary': '#E2E8F0', '--text-secondary': '#94A3B8', '--text-on-accent': '#0F172A', '--accent-primary': '#38BDF8', '--accent-primary-darker': '#0EA5E9', '--tag-secondary-bg': '#334155', '--icon-container-bg': '#334155', '--progress-bar-track-bg': '#334155', '--card-border-radius': '12px', '--card-box-shadow': '0 8px 25px rgba(0,0,0,0.3)'} }
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

    if (metaThemeToggleButton) {
        metaThemeToggleButton.addEventListener('click', () => {
            applyMetaTheme(!bodyElement.classList.contains('dark-mode'));
        });
    }

    // Aplică meta-tema salvată sau cea preferată de sistem
    const storedMetaTheme = localStorage.getItem('metaTheme');
    if (storedMetaTheme) {
        applyMetaTheme(storedMetaTheme === 'dark');
    } else {
        applyMetaTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }


    // --- Funcționalitate Teme Card (Dropdown și Aplicare) ---
    function populateCardThemeMenu() {
        if (!themeMenu) return;
        themeMenu.innerHTML = ''; // Golește meniul existent
        cardThemes.forEach(theme => {
            const listItem = document.createElement('li');
            listItem.setAttribute('role', 'menuitem');
            listItem.dataset.theme = theme.id;
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

        const rootStyle = document.documentElement.style; 

        // Șterge clasele vechi de teme de card de pe body
        cardThemes.forEach(t => {
            if (t.id !== themeId) { // Șterge doar celelalte clase, nu cea curentă
                 bodyElement.classList.remove(t.id);
            }
        });
        if (!bodyElement.classList.contains(themeId)) { // Adaugă clasa nouă dacă nu există deja
            bodyElement.classList.add(themeId);
        }


        for (const [key, value] of Object.entries(selectedThemeObject.vars)) {
            rootStyle.setProperty(key, value);
        }
        
        if (cardPreviewArea && selectedThemeObject.vars['--page-bg']) {
            cardPreviewArea.style.backgroundColor = selectedThemeObject.vars['--page-bg'];
        }
         if (cardPreviewArea && selectedThemeObject.vars['--card-border-glow']) {
            // Verifică dacă e transparent, altfel aplică
            cardPreviewArea.style.borderColor = selectedThemeObject.vars['--card-border-glow'] === 'transparent' ? 
                                                'var(--meta-border)' : // Sau o culoare default dacă e transparent
                                                selectedThemeObject.vars['--card-border-glow'];
        }


        localStorage.setItem('selectedCardTheme', themeId);

        if (currentThemeNameSpan && selectedThemeObject) {
            currentThemeNameSpan.innerHTML = `<i class="fas ${selectedThemeObject.icon}" style="margin-right: 8px;"></i> ${selectedThemeObject.name}`;
        }

        if (themeMenu) {
            const menuItems = themeMenu.querySelectorAll('li');
            menuItems.forEach(item => {
                const isActive = item.dataset.theme === themeId;
                item.classList.toggle('active-theme', isActive);
                item.tabIndex = isActive ? 0 : -1;
            });
        }
    }

    function openCardThemeMenu() {
        if (!themeMenu || !themeDropdownButton) return;
        themeMenu.classList.add('menu-open');
        themeDropdownButton.classList.add('menu-open');
        themeDropdownButton.setAttribute('aria-expanded', 'true');
        const activeItem = themeMenu.querySelector('.active-theme') || themeMenu.querySelector('li');
        if (activeItem) activeItem.focus();
    }

    function closeCardThemeMenu() {
        if (!themeMenu || !themeDropdownButton) return;
        themeMenu.classList.remove('menu-open');
        themeDropdownButton.classList.remove('menu-open');
        themeDropdownButton.setAttribute('aria-expanded', 'false');
    }

    if (themeDropdownButton) {
        themeDropdownButton.addEventListener('click', () => {
            if (themeMenu && themeMenu.classList.contains('menu-open')) {
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

    // --- Funcționalitate Meniu Hamburger ---
    if (hamburgerMenuButton && mobileNavContainer) {
        hamburgerMenuButton.addEventListener('click', () => {
            const isExpanded = hamburgerMenuButton.getAttribute('aria-expanded') === 'true';
            hamburgerMenuButton.setAttribute('aria-expanded', String(!isExpanded));
            mobileNavContainer.classList.toggle('open');
            const icon = hamburgerMenuButton.querySelector('i');
            if (mobileNavContainer.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                hamburgerMenuButton.setAttribute('aria-label', 'Închide meniul');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburgerMenuButton.setAttribute('aria-label', 'Deschide meniul');
            }
        });
    }


    // Inițializare meniu teme card și aplicare temă salvată/default
    populateCardThemeMenu(); // Asigură-te că e apelată
    const storedCardTheme = localStorage.getItem('selectedCardTheme');
    const initialCardThemeId = cardThemes.find(t => t.id === storedCardTheme) ? storedCardTheme : 'theme-original-neon';
    applyCardTheme(initialCardThemeId);

});
