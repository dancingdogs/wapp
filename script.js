/*
 var fileInput = document.getElementById('fileInput');
   fileInput.addEventListener('change', function(e) {
          var file = fileInput.files[0];
    	  var reader = new FileReader();

          reader.onload = function(e) {
              document.getElementById('displayFile').innerText = reader.result;
	  };-
    	  reader.readAsText(file);
      });
*/
var array = fs.readFileSync('conv.TXT', 'utf8').split('\n');

array2=[]

while (array.length > 0) {
    array2.push(array.splice(0,range(array.length)));
  }


}
      