var gulp = require('gulp');
var deploy = require('gulp-deploy-git');

gulp.task('deploy', function() {
  return gulp.src('./*', { read: false })
    .pipe(deploy({
      repository: 'https://github.com/sent2280/GitHubBasicLearning.git',
      message: 'Deployment is automated through gulp plugin (gulp-deploy-git plugin)',
      verbose: true,
      debug: true
    }));
});