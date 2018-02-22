var gulp = require("gulp"),
	sass = require("gulp-sass"),
  concat = require("gulp-concat"),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
  autoprefixer = require('gulp-autoprefixer'),
	runSequence = require('run-sequence'),
	browserSync = require("browser-sync").create();


/*  Default Task  */
gulp.task('default', function (callback) {
  runSequence(['sass','jsx','imgs','html','browserSync', 'watch'],callback)
})
gulp.task('build', function (callback) {
    runSequence(['sass-build', 'jsx-build', 'html'], callback)
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    },
  })
})

//tasks below
//--------------------------- SCSS ---------------------------
gulp.task('sass', function(){
  return gulp.src(['src/scss/_*.scss','src/scss/*.scss'])
    .pipe(concat('styles.css'))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task('sass-build', function(){
  return gulp.src(['src/scss/_*.scss','src/scss/*.scss'])
    .pipe(concat('basenew.css'))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css/'))
});
//--------------------------- JAVASCRIPT ---------------------------
gulp.task('jsx',function(callback){
  return gulp.src(['src/js/_*.js', 'src/js/-*.js', 'src/js/z.js'])
    .pipe(concat("base.js"))
    .pipe(gulp.dest('dist/scripts/'))
});
gulp.task('jsx-build',function(callback){
  return gulp.src(['src/js/_*.js', 'src/js/-*.js', 'src/js/z.js'])
    .pipe(concat("base.js"))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'))
});
//--------------------------- HTML ---------------------------
gulp.task('html',function(callback){
  return gulp.src(['src/**/*.html'])
    .pipe(gulp.dest('dist/'))
});
gulp.task('reload',['jsx'],function(done){
  browserSync.reload();
  done();
})
//--------------------------- IMGS ---------------------------
gulp.task('imgs',function(callback){
  return gulp.src(['src/imgs/**/*'])
    .pipe(gulp.dest('dist/imgs/'))
});
//--------------------------- WATCHERS ---------------------------
gulp.task('watch', ['browserSync', 'sass', 'jsx'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  gulp.watch('src/**/*.html', ['html'], browserSync.reload); 
  gulp.watch('src/jsx/**/*.js', ['reload']);
});
