(function(){
    let carrousel = document.querySelector('.carrousel');
    console.log("conteneur carrousel = " + carrousel.tagName)

    let btn = document.querySelector('.bouton__ouvrir');
    console.log("bouton = " + btn.tagName)
    
    let carrousel__x = document.querySelector('.carrousel__x');
    console.log("carrousel x = " + carrousel__x.tagName)



    btn.addEventListener('mousedown', function () {
        carrousel.classList.add('carrousel--ouvrir');
        console.log("oki")
    })

    carrousel__x.addEventListener('mousedown', function () {
        carrousel.classList.remove('carrousel--ouvrir');
        console.log("oki")
    })
})()