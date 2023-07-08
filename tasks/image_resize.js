const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const rename = require('gulp-rename');
const argv = require('yargs').argv;
 
module.exports = function image_resize() {
    const size = Number(argv.size);
    const fileName = argv.file;
    return gulp.src(`src/assets/img/${fileName}`)
        .pipe(imageResize({
          width : size,
          height : size,
          crop : true,
          upscale : false
        }))
        .pipe(rename({suffix: `@${size}px`}))
        .pipe(gulp.dest('src/assets/img'));
};