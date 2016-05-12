/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function(global) {
    // wildcard paths
    var paths = {
        'n:*': 'libs/*'
    };

    // map tells the System loader where to look for things
    var map = {
        'app': 'dist',
        'test': 'test',
        'rxjs': 'n:rxjs',
        'zone.js': 'n:zone.js',
        '@angular': 'n:@angular',
         'reflect-metadata':             'n:reflect-metadata',
    'angular2-jwt':               'n:angular2-jwt',
    'ng2-material':               'n:ng2-material',
    'moment':                     'n:moment/moment.js'   
       // 'lodash': 'n:lodash'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        'test': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-jwt': { 
            defaultExtension: 'js' 
        },
        'ng2-material': { 
            defaultExtension: 'js' 
        },
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages,
        paths: paths
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
