var gulp = require("gulp"),
    nodemon = require('gulp-nodemon'),
    babel = require("gulp-babel"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat");


gulp.task('compile', function() {
    return gulp.src("app/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task('start', function() {
    nodemon({
        script: 'server.js',
        tasks: ['compile'],
        env: {
            'NODE_ENV': 'development'
        }
    })
})
