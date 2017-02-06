var tscConfig = require('../../tsconfig.json');
module.exports = function(gulp, plugins, growl) {
    gulp.task('typescript:dev', function() {
        return gulp.src('./assets/app/**/*.ts')
            .pipe(plugins.typescript(tscConfig.compilerOptions))
            .pipe(gulp.dest('.tmp/public/js/app'));
    });
};
