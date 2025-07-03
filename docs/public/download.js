function downloadCommand(commandName, repoUrl) {
  const url = `${repoUrl}/raw/main/docs/commands/${commandName}.md`;
  const link = document.createElement('a');
  link.href = url;
  link.download = `${commandName}.md`;
  link.click();
}

function copyRawContent(commandName, repoUrl) {
  const url = `${repoUrl}/raw/main/docs/commands/${commandName}.md`;
  
  fetch(url)
    .then(response => response.text())
    .then(text => {
      // Extract content between the first # and the end
      const lines = text.split('\n');
      const startIndex = lines.findIndex(line => line.startsWith('# '));
      const content = lines.slice(startIndex).join('\n');
      
      navigator.clipboard.writeText(content).then(() => {
        // Show success message
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = '#10b981';
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '#3b82f6';
        }, 2000);
      });
    })
    .catch(error => {
      console.error('Error copying content:', error);
    });
}