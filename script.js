function renderContent() {
    const rootElement = document.getElementById('root');
  
    const header = document.createElement('h1');
    header.textContent = 'Welcome to My Personal Website';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello, world!';
  
    rootElement.appendChild(header);
    rootElement.appendChild(paragraph);
  }
  
  renderContent();
  