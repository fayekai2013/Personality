// Type names and configurations
const TYPE_NAMES = ["取悅者", "擁憂者", "證明者", "批評者", "迴避者", "殉道者"];
const TYPE_NAMES_EN = ["Pleaser", "Worrier", "Prover", "Critic", "Avoider", "Martyr"];

// Type descriptions for detailed analysis
const TYPE_DESCRIPTIONS = {
    0: { // Pleaser
        fear: "不被喜歡",
        motivation: "透過討好他人來獲得認可和接納",
        behaviors: "難以說不、隱藏真實想法、過度道歉",
        bestState: "善解人意、團隊協作能力強",
        needsAttention: "自我價值過度依賴外界認可",
        guidance: "鼓勵表達真實想法，建立內在自信"
    },
    1: { // Worrier
        fear: "不確定性",
        motivation: "透過過度分析和準備來控制風險",
        behaviors: "災難化思考、反覆檢查、過度計劃",
        bestState: "謹慎思考、風險評估能力強",
        needsAttention: "焦慮影響決策和行動力",
        guidance: "練習接受不確定性，培養行動力"
    },
    2: { // Prover
        fear: "被視為無能",
        motivation: "透過成就和表現來建立自我價值",
        behaviors: "工作過度、獨自承擔、急於證明",
        bestState: "目標導向、執行力強",
        needsAttention: "過度競爭，忽視協作和情感",
        guidance: "學習接受幫助，重視過程而非只看結果"
    },
    3: { // Critic
        fear: "不完美",
        motivation: "透過高標準來避免錯誤和失敗",
        behaviors: "自我批評、挑毛病、追求完美",
        bestState: "注重細節、品質意識高",
        needsAttention: "完美主義導致拖延和自我打擊",
        guidance: "學習接受'夠好'的標準，培養自我接納"
    },
    4: { // Avoider
        fear: "衝突和失敗",
        motivation: "透過逃避來避免不適和責任",
        behaviors: "拖延、抱怨、等待他人解決",
        bestState: "和諧相處、避免不必要衝突",
        needsAttention: "缺乏主動性，問題累積",
        guidance: "分步驟處理問題，建立成功經驗"
    },
    5: { // Martyr
        fear: "自私",
        motivation: "透過犧牲自己來獲得道德優越感",
        behaviors: "過度付出、不求回報、承擔他人責任",
        bestState: "樂於助人、責任感強",
        needsAttention: "自我忽視導致怨恨和疲憊",
        guidance: "學習設定界限，平衡付出與接受"
    }
};

// Initialize results page
document.addEventListener('DOMContentLoaded', function() {
    loadAndDisplayResults();
    setupEventListeners();
});

function loadAndDisplayResults() {
    // Get results from localStorage
    const resultsData = localStorage.getItem('assessmentResults');
    
    if (!resultsData) {
        document.body.innerHTML = `
            <div class="container">
                <div class="error-message">
                    <h2>⚠️ 找不到評估結果</h2>
                    <p>請先完成問卷評估</p>
                    <button onclick="window.location.href='index.html'" class="btn-retake">📝 開始評估</button>
                </div>
            </div>
        `;
        return;
    }
    
    const results = JSON.parse(resultsData);
    displayResults(results);
}

function displayResults(results) {
    // Display basic info
    document.getElementById('studentName').textContent = results.name;
    document.getElementById('completionTime').textContent = new Date(results.timestamp).toLocaleString('zh-TW');
    
    // Display main tendency
    document.getElementById('mainTendency').innerHTML = `
        <div class="main-tendency-text">${results.summary}</div>
    `;
    
    // Display interpretation
    document.getElementById('interpretation').innerHTML = `
        <div class="interpretation-text">${results.interpretation}</div>
    `;
    
    // Display detailed results for each type
    displayDetailedResults(results);
    
    // Setup download functionality
    setupDownload(results);
}

function displayDetailedResults(results) {
    results.percentages.forEach((percentage, index) => {
        const percentageFill = document.getElementById(`percent-${index}`);
        const percentageText = document.getElementById(`text-${index}`);
        
        // Set percentage width and text
        percentageFill.style.width = `${percentage}%`;
        percentageText.textContent = `${percentage}%`;
        
        // Apply color coding based on percentage
        const colorClass = getColorClass(percentage);
        percentageFill.className = `percentage-fill ${colorClass}`;
        
        // Color the text as well for high percentages
        if (percentage >= 60) {
            percentageText.style.fontWeight = 'bold';
            percentageText.style.color = getTextColor(percentage);
        }
        
        // Add detailed description tooltip or expanded info
        const typeResult = document.querySelector(`[data-type="${index}"]`);
        if (percentage >= 50) {
            addDetailedDescription(typeResult, index, percentage);
        }
    });
}

function getColorClass(percentage) {
    if (percentage >= 70) return 'high';
    if (percentage >= 60) return 'obvious';
    if (percentage >= 50) return 'moderate';
    if (percentage >= 40) return 'low';
    return 'very-low';
}

