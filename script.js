// 产品数据
const products = [
    {id: 'live-face', image: 'https://img.cdn1.vip/i/68cc8b597a8c4_1758235481.webp', brand: '抖音', title: '【直播伴侣】电脑开播人脸，实名人不在身边直接过', price: 88, sales: 15, rating: 4.9, desc: '<p><strong>专业解决抖音直播伴侣人脸识别问题</strong></p><p><strong>无需本人在场即可通过认证，技术稳定可靠</strong></p><p><strong>提供远程安装服务，一次性解决所有问题</strong></p>'},
    {id: 'live-detection', image: 'https://img.cdn1.vip/i/68cc8bccdb55b_1758235596.webp', brand: '抖音', title: '【直播伴侣】120秒活体检测异常，换人也扫不过去，完美解决，长期可用技术', price: 360, sales: 23, rating: 5.0, desc: '<p><strong>彻底解决120秒活体检测异常问题</strong></p><p><strong>采用最新技术手段，100%通过率保证</strong></p><p><strong>长期稳定可用，无需重复购买</strong></p>'},
    {id: 'account-open', image: 'https://img.cdn1.vip/i/68d43efa3486d_1758740218.webp', brand: '技术服务', title: '代开职人号秒开登录可以用简单', price: 150, sales: 10, rating: 4.8, desc: '<p><strong>专业代开职人号服务，秒开即用</strong></p><p><strong>操作简单便捷，无需繁琐认证流程</strong></p><p><strong>稳定可靠，专业团队售后保障</strong></p>'},
    {id: 'script-dev', image: 'https://img.cdn1.vip/i/68d43ef9bd7c2_1758740217.webp', brand: '技术服务', title: '脚本开发定制电脑脚本', price: 399, sales: 8, rating: 4.7, desc: '<p><strong>量身定制专业电脑脚本开发服务</strong></p><p><strong>高效稳定，24小时不间断运行</strong></p><p><strong>源码交付，免费调试，终身维护</strong></p>'},
    {id: 'voice-clone', image: 'https://img.cdn1.vip/i/68d43efdb26a8_1758740221.webp', brand: 'AI技术', title: '高质量声音克隆ai数字人任何人声音克隆合成', price: 200, sales: 16, rating: 4.9, desc: '<p><strong>AI深度学习技术，声音高度还原</strong></p><p><strong>支持多语言多音色，音质清晰自然</strong></p><p><strong>一次克隆，永久使用，无机器感</strong></p>'},
    {id: 'digital-human', image: 'https://img.cdn1.vip/i/68d43ef755dd8_1758740215.jpg', brand: 'AI技术', title: '数字人开发定制高质量直播团购卖货口播视频', price: 999, sales: 12, rating: 4.8, desc: '<p><strong>专业AI数字主播，真人级别表现力</strong></p><p><strong>24小时不间断直播，多场景灵活适配</strong></p><p><strong>低成本高效率运营，定制化服务</strong></p>'},
    {id: 'obs-setup', image: 'https://img.cdn1.vip/i/68d43ef97865c_1758740217.webp', brand: '直播技术', title: 'obs 直播伴侣专业调试清晰度卡顿', price: 88, sales: 25, rating: 5.0, desc: '<p><strong>专业OBS直播伴侣调试优化服务</strong></p><p><strong>解决卡顿延迟，大幅提升画质清晰度</strong></p><p><strong>一对一远程调试，即时生效</strong></p>'}
];

// 获取品牌样式类
function getBrandClass(brand) {
    switch(brand) {
        case '技术服务': return 'service';
        case 'AI技术': return 'ai';
        case '抖音': return 'douyin';
        case '直播技术': return 'live';
        default: return 'douyin';
    }
}

