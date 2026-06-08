# autofill.js

A bookmarklet that fills web form fields with test data in one click. Useful when you need to repeatedly test forms during development or QA — no more typing the same names, emails, and addresses by hand.

Works with plain HTML forms and modern JS frameworks (React, Vue, Angular) — it dispatches `input` and `change` events so framework-controlled fields update correctly.

## How it works

The script maps common field `name` attributes to test values. On run, it finds every matching `input`, `select`, and `textarea` on the page and sets the value.

Edit `fieldValueMap` in `src/autofill.js` to use your own data:

```js
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
          , "experience"  : "Veteran (5+)"
          , "site_link"   : "jon.winterfell.we"
          , "how"         : "other (Please specify)"
          , "specified"   : "This is a test data. Please, ignore it."
          , "publication" : "Westeros Daily"
      };

  Object.keys( fieldValueMap ).forEach(function( name ){
      var selector = "form input[name='" + name + "'],"
                   + "form select[name='" + name + "'],"
                   + "form textarea[name='" + name + "']";
      [].slice.call( document.querySelectorAll( selector ) ).forEach(function( el ){
          if ( el.type !== "hidden" ) {
              el.value = fieldValueMap[ name ];
              el.dispatchEvent( new Event( "input",  { bubbles: true } ) );
              el.dispatchEvent( new Event( "change", { bubbles: true } ) );
          }
      });
  });

})( window );
```

## Usage

**Browser console** — paste the script and run it on any page with a form.

**Bookmarklet** — host the script somewhere and add this link to your bookmarks bar:

```html
<a href="javascript:(function(){s=document.createElement('script');s.type='text/javascript';s.src='YOUR_URL/autofill.js?v='+parseInt(Math.random()*99999999);document.body.appendChild(s);})();">AutoFill</a>
```

Replace `YOUR_URL` with wherever you host the file. Click the bookmark on any page to fill the form.

## License

MIT
