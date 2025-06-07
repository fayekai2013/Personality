// Bilingual Questions - Chinese and English
const QUESTIONS_ZH = [
  // PLEASER (0) - 取悅者：害怕不被喜歡，過度迎合
  "我很難對他人說「不」，即使會影響我自己的計劃",
  "我經常擔心別人會不喜歡我說的話", 
  "我傾向於說我認為他人想聽的話，而非真心話",
  "我經常感到必須讓每個人都滿意",
  "我害怕讓他人失望，所以經常改變自己的立場",
  "我會為了獲得認可而答應做不想做的事",
  "我經常因為想要被接納而隱藏自己的真實想法",
  "我發現很難表達可能讓別人不開心的意見",
  "我經常過度道歉，即使不是我的錯",
  "我寧願自己受委屈也不願意讓別人不高興",

  // WORRIER (1) - 擔憂者：焦慮不確定性，過度分析
  "我經常想像最壞的情況會發生",
  "我傾向於過度分析每個決定的可能後果",
  "我對未知的結果感到非常不安",
  "我很難做出決定，因為擔心選錯會有嚴重後果",
  "我經常檢查和重新檢查自己的工作是否有遺漏",
  "我傾向於關注風險而非機會",
  "我經常感到焦慮，特別是面對變化或不確定性時",
  "我經常為還沒發生的事情感到擔心",
  "我傾向於過度計劃以試圖控制所有可能的結果",
  "我經常感到必須為各種可能的問題提前做準備",

  // PROVER (2) - 證明者：透過成就建立自我價值，證明能力
  "我覺得必須不斷證明自己的價值和能力",
  "我很難放慢工作節奏，總是急於展現成果",
  "我相信只有透過不斷的成功才能證明自己的價值",
  "我在面對困難時傾向於獨自解決，以證明自己的能力",
  "我很少停下來慶祝成功，而是立即投入下一個挑戰",
  "我覺得必須比其他人更努力工作才能獲得同等認可",
  "我害怕被視為軟弱或無能",
  "我傾向於用成就和表現來衡量自己的價值",
  "我經常感到必須在每件事上都表現出色",
  "我發現很難承認自己需要幫助或不懂某些事情",

  // CRITIC (3) - 批評者：完美主義與自我批評，高標準
  "我對自己和他人都有很高的標準",
  "我很難接受「夠好」的結果，總是追求完美",
  "我傾向於關注事情的缺點和不足之處",
  "我經常批評自己的表現，即使他人認為很好",
  "我對錯誤和失敗非常敏感，會長時間自責",
  "我發現很難給予他人真心的讚美或積極反饋",
  "我經常因為一點小錯誤而否定整體的成果",
  "我傾向於用「應該」、「必須」來思考問題",
  "我很難欣賞現有的成就，總是看到需要改進的地方",
  "我經常感到沒有什麼能真正達到我的標準",

  // AVOIDER (4) - 迴避者：害怕衝突與失敗，逃避困難
  "我傾向於拖延處理困難或不愉快的任務",
  "我經常希望問題會自己解決，而不主動處理",
  "我避免做出可能有負面後果的重要決定",
  "我經常感到無力改變困難的情況",
  "我傾向於抱怨問題但不採取實際行動",
  "我經常感到被困在困難情況中無法脫身",
  "我傾向於等待他人採取行動來解決問題",
  "我會避免參與可能產生衝突的討論或會議",
  "我經常將責任推給環境或他人因素",
  "我傾向於選擇安全但不理想的選項而非冒險",

  // MARTYR (5) - 殉道者：自我犧牲取代自我需求，過度付出
  "我經常感到必須犧牲自己的需求來幫助他人",
  "我很難要求他人幫助，即使我真的需要",
  "我傾向於承擔超出我能力範圍的責任",
  "我相信我必須「贏得」擁有想要東西的權利",
  "我傾向於對自己承擔過多責任而感到怨恨",
  "我經常感到自己付出太多但得到太少回報",
  "我很難設定界限，經常讓別人佔我便宜",
  "我傾向於為他人的問題和情緒承擔責任",
  "我經常感到精疲力盡，因為總是在照顧別人",
  "我相信照顧他人比照顧自己更重要和高尚"
];

