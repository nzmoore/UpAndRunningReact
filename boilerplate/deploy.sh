# clean up last deploy
rm -rf deployment
mkdir deployment

# build
sh scripts/build.sh

# minify js
uglify -s bundle.js -o deployment/bundle.js

# minify css
cssshrink bundle.css > deployment/bundle.css

# copy HTML and images
cp index.html deployment/index.html
cp -r images/ deployment/images/

# done
date; echo;
