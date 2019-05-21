var deploy = require("gulp-deploy-git");
var gulp = require("gulp");

gulp.task("deploy",function(){
    return gulp.src("../LearningTS")
        .pipe(deploy({
            repository: "https://github.com/sent2280/TypeScriptBasics.git"
        }));
}); 