var less = require('gulp-less');
var path = require('path');
var gulp = require("gulp");
var nodemon = require('gulp-nodemon');
var inflateNunj = require('inflate-nunj');
var rename = require("gulp-rename");

gulp.task('less', function() {

	return gulp.src('./public/css/import.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public/css'));

});

gulp.task('inflate', function(){
	var mainFile = path.join(__dirname, './public/index_x.html');
	var tempDir = path.join(__dirname, "./posts");
	var writeFile = path.join(__dirname, "./public/index.html");
	inflateNunj(mainFile, tempDir, writeFile, function(newContent){

	})	
})

gulp.task('develop', function() {
    nodemon({
            script: 'app.js',
            ext: 'html js less',
            ignore:["index.html"],
            tasks: ['less', 'inflate']
        })
        .on('restart', function() {
            console.log('restarted!')
        })
})