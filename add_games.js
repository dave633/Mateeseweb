const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const gamesNav = `
            <a href="games.html" class="nav-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
                    <path d="M6 12h4m-2-2v4m8-2h.01M16 12h.01"></path>
                </svg>
                Hry
            </a>`;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    const targetWin = 'Koníčky\r\n            </a>';
    const targetUnix = 'Koníčky\n            </a>';
    
    if(content.includes(targetWin)) {
        content = content.replace(targetWin, targetWin + gamesNav.replace(/\n/g, '\r\n'));
        fs.writeFileSync(f, content);
        console.log('Updated ' + f);
    } else if (content.includes(targetUnix)) {
        content = content.replace(targetUnix, targetUnix + gamesNav);
        fs.writeFileSync(f, content);
        console.log('Updated ' + f);
    }
});
