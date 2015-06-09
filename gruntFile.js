module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-html2js');  

  // Default task.  
  grunt.registerTask('build', ['clean', 'concat', 'less:build', 'copy:assets']);
  
  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });
  
  // Project configuration.
  grunt.initConfig({
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    banner:
    '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
    ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
    src: {
      html: ['src/index.html'],      
      less: ['src/less/stylesheet.less']      
    },
    clean: ['<%= distdir %>/*'],
    copy: {
      assets: {
        files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: 'src/assets/' }]
      }
    },        
    concat:{      
      index: {
          src: ['src/index.html'],
        dest: '<%= distdir %>/index.html',
        options: {
          process: true
        }
      },      
      bootstrap: {
          src: ['vendor/bootstrap/transition.js',
                'vendor/bootstrap/alert.js',
                'vendor/bootstrap/button.js',
                'vendor/bootstrap/carousel.js',
                'vendor/bootstrap/collapse.js',
                'vendor/bootstrap/dropdown.js',
                'vendor/bootstrap/modal.js',
                'vendor/bootstrap/tooltip.js',
                'vendor/bootstrap/popover.js',
                'vendor/bootstrap/scrollspy.js',
                'vendor/bootstrap/tab.js',
                'vendor/bootstrap/affix.js'],
        dest: '<%= distdir %>/bootstrap.js'
      },
      ie8bootstrap: {
          src: ['vendor/bootstrap/ie8-responsive-file-warning.js'],
          dest: '<%= distdir %>/ie8-responsive-file-warning.js'
      },
      jquery: {
        src:['vendor/jquery/*.js'],
        dest: '<%= distdir %>/jquery.js'
      }      
    },    
    less: {
        build: {
            files: {
                "<%= distdir %>/<%= pkg.name %>.css": "<%= src.less %>"
            }
        }
    }
  });

};
