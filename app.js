// Content Discovery App - 极简设计

const mockData = [
    // 首卡 - 今天宜穿搭推荐
    {
        id: 0,
        type: 'weather-style',
        city: '深圳',
        temperature: '26°',
        mainTitle: '你在深圳·今天宜',
        styleTheme: '潮流运动风',
        tags: [
            { icon: '⚡', label: '潮流运动风' },
            { icon: '🌙', label: '明炫街头' },
            { icon: '☀️', label: '夏日清爽' }
        ],
        products: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop',
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop'
        ],
        likes: '5.6k'
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
            const card = item.type === 'weather-style' 
                ? this.createDailyPicksCard(item) 
                : this.createContentCard(item);
            grid.appendChild(card);
        });
    }

    createDailyPicksCard(data) {
        const card = document.createElement('div');
        card.className = 'card weather-style-card';
        
        card.innerHTML = `
            <!-- 背景渐变 -->
            <div class="weather-bg"></div>
            
            <!-- 顶部天气 -->
            <div class="weather-top">
                <div class="temp-display">${data.temperature}</div>
                <div class="weather-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
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
            </div>
            
            <!-- 标题区 -->
            <div class="style-header">
                <h2 class="main-title">${data.mainTitle}</h2>
                <h3 class="style-theme">${data.styleTheme}</h3>
            </div>
            
            <!-- 标签组 -->
            <div class="style-tags">
                ${data.tags.map(tag => `
                    <div class="style-tag">
                        <span class="tag-icon">${tag.icon}</span>
                        <span class="tag-label">${tag.label}</span>
                    </div>
                `).join('')}
            </div>
            
            <!-- 商品展示 -->
            <div class="products-display">
                ${data.products.map(img => `
                    <div class="product-item">
                        <img src="${img}" alt="Product">
                    </div>
                `).join('')}
            </div>
            
            <!-- 点赞数 -->
            <div class="likes-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                <span>${data.likes}</span>
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
