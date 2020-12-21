const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const del = require('del');
const fs = require('fs');
const babel = require('gulp-babel');

const optAutoprefixer = {
	remove: false,
  cascade: false
};

let styleSRC = './src/scss/**/*.scss';
let styleDIST = './dist/css';
let jsSRC = './src/scripts/**/*.js';
let jsDIST = './dist/js';


let styleWATCH = './src/scss/**/*.scss';
let jsWATCH = './src/scripts/**/*.js';



//gulp styles
function css(done) {
  return gulp.src( styleSRC )
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer(optAutoprefixer))
    .pipe(gulp.dest( styleDIST ));
    done();
}


//gulp scripts
function js(done) {
  return gulp.src( jsSRC )
  .pipe(babel({
    presets: ['babel-preset-env']
    }))
    .pipe(concat('main.js'))
    .pipe(minify())
    .pipe(gulp.dest( jsDIST ));
  done();
}

//gulp watch
function watch_files() {
  gulp.watch( styleWATCH, css );
  gulp.watch( jsWATCH, js );
}

//gulp clean
function clean(done) {
  del(['dist/css/*', '!dist/css/vender', '!dist/css/vender/**']);
  del(['dist/js/*', '!dist/js/vender', '!dist/js/vender/**']);
  done();
}


function setup(done) {
  const folders = [
    'dist',
    'dist/css',
    'dist/css/vender',
    'dist/js',
    'dist/js/vender',
    'images',
    'src',
    'src/scss',
    'src/scripts'
  ];

  folders.forEach(dir => {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    } 
  });
  done();
}


gulp.task('setup', setup);
gulp.task('css', css);
gulp.task('js', js);
gulp.task('clean', clean);
gulp.task('default', gulp.parallel(clean, css, js));
gulp.task('watch', gulp.series(clean, css, js, watch_files));