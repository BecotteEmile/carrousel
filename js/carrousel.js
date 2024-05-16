(function(){
    let carrousel = document.querySelector('.carrousel');
    // console.log("conteneur carrousel = " + carrousel.tagName);

    let btn = document.querySelector('.bouton__ouvrir');
    // console.log("bouton = " + btn.tagName);
    
    let carrousel__x = document.querySelector('.carrousel__x');
    // console.log("carrousel x = " + carrousel__x.tagName);

    let carrousel__form = document.querySelector('.carrousel__form');
    // console.log("carrousel form = " + carrousel__form.tagName);
    
    let galerie = document.querySelector('.galerie');
    // console.log("galerie = " + galerie.tagName);

    let intervaChangement;
    let indexPasse = 0;
    let permissions = true;

    let carrousel__figure = document.querySelector('.carrousel__figure');
    // console.log("carrousel figure = " + carrousel__figure.tagName)

    // Création dynamique d'une image du carousel
    

    let galerie__img = galerie.querySelectorAll('img');
    // console.log(galerie__img);
    let index = 0;
    for (const elm of galerie__img) {
        // console.log(elm.src);
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
        index += 1;
    }
    for (let i = 0; i < 2; i++) {
        creer_fleches_carrousel(i);
        index = 0;
    }

    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index le numéro de l'image 
     * @param {*} elm l'élément image de la galerie
     */
    function creer_image_carrousel(index, elm) {
        let carrousel__img = document.createElement('img');
        carrousel__img.src = elm.src;
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);
    }
    
    
    function creer_radio_carrousel(indexCarrousel) {
        let carrousel__radio = document.createElement("input");
        carrousel__radio.classList.add('carrousel__radio');
        carrousel__radio.type = "radio";
        carrousel__radio.name = "image";
        carrousel__radio.dataset.index = indexCarrousel;
        carrousel__form.appendChild(carrousel__radio);
        carrousel__figure.children[0].classList.add('img__montree');
        
        carrousel__radio.addEventListener("mousedown", function () {

            // for (let i = 0; i < carrousel__figure.children.length; i++) {
            //     carrousel__figure.children[i].classList.remove('img__montree');
            //     carrousel__radio.checked = false;
            //     // console.log(carrousel__radio);
            //     // console.log(carrousel__radio.checked);
            //     // carrousel__figure.children[i].style.opacity = 0;
            // }

            // carrousel__figure.children[index].style.opacity = 1;
            // carrousel__figure.children[indexCarrousel].classList.add('img__montree');

            index = Number(carrousel__figure.children[indexCarrousel].dataset.index);
            // carrousel__radio.checked = true;
            ChangerCarousel();
        })
    }

    function creer_fleches_carrousel(i) {
        let longueur = carrousel__figure.children.length;

        let carrousel__fleches = document.createElement("button");
        carrousel__fleches.classList.add('carrousel__fleches');
        if (i == 0) {
            carrousel__fleches.classList.add('fleche__gauche');
            carrousel__fleches.innerHTML = "&#11207";
            carrousel__fleches.addEventListener("mousedown", function () {
                if (permissions == true) {
                    indexPasse = index;
                    index -= 1;
                    if (index < 0) {
                        index = (longueur - 1);
                    }
                    ChangerCarousel();
                }
                
            })
            
        } else {
            carrousel__fleches.classList.add('fleche__droite');
            carrousel__fleches.innerHTML = "&#11208";
            carrousel__fleches.addEventListener("mousedown", function () {
                if (permissions == true) {
                    indexPasse = index;
                    index += 1;
                    if (index > (longueur - 1)) {
                        index = 0;
                    }
                    ChangerCarousel();
                }
            })

        }

        carrousel__fleches.type = "button";
        carrousel__form.appendChild(carrousel__fleches);
        
    }

    function ChangerCarousel() {
            let carrousel__radio = document.querySelectorAll(".carrousel__radio");

            for (const elm of carrousel__radio) {
                elm.checked = false;
            }
            for (let i = 0; i < carrousel__figure.children.length; i++) {
                if (i == indexPasse) {
                    carrousel__figure.children[i].classList.add('img__cachee');
                    intervaChangement = setInterval(CacherImg, 125);
                    permissions = false;
                }
                carrousel__figure.children[i].classList.remove('img__montree');
            }

            
    }

    function CacherImg() {
        let carrousel__radio = document.querySelectorAll(".carrousel__radio");

        carrousel__figure.children[indexPasse].classList.remove('img__cachee');
        carrousel__radio[index].checked = true;
        carrousel__figure.children[index].classList.add('img__cachee');
        clearInterval(intervaChangement);
        intervaChangement = setInterval(RedonnerDisplayBlockImage, 125);
    }
    
    function RedonnerDisplayBlockImage(){
        carrousel__figure.children[index].classList.add('img__montree');
        clearInterval(intervaChangement);
        intervaChangement = setInterval(RedonnerPermissions, 125);
    }
    
    function RedonnerPermissions() {
        clearInterval(intervaChangement);
        carrousel__figure.children[index].classList.remove('img__cachee');
        indexPasse = index;
        permissions = true;
    }

    // galerie__img.addEventListener('mousedown', function () {
    //     carrousel.classList.add('carrousel--ouvrir');
    //     // console.log("oki")
    // })
    for (let i = 0; i < galerie__img.length; i++) {
        galerie__img[i].addEventListener('mousedown', function () {
            let carrousel__radio = document.querySelectorAll(".carrousel__radio");
            for (const elm of carrousel__radio) {
                elm.checked = false;
            }
            carrousel__radio[i].checked = true;
            for (let i = 0; i < carrousel__figure.children.length; i++) {
                carrousel__figure.children[i].classList.remove('img__montree');
            }
            carrousel__figure.children[i].classList.add('img__montree');
            index = i;
            indexPasse = i;
            carrousel.classList.add('carrousel--ouvrir');
        })
    }

    carrousel__x.addEventListener('mousedown', function () {
        carrousel.classList.remove('carrousel--ouvrir');
        // console.log("oki")
    })
})()