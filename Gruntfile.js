module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Sass to CSS
    sass: {
      app: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      options: {
        sourceMap: true,
        outputStyle: 'nested',
        imagePath: "../",
      }
    },

    watch: {
      sass: {
        files: ['scss/{,*/}*.{scss,sass}'],
        tasks: ['sass']
      },
      options: {
        livereload: true,
        spawn: false
      }
    },
  });

  // Loads Grunt Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
};
