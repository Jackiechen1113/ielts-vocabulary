// 词库数据
const words = [
    { english: "resemble", chinese: "像，与……相似" },
    { english: "recognize", chinese: "认出，识别；承认" },
    { english: "adjust", chinese: "调整，使适合" },
    { english: "approach", chinese: "方法" },
    { english: "fundamental", chinese: "基本的，基础的" },
    { english: "rely on", chinese: "依靠，依赖" },
    { english: "domestic", chinese: "家庭的；国内的" },
    { english: "measure", chinese: "测量" },
    { english: "trait", chinese: "特性，特征" },
    { english: "coin", chinese: "创造" },
    { english: "artificial", chinese: "人造的，仿造的" },
    { english: "prompt", chinese: "促进，激起" },
    { english: "exchange", chinese: "交换" },
    { english: "underlie", chinese: "成为……基础" },
    { english: "ignore", chinese: "忽视，不顾" },
    { english: "fertiliser", chinese: "化肥，肥料" },
    { english: "diversity", chinese: "多样性，差异" },
    { english: "detect", chinese: "查明，发现" },
    { english: "isolate", chinese: "使隔离，使孤立" },
    { english: "avoid", chinese: "避免" },
    { english: "budget", chinese: "预算" },
    { english: "adapt to", chinese: "使适应" },
    { english: "alternative", chinese: "供替代的，供选择的；替代品" },
    { english: "compensate", chinese: "补偿，赔偿" },
    { english: "component", chinese: "成分，要素" },
    { english: "military", chinese: "军事的" },
    { english: "criteria", chinese: "标准" },
    { english: "curriculum", chinese: "课程" },
    { english: "feasible", chinese: "可行的" },
    { english: "constrain", chinese: "束缚，限制" },
    { english: "deficiency", chinese: "缺陷，缺点" },
    { english: "supplement", chinese: "补充" },
    { english: "distinguish", chinese: "区别，辨别" },
    { english: "analyze", chinese: "分析，解释" },
    { english: "emphasize", chinese: "强调，着重" },
    { english: "enormous", chinese: "庞大的，巨大的" },
    { english: "imitate", chinese: "模仿" },
    { english: "impair", chinese: "削弱，减少" },
    { english: "hinder", chinese: "阻碍" },
    { english: "legitimate", chinese: "合法的" },
    { english: "limitation", chinese: "限制" },
    { english: "convention", chinese: "手法；习俗" },
    { english: "demanding", chinese: "苛求的" },
    { english: "determine", chinese: "决定" },
    { english: "accelerate", chinese: "加速，促进；强调" },
    { english: "ancient", chinese: "古代的;古老的" },
    { english: "beneficial", chinese: "有益的" },
    { english: "chronic", chinese: "慢性的，长期性的" },
    { english: "conscious", chinese: "有意识的，神志清醒的" },
    { english: "minimize", chinese: "最小化，使……减少到最少" },
    { english: "immunity", chinese: "免疫力" },
    { english: "imperative", chinese: "必要的，紧急的" },
    { english: "secrete", chinese: "分泌" },
    { english: "exaggerate", chinese: "夸大，夸张" },
    { english: "transmit", chinese: "传达，传输" },
    { english: "extinct", chinese: "灭绝" },
    { english: "exclusive", chinese: "独有的；排外的；专一的" },
    { english: "guarantee", chinese: "保证，担保" },
    { english: "inherit", chinese: "继承" },
    { english: "witness", chinese: "见证，证据；目击者" },
    { english: "magnetic", chinese: "有磁性的" },
    { english: "loss", chinese: "减少；亏损；失败；遗失的" },
    { english: "option", chinese: "选择" },
    { english: "prefer to", chinese: "更喜欢" },
    { english: "priority", chinese: "优先权" },
    { english: "primary", chinese: "主要的" },
    { english: "principle", chinese: "原理" },
    { english: "potential", chinese: "潜能；潜在的" },
    { english: "quantity", chinese: "量，数量" },
    { english: "settle", chinese: "解决；定居，稳定" },
    { english: "sophisticate", chinese: "使复杂" },
    { english: "specific", chinese: "明确的；特殊的" },
    { english: "survive", chinese: "存活，幸存" },
    { english: "swift", chinese: "迅速的，敏捷的，立刻的" },
    { english: "unexpectedly", chinese: "出乎意料的" },
    { english: "surrounding", chinese: "环境" },
    { english: "attempt", chinese: "试图，尝试" },
    { english: "expertise", chinese: "专门技术" },
    { english: "faculty", chinese: "能力，才能；全体教员" },
    { english: "donate", chinese: "捐赠" },
    { english: "dynamics", chinese: "动力学" },
    { english: "incentive", chinese: "刺激，鼓励；动机" },
    { english: "mortality", chinese: "死亡率" },
    { english: "peripheral", chinese: "外围的，次要的" },
    { english: "vicinity", chinese: "邻近，附近" },
    { english: "threaten", chinese: "威胁，危及" },
    { english: "practice", chinese: "实行；练习" },
    { english: "bacteria", chinese: "细菌" },
    { english: "be subject to", chinese: "受....支配" },
    { english: "be liable to", chinese: "易于……" },
    { english: "innate", chinese: "天生的；内在的，直觉的" },
    { english: "pattern", chinese: "模式" },
    { english: "therapy", chinese: "治疗，理疗" },
    { english: "original", chinese: "原始的，最初的" },
    { english: "confidential", chinese: "机密的，秘密的" },
    { english: "cognitive", chinese: "认知的" },
    { english: "comply with", chinese: "照做，遵守" },
    { english: "consult", chinese: "查阅，商量，请教，咨询" },
    { english: "superior", chinese: "上级的；优秀的" },
    { english: "co-operation", chinese: "合作，协作" },
    { english: "co-ordinate", chinese: "使……协调" },
    { english: "differ", chinese: "使……相异；使……不同" },
    { english: "cue", chinese: "线索" },
    { english: "signal", chinese: "信号" },
    { english: "abandon", chinese: "放弃，遗弃" },
    { english: "halt", chinese: "停止" },
    { english: "fragile", chinese: "脆弱的" },
    { english: "retain", chinese: "记住" },
    { english: "vanish", chinese: "消失，绝迹" },
    { english: "delivery", chinese: "递送" },
    { english: "erode", chinese: "侵蚀" },
    { english: "induce", chinese: "引起，引诱" },
    { english: "stable", chinese: "稳定的" },
    { english: "integrate", chinese: "使……成整体" },
    { english: "equal", chinese: "平等的；相等的；胜任的" },
    { english: "grant", chinese: "拨款；授予" },
    { english: "accumulate", chinese: "积累，积聚" },
    { english: "addictive", chinese: "上瘾的" },
    { english: "adversity", chinese: "逆境，不幸" },
    { english: "aggression", chinese: "侵犯，侵害" },
    { english: "agreeable", chinese: "令人愉快的；合适的；和蔼可亲的" },
    { english: "aid", chinese: "援助，帮助" },
    { english: "allergic", chinese: "过敏的；对……极讨厌的" },
    { english: "altitude", chinese: "高度，海拔" },
    { english: "application", chinese: "应用" },
    { english: "approve", chinese: "批准" },
    { english: "array", chinese: "排列，大批" },
    { english: "assign", chinese: "分配，指派" },
    { english: "association", chinese: "协会，联盟；联系" },
    { english: "attitude", chinese: "看法，态度" },
    { english: "authority", chinese: "当局，权威" },
    { english: "be consistent with", chinese: "与……一致" },
    { english: "bear", chinese: "承担；忍受" },
    { english: "blight", chinese: "损害；枯萎" },
    { english: "boundary", chinese: "边界；底线" },
    { english: "bungle", chinese: "搞糟，拙劣地工作" },
    { english: "burden", chinese: "负担" },
    { english: "calamity", chinese: "灾难" },
    { english: "capacity", chinese: "容量" },
    { english: "catastrophic", chinese: "灾难的" },
    { english: "cater", chinese: "迎合；满足需求" },
    { english: "certify", chinese: "证明，保证" },
    { english: "civic", chinese: "实名的" },
    { english: "comment", chinese: "评论；意见" },
    { english: "commitment", chinese: "承诺，许诺，义务；致力" },
    { english: "communal", chinese: "公共的，公社的" },
    { english: "commute", chinese: "通勤；用……交换" }
];

