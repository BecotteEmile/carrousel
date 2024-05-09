<?php
/**
 * Plugin Name: Carrousel
 * Author: Émile Bécotte
 * Description: Affiche le carrousel associé à une galerie de Wordpress
 * Version: 1.0.0
 * Plugin URI: https://github.com/BecotteEmile
 * Author URI: https://github.com/BecotteEmile
 * 
 */

function enqueue_style_script(){
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

    wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}
//Il faut que wp head soit ajouté juste avant la fin de la balise </head>
//et que wp footer soit ajouté juste avant la fin de la balise </footer>
add_action('wp_enqueue_scripts','enqueue_style_script');

function genere_html() {  

        $html =  '
        <button class="bouton__ouvrir">Ouvrir Carousel</button>
        <div class="carrousel">
            <div class="fond__carrousel"></div>
            <button class="carrousel__x">X</button>
            <figure class="carrousel__figure"></figure>
            <form action="" class="carrousel__form"></form>
        </div>
        ';
        return $html;
    }
    // [carrousel] juste après la galerie dans votre article ou page
    // Quand la fonction the content rencontrera [carrousel] c'est à ce moment
    // que le carrousel sera initialisé
    add_shortcode( 'carrousel', 'genere_html' );
?>
    