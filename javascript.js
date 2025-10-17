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
let slideIndex = 1;

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
document.getElementById("prev").addEventListener("click", goPrev)
document.getElementById("next").addEventListener("click", goNext)

let artworks = []
fetch("./artInfo.json")
    .then(function (responsive) {
        return responsive.json();
    })
    .then(function (responsive) {
        artworks = responsive;
        console.log(artworks);
        

        let select = document.querySelector(".img_show");
        console.log(select);
        select.addEventListener("click", function (e) {
            if (e.target.tagName.toLowerCase() === "img") {
                console.log(e.target);
                const src = e.target.getAttribute("src");
                const artInfo = artworks.find(function(artInfo){return artInfo.img === src });
                document.querySelector(".art_name").innerHTML = `<h2>作品名稱： ${artInfo.art_name}</h2>`;
                document.querySelector(".art_info").innerHTML = `<h2>作品資訊：</h2> <br> ${artInfo.art_info}`;

                const modal = document.getElementById("myModal");
                let click = 1;
                if (click == 1) {
                    let x = modal.querySelector(".modal-content img")
                    x.src = src; 
                    modal.style.display = "block";
                }


                window.onclick = function (e) {
                    if (e.target === modal) {
                        modal.style.display = "none";
                    }
                }

            }
        });
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

}


//處理漢堡選單
function RWD_Menu() {

    let x = document.getElementById("nav_List_li")
    x.classList.toggle("responsive");
}

const hamBurgerMenu = document.getElementById("HBG");
const menu = document.querySelector(".nav_List_li")
if (hamBurgerMenu && menu) {
    hamBurgerMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        RWD_Menu()
    });

    menu.addEventListener("click", function (e) {
        e.stopPropagation();

    });
    document.addEventListener("click", function () {
        menu.classList.remove("responsive");

    });
}


//處理點選箭頭切換圖片
function goNext() {
    plusSlides(1);
}
function goPrev() {
    plusSlides(-1);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {

    let slides = document.getElementsByClassName("tabcontent");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}


//處理點選按鈕切換分類
function filterSelection(c) {
    let x;
    x = document.getElementsByClassName("img");
    console.log(x)
    if (c == "all") {
        c = "";
        document.querySelector(".img_colume_show").style.overflow = "hidden";
        document.querySelector(".img_colume_show").style.whiteSpace = "normal";
        document.querySelector(".img_row_show").style.overflow = "hidden";
        document.querySelector(".img_row_show").style.whiteSpace = "normal";

    }
    if (c == "colume") {
        document.querySelector(".img_colume_show").style.overflow = "auto";
        document.querySelector(".img_colume_show").style.whiteSpace = "nowrap";
    }
    if (c == "row") {
        document.querySelector(".img_row_show").style.overflow = "auto";
        document.querySelector(".img_row_show").style.whiteSpace = "nowrap";
    }
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (let i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }

}

function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


filterSelection("all");
showSlides(slideIndex);

// function workslide() {
//     const box = document.querySelector(".img_colume_show")
//     box.innerHTML += box.innerHTML;

//     let speed = 1;
//     let animationId;
//     function scroll() {
//         box.scrollLeft += speed;
//         if (box.scrollLeft > box.scrollWidth / 2) {
//             box.scrollLeft = 0;
//         }
//         animationId = requestAnimationFrame(scroll);
//         // console.log(animationId);
//     }
//     function starScroll() {
//         animationId = requestAnimationFrame(scroll);
//     }

//     function stopScroll() {

//         cancelAnimationFrame(animationId);

//     }

//     box.addEventListener('mouseenter', stopScroll);
//     box.addEventListener('mouseleave', starScroll);

//     starScroll();

// }
// workslide();
document.getElementById("defaultOpen").click();