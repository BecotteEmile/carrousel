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
    
    
    function creer_radio_carrousel(index) {
        let carrousel__radio = document.createElement("input");
        carrousel__radio.classList.add('carrousel__radio');
        carrousel__radio.type = "radio";
        carrousel__radio.name = "image";
        carrousel__radio.dataset.index = index;
        carrousel__form.appendChild(carrousel__radio);
        carrousel__figure.children[0].classList.add('img__montree');
        
        carrousel__radio.addEventListener("mousedown", function () {

            for (let i = 0; i < carrousel__figure.children.length; i++) {
                carrousel__figure.children[i].classList.remove('img__montree');
                // carrousel__figure.children[i].style.opacity = 0;
            }

            // carrousel__figure.children[index].style.opacity = 1;
            carrousel__figure.children[index].classList.add('img__montree');
            console.log(index);
        })
    }

    function creer_fleches_carrousel(i) {
        let carrousel__fleches = document.createElement("input");
        carrousel__fleches.classList.add('carrousel__fleches');
        if (i == 0) {
            carrousel__fleches.classList.add('fleche__gauche');
            carrousel__fleches.addEventListener("mousedown", function () {
                index -= 1;
                if (index < 0) {
                    index = 5;
                }
                ChangerCarousel(index);
            })
            
        } else {
            carrousel__fleches.classList.add('fleche__droite');
            carrousel__fleches.addEventListener("mousedown", function () {
                index += 1;
                if (index > 5) {
                    index = 0;
                }
                ChangerCarousel(index);
            })

        }

        carrousel__fleches.type = "button";
        carrousel__form.appendChild(carrousel__fleches);


        function ChangerCarousel(index) {
            for (let i = 0; i < carrousel__figure.children.length; i++) {
                carrousel__figure.children[i].classList.remove('img__montree');
                // carrousel__figure.children[i].style.opacity = 0;
            }
            // console.log(index)
            carrousel__figure.children[index].classList.add('img__montree');
        }
        
    }

    btn.addEventListener('mousedown', function () {
        carrousel.classList.add('carrousel--ouvrir');
        // console.log("oki")
    })

    carrousel__x.addEventListener('mousedown', function () {
        carrousel.classList.remove('carrousel--ouvrir');
        // console.log("oki")
    })
})()