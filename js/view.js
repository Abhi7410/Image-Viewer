var View = (function(){
    var imageList = document.querySelector(".image-list__list")
    var currentImage = document.querySelector(".viewer-image__img")
    var currentDescription = document.querySelector(".desc-img")

    function loadImageList(images){
        imageList.innerHTML = "";
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
            
        })

    }

    function highlightSelectedImage(index){
        var listItems = imageList.getElementsByClassName("image-list__item");
        Array.from(listItems).forEach(function(item) {
        item.classList.remove("image-list__item--selected");
        });
        listItems[index].classList.add("image-list__item--selected");
    }

    return {
        loadImageList: loadImageList,
        highlightSelectedImage: highlightSelectedImage,
    }

})();

