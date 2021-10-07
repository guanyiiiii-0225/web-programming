const albumTitle = [
    "This is Hedgehog.",
    "This is Cat.",
    "This is Dog."
]

const hedgehogImg = [
    "https://images.unsplash.com/photo-1590001132438-0880c8693765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1622227056993-6e7f88420855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.pexels.com/photos/2923830/pexels-photo-2923830.jpeg?cs=srgb&dl=pexels-egor-kamelev-2923830.jpg&fm=jpg",
    "https://images.unsplash.com/photo-1594546927369-f4f587649acc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1587210048693-0ec3fde6cc6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1613566643144-0855efc7582a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
]

const catImg = [
    "https://images.pexels.com/photos/4012470/pexels-photo-4012470.jpeg?cs=srgb&dl=pexels-cristyan-bohn-4012470.jpg&fm=jpg",
    "https://images.pexels.com/photos/7633693/pexels-photo-7633693.jpeg?cs=srgb&dl=pexels-ali-khalil-7633693.jpg&fm=jpg",
    "https://images.pexels.com/photos/6853286/pexels-photo-6853286.jpeg?cs=srgb&dl=pexels-cottonbro-6853286.jpg&fm=jpg",
    "https://images.pexels.com/photos/2307445/pexels-photo-2307445.jpeg?cs=srgb&dl=pexels-two-dreamers-2307445.jpg&fm=jpg",
    "https://images.pexels.com/photos/1813282/pexels-photo-1813282.jpeg?cs=srgb&dl=pexels-halil-i%CC%87brahim-%C3%A7eti%CC%87n-1813282.jpg&fm=jpg",
    "https://images.pexels.com/photos/3335619/pexels-photo-3335619.jpeg?cs=srgb&dl=pexels-lilartsy-3335619.jpg&fm=jpg"
]

const dogImg = [
    "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1805164.jpg&fm=jpg",
    "https://images.pexels.com/photos/3009441/pexels-photo-3009441.jpeg?cs=srgb&dl=pexels-josh-hild-3009441.jpg&fm=jpg",
    "https://images.pexels.com/photos/6938737/pexels-photo-6938737.jpeg?cs=srgb&dl=pexels-kira-schwarz-6938737.jpg&fm=jpg",
    "https://images.pexels.com/photos/3013994/pexels-photo-3013994.jpeg?cs=srgb&dl=pexels-jack-redgate-3013994.jpg&fm=jpg",
    "https://images.pexels.com/photos/3908818/pexels-photo-3908818.jpeg?cs=srgb&dl=pexels-helena-lopes-3908818.jpg&fm=jpg",
    "https://images.pexels.com/photos/4453074/pexels-photo-4453074.jpeg?cs=srgb&dl=pexels-helena-lopes-4453074.jpg&fm=jpg"
]

let currentImgIdx = 0;
let albumIdx = 0;
changeAlbum(1);


