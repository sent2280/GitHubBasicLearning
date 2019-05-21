var gulp = require('gulp');
var deploy = require('gulp-deploy-git');

gulp.task('deploy', function() {
  return gulp.src('./*', { read: false })
    .pipe(deploy({
      repository: 'https://github.com/sent2280/GitHubBasicLearning.git',
      verbose: true,
      debug: true
    }));
});