// 创建一个随机排序的单词索引数组
let wordIndexes = [];
let currentIndex = 0;
let rememberedCount = 0;
let forgottenCount = 0;
let forgottenWords = [];
let timeLeft = 5;
let timer;

// 初始化单词索引数组并随机打乱
function initializeWordIndexes() {
    wordIndexes = Array.from({ length: words.length }, (_, i) => i);
    shuffleArray(wordIndexes);
}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 获取新的DOM元素
const englishWordElement = document.getElementById('english-word');
const chineseMeaningElement = document.getElementById('chinese-meaning');
const timerElement = document.getElementById('timer');
const showChineseButton = document.getElementById('show-chinese');
const rememberButton = document.getElementById('remember-btn');
const forgetButton = document.getElementById('forget-btn');
const rememberedCountElement = document.getElementById('remembered-count');
const forgottenCountElement = document.getElementById('forgotten-count');

function showWord(index) {
    const wordIndex = wordIndexes[index];
    englishWordElement.textContent = words[wordIndex].english;
    chineseMeaningElement.textContent = words[wordIndex].chinese;
    chineseMeaningElement.classList.add('hidden');
    
    // 显示选择按钮
    rememberButton.style.display = 'block';
    forgetButton.style.display = 'block';
    
    timeLeft = 5;
    startTimer();
}

