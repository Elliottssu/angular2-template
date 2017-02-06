module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'clean:dev',
			['typescript:dev', 'images', 'less:dev'],
			'copy:dev',
      // 'linkAssets',
			['watch:typescript', 'watch:less', 'watch:html', 'watch:images', 'browserSync'],
			cb
		);
	});
};
