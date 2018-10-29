const lsTextArea = document.getElementById('ls-textarea');

lsTextArea.ondrop = (event) => {
    dropTextFile(event);
}
lsTextArea.ondragenter = () => {
    event.preventDefault();
    document.getElementById('div-ls-textarea').classList.add('hover');
};

lsTextArea.ondragend = () => {
   document.getElementById('div-ls-textarea').classList.remove('hover');
   console.log('end');
};

lsTextArea.ondragleave = () => {
   document.getElementById('div-ls-textarea').classList.remove('hover');
};


const dbTextArea = document.getElementById('db-textarea');

dbTextArea.ondrop = (event) => {
    dropTextFile(event);
}

dbTextArea.ondragenter = () => {
    event.preventDefault();
    document.getElementById('div-db-textarea').classList.add('hover');
};

dbTextArea.ondragend = () => {
   document.getElementById('div-db-textarea').classList.remove('hover');
};

dbTextArea.ondragleave = () => {
   document.getElementById('div-db-textarea').classList.remove('hover');
};

const dropTextFile = (event) => {

  event.preventDefault();
  event.target.parentNode.classList.remove('hover');

  if (event.dataTransfer.items.length > 1) {
      alert('1 file allowed');
  }
  else { 
    
    if (event.dataTransfer.items[0].kind == 'file') {

      const reader = new FileReader();
      const file = event.dataTransfer.items[0].getAsFile();
      reader.readAsText(file);

      reader.onload = (e) => {
        data = reader.result;
      }
    
      reader.onloadend = (e) => {
        event.target.innerHTML = data;
      }
    
      reader.onerror = (e) => {
        console.log('Reading error');
      }      
    }
    else {
      alert('The file dropped is not a text file');
    }

  }    
}
