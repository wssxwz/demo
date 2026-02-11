// Content Discovery App - 极简设计

const mockData = [
    // 首卡 - AI 智能推荐（科技感设计）
    {
        id: 0,
        type: 'daily-ai',
        city: '深圳',
        date: '2月12日',
        weekday: '周一',
        weather: '晴',
        temperature: '24°C',
        aiTitle: 'AI 为你推荐',
        aiScore: '98',
        aiMatches: '12',
        aiTrend: '+156%',
        aiInsight: '你关注的"极简美学"正在流行',
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
            
            <!-- AI 智能卡片 -->
            <div class="ai-smart-card">
                <!-- AI 标识 -->
                <div class="ai-badge">
                    <div class="ai-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7v10c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </div>
                    <span>AI</span>
                </div>
                
                <!-- 核心数据 -->
                <div class="ai-core-data">
                    <div class="score-circle">
                        <svg class="score-ring" viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#667eea"/>
                                    <stop offset="100%" style="stop-color:#764ba2"/>
                                </linearGradient>
                            </defs>
                            <circle class="score-bg" cx="50" cy="50" r="40"/>
                            <circle class="score-progress" cx="50" cy="50" r="40" style="stroke-dashoffset: ${251 - (251 * data.aiScore / 100)}"/>
                        </svg>
                        <div class="score-text">
                            <div class="score-number">${data.aiScore}</div>
                            <div class="score-label">匹配度</div>
                        </div>
                    </div>
                    
                    <div class="data-stats">
                        <div class="stat-row">
                            <span class="stat-icon">📊</span>
                            <span class="stat-label">热度趋势</span>
                            <span class="stat-value green">${data.aiTrend}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-icon">💡</span>
                            <span class="stat-label">精选内容</span>
                            <span class="stat-value">${data.aiMatches} 条</span>
                        </div>
                    </div>
                </div>
                
                <!-- AI 洞察 -->
                <div class="ai-message">
                    <span class="pulse-dot"></span>
                    ${data.aiInsight}
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
