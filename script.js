// 云阶学社前端原型：商品筛选、详情弹窗、购物车、FAQ、深色模式等交互。
const products = [
  { id: 1, title: '考研英语二高分阅读系统课', category: '考研课程', tag: '精选推荐', icon: 'fa-graduation-cap', desc: '用结构化阅读方法拆解真题逻辑，覆盖长难句、题型策略与错题复盘体系。', price: 199, original: 399, rating: 4.9, sales: 2836, audience: '适合考研英语二 60-80 分提分用户', catalog: ['阅读题型底层逻辑', '2016-2025 真题精讲', '长难句与同义替换', '30 天错题复盘计划'] },
  { id: 2, title: '信号与系统考研强化资料包', category: '电子资料', tag: '限时优惠', icon: 'fa-wave-square', desc: '重点院校高频题型、公式速查、典型证明与强化练习，帮助专业课建立题感。', price: 89, original: 169, rating: 4.8, sales: 1520, audience: '适合电子信息、通信、自动化考研党', catalog: ['核心公式速查表', '高频题型 120 题', '证明题专项', '冲刺模拟卷与解析'] },
  { id: 3, title: 'AI 提效 Prompt 模板库', category: 'AI 工具', tag: '新品上架', icon: 'fa-wand-magic-sparkles', desc: '覆盖学习、写作、办公、运营与复盘场景，附带可复制的提示词框架与改写指南。', price: 69, original: 129, rating: 4.9, sales: 4218, audience: '适合学生、运营、产品与知识工作者', catalog: ['学习研究 Prompt', '内容创作 Prompt', '办公自动化 Prompt', '个人知识库 Prompt'] },
  { id: 4, title: 'Python 零基础入门课', category: '编程开发', tag: '精选推荐', icon: 'fa-code', desc: '从语法到自动化脚本，配套练习与小项目，让非科班用户也能建立编程手感。', price: 149, original: 299, rating: 4.7, sales: 3190, audience: '适合零基础自学者、数据分析入门用户', catalog: ['Python 基础语法', '文件与表格自动化', '爬虫与接口初识', '3 个实战小项目'] },
  { id: 5, title: 'Notion 学习管理模板', category: '设计模板', tag: '高复购', icon: 'fa-table-columns', desc: '整合课程、论文、任务、复盘与资源库，帮助你搭建长期可维护的学习操作系统。', price: 49, original: 99, rating: 4.8, sales: 5062, audience: '适合大学生、考研党、自律学习者', catalog: ['课程看板', '论文资料库', '错题与复盘系统', '年度目标仪表盘'] },
  { id: 6, title: '简历优化与面试话术包', category: '职场技能', tag: '限时优惠', icon: 'fa-briefcase', desc: '提供简历结构、STAR 项目表达、面试高频问题与追问应对，提升求职表达质量。', price: 79, original: 159, rating: 4.8, sales: 2389, audience: '适合应届生、转行用户与职场新人', catalog: ['简历模块拆解', '项目经历表达库', '面试问答脚本', '薪资沟通话术'] },
  { id: 7, title: '高数基础到强化训练营', category: '考研课程', tag: '精选推荐', icon: 'fa-square-root-variable', desc: '从概念补弱到强化题型，搭配阶段测评，适合需要系统补齐数学基础的备考用户。', price: 249, original: 499, rating: 4.9, sales: 1877, audience: '适合数学基础薄弱、需要体系化训练的考研党', catalog: ['极限与连续', '一元微积分', '多元微积分', '强化题型与模拟测评'] },
  { id: 8, title: '设计师作品集模板合集', category: '设计模板', tag: '新品上架', icon: 'fa-layer-group', desc: '包含 UI、视觉、品牌与交互作品集结构，帮助设计师呈现项目思考与商业价值。', price: 129, original: 259, rating: 4.7, sales: 1146, audience: '适合设计专业学生、转岗设计师、自由职业者', catalog: ['作品集叙事框架', '项目展示版式', '视觉规范页', '面试讲稿模板'] }
];

const categories = [
  { name: '全部资源', icon: 'fa-border-all', hint: '精选全库' },
  { name: '考研课程', icon: 'fa-graduation-cap', hint: '系统提分' },
  { name: '编程开发', icon: 'fa-code', hint: '项目实战' },
  { name: 'AI 工具', icon: 'fa-robot', hint: '效率增强' },
  { name: '设计模板', icon: 'fa-pen-nib', hint: '即取即用' },
  { name: '职场技能', icon: 'fa-briefcase', hint: '求职晋升' },
  { name: '电子资料', icon: 'fa-file-lines', hint: '资料包' }
];

