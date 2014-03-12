/*
 * @category JS
 * @package Form auto-completion tool
 * @copyright 2012 Dmitry Sheiko (http://dsheiko.com)
 * @license MIT
 */
(function( window ) {
    var document = window.document,
        fieldValueMap = {
              'title' : 'Ms.'
            , 'name' : 'JonSnow'
            , 'fillname' : 'Jon Snow'
            , 'firstname' : 'Jon'
            , 'lastname'  : 'Snow'
            , 'email'     : 'jon.snow@winterfell.we'
            , 'username' : 'Stark'
            , 'password' : 'wintercomes'
            , 'confirmation' : 'wintercomes'
            , 'position' : 'Lord Commander'
            , 'zipcode' : 'wintercomes'
            , 'country' : 'Westeros'
            , 'city' : 'The Wall'
            , 'company' : 'Night Watch'
            , 'address' : 'The Black Tower'
            , 'phone' : 777777
            , 'nationality' : 'Westerosi'
            , 'comment' : 'This is a test data. Please, ignore it.'
            , 'jobtitle' : 'Crow'
            , 'experiance' : 'Veteran (5+)'
            , 'site_link' : 'jon.winterfell.we'
            , 'how' : 'other (Please specify)'
            , 'specified' : 'This is a test data. Please, ignore it.'
        };

    Object.keys( fieldValueMap ).forEach(function( name ){
        var input = document.querySelector( "form input[name=" + name + "]" )
            || document.querySelector( "form textarea[name=" + name + "]" );
        input && input.type !== "hidden" && ( input.value = fieldValueMap[ name ] );
    });

})( window );