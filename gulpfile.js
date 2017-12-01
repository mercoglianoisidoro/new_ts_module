var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var run = require('gulp-run');

gulp.task("default", ["run_with_npm"]);

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('run_with_npm', ["build"], function () {
    return run('npm run exec').exec()
        .pipe(gulp.dest('output'))
        ;
})

gulp.task("watch_to_build_and_execute", ["run_with_npm"], function () {
    gulp.watch(
        [__dirname + '/src/**/*',
        __dirname + '/index.ts'],
        ["run_with_npm"]);

});
