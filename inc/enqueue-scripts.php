<?php

add_action('wp_enqueue_scripts', 'default_calculator_scripts');
function default_calculator_scripts()
{

  // CSS

  // wp_register_style( 'leaflet-style', 'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css' );
  wp_register_style( 'leaflet-style', plugins_url( '../style/leaflet.css', __FILE__ ) );
  wp_enqueue_style( 'leaflet-style' );

  // wp_register_style( 'interactive_map-style', plugins_url( '../app/style/interactive_map_style.css', __FILE__ ) );
  wp_register_style( 'interactive_map-style', plugins_url( '../style/interactive_map_style.css', __FILE__ ) );
  wp_enqueue_style( 'interactive_map-style' );


  // JS

  wp_register_script( 'lodash-js', plugins_url( '../js/lodash.js', __FILE__ ) );
  wp_enqueue_script( 'lodash-js' );

  // wp_register_script( 'leaflet-js', 'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js', null, null, true );
  wp_register_script( 'leaflet-js', plugins_url( '../js/leaflet.js', __FILE__ ) );
  wp_enqueue_script( 'leaflet-js' );

  // wp_register_script( 'socket-js', 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js' );
  wp_register_script( 'socket-js', plugins_url( '../js/socket.io.js', __FILE__ ) );
  wp_enqueue_script( 'socket-js' );

  // wp_register_script( 'interactive_map-js', plugins_url( '../app/scripts/main.js', __FILE__ ) );
  wp_register_script( 'interactive_map-js', plugins_url( '../js/main.js', __FILE__ ) );
  wp_enqueue_script( 'interactive_map-js', '', '', false, true );

}
