const gulp = require('gulp');
const fontfacegen = require('gulp-fontfacegen');

module.exports = function css_fonts_gen() {
    return gulp.src("src/assets/font/**/*.+(eot|ttf|otf|otc|ttc|woff|woff2|svg)")
        .pipe(gulp.dest("dist/assets/font"))
        .pipe(fontfacegen({
            filepath: "./dist/assets/css",
            filename: "fontfacerules.css"
        }))
}