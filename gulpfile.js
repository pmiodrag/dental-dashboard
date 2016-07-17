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
    return del(['!dist', '!dist/uploads', 'dist/app',])
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
    'zone.js/dist/zone.js',
    'reflect-metadata/Reflect.js',
     'reflect-metadata/Reflect.js.map',
   // 'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    //'rxjs/bundles/Rx.js',
//    '@angular/common/index.js',
//    '@angular/compiler/index.js',
//    '@angular/core/index.js',
//    '@angular/http/index.js',
//    '@angular/platform-browser/index.js',
//    '@angular/platform-browser-dynamic/index.js',
//    '@angular/platform-browser-dynamic/index.js.map',
//    '@angular/router/index.js',
//    '@angular/router-deprecated/index.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
       '@angular2-material/**',
//    'angular2/bundles/angular2.dev.js',
//    'angular2/bundles/router.dev.js',
//    'angular2/bundles/http.dev.js',
    'angular2-jwt/angular2-jwt.js',
     'angular2-jwt/angular2-jwt.js.map',
    //'angular2/bundles/angular2.min.js', 
    'symbol-observable/index.js',
            'ng2-material/index.js',
             'ng2-material/index.js.map',
              'moment/moment.js',
              'immutable/dist/immutable.js',
              'ng2-bootstrap/ng2-bootstrap.js',
               'ng2-file-upload/ng2-file-upload.js'

] 



gulp.task('build:styles', function() {
    var copyNgStyles= gulp.src('node_modules/ng2-material/ng2-material.css')
     .pipe(minifyCSS())
      .pipe(gulp.dest('dist/styles/ng2-material'));
     var copyNgCoreStyles= gulp.src('node_modules/ng2-material/source/core/style/*.scss')     
        .pipe(gulp.dest('dist/styles/ng2-material/source/core/style'));
    var copyNgFont= gulp.src('node_modules/ng2-material/font/**')     
        .pipe(gulp.dest('dist/styles/ng2-material/font'));
    var copyFontAwesome= gulp.src('src/client/styles/font-awesome/**')     
     .pipe(gulp.dest('dist/styles/font-awesome'));
//    var copyMaterialize= gulp.src('src/client/styles/materialize/**')     
//     .pipe(gulp.dest('dist/styles/materialize'));
 var copySCSS= gulp.src('src/client/styles/*.scss')
  .pipe(gulp.dest('dist/styles'))
    var copyStyles= gulp.src('src/client/styles/*.css')
     .pipe(minifyCSS())
            .pipe(gulp.dest('dist/styles'))
        return[copyStyles,copySCSS, copyNgCoreStyles, copyFontAwesome, copyNgStyles];
        //.pipe(less())
       // .on('error', console.log)
        
//        .pipe(refresh(lrserver));
});


gulp.task("buld:resources", function() {
    var copyNg2BootstrapLib = gulp.src(["node_modules/ng2-bootstrap/bundles/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/libs/ng2-bootstrap/bundles"));
    var copyNg2FileUploadLib = gulp.src(["node_modules/ng2-file-upload/bundles/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/libs/ng2-file-upload/bundles"));
    var copyMaterialComponentLib = gulp.src(["node_modules/ng2-material/components/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/libs/ng2-material/components"));
    var copyMaterialCoreLib = gulp.src(["node_modules/ng2-material/core/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/libs/ng2-material/core"));
    var copyApp = gulp.src(["src/client/app/**", "!**/*.ts"])
        .pipe(gulp.dest("dist/app"))
 return[copyMaterialComponentLib, copyNg2BootstrapLib, copyNg2FileUploadLib, copyMaterialCoreLib, copyApp];
});

gulp.task('buld:assets', function() {
    return gulp.src("src/client/assets/**")
        //.pipe(imagemin({optimizationLevel: 5}))
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