<?php
function mytheme_custom_scripts(){
    $scriptSrc = get_template_directory_uri() . '/assets/js/este.js';
    wp_enqueue_script( 'myhandle', $scriptSrc , array(), '1.0',  true );
}
add_action( 'wp_enqueue_scripts', 'mytheme_custom_scripts' );