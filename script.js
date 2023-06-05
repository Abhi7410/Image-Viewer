var images = [
    {
        id : 1,
        path: "Images/img1.jpeg",
        description:"Cambridge Central Mosque, Mill Road, Cambridge, UK"
    },
    {
        id : 2,
        path: "Images/img2.jpeg",
        description:"Image of a blue butterfly sitting on a cat's nose"
    },
    {
        id : 3,
        path: "Images/img3.jpeg",
        description:"Photo of the Taj Mahal taken during sunrise",
    },
    {
        id : 4,
        path: "Images/img4.jpeg",
        description:"Waterfall in Iceland"
    },
    {
        id : 5,
        path: "Images/img5.jpeg",
        description:"Female belted kingfisher pictured in Ontario, Canada",
    },
]

var imageList = document.querySelector(".image-list__list")
var currentImage = document.querySelector(".viewer-image__img")
var currentDescription = document.querySelector(".desc-img")
let currentImageIndex=0;
changeImage(images[currentImageIndex].path,images[currentImageIndex].description)

// load the list 
images.forEach(function(item,index){
    var listItem = document.createElement("li");
    listItem.classList.add("image-list__item");
    var img = document.createElement("img");
    img.src = item.path;
    img.alt = `Image ${index+1}`
     
    var description = document.createElement("span")
    description.textContent = item.description

    listItem.appendChild(img)
    listItem.appendChild(description)
    listItem.onclick = function(){
        currentImageIndex = index;
        changeImage(item.path,item.description)
        updateSelectedListItem();
    };
    imageList.appendChild(listItem)
})

function updateSelectedListItem() {
    var lstItems = imageList.getElementsByClassName("image-list__item");
    for (var i = 0; i < lstItems.length; i++) {
      if (i === currentImageIndex) {
        lstItems[i].classList.add("image-list__item--selected");
        lstItems[i].querySelector("span").textContent = currentDescription.textContent; // Update the description in the list item
      } else {
        lstItems[i].classList.remove("image-list__item--selected");
      }
    }
  }

  
function changeImage(imagePath,imageDesc){
    currentImage.src = imagePath;
    currentDescription.textContent = imageDesc;

}

currentDescription.addEventListener("input",function(){
    var selectedImage = images[currentImageIndex];
    if (selectedImage) {
        selectedImage.description = currentDescription.textContent;
        updateSelectedListItem();
    }
    
})

