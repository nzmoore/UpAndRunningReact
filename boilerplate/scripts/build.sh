# transform js
babel --presets react,es2015 js/source -d js/build
# package js
browserify js/build/app.js -o bundle.js
# package css
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# done
date; echo;
