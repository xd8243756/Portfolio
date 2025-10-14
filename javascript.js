// const hamBuergerMenu = document.getElementById('hamBurgerMenu');
// const menu = document.getElementById('menu');

// hamBuergerMenu.addEventListener('click', function(e){
//     e.stopPropagation();
//     menu.classList.toggle('active');
//     hamBuergerMenu.classList.toggle('open');

// })

// menu.addEventListener('click', function(e){
//     e.stopPropagation();    
// })

// document.addEventListener('click', function(event){
//     menu.classList.remove('active');
//     hamBuergerMenu.classList.remove('open');
// })



document.getElementById("defaultOpen").addEventListener("click", function () {
    openimage("image1", this);
    console.log(this);
})
document.getElementById("open2").addEventListener("click", function () {
    openimage("image2", this);
    console.log(this);
})
document.getElementById("open3").addEventListener("click", function () {
    openimage("image3", this);
    console.log(this);
})
document.getElementById("open4").addEventListener("click", function () {
    openimage("image4", this);
    console.log(this);
})


function openimage(imageName, element) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.display = "block";
    }

    document.getElementById(imageName).style.display = "block";

    element.style.backgroundC0olor = "aqua";

}

function myfunction() {
    console.log("A");
    let x = document.getElementById("nav_List_li")
    x.classList.toggle("responsive");
}

const hamBurgerMenu = document.getElementById("HBG");
const menu = document.querySelector(".nav_List_li")
if (hamBurgerMenu && menu) {
    hamBurgerMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.toggle("open");
        console.log(1);
    });

    menu.addEventListener("click", function (e) {
        e.stopPropagation();
        // console.log(2);
    });
    document.addEventListener("click", function () {
        menu.classList.remove("responsive");
        console.log(3);
    });
}


document.getElementById("defaultOpen").click();