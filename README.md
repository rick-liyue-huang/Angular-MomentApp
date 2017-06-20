
### Project Introduction

This is a realtime blog SPA project, I get the data from 'douban' 'moment' server, in order to avoid the cross domain, I create some php files to provide some webAPIs. In the front end, I use angular.js to get the data and complete some logic service.

### The project constructure

- index.html: The SPA main page,
- public/: The static resource, including css, js, and images
- upload/: The uploaded files,
- views/: put some samll html template,
- scripts/: about the angular service logic coding
- api/: the server coding in php files 
- release/: get the distribution edition through gulp.js 


### Notice

In order to get data from 'api/' folder, I put the whole project 'Angular-MomentApp' folder in the 'Applications/MAMP/htdocs/', and open in address of 'localhost/Angular-MomentApp/#/today'. By the way, We also can add the plugin of "no referer image" to explore the pictures in chrome browsers.
If we use the distribution edition, we just use address of 'localhost/Angular-MomentApp/release/#/today'
