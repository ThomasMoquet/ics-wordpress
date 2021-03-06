<?php
/**
 * Plugin Name: ICS Download Link
 * Plugin URI: https://github.com/ThomasMoquet/ics-wordpress
 * Description: Add a link allowing to download a ICS file
 * Version: 2.0
 * Author: Thomas Moquet
 */

define( 'ICSDL_URL', plugin_dir_url ( __FILE__ ) );
define( 'ICSDL_DIR', plugin_dir_path( __FILE__ ) );



function icsdl_init(){
    //Load translations
    //load_plugin_textdomain ( 'ics-download-link', false, ICSDL_DIR . 'languages/' );

    // Check user permission
    if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
        return;

    // Add only in Rich Editor mode
    if ( get_user_option('rich_editing') == 'true') {
        add_filter("mce_external_plugins", "icsdl_enable");
        add_filter('mce_buttons', 'icsdl_link');
    }
}

function icsdl_link($buttons) {
    array_push($buttons, "separator", "icsdllink");
    return $buttons;
}

// Load the TinyMCE plugin
function icsdl_enable($plugins)
{
    $plugins['icsdllink'] = ICSDL_URL . 'icsdl_tinymce.js';
    return $plugins;
}

add_action('init', 'icsdl_init');

wp_enqueue_script( 'icsdl', ICSDL_URL . '/assets/js/icsdl.js', array('jquery') );
wp_localize_script( 'icsdl', 'parameters', array("ICSDL_DOWNLOAD_URL" => ICSDL_URL."download.php") );

add_action('wp_ajax_icsdl_tinymce', 'icsdl_ajax_tinymce');

function icsdl_ajax_tinymce() {
    if (!current_user_can('edit_pages') && !current_user_can('edit_posts')) // check for rights
        die(__("You are not allowed to be here"));

    include_once( ICSDL_DIR . 'tinymce/popup.php');
}

?>