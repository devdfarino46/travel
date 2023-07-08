const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const ignore = require('gulp-ignore');
const changed = require('gulp-changed');

module.exports = function optimize_images() {
    return gulp.src(["src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|ico)"])
        .pipe(changed('dist/img/'))
        .pipe(imagemin([
            imagemin.mozjpeg({
                quality: 70,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo()
        ], {
            verbose: true
        }))
        .pipe(ignore("src/assets/img/**/*.+(gif|svg|ico)"))
        .pipe(webp())
        .pipe(gulp.dest("dist/assets/img"));
}