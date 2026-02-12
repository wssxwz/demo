// Content Discovery App - 极简设计

const mockData = [
    // 首卡 - 今日推荐（真实内容预告）
    {
        id: 0,
        type: 'daily-ai',
        city: '深圳',
        date: '2月12日',
        weekday: '周一',
        weather: '晴',
        temperature: '24°C',
        highlights: [
            { emoji: '🏠', title: '北欧风客厅改造', author: '@家居达人Lily' },
            { emoji: '👗', title: '早春穿搭配色指南', author: '@时尚博主Anna' },
            { emoji: '📱', title: 'AirPods Pro 2 深度体验', author: '@科技评测君' }
        ],
        aiTag: 'AI 精选',
        backgroundImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1200&fit=crop'
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
            const card = item.type === 'daily-ai' 
                ? this.createDailyPicksCard(item) 
                : this.createContentCard(item);
            grid.appendChild(card);
        });
    }

    createDailyPicksCard(data) {
        const card = document.createElement('div');
        card.className = 'card daily-ai-card';
        
        card.innerHTML = `
            <img src="${data.backgroundImage}" alt="Daily AI" class="ai-background-image">
            <div class="ai-overlay"></div>
            
            <!-- 扫描线效果 -->
            <div class="scan-line"></div>
            
            <!-- 顶部信息栏 -->
            <div class="ai-top-bar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>${data.city}</span>
                <span class="divider">|</span>
                <span>${data.date} ${data.weekday}</span>
                <span class="divider">|</span>
                <span>☀️ ${data.temperature} ${data.weather}</span>
            </div>
            
            <!-- 今日推荐卡片 -->
            <div class="daily-card">
                <div class="daily-header">
                    <span class="ai-tag">✨ ${data.aiTag}</span>
                    <span class="daily-title">今日为你推荐</span>
                </div>
                
                <div class="highlights-list">
                    ${data.highlights.map(item => `
                        <div class="highlight-item">
                            <span class="highlight-emoji">${item.emoji}</span>
                            <div class="highlight-info">
                                <div class="highlight-title">${item.title}</div>
                                <div class="highlight-author">${item.author}</div>
                            </div>
                        </div>
                    `).join('')}
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
