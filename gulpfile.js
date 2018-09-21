var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Compilar o Sass
gulp.task('sass', function(){

    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());

});

//Compilar o font-awesome
gulp.task('font-awesome', function(){

    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(gulp.dest("src/css"));
});

gulp.task('fonts', function(){

    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('src/fonts'));
})


//Mover JS para src/js
gulp.task('js', function(){

    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
            .pipe(gulp.dest("src/js"))
            .pipe(browserSync.stream());

});

//Servidor para olhar os documentos HTML/SCSS
gulp.task('server', ['sass'], function(){

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);

});


gulp.task('default', ['js', 'font-awesome', 'fonts', 'server']); //Quando der o comando gulp no cmd, execute as tarefas js e serve.