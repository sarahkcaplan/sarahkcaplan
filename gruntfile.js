// Load Grunt plug-ins
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-responsive-images');

//Configure Grunt tasks
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'responsive',
            width: '100%',
            suffix: '_1x',
            quality: 33
          },{
            name: 'responsive',
            width: '100%',
            suffix: '_2x',
            quality: 66
      	 }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  });

//Reguister Grunt tasks
  grunt.registerTask('default', ['responsive_images']);
};