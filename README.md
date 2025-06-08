# 探索自我 - 個人心理評估平台

> 專業的雙語心理評估系統，提供深度自我探索與個人成長洞察

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Privacy First](https://img.shields.io/badge/Privacy-First-success)](https://github.com)

## 🎯 專案概述

探索自我是一個現代化的客戶端心理評估網站應用程式，提供科學化的人格與行為分析。採用純 HTML/CSS/JavaScript 開發，確保最大相容性與零伺服器依賴，專為台灣用戶設計的雙語心理評估平台。

### ✨ 核心特色
- 🔒 **隱私優先**：完全客戶端處理，不收集個人資料
- 🌐 **雙語支援**：繁體中文與英文無縫切換
- 📱 **響應式設計**：支援桌機、平板、手機等各種裝置
- ⚡ **即時結果**：完成評估後立即獲得詳細分析
- 📧 **自動寄送**：結果自動發送至電子郵件信箱
- 📊 **專業分析**：基於心理學研究的深度洞察

## 📊 評估項目

### 🧠 個人風格探索（個人溝通風格評估）
- **評估時間**：8-12 分鐘
- **題目數量**：60 道綜合性題目
- **語言支援**：繁體中文 / English
- **評估類型**：多維度人格剖析
- **分析維度**：6 種溝通風格（取悅者、擔憂者、證明者、批評者、迴避者、殉道者）
- **輸出內容**：詳細行為模式分析與成長建議

#### 📈 評估特色
- **科學化評分**：每種類型 0-50 分評分系統
- **智能隨機化**：採用 Fisher-Yates 洗牌演算法確保題目隨機性
- **深度心理洞察**：分析核心恐懼、內在動機、最佳狀態與成長指導
- **即時進度追蹤**：60 題完成進度即時顯示

### 🔄 適應性與成長探索（個人變革能力評估）
- **評估時間**：5-8 分鐘
- **題目數量**：20 道專業題目
- **語言支援**：繁體中文 / English
- **評估類型**：組織變革準備度評估
- **分析維度**：變革管理能力與適應性技能
- **輸出內容**：變革能力評分與發展建議

#### 📈 評估特色
- **反向計分系統**：題目 2, 5, 7, 11, 13, 17 採用反向計分確保準確性
- **三階段分類**：變革冠軍（81-100）、變革適應者（47-80）、變革發展者（20-46）
- **專業標準**：基於組織心理學與變革管理研究
- **實務應用導向**：真實職場情境與技能評估

## 🚀 快速開始

### 系統需求
- 現代瀏覽器（Chrome 80+, Firefox 75+, Safari 13+, Edge 80+）
- 無需安裝任何軟體或伺服器

### 本地端開發
```bash
# 複製專案
git clone https://github.com/fayekai2013/Personality.git
cd Personality

# 本地端伺服器（可選）
python -m http.server 8000
# 或使用
npx serve .

# 在瀏覽器中開啟
open http://localhost:8000
```

### 線上版本
直接訪問 GitHub Pages：[探索自我評估平台](https://fayekai2013.github.io/Personality)

## 📁 專案架構

```
Personality/
├── index.html                      # 主要導覽頁面
├── language-select.html            # 語言選擇頁面
├── email-template.html             # 結果電子郵件模板
├── tests/                          # 評估模組
│   ├── behavior-assessment.html        # 60題人格評估
│   ├── change-assessment.html          # 20題變革能力評估
│   └── results.html                    # 結果顯示與匯出
├── assets/                         # 靜態資源
│   ├── css/                            # 模組化樣式表
│   │   ├── homepage.css               # 首頁樣式
│   │   ├── behavior-assessment.css    # 人格評估樣式
│   │   └── change-assessment.css      # 變革評估樣式
│   └── js/                             # 評估邏輯與計分
│       └── results.js                  # 結果處理
└── .gitignore                      # 版本控制排除
```

## 🔧 技術實作

### 核心架構
- **純客戶端實作**：無後端依賴，完全在瀏覽器中運行
- **模組化設計**：分離關注點，易於維護和擴展
- **事件驅動架構**：即時回應使用者互動
- **效能最佳化**：高效 DOM 操作與記憶體管理

### 雙語系統實作
```javascript
// 語言切換系統
function toggleLanguage(lang) {
    const enElements = document.querySelectorAll('.text-en');
    const zhElements = document.querySelectorAll('.text-zh');
    
    if (lang === 'en') {
        enElements.forEach(el => el.style.display = '');
        zhElements.forEach(el => el.style.display = 'none');
    } else {
        enElements.forEach(el => el.style.display = 'none');
        zhElements.forEach(el => el.style.display = '');
    }
    
    sessionStorage.setItem('selectedLanguage', lang);
}
```

### 題目隨機化演算法
```javascript
// Fisher-Yates 洗牌演算法
const randomizedOrder = Array.from({ length: totalQuestions }, (_, i) => i);
for (let i = randomizedOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedOrder[i], randomizedOrder[j]] = [randomizedOrder[j], randomizedOrder[i]];
}
```

### EmailJS 整合
- **服務 ID**：`service_xxxxx`
- **模板 ID**：`template_xxxxx`
- **雙重發送**：結果同時發送給使用者與管理員
- **多語言郵件**：根據使用者選擇語言自動調整內容
- **郵件系統**：即使發送失敗也不影響評估流程

### 資料流程
1. **語言選擇**：使用者選擇語言，儲存至 sessionStorage
2. **評估執行**：題目隨機排列，即時追蹤進度
3. **客戶端計分**：JavaScript 即時計算分數與類型
4. **結果處理**：sessionStorage 暫存評估結果
5. **郵件發送**：EmailJS 自動發送詳細分析報告
6. **結果展示**：重導向至結果頁面，清除暫存資料

## 🛡️ 隱私與安全

### 隱私優先設計
- **零資料收集**：不追蹤、不使用 Cookies、不持久化儲存
- **SessionStorage 限定**：僅使用瀏覽器暫存，關閉即清除
- **郵件限定留存**：結果僅透過電子郵件傳遞後立即清除
- **GDPR 符合**：超出電子郵件發送範圍不保留個人資料

### 安全特色
- **輸入驗證**：客戶端表單驗證確保資料完整性
- **XSS 防護**：內容清理與安全 DOM 操作
- **速率限制**：EmailJS 服務處理濫用防護
- **HTTPS 限定**：僅支援安全傳輸協定

## 🧠 評估科學性

### 人格評估心理學基礎
- **六大溝通模式**：基於行為心理學與溝通理論
- **恐懼驅動分析**：每種類型由特定核心恐懼驅動
- **成長導向洞察**：建設性指導而非單純標籤化
- **平衡計分**：所有人格維度享有同等權重

### 變革評估專業標準
- **組織心理學基礎**：題目源於變革管理研究
- **驗證計分範圍**：三個不同準備度等級具研究支持
- **反向計分準確性**：防止回應偏誤確保效度
- **實務適用性**：真實世界變革情境與技能評估

## 🚀 部署選項

### GitHub Pages（推薦）
1. Fork 或複製此儲存庫
2. 在 Settings 中啟用 GitHub Pages
3. 選擇來源：`Deploy from a branch`
4. 選擇 `main` 分支
5. 透過 `https://yourusername.github.io/Personality` 訪問

### 其他靜態主機
- **Netlify**：拖放部署
- **Vercel**：連接 GitHub 儲存庫
- **Firebase Hosting**：`firebase deploy`

## 🛠️ 開發指南

### 新增評估項目

1. **建立評估 HTML**
```html
<!-- tests/new-assessment.html -->
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <title>新評估項目</title>
    <link rel="stylesheet" href="../assets/css/new-assessment.css">
</head>
<body>
    <!-- 評估實作內容 -->
    <script src="../assets/js/new-assessment.js"></script>
</body>
</html>
```

2. **新增樣式表**
```css
/* assets/css/new-assessment.css */
/* 遵循現有模式確保一致性 */
```

3. **實作邏輯**
```javascript
// assets/js/new-assessment.js
// 包含計分演算法與結果計算
```

4. **更新首頁**
```html
<!-- 在 index.html 新增評估卡片 -->
<div class="assessment-card">
    <h3>新評估項目</h3>
    <p>描述...</p>
    <a href="tests/new-assessment.html" class="btn">開始評估</a>
</div>
```

### 程式碼風格指南
- 使用語意化 HTML5 元素
- 遵循 BEM CSS 方法論
- ES6+ JavaScript 特性
- 2 空格縮排
- 描述性變數命名
- 雙語文字模式：`<span class="text-en">` 與 `<span class="text-zh">`


## 📄 授權條款

僅供教育與研究使用。請參閱個別評估文件以了解具體使用權利與歸屬要求。

## 🆘 技術支援

### 聯絡資訊
- **開發者**：Felix Chang
- **專案連結**：[GitHub Repository](https://github.com/fayekai2013/Personality)

---

*探索自我 - 讓每個人都能深入了解自己的內在世界*