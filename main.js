// BioGen AI - Main JavaScript File

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeParticles();
    initializeCounters();
    initializeScrollEffects();
    initializeMolecularBackground();
});

// Animation initialization
function initializeAnimations() {
    // Animate hero text
    anime({
        targets: '.gradient-text',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutExpo'
    });

    // Animate feature cards
    anime({
        targets: '.glass-card',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: anime.stagger(200, {start: 1000}),
        easing: 'easeOutExpo'
    });

    // Animate navigation
    anime({
        targets: 'nav',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 600,
        easing: 'easeOutExpo'
    });
}

// Particle system for molecular background
function initializeParticles() {
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;

    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'absolute w-2 h-2 bg-teal-400 rounded-full opacity-60';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    container.appendChild(particle);
    
    // Animate particle
    anime({
        targets: particle,
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: [0.5, 1.2, 0.5],
        opacity: [0.3, 0.8, 0.3],
        duration: anime.random(3000, 6000),
        loop: true,
        easing: 'easeInOutSine'
    });
}

// Counter animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                
                anime({
                    targets: counter,
                    innerHTML: [0, target],
                    duration: 2000,
                    round: 1,
                    easing: 'easeOutExpo',
                    update: function(anim) {
                        counter.innerHTML = Math.round(anim.animatables[0].target.innerHTML);
                    }
                });
                
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Scroll effects
function initializeScrollEffects() {
    const scrollElements = document.querySelectorAll('.glass-card, .feature-icon');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Molecular background with p5.js
function initializeMolecularBackground() {
    const canvas = document.getElementById('molecular-canvas');
    if (!canvas) return;

    new p5((p) => {
        let molecules = [];
        
        p.setup = function() {
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent('molecular-canvas');
            
            // Create molecules
            for (let i = 0; i < 20; i++) {
                molecules.push(new Molecule(p));
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and display molecules
            molecules.forEach(molecule => {
                molecule.update();
                molecule.display();
            });
            
            // Draw connections
            drawConnections(p, molecules);
        };
        
        p.windowResized = function() {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    });
}

class Molecule {
    constructor(p) {
        this.p = p;
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.vx = p.random(-0.5, 0.5);
        this.vy = p.random(-0.5, 0.5);
        this.size = p.random(3, 8);
        this.color = p.random(['#38b2ac', '#ed8936', '#4299e1']);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > this.p.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.p.height) this.vy *= -1;
        
        // Keep within bounds
        this.x = this.p.constrain(this.x, 0, this.p.width);
        this.y = this.p.constrain(this.y, 0, this.p.height);
    }
    
    display() {
        this.p.fill(this.color + '40');
        this.p.noStroke();
        this.p.ellipse(this.x, this.y, this.size * 2);
        
        this.p.fill(this.color);
        this.p.ellipse(this.x, this.y, this.size);
    }
}

function drawConnections(p, molecules) {
    const maxDistance = 100;
    
    for (let i = 0; i < molecules.length; i++) {
        for (let j = i + 1; j < molecules.length; j++) {
            const dist = p.dist(molecules[i].x, molecules[i].y, molecules[j].x, molecules[j].y);
            
            if (dist < maxDistance) {
                const alpha = p.map(dist, 0, maxDistance, 100, 0);
                p.stroke(56, 178, 172, alpha);
                p.strokeWeight(1);
                p.line(molecules[i].x, molecules[i].y, molecules[j].x, molecules[j].y);
            }
        }
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-6 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutExpo'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInExpo',
            complete: () => notification.remove()
        });
    }, 3000);
}

// Tool-specific functions
function initializeAntibodyTool() {
    const sequenceInput = document.getElementById('antigen-sequence');
    const generateBtn = document.getElementById('generate-antibody');
    const resultsDiv = document.getElementById('antibody-results');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            const sequence = sequenceInput.value.trim();
            if (!sequence) {
                showNotification('请输入抗原序列', 'error');
                return;
            }
            
            generateAntibody(sequence);
        });
    }
}

function generateAntibody(sequence) {
    showNotification('正在生成抗体序列...', 'info');
    
    // Simulate generation process
    const progressBar = document.getElementById('generation-progress');
    const progressText = document.getElementById('progress-text');
    
    anime({
        targets: progressBar,
        width: '100%',
        duration: 3000,
        easing: 'easeInOutQuad',
        update: function(anim) {
            const percent = Math.round(anim.progress);
            progressText.textContent = `${percent}%`;
        },
        complete: function() {
            displayAntibodyResults();
            showNotification('抗体生成完成！', 'success');
        }
    });
}

function displayAntibodyResults() {
    const resultsDiv = document.getElementById('antibody-results');
    if (!resultsDiv) return;
    
    const mockResults = [
        {
            sequence: 'EVQLVESGGGLVQPGGSLRLSCAASGFTFSSYAMHWVRQAPGKGLEWVSAIGTAGDTYYPDSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCAR',
            affinity: '0.3 nM',
            stability: '95%',
            score: 0.92
        },
        {
            sequence: 'QVQLQESGPGLVKPSETLSLTCTVSGGSISSYYWGWIRQPPGKGLEWIGYIYYSGSTNYNPSLKSRVTISVDTSKNQFSLKLSSVTAADTAVYYCAR',
            affinity: '0.8 nM',
            stability: '91%',
            score: 0.87
        },
        {
            sequence: 'EVQLLESGGGLVQPGGSLRLSCAASGFTFSSYAMSWVRQAPGKGLEWVSAIGTAGDTYYPDSVKGRFTISRDNSKNTLYLQMNSLRAEDTAVYYCAR',
            affinity: '1.2 nM',
            stability: '89%',
            score: 0.84
        }
    ];
    
    resultsDiv.innerHTML = mockResults.map((result, index) => `
        <div class="bg-white/10 rounded-lg p-4 mb-4 border border-white/20">
            <div class="flex items-center justify-between mb-3">
                <h4 class="text-white font-semibold">候选抗体 ${index + 1}</h4>
                <div class="flex items-center space-x-2">
                    <span class="text-teal-400 text-sm">亲和力: ${result.affinity}</span>
                    <span class="text-orange-400 text-sm">稳定性: ${result.stability}</span>
                </div>
            </div>
            <div class="text-gray-300 text-sm font-mono mb-3 break-all">${result.sequence}</div>
            <div class="flex items-center justify-between">
                <div class="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                    <div class="bg-gradient-to-r from-teal-500 to-orange-500 h-2 rounded-full" style="width: ${result.score * 100}%"></div>
                </div>
                <span class="text-white text-sm">${Math.round(result.score * 100)}分</span>
            </div>
        </div>
    `).join('');
    
    resultsDiv.style.display = 'block';
}

// Initialize tool-specific functions based on page
if (window.location.pathname.includes('antibody.html')) {
    document.addEventListener('DOMContentLoaded', initializeAntibodyTool);
}

// Export functions for global use
window.showNotification = showNotification;
window.generateAntibody = generateAntibody;