// 渲染产品列表
function renderProducts(container, isGrid = false) {
    const html = products.map(p => {
        const brandClass = getBrandClass(p.brand);
        if (isGrid) {
            return `<div class="product-card" onclick="showProductDetail('${p.id}')">
                <div class="product-image"><img src="${p.image}" alt="${p.title}" class="product-real-image"></div>
                <div class="product-info">
                    <div class="product-brand ${brandClass}">${p.brand}</div>
                    <div class="product-title">${p.title}</div>
                    <div class="current-price">¥${p.price}</div>
                    <div class="product-sales-info">
                        <span class="sales-count">已售 ${p.sales}</span>
                        <button class="product-btn" onclick="event.stopPropagation()">立即购买</button>
                    </div>
                </div>
            </div>`;
        } else {
            return `<div class="product-card" onclick="showProductDetail('${p.id}')">
                <div class="product-image"><img src="${p.image}" alt="${p.title}" class="product-real-image"></div>
                <div class="product-info">
                    <div class="product-brand ${brandClass}">${p.brand}</div>
                    <div class="product-title">${p.title}</div>
                    <div class="current-price">¥${p.price}</div>
                    <div class="product-sales-info">
                        <span class="sales-count">已售 ${p.sales}</span>
                        <button class="product-btn" onclick="event.stopPropagation()">立即购买</button>
                    </div>
                </div>
            </div>`;
        }
    }).join('');
    document.getElementById(container).innerHTML = html;
}

// 显示产品详情
function showProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    document.getElementById('detailImage').innerHTML = `<img src="${product.image}" alt="${product.title}">`;
    document.getElementById('detailBrand').textContent = product.brand;
    document.getElementById('detailName').textContent = product.title;
    document.getElementById('detailPrice').textContent = `¥${product.price}`;
    document.getElementById('detailSales').textContent = `已售 ${product.sales} 件`;
    document.getElementById('productDesc').innerHTML = product.desc;
    document.getElementById('productDetail').classList.add('show');
}

// 隐藏产品详情
function hideProductDetail() {
    document.getElementById('productDetail').classList.remove('show');
}

// 侧边菜单功能
function toggleSideMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('sideMenuOverlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        menu.classList.add('show');
        overlay.classList.add('show');
    }
}

function closeSideMenu() {
    document.getElementById('sideMenu').classList.remove('show');
    document.getElementById('sideMenuOverlay').classList.remove('show');
}

// 客服面板功能
function toggleServicePanel() {
    document.getElementById('servicePanel').classList.toggle('show');
}

function closeServicePanel() {
    document.getElementById('servicePanel').classList.remove('show');
}

// 微信联系
function contactWeChat(wxNumber) {
    const wechatNumber = wxNumber || 'uisdc2024';
    if (navigator.clipboard) {
        navigator.clipboard.writeText(wechatNumber).then(() => showToast(`微信号 ${wechatNumber} 已复制`)).catch(() => showToast(`微信号: ${wechatNumber}`));
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = wechatNumber;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast(`微信号 ${wechatNumber} 已复制`);
        } catch (err) {
            showToast(`微信号: ${wechatNumber}`);
        }
        document.body.removeChild(textArea);
    }
    closeServicePanel();
}

// FAQ 折叠功能
function toggleFaq(element) {
    element.parentElement.classList.toggle('active');
}

// 横幅轮播功能
function initBanner() {
    const container = document.querySelector('.banner-container');
    const dots = document.querySelectorAll('.dot');
    let current = 0;
    
    function nextSlide() {
        current = (current + 1) % 2;
        container.style.transform = `translateX(-${current * 50}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    }
    
    setInterval(nextSlide, 4000);
    dots.forEach((dot, i) => {
        dot.onclick = () => {
            current = i;
            container.style.transform = `translateX(-${current * 50}%)`;
            dots.forEach((d, j) => d.classList.toggle('active', j === current));
        };
    });
}

// 显示提示消息
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.style.cssText = 'position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 10px 20px; border-radius: 20px; font-size: 14px; z-index: 10000; opacity: 0; transition: opacity 0.3s;';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 2000);
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    renderProducts('productGrid', false);
    renderProducts('hottechGrid', true);
    initBanner();
    
    // 绑定购买按钮事件
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-favorite')) {
            e.target.textContent = e.target.textContent === '收藏' ? '已收藏' : '收藏';
            e.target.style.background = e.target.textContent === '已收藏' ? '#FF4757' : '#f8f9fa';
            e.target.style.color = e.target.textContent === '已收藏' ? 'white' : '#666';
        }
        if (e.target.classList.contains('btn-buy') || e.target.classList.contains('product-btn')) {
            showToast('请联系客服完成购买！');
        }
    });
    
    console.log('直了个播网站初始化完成');
});