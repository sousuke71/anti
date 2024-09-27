document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generate');
  const templateSelect = document.getElementById('templateSelect');

  generateButton.addEventListener('click', function() {
    const selectedTemplate = templateSelect.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        func: applyTemplate,
        args: [selectedTemplate]
      });
    });
  });

  function applyTemplate(templateName) {
    const templates = {
      star6555: 'path/to/star6555.png',
      doubleDecker: 'path/to/doubleDecker.png',
      vistaCar: 'path/to/vistaCar.png'
    };
    const video = document.querySelector('video');
    const templatePath = templates[templateName];
    if (templatePath && video) {
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
});
