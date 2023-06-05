// model 

var Model = {
    images : [
        {
          path: "Images/img1.jpeg",
          description: "Cambridge Central Mosque, Mill Road, Cambridge, UK"
        },
        {
          path: "Images/img2.jpeg",
          description: "Image of a blue butterfly sitting on a cat's nose"
        },
        {
          path: "Images/img3.jpeg",
          description: "Photo of the Taj Mahal taken during sunrise"
        },
        {
          path: "Images/img4.jpeg",
          description: "Waterfall in Iceland"
        },
        {
          path: "Images/img5.jpeg",
          description: "Female belted kingfisher pictured in Ontario, Canada"
        }
      ],

    getSelectedImage : function(index){
        return this.images[index];
    }
}

// view 

var View = (function(){
    var imageList = document.querySelector(".image-list__list")
    var currentImage = document.querySelector(".viewer-image__img")
    var currentDescription = document.querySelector(".desc-img")


    function loadImageList(images){
        // imageList.innerHTML = "";
        images.forEach(function(item,index){
            var listItem = document.createElement("li");
            listItem.classList.add("image-list__item");

            var img = document.createElement("img");
            img.src = item.path;
            img.alt = "Image " + (index + 1);

            var description = document.createElement("span");
            description.textContent = item.description;
            listItem.appendChild(img);
            listItem.appendChild(description);
            
            listItem.addEventListener('click',function(){
                Controller.changeImage(item.path, item.description);
                highlightSelectedImage(index);
            })
            imageList.appendChild(listItem);
        })

    }

    function highlightSelectedImage(index){
        var lstItems = imageList.getElementsByClassName("image-list__item");
        for (var i = 0; i < lstItems.length; i++) {
            if (i === index) {
              lstItems[i].classList.add("image-list__item--selected");
              lstItems[i].querySelector("span").textContent = currentDescription.textContent; // Update the description in the list item
            } else {
              lstItems[i].classList.remove("image-list__item--selected");
            }
          }
        
    }

    function setCurrentImage(imagePath) {
        currentImage.src = imagePath;
    }

    function setCurrentDescription(description) {
        currentDescription.textContent = description;
    }
    
    function getCurrentDescription(){
        return currentDescription.textContent;
    }

    function updateSelectedListItem() {
        var selectedItem = imageList.querySelector(".image-list__item--selected");
        if (selectedItem) {
          selectedItem.querySelector("span").textContent = currentDescription.textContent;
        }
      }


    currentDescription.addEventListener("input", function() {
        var indexOfImage = Array.from(imageList.children).indexOf(imageList.querySelector(".image-list__item--selected"));
        console.log(indexOfImage)
        Controller.updateImageDescription(indexOfImage);
        updateSelectedListItem();
      });

    return {
        loadImageList: loadImageList,
        highlightSelectedImage: highlightSelectedImage,
        setCurrentImage: setCurrentImage,
        setCurrentDescription: setCurrentDescription,
        getCurrentDescription: getCurrentDescription,
    };

})();


// controler

var Controller = (function() {
    function init() {
    View.loadImageList(Model.images);
    changeImage(Model.images[0].path,Model.images[0].description)
    }
  
    function changeImage(imagePath, imageDesc) {
      View.setCurrentImage(imagePath);
      View.setCurrentDescription(imageDesc);
    }

    function updateImageDescription(index) {
        var selectedImage = Model.getSelectedImage(index);
        var newDescription = View.getCurrentDescription();
        selectedImage.description = newDescription;
    }
  
    return {
      init: init,
      changeImage: changeImage,
      updateImageDescription: updateImageDescription,
    };
  })();
  
  Controller.init();
  