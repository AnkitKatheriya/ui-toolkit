'use strict';
var { task, src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
// var minifyCss = require('gulp-minify-css'),
// imagemin = require('gulp-imagemin'),
// minifyHTML = require('gulp-minify-html'),
// uglify = require('gulp-uglify'),
// fileinclude = require('gulp-file-include');
// var concat = require('gulp-concat');
//var sourcemap = require('gulp-sourcemaps');
//var merge = require('gulp-merge')
// var imagemin = require('gulp-imagemin')

var path = {
  normalize: 'node_modules/modern-normalize/modern-normalize.css',
  dir: './publish/css/',
  scss: './src/**/*.scss',
  css: './publish/css/global.css'
};

var externsion = {
  minify: '.min'
}

task('scss', function() {
    return src('./src/global.scss')
      .pipe(sass({
        includePaths: [path.normalize]
      }).on('error', sass.logError))
      .pipe(dest(path.dir));
});

task('minify-css', function() {
  return src(path.css)
    .pipe(cleanCss())
    .pipe(rename({suffix: externsion.minify}))
    .pipe(dest(path.dir));
})

// task('scss', function() {
//   return src('./src/global.scss')
//     .pipe(sass({
//       includePaths: [path.normalize]
//     }).on('error', function(error){
//       console.error('Error', error.message)
//     }))
//     .pipe(dest(path.css))
// });

// task('image', function(){
//   return gulp.src('images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('publish/images'));
// })

// gulp.task('fileinclude', function() {
//   gulp.src(['index.html'])
//     .pipe(fileinclude({
//       prefix: '@@',
//       basepath: '@file'
//     }))
//     .pipe(gulp.dest('./html/'));
// });

// gulp.task('minify-css', function() {
//   gulp.src(path.css)
//     .pipe(minifyCSS({keepBreaks:false}))
//     .pipe(gulp.dest(path.css));
// });


// gulp.task('compress', function() {
//   return gulp.src(['./node_modules/foundation/js/foundation/*.js','./node_modules/foundation/js/vendor/*.js'])
//     .pipe(uglify())
//     .pipe(gulp.dest('publish/js'));
// });

// gulp.task('minify-html', function() {
//   var opts = {
//     conditionals: true,
//     spare:true
//   };

//   return gulp.src('./html/*.html')
//     .pipe(minifyHTML(opts))
//     .pipe(gulp.dest('./publish/'));
// });

// task('css', function() {
//   return src([path.normalize, `${path.css}/global.css`], { allowEmpty: true, sourcemaps: true })
//   .pipe(concat('global.css'))
//   .pipe(sourcemap.init())
//   .pipe(cleanCss())
//   .pipe(sourcemap.write())
//   .pipe(dest(path.css), { sourcemaps: true })
// })

// task('styles', function() {
//   return merge(
//     src(path.normalize),
//     `${path.css}/global.css`
//   ).pipe(concat('global.css'))
//   .pipe(sourcemap.init())
//   .pipe(minifyCss())
//   .pipe(sourcemap.write())
//   .pipe(dest(path.css))
// })

task('watch', function() {
  watch(path.scss, series(['scss', 'minify-css']));
});

task('build', series(['scss', 'minify-css']))