const QUESTIONS_EN = [
  // PLEASER (0)
  "I find it hard to say 'no' to others, even when it affects my own plans",
  "I often worry that people won't like what I have to say",
  "I tend to say what I think others want to hear rather than my true thoughts",
  "I often feel I must keep everyone satisfied",
  "I fear disappointing others, so I often change my position",
  "I agree to do things I don't want to do in order to gain approval",
  "I often hide my true thoughts because I want to be accepted",
  "I find it difficult to express opinions that might make others unhappy",
  "I apologize excessively, even when it's not my fault",
  "I'd rather suffer myself than make others unhappy",

  // WORRIER (1)
  "I often imagine the worst-case scenario happening",
  "I tend to over-analyze every possible consequence of decisions",
  "I feel very uneasy about unknown outcomes",
  "I have trouble making decisions because I worry about choosing wrong",
  "I often check and recheck my work for any oversights",
  "I tend to focus on risks rather than opportunities",
  "I often feel anxious, especially when facing change or uncertainty",
  "I frequently worry about things that haven't happened yet",
  "I tend to over-plan trying to control all possible outcomes",
  "I often feel I must prepare in advance for various possible problems",

  // PROVER (2)
  "I feel I must constantly prove my worth and capabilities",
  "I find it hard to slow down my work pace, always rushing to show results",
  "I believe only through constant success can I prove my worth",
  "When facing difficulties, I tend to solve them alone to prove my capability",
  "I rarely pause to celebrate success, immediately moving to the next challenge",
  "I feel I must work harder than others to gain equal recognition",
  "I fear being seen as weak or incompetent",
  "I tend to measure my worth through achievements and performance",
  "I often feel I must excel at everything",
  "I find it hard to admit I need help or don't understand something",

  // CRITIC (3)
  "I have high standards for both myself and others",
  "I find it hard to accept 'good enough' results, always pursuing perfection",
  "I tend to focus on flaws and shortcomings in things",
  "I often criticize my own performance, even when others think it's good",
  "I'm very sensitive to mistakes and failures, blaming myself for long periods",
  "I find it hard to give others genuine praise or positive feedback",
  "I often dismiss overall achievements because of small mistakes",
  "I tend to think in terms of 'should' and 'must'",
  "I find it hard to appreciate existing achievements, always seeing room for improvement",
  "I often feel nothing truly meets my standards",

  // AVOIDER (4)
  "I tend to procrastinate on difficult or unpleasant tasks",
  "I often hope problems will resolve themselves rather than actively addressing them",
  "I avoid making important decisions that might have negative consequences",
  "I often feel powerless to change difficult situations",
  "I tend to complain about problems but take no practical action",
  "I often feel trapped in difficult situations with no way out",
  "I tend to wait for others to take action to solve problems",
  "I avoid participating in discussions or meetings that might create conflict",
  "I often blame circumstances or other people's factors",
  "I tend to choose safe but suboptimal options rather than take risks",

  // MARTYR (5)
  "I often feel I must sacrifice my needs to help others",
  "I find it hard to ask others for help, even when I really need it",
  "I tend to take on responsibilities beyond my capacity",
  "I believe I must 'earn' the right to have things I want",
  "I tend to feel resentful about taking on too much responsibility",
  "I often feel I give too much but receive too little in return",
  "I find it hard to set boundaries, often letting others take advantage",
  "I tend to take responsibility for others' problems and emotions",
  "I often feel exhausted because I'm always taking care of others",
  "I believe caring for others is more important and noble than caring for myself"
];

// Question type mapping and randomized order
const QUESTION_TYPES = [
  0,0,0,0,0,0,0,0,0,0, // Pleaser
  1,1,1,1,1,1,1,1,1,1, // Worrier  
  2,2,2,2,2,2,2,2,2,2, // Prover
  3,3,3,3,3,3,3,3,3,3, // Critic
  4,4,4,4,4,4,4,4,4,4, // Avoider
  5,5,5,5,5,5,5,5,5,5  // Martyr
];

const RANDOMIZED_ORDER = [
  0, 15, 30, 45, 10, 25, 40, 55, 5, 20,
  35, 50, 1, 16, 31, 46, 11, 26, 41, 56,
  6, 21, 36, 51, 2, 17, 32, 47, 12, 27,
  42, 57, 7, 22, 37, 52, 3, 18, 33, 48,
  13, 28, 43, 58, 8, 23, 38, 53, 4, 19,
  34, 49, 14, 29, 44, 59, 9, 24, 39, 54
];

const FORM_POSITION_TO_TYPE = RANDOMIZED_ORDER.map(originalIndex => QUESTION_TYPES[originalIndex]);

const TYPE_NAMES_ZH = ["取悅者", "擔憂者", "證明者", "批評者", "迴避者", "殉道者"];
const TYPE_NAMES_EN = ["Pleaser", "Worrier", "Prover", "Critic", "Avoider", "Martyr"];