function getTextColor(percentage) {
    if (percentage >= 70) return '#d32f2f';
    if (percentage >= 60) return '#f57c00';
    return '#333';
}

function addDetailedDescription(typeElement, typeIndex, percentage) {
    const description = TYPE_DESCRIPTIONS[typeIndex];
    
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'type-details';
    detailsDiv.innerHTML = `
        <div class="details-content">
            <h4>💡 詳細分析</h4>
            <p><strong>核心恐懼：</strong>${description.fear}</p>
            <p><strong>心理動機：</strong>${description.motivation}</p>
            <p><strong>典型行為：</strong>${description.behaviors}</p>
            <p><strong>最佳狀態：</strong>${description.bestState}</p>
            <p><strong>需要關注：</strong>${description.needsAttention}</p>
            <p><strong>指導建議：</strong>${description.guidance}</p>
        </div>
    `;
    
    typeElement.appendChild(detailsDiv);
    typeElement.classList.add('expanded');
}

function setupEventListeners() {
    // Download button
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const results = JSON.parse(localStorage.getItem('assessmentResults'));
        downloadResults(results);
    });
    
    // Retake button
    document.getElementById('retakeBtn').addEventListener('click', function() {
        if (confirm('確定要重新進行評估嗎？目前的結果將會被清除。')) {
            localStorage.removeItem('assessmentResults');
            window.location.href = 'index.html';
        }
    });
}

function setupDownload(results) {
    // Store results in global scope for download
    window.currentResults = results;
}

function downloadResults(results) {
    // Create comprehensive results data
    const downloadData = {
        基本資訊: {
            姓名: results.name,
            完成時間: new Date(results.timestamp).toLocaleString('zh-TW'),
            評估版本: "心理陷阱評估 v1.0"
        },
        主要結果: {
            主要傾向: results.summary,
            專業解讀: results.interpretation
        },
        詳細分數: {},
        百分比結果: {},
        個別題目回答: results.answers,
        色彩編碼說明: {
            "🔴 70%+": "強烈傾向 (需重點關注)",
            "🟠 60-69%": "明顯傾向 (需適當指導)", 
            "🟡 50-59%": "中等傾向 (持續觀察)",
            "🟢 40-49%": "較低傾向 (表現良好)",
            "⚪ <40%": "很低傾向 (平衡狀態)"
        }
    };
    
    // Add detailed scores and percentages
    TYPE_NAMES.forEach((typeName, index) => {
        downloadData.詳細分數[`${typeName} (${TYPE_NAMES_EN[index]})`] = `${results.scores[index]}/50`;
        downloadData.百分比結果[`${typeName} (${TYPE_NAMES_EN[index]})`] = `${results.percentages[index]}%`;
    });
    
    // Create downloadable file
    const dataStr = JSON.stringify(downloadData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json;charset=utf-8'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `心理陷阱評估結果_${results.name}_${new Date().toISOString().split('T')[0]}.json`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Also create a human-readable text version
    createTextDownload(downloadData, results);
}

function createTextDownload(data, results) {
    const textContent = `
心理陷阱評估結果報告
===================

基本資訊
--------
姓名: ${data.基本資訊.姓名}
完成時間: ${data.基本資訊.完成時間}
評估版本: ${data.基本資訊.評估版本}

主要結果
--------
主要傾向: ${data.主要結果.主要傾向}
專業解讀: ${data.主要結果.專業解讀}

詳細分析
--------
${TYPE_NAMES.map((typeName, index) => `
${typeName} (${TYPE_NAMES_EN[index]}):
  百分比: ${results.percentages[index]}%
  分數: ${results.scores[index]}/50
  核心恐懼: ${TYPE_DESCRIPTIONS[index].fear}
  心理動機: ${TYPE_DESCRIPTIONS[index].motivation}
  指導建議: ${TYPE_DESCRIPTIONS[index].guidance}
`).join('')}

色彩編碼說明
-----------
🔴 70%+ 強烈傾向 (需重點關注)
🟠 60-69% 明顯傾向 (需適當指導)
🟡 50-59% 中等傾向 (持續觀察)
🟢 40-49% 較低傾向 (表現良好)
⚪ <40% 很低傾向 (平衡狀態)

注意事項
--------
此評估結果僅供參考，不能替代專業心理諮詢。
建議將結果作為自我認知和成長的起點。
如需更深入的分析，請諮詢專業心理健康專家。
    `.trim();
    
    const textBlob = new Blob([textContent], {type: 'text/plain;charset=utf-8'});
    const textLink = document.createElement('a');
    textLink.href = URL.createObjectURL(textBlob);
    textLink.download = `心理陷阱評估報告_${results.name}_${new Date().toISOString().split('T')[0]}.txt`;
    
    // Add slight delay to avoid conflicts
    setTimeout(() => {
        document.body.appendChild(textLink);
        textLink.click();
        document.body.removeChild(textLink);
    }, 500);
} 