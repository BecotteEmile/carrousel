(function(){
    let carrousel = document.querySelector('.carrousel');
    console.log("conteneur carrousel = " + carrousel.tagName);

    let btn = document.querySelector('.bouton__ouvrir');
    console.log("bouton = " + btn.tagName);
    
    let carrousel__x = document.querySelector('.carrousel__x');
    console.log("carrousel x = " + carrousel__x.tagName);
    
    let galerie = document.querySelector('.galerie');
    console.log("galerie = " + galerie.tagName);




    let carrousel__figure = document.querySelector('.carrousel__figure');
    console.log("carrousel figure = " + carrousel__figure.tagName)

    // Création dynamique d'une image du carousel
    let carrousel__img = document.createElement('img');
    carrousel__img.classList.add('carrousel__img');
    
    // carrousel__img.src= galerie__img.src;
    // console.log("première image du carousel =" + carrousel__img.src);
    
    // carrousel__figure.appendChild(carrousel__img);
    // console.log(carrousel__figure);
    
    let galerie__img = galerie.querySelectorAll('img');
    console.log(galerie__img);
    for (const elm of galerie__img) {
        console.log(elm.src);
        
    }





    btn.addEventListener('mousedown', function () {
        carrousel.classList.add('carrousel--ouvrir');
        console.log("oki")
    })

    carrousel__x.addEventListener('mousedown', function () {
        carrousel.classList.remove('carrousel--ouvrir');
        console.log("oki")
    })
})()