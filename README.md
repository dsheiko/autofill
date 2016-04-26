Form auto-completion tool
========

Demo: http://demo.dsheiko.com/autofill/

When testing a web-site, nevermind who you are developer or QA-engineer, it happens to you pretty often to fill-in form fields again and again. Boring, stupid work, but how to make sure the form does still work as intended? Some fields added, CAPTCHA was attached, whatever else done –you have to run the test again. Besides, it will be repeated on different browsers. Browser form auto-completion feature helps a bit, but that is not the same as when you have various sets of test-data always ready to apply on a form, isn’t it?

Well, what I propose is a very simple tool which you can use anywhere for form testing. You need to take this JS code and fill it once with your own test data:

```
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
```

You can run this code on a page with form by using Scratchpad (Firefox Shift-F4) or in console.

You can also create a bookmaklet out of it. Create an HTML file and put there the link:

    <a href="javascript:(function(){s=document.createElement('script');s.type='text/javascript';s.src='http://demo.dsheiko.com/autofill/src/autofill.js?v='+parseInt(Math.random()*99999999);document.body.appendChild(s);})();">AutoFill</a>

[![Analytics](https://ga-beacon.appspot.com/UA-1150677-13/dsheiko/autofill)](http://githalytics.com/dsheiko/autofill)

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/dsheiko/autofill/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

