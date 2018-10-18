<?php

add_action('wp_enqueue_scripts', 'default_calculator_scripts');
function default_calculator_scripts()
{

  wp_register_script( 'interactive_map-js', plugins_url( '../app/scripts/main.js', __FILE__ ) );
  wp_enqueue_script( 'interactive_map-js', '', '', false, true );

  wp_register_style( 'interactive_map-style', plugins_url( '../app/style/interactive_map_style.css', __FILE__ ) );
  wp_enqueue_style( 'interactive_map-style' );

}
