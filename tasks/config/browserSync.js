module.exports = function (gulp, plugins, growl) {
  var browserSync = require('browser-sync').create(); 

 gulp.task('browserSync', function () {
  var files = [
    'assets/app/**/*',
    'assets/images/**/*',
    'assets/js/**/*',
    'assets/less/**/*'
  ];

  browserSync.init(files,{
     reloadDelay: 500,
     open:false,     //不自动打开
     port:"8081",    //browsersync端口
     proxy: "localhost:8080"     //使用本机地址
  })
 });
}