function changeAlbum(alIndex){
    var album = document.getElementById("albumName");
    var bigpic = document.getElementById("display");
    albumIdx = alIndex;

    // change album title
    album.innerHTML = albumTitle[albumIdx];
    var elems = document.querySelectorAll(".activeAlbum");
    [].forEach.call(elems, function(el) {
        el.classList.remove("activeAlbum");
    });

    // change album photo
    if(albumIdx == 0){
        var gallery_container = document.getElementById("gallery_container");
        while (gallery_container.firstChild) {
            gallery_container.removeChild(gallery_container.lastChild);
        }
        for(var i = 0; i < hedgehogImg.length; i ++){
            var new_div = document.createElement("div");
            var new_img = document.createElement("img");
            new_div.classList.add("gallery");
            new_div.classList.add("thumbnail");
            new_img.classList.add("portrait");
            new_img.alt = "img_" + (i+1);
            new_img.src = hedgehogImg[i];
            new_img.onclick = function(){
                bigpic = document.getElementById("display");
                bigpic.src = this.src;
            
                var elems = document.querySelectorAll(".selected");
                [].forEach.call(elems, function(el) {
                    el.classList.remove("selected");
                });
            
                this.parentNode.classList.add("selected");
                currentImgIdx = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
            };
        
            new_div.appendChild(new_img);
            gallery_container.appendChild(new_div);
        }


        var albumBottom = document.getElementById("album1");
        albumBottom.classList.add("activeAlbum");
        bigpic.src = hedgehogImg[0];
    }
    else if(albumIdx == 1){
        var gallery_container = document.getElementById("gallery_container");
        while (gallery_container.firstChild) {
            gallery_container.removeChild(gallery_container.lastChild);
        }
        for(var i = 0; i < catImg.length; i ++){
            var new_div = document.createElement("div");
            var new_img = document.createElement("img");
            new_div.classList.add("gallery");
            new_div.classList.add("thumbnail");
            new_img.classList.add("portrait");
            new_img.alt = "img_" + (i+1);
            new_img.src = catImg[i];
            new_img.onclick = function(){
                bigpic = document.getElementById("display");
                bigpic.src = this.src;
            
                var elems = document.querySelectorAll(".selected");
                [].forEach.call(elems, function(el) {
                    el.classList.remove("selected");
                });
            
                this.parentNode.classList.add("selected");
                currentImgIdx = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
            };
        
            new_div.appendChild(new_img);
            gallery_container.appendChild(new_div);
        }


        var albumBottom = document.getElementById("album2");
        albumBottom.classList.add("activeAlbum");
        bigpic.src = catImg[0];
    }
    else if(albumIdx == 2){
        var gallery_container = document.getElementById("gallery_container");
        while (gallery_container.firstChild) {
            gallery_container.removeChild(gallery_container.lastChild);
        }
        for(var i = 0; i < dogImg.length; i ++){
            var new_div = document.createElement("div");
            var new_img = document.createElement("img");
            new_div.classList.add("gallery");
            new_div.classList.add("thumbnail");
            new_img.classList.add("portrait");
            new_img.alt = "img_" + (i+1);
            new_img.src = dogImg[i];
            new_img.onclick = function(){
                bigpic = document.getElementById("display");
                bigpic.src = this.src;
            
                var elems = document.querySelectorAll(".selected");
                [].forEach.call(elems, function(el) {
                    el.classList.remove("selected");
                });
            
                this.parentNode.classList.add("selected");
                currentImgIdx = Array.prototype.indexOf.call(this.parentNode.parentNode.children, this.parentNode);
            };
        
            new_div.appendChild(new_img);
            gallery_container.appendChild(new_div);
        }


        var albumBottom = document.getElementById("album3");
        albumBottom.classList.add("activeAlbum");
        bigpic.src = dogImg[0];
    }
    var elems = document.querySelectorAll(".selected");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });
    gallery_container.firstChild.classList.add("selected");
    currentImgIdx = 0;
}

function changePic(img){
    bigpic = document.getElementById("display");
    bigpic.src = img.src;

    var elems = document.querySelectorAll(".selected");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });

    img.parentNode.classList.add("selected");
}

// listen to click empty album
var targetElement = document.getElementById("emptyAlbum");
targetElement.addEventListener("click", function(){
    alert("此為空相簿！");
})

function pushURL(){
    var input = document.getElementById("inputURL");
    if(albumIdx == 0){
        hedgehogImg.push(input.value);
    }
    else if(albumIdx == 1){
        catImg.push(input.value);
    }
    else if(albumIdx == 2){
        dogImg.push(input.value);
    }
    changeAlbum(albumIdx);
}

function deleteURL(){
    if(albumIdx == 0){
        hedgehogImg.splice(currentImgIdx, 1);
    }
    else if(albumIdx == 1){
        catImg.splice(currentImgIdx, 1);
    }
    else if(albumIdx == 2){
        dogImg.splice(currentImgIdx, 1);
    }
    changeAlbum(albumIdx);
}