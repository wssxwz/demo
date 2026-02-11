// Content Discovery App - 极简设计

const mockData = [
    // 首卡 - 每日精选（智能推荐入口）
    {
        id: 0,
        type: 'daily-picks',
        title: '今日为你精选',
        subtitle: '基于你的兴趣',
        count: 12,
        categories: ['家居', '穿搭', '数码'],
        gradient: ['#667eea', '#764ba2']
    },
    // 精品内容卡片 - 简洁设计
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
        title: '极简台灯设计',
        author: 'MinimalHome',
        likes: 2.3,
        category: '家居'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop',
        title: '秋日穿搭灵感',
        author: 'StyleDaily',
        likes: 5.6,
        category: '穿搭'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        title: 'AirPods Pro 2',
        author: 'TechReview',
        likes: 8.9,
        category: '数码'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=550&fit=crop',
        title: '温暖的家',
        author: 'CozySpace',
        likes: 3.2,
        category: '家居'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=450&fit=crop',
        title: '春日look',
        author: 'FashionWeek',
        likes: 6.7,
        category: '穿搭'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
        title: 'MacBook Pro M3',
        author: 'AppleInsider',
        likes: 12.4,
        category: '数码'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=500&fit=crop',
        title: '北欧风客厅',
        author: 'ScandiHome',
        likes: 4.1,
        category: '家居'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=450&fit=crop',
        title: '职场穿搭',
        author: 'WorkStyle',
        likes: 7.3,
        category: '穿搭'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
        title: '机械键盘',
        author: 'KeyboardLab',
        likes: 5.8,
        category: '数码'
    }
];

class DiscoveryApp {
    constructor() {
        this.init();
    }

    init() {
        this.renderCards();
        this.setupTabSwitching();
    }

    renderCards() {
        const grid = document.getElementById('masonryGrid');
        grid.innerHTML = '';

        mockData.forEach(item => {
            const card = item.type === 'daily-picks' 
                ? this.createDailyPicksCard(item) 
                : this.createContentCard(item);
            grid.appendChild(card);
        });
    }

    createDailyPicksCard(data) {
        const card = document.createElement('div');
        card.className = 'card daily-picks-card';
        
        card.innerHTML = `
            <div class="daily-picks-bg"></div>
            <div class="daily-picks-content">
                <div class="picks-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                </div>
                <h3 class="picks-title">${data.title}</h3>
                <p class="picks-subtitle">${data.subtitle}</p>
                <div class="picks-count">${data.count} 篇内容</div>
                <div class="picks-categories">
                    ${data.categories.map(cat => `<span class="pick-tag">${cat}</span>`).join('')}
                </div>
            </div>
        `;
        return card;
    }

    createContentCard(data) {
        const card = document.createElement('div');
        card.className = 'card content-card';
        
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${data.image}" alt="${data.title}" class="card-image">
                <div class="card-overlay">
                    <div class="card-likes">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span>${data.likes}k</span>
                    </div>
                </div>
            </div>
            <div class="card-info">
                <h4 class="card-title">${data.title}</h4>
                <p class="card-author">${data.author}</p>
            </div>
        `;
        return card;
    }

    setupTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const discoveryContent = document.getElementById('discovery');
        const otherContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;
                
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                if (targetTab === 'discovery') {
                    discoveryContent.classList.add('active');
                    otherContents.forEach(c => c.classList.remove('active'));
                } else {
                    discoveryContent.classList.remove('active');
                    otherContents.forEach(c => {
                        c.classList.toggle('active', c.id === targetTab);
                    });
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DiscoveryApp();
});