// Global variables
let currentLang = 'zh';
let questionsContainer;
let progressText;
let progressFill;
let form;
let answersGiven = 0;

// Initialize EmailJS
// emailjs.init("your_public_key_here"); // Uncomment and replace with your EmailJS public key

// Language toggle functionality
function toggleLanguage(lang) {
    currentLang = lang;
    const enElements = document.querySelectorAll('.text-en');
    const zhElements = document.querySelectorAll('.text-zh');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    if (lang === 'en') {
        enElements.forEach(el => el.style.display = '');
        zhElements.forEach(el => el.style.display = 'none');
    } else {
        enElements.forEach(el => el.style.display = 'none');
        zhElements.forEach(el => el.style.display = '');
    }
    
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Regenerate questions in new language
    generateQuestions();
    updateProgress();
}

// Initialize the questionnaire
document.addEventListener('DOMContentLoaded', function() {
    initializeQuestionnaire();
    setupEventListeners();
});

function initializeQuestionnaire() {
    questionsContainer = document.getElementById('questionsContainer');
    progressText = document.getElementById('progressText');
    progressFill = document.getElementById('progressFill');
    form = document.getElementById('assessmentForm');
    
    generateQuestions();
    
    // Setup language toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleLanguage(btn.dataset.lang));
    });
}

