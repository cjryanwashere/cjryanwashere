//This code has been updated 



function gatherTrajFile(evt) {
    var files = evt.target.files[0]; // FileList object

    var reader = new FileReader();
    reader.onload = function(event) {
        console.log(event.target.result);
    }
    reader.readAsText(files);
    
  }


function gatherTopFile(evt) {
    var files = evt.target.files[0]; // FileList object

    var reader = new FileReader();
    reader.onload = function(event) {
        console.log(event.target.result);
    }
    reader.readAsText(files);
    
  }

document.getElementById('trajfiles').addEventListener('change', gatherTrajFile, false);

document.getElementById('topfiles').addEventListener('change', gatherTopFile, false);

