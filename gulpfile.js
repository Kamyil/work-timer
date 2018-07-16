const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const ts = require('gulp-typescript');



gulp.task('reload',function(){

browserSync.reload();

});

gulp.task('default', function () {
    return gulp.src('development/ts/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('production/js'));
});

gulp.task('serve',['sass'],function(){


	browserSync({
		server: 'production'
	});

	gulp.watch("./*.html").on('change', browserSync.reload); 
	gulp.watch('development/scss/**/*.scss',['sass']);

});

gulp.task('sass',function(){


return gulp.src('development/scss/**/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(autoprefixer({
  	browsers:['last 3 versions']
  }))
  .pipe(gulp.dest('production/css'))
  .pipe(browserSync.stream());
});



gulp.task('default',['serve']);