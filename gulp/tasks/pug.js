const gulp = require("gulp");
const notify = require("gulp-notify");
const pug = require("gulp-pug2");

gulp.task("pugRender", () => {
    return gulp.src("./src/**/*.pug")
        .pipe(pug())
        .on("error", notify.onError(function(error) {
            return {
                title: "Pug",
                message: error.message
            }
        }))
        .on("error", function(error) {
            console.log(error.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./dist"));
});