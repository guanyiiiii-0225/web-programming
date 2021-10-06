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
    var pic1 = document.getElementById("pic1");
    var pic2 = document.getElementById("pic2");
    var pic3 = document.getElementById("pic3");
    var pic4 = document.getElementById("pic4");
    var pic5 = document.getElementById("pic5");
    var pic6 = document.getElementById("pic6");
    var bigpic = document.getElementById("display");
    var div1 = document.getElementById("div1");
    albumIdx = alIndex;

    // change album title
    album.innerHTML = albumTitle[albumIdx];
    var elems = document.querySelectorAll(".activeAlbum");
    [].forEach.call(elems, function(el) {
        el.classList.remove("activeAlbum");
    });

    // change album photo
    if(albumIdx == 0){
        var albumBottom = document.getElementById("album1");
        albumBottom.classList.add("activeAlbum");
        bigpic.src = hedgehogImg[0];
        pic1.src = hedgehogImg[0];
        pic2.src = hedgehogImg[1];
        pic3.src = hedgehogImg[2];
        pic4.src = hedgehogImg[3];
        pic5.src = hedgehogImg[4];
        pic6.src = hedgehogImg[5];
    }
    else if(albumIdx == 1){
        var albumBottom = document.getElementById("album2");
        albumBottom.classList.add("activeAlbum");
        bigpic.src = catImg[0];
        pic1.src = catImg[0];
        pic2.src = catImg[1];
        pic3.src = catImg[2];
        pic4.src = catImg[3];
        pic5.src = catImg[4];
        pic6.src = catImg[5];
    }
    else if(albumIdx == 2){
        var albumBottom = document.getElementById("album3");
        albumBottom.classList.add("activeAlbum");
        bigpic.src = dogImg[0];
        pic1.src = dogImg[0];
        pic2.src = dogImg[1];
        pic3.src = dogImg[2];
        pic4.src = dogImg[3];
        pic5.src = dogImg[4];
        pic6.src = dogImg[5];
    }
    var elems = document.querySelectorAll(".selected");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });
    div1.classList.add("selected");
}

function changePic(img, div){
    bigpic = document.getElementById("display");
    bigpic.src = img.src;

    var elems = document.querySelectorAll(".selected");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });

    div.classList.add("selected");
}

// listen to click empty album
var targetElement = document.getElementById("emptyAlbum");
targetElement.addEventListener("click", function(){
    alert("此為空相簿！");
})