const faqs = [
  ['虚拟产品如何交付？', '完成购买后，系统会自动展示资源入口、下载链接或课程访问方式。正式上线时可接入短信、邮箱与站内消息同步通知。'],
  ['购买后可以退款吗？', '因虚拟产品具有可复制性，已交付资源原则上不支持无理由退款；若出现无法访问、内容缺失等问题，可联系客服核验处理。'],
  ['资料会更新吗？', '标注“长期更新”的资源会按照考试大纲、工具版本或行业变化持续维护，会员用户可优先收到更新提醒。'],
  ['是否支持手机和平板查看？', '支持。页面与资源交付入口均按手机、平板和电脑做响应式适配，下载型资料也可跨设备保存查看。'],
  ['课程是否有有效期？', '单课通常提供至少 12 个月访问期，会员权益按套餐周期生效；具体以商品详情中的售后说明为准。'],
  ['如何联系客服？', '可通过页脚邮箱、服务热线或后续接入的在线客服入口联系，我们会优先处理访问、支付与资料更新问题。']
];

let activeCategory = '全部资源';
let keyword = '';
let sortMode = 'featured';
let cart = JSON.parse(localStorage.getItem('yunjie-cart') || '[]');

const $ = (selector) => document.querySelector(selector);
const productGrid = $('#productGrid');
const categoryGrid = $('#categoryGrid');
const emptyState = $('#emptyState');
const cartCount = $('#cartCount');
const cartItems = $('#cartItems');
const cartTotal = $('#cartTotal');
const toast = $('#toast');

function formatPrice(value) { return `¥${value}`; }

function renderCategories() {
  categoryGrid.innerHTML = categories.map((cat) => `
    <button class="category-card ${cat.name === activeCategory ? 'active' : ''}" data-category="${cat.name}">
      <i class="fa-solid ${cat.icon}"></i>
      <strong>${cat.name}</strong>
      <span>${cat.hint}</span>
    </button>
  `).join('');
}

