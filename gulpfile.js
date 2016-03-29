var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
// SERVER
gulp.task('clean', function(){
    return del('dist')
});
gulp.task('buildServer', function () {
	var tsProject = ts.createProject(path.resolve('./src/server/tsconfig.json'));
	return tsProject.src(path.resolve('./src/server/**/*.ts'))
		.pipe(ts(tsProject))
		.js
		.pipe(gulp.dest(path.resolve('dist')))
});
// CLIENT
/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
    'es6-shim/es6-shim.min.js',
     'es6-shim/es6-shim.map',
    'systemjs/dist/system-polyfills.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js',
    'angular2-jwt/angular2-jwt.js',
     'angular2-jwt/angular2-jwt.js.map',
    'angular2/bundles/angular2.min.js',
            'ng2-material/all.js',
             'ng2-material/all.js.map'
] 

gulp.task('build:styles', function() {
    var copyNgStyles= gulp.src('node_modules/ng2-material/dist/*.css')
     .pipe(minifyCSS())
        .pipe(gulp.dest('dist/styles'));
    var copyFontAwesome= gulp.src('src/client/styles/font-awesome/**')     
     .pipe(gulp.dest('dist/styles/font-awesome'));
//    var copyMaterialize= gulp.src('src/client/styles/materialize/**')     
//     .pipe(gulp.dest('dist/styles/materialize'));
    var copyStyles= gulp.src('src/client/styles/*.css')
     .pipe(minifyCSS())
            .pipe(gulp.dest('dist/styles'))
        return[copyStyles, copyFontAwesome, copyNgStyles];
        //.pipe(less())
       // .on('error', console.log)
        
//        .pipe(refresh(lrserver));
});

gulp.task("buld:resources", function() {
      var copyMaterialComponentLib = gulp.src(["node_modules/ng2-material/components/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/libs/ng2-material/components"));
     var copyMaterialCoreLib = gulp.src(["node_modules/ng2-material/core/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/libs/ng2-material/core"));
    var copyApp = gulp.src(["src/client/app/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/app"))
 return[copyMaterialComponentLib, copyMaterialCoreLib, copyApp];
});

gulp.task('buld:assets', function() {
    return gulp.src("src/client/assets/**")
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/assets'))
        //.pipe(refresh(lrserver));
});
gulp.task('buld:data', function() {
     var copyPacientData = gulp.src("src/client/data/pacients.json")
        .pipe(gulp.dest('dist/api/pacient'));
    var copyTreatmentData = gulp.src("src/client/data/treatments.json")
        .pipe(gulp.dest('dist/api/treatment'));
  return [copyPacientData, copyTreatmentData];
});
gulp.task('build:index', function(){
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
    //Let's copy our index into dist   
    var copyJson = gulp.src('src/client/*.json')
        .pipe(gulp.dest('dist'))
 var copyIndex = gulp.src('src/client/index.html')
        .pipe(gulp.dest('dist'))
    return [copyJsNPMDependencies, copyIndex, copyJson];
});

gulp.task('build:app', function(){
    var tsProject = ts.createProject('src/client/tsconfig.json');
    var tsResult = tsProject.src(path.resolve('./src/client/**/*.ts'))
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist/app'))
});


gulp.task('build', function(callback){
     runSequence('clean', 'buildServer', 'build:index', "buld:resources", 'buld:assets', 'build:styles', 'buld:data', 'build:app', callback);
    // runSequence('clean', 'build:app',callback);
});

gulp.task('default', ['build']);