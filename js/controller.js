// controller.js

var Controller = (function() {
    function init() {
      View.loadImageList(Model.images);
      View.highlightSelectedImage(0);
    }
  
    function changeImage(imagePath, imageDesc) {
      View.setCurrentImage(imagePath);
      View.setCurrentDescription(imageDesc);
    }
  
    return {
      init: init,
      changeImage: changeImage
    };
  })();
  
  Controller.init();
  