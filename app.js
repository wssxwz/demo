// Mock Data for Cards
const mockData = [
    // 首坑 - AI 智能助手卡片（特殊设计）
    {
        id: 0,
        type: 'ai-hero',
        city: '深圳',
        weather: '晴',
        temperature: '24°C',
        greeting: '早安',
        aiSuggestion: '今日为您精选 12 条优质内容',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        height: 380
    },
    // 家居好物
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop',
        title: '北欧风ins沙发｜提升客厅格调必备',
        author: '家居达人Lily',
        likes: 8234,
        tag: '家居',
        price: '¥2,899',
        height: 320
    },
    // 穿搭分享
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=650&fit=crop',
        title: '秋冬穿搭｜温柔系毛衣搭配指南',
        author: '时尚博主Anna',
        likes: 12456,
        tag: '穿搭',
        price: '¥599',
        height: 380
    },
    // 数码评测
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=550&fit=crop',
        title: 'AirPods Pro 2深度体验｜降噪音质全面升级',
        author: '科技评测君',
        likes: 15678,
        tag: '数码',
        price: '¥1,899',
        height: 340
    },
    // 美妆护肤
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=600&fit=crop',
        title: '平价好用粉底液测评｜学生党必看',
        author: '美妆种草机',
        likes: 9876,
        tag: '美妆',
        price: '¥159',
        height: 310
    },
    // 家居好物
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=500&fit=crop',
        title: '智能台灯推荐｜护眼学习工作神器',
        author: '好物推荐官',
        likes: 6543,
        tag: '家居',
        price: '¥399',
        height: 290
    },
    // 穿搭
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=650&fit=crop',
        title: '小个子女生穿搭｜显高10cm技巧',
        author: '穿搭笔记',
        likes: 18234,
        tag: '穿搭',
        price: '¥799',
        height: 370
    },
    // 数码
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=550&fit=crop',
        title: 'MacBook Pro M3首发评测｜性能提升50%',
        author: '极客玩家',
        likes: 23456,
        tag: '数码',
        price: '¥12,999',
        height: 330
    },
    // 家居
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=500&fit=crop',
        title: '租房改造｜出租屋也能变网红小窝',
        author: '改造达人',
        likes: 14567,
        tag: '家居',
        price: '¥599',
        height: 300
    },
    // 数码配件
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=600&fit=crop',
        title: '机械键盘推荐｜打字游戏双修神器',
        author: '键盘收藏家',
        likes: 7890,
        tag: '数码',
        price: '¥899',
        height: 350
    },
    // 穿搭
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea1f5d87?w=400&h=650&fit=crop',
        title: '男生基础款穿搭｜简约不简单',
        author: '型男穿搭',
        likes: 11234,
        tag: '穿搭',
        price: '¥1,299',
        height: 360
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
        this.updateAICard();
    }

    renderCards() {
        const grid = document.getElementById('masonryGrid');
        grid.innerHTML = '';

        mockData.forEach((item, index) => {
            const card = item.type === 'ai-hero' 
                ? this.createAIHeroCard(item) 
                : this.createCard(item);
            grid.appendChild(card);
        });
    }

    createAIHeroCard(data) {
        const card = document.createElement('div');
        card.className = 'card ai-hero-card';
        
        const hour = new Date().getHours();
        const greeting = hour < 12 ? '早安' : hour < 18 ? '午安' : '晚安';
        
        card.innerHTML = `
            <div class="ai-hero-content">
                <!-- AI 动画背景 -->
                <div class="ai-background">
                    <div class="ai-particle"></div>
                    <div class="ai-particle"></div>
                    <div class="ai-particle"></div>
                    <div class="ai-particle"></div>
                    <div class="ai-grid"></div>
                </div>
                
                <!-- 内容区 -->
                <div class="ai-header">
                    <div class="ai-logo">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" fill="url(#ai-gradient)" stroke="white" stroke-width="1.5"/>
                            <circle cx="12" cy="12" r="3" fill="white"/>
                            <defs>
                                <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#667eea"/>
                                    <stop offset="100%" style="stop-color:#764ba2"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="ai-badge">AI</div>
                </div>
                
                <div class="ai-greeting">
                    <h2>${greeting}，女王陛下</h2>
                    <div class="location-weather">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-width="2"/>
                            <circle cx="12" cy="10" r="3" stroke-width="2"/>
                        </svg>
                        <span>${data.city}</span>
                        <span class="divider">•</span>
                        <span>${data.weather} ${data.temperature}</span>
                    </div>
                </div>
                
                <div class="ai-suggestion">
                    <div class="suggestion-icon">✨</div>
                    <p>${data.aiSuggestion}</p>
                </div>
                
                <div class="ai-stats">
                    <div class="stat-item">
                        <div class="stat-number">12</div>
                        <div class="stat-label">精选内容</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">98%</div>
                        <div class="stat-label">匹配度</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">3.2K</div>
                        <div class="stat-label">今日浏览</div>
                    </div>
                </div>
            </div>
        `;
        return card;
    }

    createCard(data) {
        const card = document.createElement('div');
        card.className = 'card product-card';
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${data.image}" alt="${data.title}" class="card-image" style="height: ${data.height}px; object-fit: cover;">
                <div class="card-tag ${data.tag}">${data.tag}</div>
                ${data.price ? `<div class="card-price">${data.price}</div>` : ''}
            </div>
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

    updateAICard() {
        // 动态更新 AI 卡片内容
        setInterval(() => {
            const hour = new Date().getHours();
            const greeting = hour < 12 ? '早安' : hour < 18 ? '午安' : '晚安';
            const greetingElement = document.querySelector('.ai-greeting h2');
            if (greetingElement) {
                greetingElement.textContent = `${greeting}，女王陛下`;
            }
        }, 60000); // 每分钟更新一次
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
