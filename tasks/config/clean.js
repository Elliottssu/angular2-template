/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 */
 var rimraf = require('rimraf');
module.exports = function(gulp, plugins, growl) {
	gulp.task('clean:dev', function(cb) {
      return rimraf('.tmp/public', cb);
	});
	gulp.task('clean:js_ts', function(cb) {
      return rimraf('.tmp/public/js/app/**/*', cb);
	});
	gulp.task('clean:html', function(cb) {
      return rimraf('.tmp/public/app/**/*', cb);
	});
	gulp.task('clean:images', function(cb) {
      return rimraf('.tmp/public/images/**/*', cb);
	});
	gulp.task('clean:build', function() {
		return gulp.src(['www/**/*.*', 'www{,/**}'], {read: false})
				.pipe(plugins.rimraf({ force: true }))
				.pipe(plugins.if(growl, plugins.notify({ message: 'Clean task complete' })));
	});
};
