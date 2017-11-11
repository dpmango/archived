module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: [
                    'js/*.js'
                ],
                dest: 'dist/build.js',
            },
            css: {
              src: [
                "css/*.css"
              ],
              dest: "dist/build.css"
            }
        },
        uglify: {
            build: {
                src: 'dist/build.js',
                dest: 'dist/build.min.js'
            }

        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1,
            processImport: false
          },
          target: {
            files: {
              'dist/build.min.css': 'dist/build.css'
            }
          }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images-min/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },
        svg_sprite: {
            options: {
                // Task-specific options go here. 
            },
            your_target: {
                expand      : true,
                cwd         : 'img/',
                src         : ['**/*.svg'],
                dest        : 'css/',
            },
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: [
                    'sass/**'
                ],
                tasks: ['sass'],
                //tasks: ['sass', 'concat:css'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-svg-sprite');

    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);

};