function generateQuestions() {
    const questions = currentLang === 'zh' ? QUESTIONS_ZH : QUESTIONS_EN;
    
    const questionsHTML = RANDOMIZED_ORDER.map((originalIndex, i) => {
        const questionText = questions[originalIndex];
        const questionNumber = i + 1;
        
        return `
            <div class="question-group" data-question="${i}" style="animation-delay: ${(i % 5) * 0.1}s;">
                <div class="question-header">
                    <span class="question-number">Q${questionNumber}</span>
                    <div class="question-text">${questionText}</div>
                </div>
                <div class="rating-scale">
                    <div class="scale-labels">
                        <span class="scale-label-left">
                            <span class="text-en" style="display: ${currentLang === 'en' ? '' : 'none'};">Never</span>
                            <span class="text-zh" style="display: ${currentLang === 'zh' ? '' : 'none'};">從不</span>
                        </span>
                        <span class="scale-label-right">
                            <span class="text-en" style="display: ${currentLang === 'en' ? '' : 'none'};">Always</span>
                            <span class="text-zh" style="display: ${currentLang === 'zh' ? '' : 'none'};">總是</span>
                        </span>
                    </div>
                    <div class="radio-group">
                        ${[1,2,3,4,5].map(value => `
                            <label class="radio-option">
                                <input type="radio" name="q${i}" value="${value}" required onchange="updateProgress()">
                                <span class="radio-custom">${value}</span>
                                <span class="radio-label">${getScaleLabel(value)}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    questionsContainer.innerHTML = questionsHTML;
}

function getScaleLabel(value) {
    const labelsZH = {
        1: "從不/完全不符合",
        2: "很少/輕微符合", 
        3: "有時/部分符合",
        4: "經常/大部分符合",
        5: "總是/完全符合"
    };
    
    const labelsEN = {
        1: "Never/Completely disagree",
        2: "Rarely/Slightly agree",
        3: "Sometimes/Partially agree", 
        4: "Often/Mostly agree",
        5: "Always/Completely agree"
    };
    
    return currentLang === 'zh' ? labelsZH[value] : labelsEN[value];
}

function updateProgress() {
    const allInputs = document.querySelectorAll('input[type="radio"]:checked');
    answersGiven = allInputs.length;
    
    const progressPercentage = (answersGiven / 60) * 100;
    
    // Update progress text bilingually
    const progressTextEn = progressText.querySelector('.text-en');
    const progressTextZh = progressText.querySelector('.text-zh');
    
    if (progressTextEn) progressTextEn.textContent = `${answersGiven} / 60 Questions`;
    if (progressTextZh) progressTextZh.textContent = `${answersGiven} / 60 題`;
    
    progressFill.style.width = `${progressPercentage}%`;
    
    // Update progress percentage display
    const progressPercentageEl = document.getElementById('progressPercentage');
    if (progressPercentageEl) {
        progressPercentageEl.textContent = `${Math.round(progressPercentage)}%`;
    }
    
    // Enable submit button if all questions answered and name provided
    const submitBtn = document.getElementById('submitBtn');
    const studentName = document.getElementById('studentName').value.trim();
    
    if (answersGiven === 60 && studentName) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function setupEventListeners() {
    // Name input listener
    document.getElementById('studentName').addEventListener('input', updateProgress);
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const studentName = formData.get('studentName');
        
        if (!studentName.trim()) {
            alert(currentLang === 'zh' ? '請輸入您的姓名' : 'Please enter your name');
            return;
        }
        
        if (answersGiven < 60) {
            alert(currentLang === 'zh' ? '請完成所有題目' : 'Please complete all questions');
            return;
        }
        
        // Show processing state
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <span class="button-content">
                <span class="button-icon">⏳</span>
                <span class="button-text">${currentLang === 'zh' ? '處理中...' : 'Processing...'}</span>
            </span>
        `;
        submitBtn.disabled = true;
        
        try {
            // Collect answers
            const answers = [];
            for (let i = 0; i < 60; i++) {
                const answer = formData.get(`q${i}`);
                answers.push(parseInt(answer));
            }
            
            // Process results
            const results = processStudentData(studentName, answers, new Date());
            
            // Send email
            await sendEmailWithResults(studentName, results);
            
            // Store results and redirect
            localStorage.setItem('assessmentResults', JSON.stringify(results));
            window.location.href = 'results.html';
            
        } catch (error) {
            console.error('Error processing assessment:', error);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            alert(currentLang === 'zh' ? 
                '處理評估時發生錯誤，請重試。' : 
                'Error processing assessment. Please try again.');
        }
    });
}

function processStudentData(studentName, answers, timestamp) {
    // Calculate scores for each type
    const scores = [0, 0, 0, 0, 0, 0];
    
    for (let i = 0; i < Math.min(answers.length, FORM_POSITION_TO_TYPE.length); i++) {
        const answer = answers[i] || 1;
        const typeIndex = FORM_POSITION_TO_TYPE[i];
        scores[typeIndex] += answer;
    }
    
    // Calculate percentages
    const percentages = scores.map(score => Math.round((score / 50) * 100));
    
    // Find dominant type(s)
    const maxPercentage = Math.max(...percentages);
    const dominantTypes = [];
    
    percentages.forEach((percentage, index) => {
        if (percentage === maxPercentage) {
            dominantTypes.push(index);
        }
    });
    
    // Create summary
    const typeNames = currentLang === 'zh' ? TYPE_NAMES_ZH : TYPE_NAMES_EN;
    const dominantTypeNames = dominantTypes.map(index => typeNames[index]);
    
    return {
        name: studentName,
        timestamp: timestamp.toISOString(),
        answers: answers,
        scores: scores,
        percentages: percentages,
        dominantTypes: dominantTypes,
        dominantTypeNames: dominantTypeNames,
        maxPercentage: maxPercentage,
        language: currentLang
    };
}

async function sendEmailWithResults(studentName, results) {
    const templateParams = {
        to_email: 'felicco@gmail.com',
        subject: `${studentName} - Personal Behavior Pattern Assessment Results`,
        student_name: studentName,
        test_name: 'Personal Behavior Pattern Assessment',
        completion_date: new Date().toLocaleDateString('zh-TW'),
        language: currentLang === 'zh' ? 'Traditional Chinese' : 'English',
        dominant_types: results.dominantTypeNames.join(', '),
        max_percentage: results.maxPercentage + '%',
        detailed_results: generateDetailedResults(results)
    };

    // return emailjs.send('your_service_id', 'your_template_id', templateParams);
    // For now, just log the email data since EmailJS needs to be configured
    console.log('Email would be sent with:', templateParams);
}

function generateDetailedResults(results) {
    const typeNames = currentLang === 'zh' ? TYPE_NAMES_ZH : TYPE_NAMES_EN;
    let report = `Personal Behavior Pattern Assessment Results\n\n`;
    report += `Student: ${results.name}\n`;
    report += `Date: ${new Date(results.timestamp).toLocaleDateString()}\n`;
    report += `Language: ${currentLang === 'zh' ? 'Traditional Chinese' : 'English'}\n\n`;
    report += `PERSONALITY TYPE SCORES:\n`;
    report += `========================\n`;
    
    results.percentages.forEach((percentage, index) => {
        const indicator = results.dominantTypes.includes(index) ? ' ⭐ DOMINANT' : '';
        report += `${typeNames[index]}: ${percentage}%${indicator}\n`;
    });
    
    report += `\nRAW SCORES:\n`;
    report += `===========\n`;
    results.scores.forEach((score, index) => {
        report += `${typeNames[index]}: ${score}/50\n`;
    });
    
    return report;
}