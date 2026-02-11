// Mock Data for Cards
const mockData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
        title: '探索大自然的奥秘，感受生命的美好',
        author: '自然爱好者',
        likes: 1234,
        height: 280
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=500&fit=crop',
        title: '山川湖海，诗和远方',
        author: '旅行家',
        likes: 2341,
        height: 320
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=550&fit=crop',
        title: '日落时分的温柔时光',
        author: '摄影师',
        likes: 3456,
        height: 260
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=650&fit=crop',
        title: '森林深处的秘密花园',
        author: '探险者',
        likes: 987,
        height: 350
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop',
        title: '清晨的第一缕阳光',
        author: '早起者',
        likes: 4567,
        height: 290
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=600&fit=crop',
        title: '冰雪世界的纯净之美',
        author: '雪山向导',
        likes: 2890,
        height: 330
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=450&fit=crop',
        title: '都市夜景，霓虹闪烁',
        author: '城市观察者',
        likes: 5678,
        height: 270
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=550&fit=crop',
        title: '海边的浪漫时刻',
        author: '海洋爱好者',
        likes: 3210,
        height: 310
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=500&fit=crop',
        title: '繁花似锦的春天',
        author: '园艺师',
        likes: 1876,
        height: 295
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=600&fit=crop',
        title: '星空下的无限遐想',
        author: '天文爱好者',
        likes: 6543,
        height: 340
    }
];

// Initialize App
class DiscoveryApp {
    constructor() {
        this.currentTab = 'discovery';
        this.init();
    }

    init() {
        this.renderCards();
        this.setupTabSwitching();
        this.setupCardInteractions();
    }

    renderCards() {
        const grid = document.getElementById('masonryGrid');
        grid.innerHTML = '';

        mockData.forEach((item, index) => {
            const card = this.createCard(item);
            grid.appendChild(card);
        });
    }

    createCard(data) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${data.image}" alt="${data.title}" class="card-image" style="height: ${data.height}px; object-fit: cover;">
            <div class="card-content">
                <h3 class="card-title">${data.title}</h3>
                <div class="card-meta">
                    <div class="card-avatar"></div>
                    <span class="card-author">${data.author}</span>
                    <div class="card-likes">
                        <svg class="heart-icon" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span>${this.formatNumber(data.likes)}</span>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    formatNumber(num) {
        if (num >= 10000) {
            return (num / 10000).toFixed(1) + 'w';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }

    setupTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const discoveryContent = document.getElementById('discovery');
        const otherContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;
                
                // Update active button
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update visible content
                if (targetTab === 'discovery') {
                    discoveryContent.classList.add('active');
                    otherContents.forEach(c => c.classList.remove('active'));
                } else {
                    discoveryContent.classList.remove('active');
                    otherContents.forEach(c => {
                        if (c.id === targetTab) {
                            c.classList.add('active');
                        } else {
                            c.classList.remove('active');
                        }
                    });
                }

                this.currentTab = targetTab;
            });
        });
    }

    setupCardInteractions() {
        const grid = document.getElementById('masonryGrid');
        
        grid.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            if (card) {
                // Add click animation
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DiscoveryApp();
});
