var images = [
    {
        path: "Images/img1.jpeg",
        description:"Cambridge Central Mosque, Mill Road, Cambridge, UK"
    },
    {
        path: "Images/img2.jpeg",
        description:"Image of a blue butterfly sitting on a cat's nose"
    },
    {
        path: "Images/img3.jpeg",
        description:"Photo of the Taj Mahal taken during sunrise",
    },
    {
        path: "Images/img4.jpeg",
        description:"Waterfall in Iceland"
    },
    {
        path: "Images/img5.jpeg",
        description:"Female belted kingfisher pictured in Ontario, Canada",
    },
]

var img_list = document.getElementById("img-list")
var current_image = document.getElementById("curr-img")
var current_desc = document.getElementById("desc_img")
console.log(img_list)
changeImage(images[0].path,images[0].description)


images.forEach(function(item,index,array){
    var liItem = document.createElement("li");
    var img = document.createElement("img");
    img.src = item.path;
    img.alt = `Image ${index+1}`
    console.log(img)
    
    
    var desc = document.createElement("span")
    // desc.type = "text"
    desc.textContent = item.description
    
    liItem.appendChild(img)
    liItem.appendChild(desc)
    liItem.onclick = function(){
        changeImage(item.path,item.description)
        var lstItems = img_list.getElementsByTagName("li");
        for(let i = 0;i<lstItems.length;i++)lstItems[i].style.backgroundColor="";
        liItem.style.backgroundColor="lightblue";
    };

    console.log(img)
    img_list.appendChild(liItem)
})

function changeImage(imagePath,imageDesc){
    current_image.src = imagePath;
    current_desc.textContent = imageDesc;

}

current_desc.addEventListener("input",function(){
   var selectedListItem = img_list.querySelector("li[style='background-color: lightblue;']");
//    console.log(current_desc.textContent)
//    console.log(selectedListItem)
   if (selectedListItem){
    var spanElement = selectedListItem.querySelector("span")
    console.log(spanElement.textContent)
    var old_descript = spanElement.textContent;
    spanElement.textContent = current_desc.textContent

    var selectedImage = images.find(function(img){
        return img.description === old_descript ;
    })
    if(selectedImage){
        selectedImage.description = current_desc.textContent;
    }
   }
    
})

