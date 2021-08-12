Currently the maps javascript loads the entire minified turf.js library, 
despite the fact we are only using 1 or 2 turf commands. We should tree-shake the turf library
down to the few turf functions we actually need. This is discussed at Creating custom builds for 
use in the browser discussed at 

https://turfjs.org/getting-started

To create a minified turf.js library of just the functions you need...
------------------------------------------------------------------

1. __Load the functions into the `main.js` file.__
Add the functions (such as distance, buffer, collect, etc...) to  the `main.js` module export file formatted as discussed in the link above. As of writing this file, we only use one function `turf.distance()`

2. __Generate the subset of the turf.js library__
run `npm run turf-load` to generate the `turf-functions.js` file

    OR do it directly in command line with 
  `npm run --silent browserify -- main.js -s turf > turf-functions.js` 

3. __Minify that subset turf.js library__ 
run `npm run turf-minify`. This will minify, compress and mangle the `turf-functions.js` into a `turf-minified.js` file

4. __Copy/paste the contents into whatever ./public/js project needed__
The resulting `turf-minified.js` will then need to be copy/pasted to the `turf.js` kagi/public/js repo.