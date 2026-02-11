// Content Discovery App - 极简设计

const mockData = [
    // 首卡 - AI 每日推荐（仿照参考图设计）
    {
        id: 0,
        type: 'daily-ai',
        city: '深圳',
        date: '2月12日',
        weekday: '周一',
        weather: '晴',
        temperature: '24°C',
        weatherIcon: 'sunny',
        aiTitle: '今日智能推荐',
        aiDescription: '基于你的浏览偏好，为你精选12条优质内容，涵盖家居美学、时尚穿搭与科技前沿。',
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
            <div class="ai-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            
            <!-- 顶部信息栏 -->
            <div class="ai-top-bar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>${data.city}</span>
                <span class="divider">|</span>
                <span>${data.date} ${data.weekday}</span>
                <span class="divider">|</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span>${data.temperature} ${data.weather}</span>
            </div>
            
            <!-- 左侧天气卡片 -->
            <div class="weather-card">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="5" fill="url(#sunGradient)"/>
                    <g stroke="url(#sunGradient)" stroke-width="2" stroke-linecap="round">
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </g>
                    <defs>
                        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#FFD54F"/>
                            <stop offset="100%" style="stop-color:#FFA726"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            
            <!-- 底部 AI 推荐卡片 -->
            <div class="ai-recommendation-card">
                <div class="ai-sparkle">✨</div>
                <h3 class="ai-title">${data.aiTitle}</h3>
                <p class="ai-description">${data.aiDescription}</p>
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
