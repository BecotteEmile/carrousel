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
        
        console.log(carrousel__radio);
        carrousel__radio.addEventListener("mousedown", function () {
            console.log("oki");
            carrousel__figure.children.style.opacity = 0;
            carrousel__figure.children[index].style.opacity = 1;
        })
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