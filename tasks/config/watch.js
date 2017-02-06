/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 *
 */
module.exports = function(gulp, plugins, growl) {
	var gulpsync = plugins.sync(gulp);
	gulp.task('watch:typescript', function() {
	    return plugins.watch('assets/app/**/*.ts', function (file) {
	    	if (file.event == 'change') {
	    		gulp.start('typescript:dev')
	    	} else {
	    		gulp.start(gulpsync.sync(['clean:js_ts', 'typescript:dev']));
	    	}
    		
	    })
	});
	
	gulp.task('watch:less', function() {
	    return plugins.watch('assets/**/*.less', function () {
    		gulp.start('less:dev')
	    })
	});

	gulp.task('watch:html', function() {
	    return plugins.watch('assets/app/**/*.html', function () {
    		gulp.start(gulpsync.sync(['clean:html', 'copy:dev']))
	    })
	});

	gulp.task('watch:images', function(file) {
	    return plugins.watch('assets/app/images/', function () {
	    	if (file.event == 'change') {
	    		gulp.start('images')
	    	} else {
	    		gulp.start(gulpsync.sync(['clean:images', 'copy:dev']));
	    	}
	    })
	});
};
