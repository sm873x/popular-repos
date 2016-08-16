module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        clean: ['build/'], //delete build directory

        jshint: { //task name
            options: { //these options apply to ALL targets
                jshintrc: '.jshintrc',
                ignores: [
                    'src/js/vendor/**'
                ]
            },
            all: { //target name  // **/* = globbing pattern
                files: { //target-specific option
                    // the files to run this on
                    src: [ 'src/js/**/*.js', 'Gruntfile.js' ]
                }
            }
            // could have multiple targets in here...
            // each target can have its own multiple options for this task
        },

        concat: {
            js: {
                options: {
                    sourceMap: true
                },
                src: ['src/js/app/pop.module.js', 'src/js/*.js'],
                dest: 'build/js/main.js'
            }
        },

        sass: {
            all: {
                files: {
                    'build/css/styles.css': 'src/sass/main.scss'
                }
            }
        },

        copy: {
            html: { //arbitrary target name, but nice to name what you're targeting if multiple
                files: [
                    { expand: true, cwd: 'src/', src: ['*.html'], dest: 'build/' }
                ]
            },
            vendorjs: {
                files: [
                    { expand: true, cwd: 'src/js', src: ['vendor/jquery/dist/jquery.min.js'], dest: 'build/js/'}
                ]
            }

        },

        watch: {
            sass: {
                files: [ 'src/sass/**/*.scss' ],
                tasks: [ 'sass' ],
            },
            js: {
                files: [ 'src/js/**/*.js' ],
                tasks: [ 'jshint', 'concat' ]
            },
            html: {
                files: [ 'src/**/*.html' ],
                tasks: [ 'copy:html' ]
            }
        }
    });

    //loading plugins

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    //setting up task aliases
    grunt.registerTask('build', [ 'clean', 'jshint', 'concat', 'sass', 'copy']);
    grunt.registerTask('default', [ 'build' ]);
};
