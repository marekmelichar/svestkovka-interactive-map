<?php

add_action('wp_enqueue_scripts', 'default_calculator_scripts');
function default_calculator_scripts()
{

  // CSS

  wp_register_style( 'leaflet-style', plugins_url( '../style/leaflet.css', __FILE__ ) );
  wp_enqueue_style( 'leaflet-style' );

  wp_register_style( 'interactive_map-style', plugins_url( '../style/interactive_map_style.css', __FILE__ ) );
  wp_enqueue_style( 'interactive_map-style' );


  // JS

  wp_register_script( 'leaflet-js', plugins_url( '../js/leaflet.js', __FILE__ ) );
  wp_enqueue_script( 'leaflet-js' );

  wp_register_script( 'socket-js', plugins_url( '../js/socket.io.js', __FILE__ ) );
  wp_enqueue_script( 'socket-js' );

  wp_register_script( 'interactive_map-js', plugins_url( '../js/main.js', __FILE__ ) );
  wp_enqueue_script( 'interactive_map-js', '', '', false, true );

}
