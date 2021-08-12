Currently the maps javascript loads the entire minified turf.js library, 
despite the fact we are only using 1 or 2 turf commands. We should tree-shake the turf library
down to the few turf functions we actually need. This is discussed at Creating custom builds for 
use in the browser discussed at 

https://turfjs.org/getting-started


Instructions:
1. FIND THE TURF FUNCTIONS YOU NEED IN MAPS.JS 
-----------------------------------------------
Whatever turf commands we use in kagi.com/maps javascript, find the turf functions (such as distance, buffer, collect, etc...), and load them into the `main.js` module export file. As of writing this file, we only use one function `turf.distance()`

2. GENERATE THE BROWSER-READABLE TURF-FUNCTIONS
run `npm run turf-load` to generate the `turf-functions.js` file

    OR do it directly in command line with 
  `npm run --silent browserify -- main.js -s turf > turf-functions.js` 

3. MINIFY AND UGLIFY THE `turf-functions.js`
run `npm run turf-minify`. This will minify, compress and mangle the `turf-functions.js` into a `turf-minified.js` file

4. The resulting `turf-minified.js` will then need to be copy/pasted to the `turf.js` kagi/public/js repo.