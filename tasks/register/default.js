module.exports = function (gulp, plugins) {
	gulp.task('default', function(cb) {
		plugins.sequence(
			'clean:dev',
			['typescript:dev', 'images', 'less:dev'],
			'copy:dev',
			['watch:typescript', 'watch:less', 'watch:html', 'watch:images', 'browserSync'],
			// 'linkAssets',
			// ['watch:api', 'watch:assets'],
			cb
		);
	});
};
