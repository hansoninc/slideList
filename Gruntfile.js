module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON('package.json'),

		// Banner definitions
		meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.homepage %>\n' +
				' *\n' +
				' *  Made by <%= pkg.author.name %>\n' +
				' *  Under <%= pkg.license %> License\n' +
				' */\n'
		},


		less: {
			options: {
				compress: true
			},
			development: {
				files: {
					'dist/slidelist.css': 'src/slideList.less'
				}
			}
		},

		// Concat definitions
		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: ['src/jquery.slideList.js'],
				dest: 'dist/jquery.slideList.js'
			}
		},

		// Lint definitions
		jshint: {
			files: ['src/jquery.slideList.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ['dist/jquery.slideList.js'],
				dest: 'dist/jquery.slideList.min.js'
			},
			options: {
				banner: '<%= meta.banner %>'
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['less', 'concat', 'uglify']);
	grunt.registerTask('default', ['jshint', 'build']);

};
