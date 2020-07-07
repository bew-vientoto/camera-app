let fileInput = document.getElementById('fileinput');

fileInput.addEventListener('change', 
                           function(ev) {
  console.log("hi");
    console.log(ev.target.files);
  if(ev.target.files) {
    let file = ev.target.files[0];
    var reader  = new FileReader();

    reader.onloadend = function (e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function(ev) {
        console.log("loading");
        var canvas = document.getElementById('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
         var ctx = canvas.getContext('2d');
        ctx.drawImage(image,100,100);
      }
    }
    reader.readAsDataURL(file);

  }
})

var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL();
document.getElementById('url').innerHTML = dataURL;
