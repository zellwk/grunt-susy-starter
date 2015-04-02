
// Gruntfile: Grunt Susy Starter w/ BrowserSync 

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Sass to CSS
    sass: {
      app: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['**/*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      options: {
        sourceMap: true,
        outputStyle: 'expanded',
        imagePath: "../",
      }
    },

    // BrowserSync
    browserSync: {
            
      dev: {
          bsFiles: {
              src : [
                  'css/*.css',
                  '*.html'
              ]
          },
          options: {
              watchTask: true,
              server: './'
          }
      }
    },

    // Watch
    watch: {
      sass: {
        files: ['scss/{,*/}*.{scss,sass}'],
        tasks: ['sass']
      },
      options: {
        livereload: false,
        spawn: false
      }
    },

  });

  // Loads Grunt Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};
