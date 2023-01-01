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
  atomsDir: './src/atoms',
  moleculesDir: './src/molecules',
  organismsDir: './src/organisms',
  globalCss: './publish/css/global.css'
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

task('atoms', function() {
  return src(`${path.atomsDir}/*.scss`)
    .pipe(sass({
      includePaths: [path.normalize]
    }).on('error', sass.logError))
    .pipe(dest(path.dir));
});

task('molecules', function() {
  return src(`${path.moleculesDir}/*.scss`)
    .pipe(sass({
      includePaths: [path.normalize]
    }).on('error', sass.logError))
    .pipe(dest(path.dir));
});

task('organisms', function() {
  return src(`${path.organismsDir}/*.scss`)
    .pipe(sass({
      includePaths: [path.normalize]
    }).on('error', sass.logError))
    .pipe(dest(path.dir));
});


task('minify-css', function() {
  return src(path.globalCss)
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
//     .pipe(dest(path.globalCss))
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
//   gulp.src(path.globalCss)
//     .pipe(minifyCSS({keepBreaks:false}))
//     .pipe(gulp.dest(path.globalCss));
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
//   return src([path.normalize, `${path.globalCss}/global.css`], { allowEmpty: true, sourcemaps: true })
//   .pipe(concat('global.css'))
//   .pipe(sourcemap.init())
//   .pipe(cleanCss())
//   .pipe(sourcemap.write())
//   .pipe(dest(path.globalCss), { sourcemaps: true })
// })

// task('styles', function() {
//   return merge(
//     src(path.normalize),
//     `${path.globalCss}/global.css`
//   ).pipe(concat('global.css'))
//   .pipe(sourcemap.init())
//   .pipe(minifyCss())
//   .pipe(sourcemap.write())
//   .pipe(dest(path.globalCss))
// })

task('watch', function() {
  watch(path.scss, series(['scss', 'minify-css']));
});

task('build', series(['scss', 'atoms', 'molecules', 'organisms', 'minify-css']))
