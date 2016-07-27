var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync').create();
var webpackConf = './webpack.config.js';

var path = {
    server: './app/',
    src: {
        scss: './src/scss/',
        js: './src/js/'
    },
    app: {
        css: './app/css/',
        js: './app/js/'
    }
};


// HTML
gulp.task('html', function() {
    return gulp.src(path.server + '**/*.html')
            .pipe(browserSync.reload({stream: true}));
});


// CSS
gulp.task('css', function() {
    gulp.src(path.src.scss + 'master.scss')
        .pipe(plumber({
            errorHandler : notify.onError("Error : <%= error.message %>")
        }))
        .pipe(sass({
            style : 'expanded'
        }))
        .pipe(cssnext())
        .pipe(gulp.dest(path.app.css))
        .pipe(browserSync.reload({stream : true}));
});


// JS
gulp.task('js', function() {
    gulp.src(path.src.js + '**/*.js')
        .pipe(webpack(require(webpackConf)))
        .pipe(gulp.dest(path.app.js))
        .pipe(browserSync.reload({stream: true}));
});


// browserSync
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: path.server,
            directory: true
        }
    });

    gulp.watch(path.server + '**/*.html', ['html']);
    gulp.watch(path.src.scss + '**/*.scss', ['css'])
    gulp.watch(path.src.js + '**/*.js', ['js']);
});


gulp.task('default', ['server']);
