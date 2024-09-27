// 動画要素を取得
const video = document.querySelector('video');

// アンチパイラシースクリーンのテンプレートを選択
const templates = {
  star6555: 'path/to/star6555.png',
  doubleDecker: 'path/to/doubleDecker.png',
  vistaCar: 'path/to/vistaCar.png'
};

// テンプレートを適用する関数
function applyTemplate(templateName) {
  const templatePath = templates[templateName];
  if (templatePath && video) {
    // 動画にテンプレートをオーバーレイ
    const overlay = document.createElement('img');
    overlay.src = templatePath;
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '1000';
    document.body.appendChild(overlay);
  }
}

// テンプレートを適用
applyTemplate('star6555'); // ここでテンプレート名を指定