function getFilteredProducts() {
  const normalized = keyword.trim().toLowerCase();
  let list = products.filter((item) => {
    const matchCategory = activeCategory === '全部资源' || item.category === activeCategory;
    const matchKeyword = !normalized || `${item.title}${item.category}${item.desc}${item.audience}`.toLowerCase().includes(normalized);
    return matchCategory && matchKeyword;
  });
  if (sortMode === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
  if (sortMode === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
  if (sortMode === 'rating-desc') list = [...list].sort((a, b) => b.rating - a.rating);
  return list;
}

function renderProducts() {
  const list = getFilteredProducts();
  productGrid.innerHTML = list.map((item) => `
    <article class="product-card reveal visible">
      <div class="product-hero">
        <i class="fa-solid ${item.icon}"></i>
        <span class="badge">${item.tag}</span>
      </div>
      <h3>${item.title}</h3>
      <span class="tag">${item.category}</span>
      <p>${item.desc}</p>
      <div class="meta-line"><span><i class="fa-solid fa-star"></i> ${item.rating}</span><span>${item.sales.toLocaleString()} 人购买</span></div>
      <div class="audience"><i class="fa-regular fa-user"></i> ${item.audience}</div>
      <div class="price-row"><strong>${formatPrice(item.price)}</strong><del>${formatPrice(item.original)}</del></div>
      <div class="card-actions">
        <button class="btn secondary detail-btn" data-id="${item.id}">查看详情</button>
        <button class="btn primary add-cart-btn" data-id="${item.id}">加入购物车</button>
      </div>
    </article>
  `).join('');
  emptyState.style.display = list.length ? 'none' : 'block';
}

function saveCart() { localStorage.setItem('yunjie-cart', JSON.stringify(cart)); }

function updateCart() {
  cartCount.textContent = cart.length;
  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-state" style="display:block">购物车还是空的。先挑选一份能提升效率的数字资源吧。</div>';
  } else {
    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-icon"><i class="fa-solid ${item.icon}"></i></div>
        <div><h4>${item.title}</h4><span>${item.category} · ${formatPrice(item.price)}</span></div>
        <button class="remove-btn" data-index="${index}" aria-label="删除 ${item.title}"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `).join('');
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = formatPrice(total);
  saveCart();
}

function addToCart(id) {
  const item = products.find((product) => product.id === Number(id));
  if (!item) return;
  cart.push(item);
  updateCart();
  showToast(`已加入购物车：${item.title}`);
}

function openDetail(id) {
  const item = products.find((product) => product.id === Number(id));
  if (!item) return;
  $('#modalContent').innerHTML = `
    <div class="detail-layout">
      <div class="detail-cover"><i class="fa-solid ${item.icon}"></i></div>
      <div class="detail-content">
        <span class="tag">${item.category} · ${item.tag}</span>
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <div class="meta-line"><span><i class="fa-solid fa-star"></i> ${item.rating} 高评分</span><span>${item.sales.toLocaleString()} 人已购买</span></div>
        <div class="price-row"><strong>${formatPrice(item.price)}</strong><del>${formatPrice(item.original)}</del></div>
        <div class="detail-list">
          <div><strong>你将获得什么</strong><p>完整资源主体、配套说明、学习/使用建议与后续更新领取入口。</p></div>
          <div><strong>适合谁购买</strong><p>${item.audience}。</p></div>
          <div><strong>课程/资源目录</strong><p>${item.catalog.join(' · ')}</p></div>
          <div><strong>售后说明</strong><p>支持访问问题处理、资料缺失补发与版本更新提醒；虚拟资源交付后请妥善保存。</p></div>
          <div><strong>交付方式</strong><p>模拟购买后即时数字交付，可扩展为网盘链接、在线课程权限、邮箱通知或会员中心下载。</p></div>
        </div>
        <button class="btn primary full add-cart-btn" data-id="${item.id}">加入购物车并购买</button>
      </div>
    </div>
  `;
  $('#detailModal').classList.add('open');
  $('#detailModal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeDetail() {
  $('#detailModal').classList.remove('open');
  $('#detailModal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function openCart() {
  $('#cartDrawer').classList.add('open');
  $('#cartDrawer').setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
}

function closeCart() {
  $('#cartDrawer').classList.remove('open');
  $('#cartDrawer').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function renderFaqs() {
  $('#faqList').innerHTML = faqs.map(([question, answer], index) => `
    <article class="faq-item ${index === 0 ? 'open' : ''}">
      <button class="faq-question" aria-expanded="${index === 0}"><span>${question}</span><i class="fa-solid fa-plus"></i></button>
      <div class="faq-answer">${answer}</div>
    </article>
  `).join('');
}

function animateStats() {
  document.querySelectorAll('[data-count]').forEach((node) => {
    const target = Number(node.dataset.count);
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
      node.textContent = target >= 1000 ? `${value.toLocaleString()}+` : value;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}

categoryGrid.addEventListener('click', (event) => {
  const button = event.target.closest('.category-card');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderProducts();
});

productGrid.addEventListener('click', (event) => {
  const detailButton = event.target.closest('.detail-btn');
  const addButton = event.target.closest('.add-cart-btn');
  if (detailButton) openDetail(detailButton.dataset.id);
  if (addButton) addToCart(addButton.dataset.id);
});

$('#modalContent').addEventListener('click', (event) => {
  const addButton = event.target.closest('.add-cart-btn');
  if (addButton) addToCart(addButton.dataset.id);
});

$('#searchInput').addEventListener('input', (event) => { keyword = event.target.value; renderProducts(); });
$('#sortSelect').addEventListener('change', (event) => { sortMode = event.target.value; renderProducts(); });
$('#openCart').addEventListener('click', openCart);
$('#closeCart').addEventListener('click', closeCart);
$('#cartDrawer').addEventListener('click', (event) => { if (event.target.id === 'cartDrawer') closeCart(); });
$('#closeModal').addEventListener('click', closeDetail);
$('#detailModal').addEventListener('click', (event) => { if (event.target.id === 'detailModal') closeDetail(); });
cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('.remove-btn');
  if (!button) return;
  cart.splice(Number(button.dataset.index), 1);
  updateCart();
  showToast('已从购物车移除');
});

$('#checkoutBtn').addEventListener('click', () => {
  if (!cart.length) return showToast('请先添加资源到购物车');
  cart = [];
  updateCart();
  closeCart();
  showToast('模拟结算成功：请接入支付接口与数字交付服务');
});

document.querySelectorAll('.membership-buy').forEach((button) => {
  button.addEventListener('click', () => {
    cart.push({ id: `member-${Date.now()}`, title: button.dataset.name, category: '会员权益', price: Number(button.dataset.price), icon: 'fa-crown' });
    updateCart();
    openCart();
    showToast(`已加入购物车：${button.dataset.name}`);
  });
});

$('#faqList').addEventListener('click', (event) => {
  const question = event.target.closest('.faq-question');
  if (!question) return;
  const item = question.closest('.faq-item');
  item.classList.toggle('open');
  question.setAttribute('aria-expanded', item.classList.contains('open'));
});

$('#themeToggle').addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
  $('#themeToggle').innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  localStorage.setItem('yunjie-theme', isDark ? 'light' : 'dark');
});

$('#mobileMenuBtn').addEventListener('click', () => $('#navLinks').classList.toggle('open'));
$('#navLinks').addEventListener('click', () => $('#navLinks').classList.remove('open'));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeCart(); closeDetail(); } });

const savedTheme = localStorage.getItem('yunjie-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
if (savedTheme === 'dark') $('#themeToggle').innerHTML = '<i class="fa-solid fa-sun"></i>';
renderCategories();
renderProducts();
renderFaqs();
updateCart();
initReveal();
animateStats();