function startTimer() {
    timerElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showChinese();
        }
    }, 1000);
}

function showChinese() {
    clearInterval(timer);
    chineseMeaningElement.classList.remove('hidden');
}

// 处理记得/不记得的函数
function handleRemember() {
    clearInterval(timer);  // 确保清除计时器
    rememberedCount++;
    rememberedCountElement.textContent = rememberedCount;
    showAnswer();
}

function handleForget() {
    clearInterval(timer);  // 确保清除计时器
    forgottenCount++;
    forgottenCountElement.textContent = forgottenCount;
    // 添加当前单词到不记得列表
    const wordIndex = wordIndexes[currentIndex];
    addForgottenWord(words[wordIndex], wordIndex);
    showAnswer();
}

function showAnswer() {
    chineseMeaningElement.classList.remove('hidden');
    
    // 隐藏选择按钮
    rememberButton.style.display = 'none';
    forgetButton.style.display = 'none';
    
    // 添加延时，显示中文含义1.5秒后自动进入下一个单词
    setTimeout(() => {
        nextWord();
    }, 1500);
}

function nextWord() {
    // 随机选择一个新的索引
    currentIndex = Math.floor(Math.random() * words.length);
    
    // 重新显示选择按钮
    rememberButton.style.display = 'block';
    forgetButton.style.display = 'block';
    
    // 隐藏中文含义
    chineseMeaningElement.classList.add('hidden');
    
    // 显示新单词
    showWord(currentIndex);
}

// 添加显示不记得单词的函数
function addForgottenWord(word, index) {
    forgottenWords.push({
        number: forgottenWords.length + 1,
        english: word.english,
        chinese: word.chinese
    });
    
    updateForgottenWordsList();
}

function updateForgottenWordsList() {
    const listElement = document.getElementById('forgotten-words-list');
    listElement.innerHTML = forgottenWords.map(word => `
        <div class="forgotten-word-item">
            <span class="word-number">${word.number}.</span>
            <span class="word-english">${word.english}</span>
            <span class="word-chinese">${word.chinese}</span>
        </div>
    `).join('');
}

// 添加新的事件监听器
rememberButton.addEventListener('click', handleRemember);
forgetButton.addEventListener('click', handleForget);

// 确保在文档加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeWordIndexes();
    showWord(currentIndex);
}); 