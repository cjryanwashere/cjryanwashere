//This code has been updated 



function handleFileSelect(evt) {
    var files = evt.target.files[0]; // FileList object

    var reader = new FileReader();
    reader.onload = function(event) {
        console.log(event.target.result);
    }
    reader.readAsText(files);
    
  }

document.getElementById('files').addEventListener('change', handleFileSelect, false);

