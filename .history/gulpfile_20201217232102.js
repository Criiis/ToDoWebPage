const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const del = require('del');
const fs = require('fs');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

// const optAutoprefixer = {
// 	remove: false,
//   cascade: false
// };

// let styleSRC = './styles/**/*.scss';
// let styleDIST = './build/css';
// let jsSRC = './scripts/**/*.js';
// let jsDIST = './build/js';


// let styleWATCH = './styles/**/*.scss';
// let jsWATCH = './scripts/**/*.js';



// //gulp styles
// function css(done) {
//   return gulp.src( styleSRC )
//     .pipe(sass({
//       outputStyle: 'compressed'
//     }).on('error', sass.logError))
//     .pipe(autoprefixer(optAutoprefixer))
//     .pipe(gulp.dest( styleDIST ));
//     done();
// }


// //gulp scripts
// function js(done) {
//   return gulp.src( jsSRC )
//   .pipe(babel({
//     presets: ['babel-preset-env']
//     }))
//     .pipe(concat('main.js'))
//     .pipe(minify())
//     .pipe(gulp.dest( jsDIST ));
//   done();
// }



// //gulp clean
// function clean(done) {
//   del(['build/css/*', '!build/css/vender', '!build/css/vender/**']);
//   del(['build/js/*', '!build/js/vender', '!build/js/vender/**']);
//   done();
// }


// function setup(done) {
//   const folders = [
//     'build',
//     'build/css',
//     'build/css/vender',
//     'build/js',
//     'build/js/vender',
//     'styles',
//     'scripts'
//   ];

//   folders.forEach(dir => {
//     if(!fs.existsSync(dir)) {
//         fs.mkdirSync(dir);
//     } 
//   });
//   done();
// }

// //gulp watch
// function watch_files() {
//   gulp.watch( styleWATCH, css );
//   gulp.watch( jsWATCH, js );
// }

// gulp.task('setup', setup);
// gulp.task('css', css);
// gulp.task('js', js);
// gulp.task('clean', clean);
// gulp.task('default', gulp.parallel(clean, css, js));
// gulp.task('watch', gulp.series(clean, css, js, watch_files));

exports.default = function() {
  // The task will be executed upon startup
  watch('./styles/**', { ignoreInitial: false }, function(cb) {
    // body omitted
    cb();
  });
};