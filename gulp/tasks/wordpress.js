const gulp = require("gulp");
const rename = require("gulp-rename");

gulp.task("copyPHP", () => {
    return gulp.src("./wp/*php")
        .pipe(gulp.dest("C:/xampp/htdocs/lf/wp-content/themes/HairRoom/"));
});

gulp.task("copyCSS", () => {
    return gulp.src("./dist/styles.css")
    .pipe(rename("style.css"))
    .pipe(gulp.dest("C:/xampp/htdocs/lf/wp-content/themes/HairRoom/"));
});

gulp.task("copyJS", () => {
    return gulp.src("./dist/*.js")
    .pipe(gulp.dest("C:/xampp/htdocs/lf/wp-content/themes/HairRoom/"));
});