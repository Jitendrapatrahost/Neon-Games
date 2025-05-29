function showGames() {
            const homepage = document.getElementById('homepage');
            const gamesPage = document.getElementById('gamesPage');
            
            homepage.classList.add('hidden');
            gamesPage.classList.remove('hidden');
            gamesPage.classList.add('slide-in');
            
            setTimeout(() => {
                gamesPage.classList.remove('slide-in');
            }, 50);
        }
        
        function showHome() {
            const homepage = document.getElementById('homepage');
            const gamesPage = document.getElementById('gamesPage');
            
            gamesPage.classList.add('hidden');
            homepage.classList.remove('hidden');
        }

        // Add floating elements dynamically
        function createFloatingElements() {
            const elements = [
                { type: 'joystick', count: 2 },
                { type: 'pixel-char', count: 2 },
                { type: 'neon-cube', count: 3 },
                { type: 'circuit-line', count: 2 }
            ];

            elements.forEach(element => {
                for (let i = 0; i < element.count; i++) {
                    const el = document.createElement('div');
                    el.className = `floating-element ${element.type}`;
                    el.style.top = Math.random() * 80 + '%';
                    el.style.left = Math.random() * 80 + '%';
                    el.style.animationDelay = Math.random() * 5 + 's';
                    document.body.appendChild(el);
                }
            });
        }

        // Initialize floating elements on load
        window.addEventListener('load', createFloatingElements);

        // Add mouse parallax effect
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((el, index) => {
                const speed = (index % 3 + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 20;
                const y = (mouseY - 0.5) * speed * 20;
                el.style.transform += ` translate(${x}px, ${y}px)`;
            });
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                showHome();
            }
        });
