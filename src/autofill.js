/*
 * @category JS
 * @package Form auto-completion tool
 * @copyright 2012 Dmitry Sheiko (http://dsheiko.com)
 * @license MIT
 */
(function( window ) {
  "use strict";
  var document = window.document,
      fieldValueMap = {
            "title"       : "Ms."
          , "name"        : "JonSnow"
          , "fullname"    : "Jon Snow"
          , "firstname"   : "Jon"
          , "lastname"    : "Snow"
          , "email"       : "jon.snow@winterfell.we"
          , "username"    : "Stark"
          , "password"    : "wintercomes"
          , "confirmation": "wintercomes"
          , "position"    : "Lord Commander"
          , "zipcode"     : "69523"
          , "country"     : "United States"
          , "state"       : "North Dakota"
          , "city"        : "Wichita"
          , "address"     : "3153 auburn ave"
          , "phone"       : "(135)-773-2494"
          , "cell"        : "(327)-710-3077"
          , "SSN"         : "966-49-5276"
          , "company"     : "Night Watch"
          , "nationality" : "Westerosi"
          , "comment"     : "This is a test data. Please, ignore it."
          , "jobtitle"    : "Crow"
          , "experiance"  : "Veteran (5+)"
          , "site_link"   : "jon.winterfell.we"
          , "how"         : "other (Please specify)"
          , "specified"   : "This is a test data. Please, ignore it."
          , "publication" : "Westeros Daily"
      };

    Object.keys( fieldValueMap ).forEach(function( name ){

        var input = document.querySelector( "form input[name='" + name + "']" )
						|| document.querySelector( "form select[name='" + name + "']" )
            || document.querySelector( "form textarea[name='" + name + "']" );

        input && input.type !== "hidden" && ( input.value = fieldValueMap[ name ] );
    });

})( window );
