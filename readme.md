Currently the maps javascript loads the entire minified turf.js library, 
despite the fact we are only using 1 or 2 turf commands. We should tree-shake the turf library
down to the few turf functions we actually need. This is discussed at Creating custom builds for 
use in the browser discussed at 

https://turfjs.org/getting-started

