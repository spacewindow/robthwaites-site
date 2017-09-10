module.exports = function (grunt) {
    grunt.initConfig({

        browserSync: {
          bsFiles: {
            src: ['css/style.css', '*.php']
          },
          options: {
              watchTask: true, // < VERY important
              proxy:"robthwaites.dev"
          }
        },

        // watch changes to less files
        watch: {
            styles: {
              files: ["less/**/*"],
              tasks: ["less"]
            },
            prefixes: {
                files: ["less/**/*"],
                tasks: ["autoprefixer"]
            }
        },

        // compile set less files
        less: {
            development: {
                options: {
                    paths: ["less"],
                },
                files: {
                    "css/style.css": ["less/*.less", "!less/_*.less"]
                }
            }
        },
        autoprefixer: {
            single_file: {
              options: {
                // Target-specific options go here.
              },
              src: 'css/style.css'
            },
        },

    });

    // Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks("grunt-autoprefixer");

    // the default task will show the usage
    grunt.registerTask("default", "Prints usage", function () {
        grunt.log.writeln("");
        grunt.log.writeln("Using Base");
        grunt.log.writeln("------------------------");
        grunt.log.writeln("");
        grunt.log.writeln("* run 'grunt --help' to get an overview of all commands.");
        grunt.log.writeln("* run 'grunt dev' to start watching and compiling LESS changes.");
    });

    grunt.registerTask("dev", ["less:development", "browserSync", "watch"]);
};
