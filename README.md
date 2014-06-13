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
          , 'country' : 'United States'
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
          , 'euworkpermit': 'EU'
          , 'publication' : 'Westeros Daily'
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


[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/a4a969331cc66c6583eb245aa3e24186 "githalytics.com")](http://githalytics.com/dsheiko/autofill)