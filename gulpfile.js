var gulp = require('gulp'),
	browserSync  = require('browser-sync'),
	imagemin = require('gulp-imagemin'),
	svgmin = require('gulp-svgmin'),
	svgstore = require('gulp-svgstore'),
	path = require('path'),
	htmlmin = require('gulp-html-minifier'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-clean-css'),
	uglify  = require('gulp-uglify'),
	gulpif = require('gulp-if'),
	jshint = require("gulp-jshint"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	mainBowerFiles = require('main-bower-files'),
	rename = require("gulp-rename"),
	less = require('gulp-less'),
	uncss = require('gulp-uncss'),
	fileinclude = require('gulp-file-include'),
	csscomb = require('gulp-csscomb'),
	sourcemaps = require('gulp-sourcemaps'),
	spritesmith = require('gulp.spritesmith'),
	cheerio = require('gulp-cheerio'),
  modernizr = require('gulp-modernizr'),
	argv = require('yargs').argv;

  // lessImport = require('gulp-less-import'),
	
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix();
	
var config = {
  server: {
    baseDir: 'prod'
  },
  tunnel: false,
  host: 'localhost',
  port: 3000,
  logPrefix: "Webxieter prod.",
  browser: "chrome"
};

gulp.task ('browserSync', function(){
  browserSync(config)
});

gulp.task('images', function() {
	return gulp.src('dev/images/*.jpg')
	.pipe(imagemin())
	.pipe(gulp.dest('prod/images'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('sprite', function() {
	var spriteData =
		gulp.src('dev/images/sprite/*')
			.pipe(spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.css'
			}));
	spriteData.img.pipe(gulp.dest('prod/images/')); 
	spriteData.css.pipe(gulp.dest('dev/style/'));
});

gulp.task('SVG', function() {
	return gulp.src('dev/images/SVG/*.svg')
  .pipe (cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('path').attr('style', 'fill:currentColor').html();
        $('svg').attr('style',  'display:none');
      },
      parserOptions: { xmlMode: true }
    }))
	.pipe(svgmin(
		{
			js2svg: {
        pretty: true
      }
		},
    {plugins: [{convertShapeToPath: false, removeViewBox: true}]},
		function getOptions (file) {
			var prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [
					{cleanupIDs: {
						prefix: prefix + '-',
						minify: true
						}
					}
				]
			}
		}
	))
	.pipe(svgstore({inlineSvg: true}))
	.pipe(gulp.dest('prod/images'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('fonts', function() {
	return gulp.src('dev/fonts/**/*')
	.pipe(gulp.dest('prod/fonts'))
	.pipe(browserSync.reload({stream: true}))	
});

gulp.task('HTML', function() {
  return gulp.src('dev/view/index.html')
	.pipe(fileinclude())
	.on('error', console.log)
	.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
	.pipe(gulp.dest('prod'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('fileinclude', function() {
  return gulp.src('dev/view/blocks/*.html')
	.pipe(fileinclude())	
});

gulp.task('styles', function () {
  return gulp.src('dev/style/main.less')
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler: notify.onError(function(err){
        return {
          title: 'Styles',
          message: err.message
        };
      })
    }))
    //	.pipe(csscomb())
    // .pipe(lessImport('main.less'))
    .pipe(less({
      plugins: [autoprefix],
      paths: ['dev/style/**'],
      filename: 'main.less'
    }))
    .pipe(gulpif(argv.production, minifyCSS()))
    .pipe(rename({suffix: '.min'}))
    // .pipe(uncss({html: ['dev/view/*.html']})) doesn't work correctly
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('prod/css'))
    .pipe(browserSync.reload({stream: true}))
});


gulp.task('bowerjs', function(){
	return gulp.src(mainBowerFiles({base: 'bower_components', filter: '**/*.js'}))
		 .pipe(sourcemaps.init())
		 .pipe(concat('vendor.js'))
		 .pipe(gulpif(argv.production, uglify()))
		 .pipe(rename({suffix: '.min'}))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('prod/scripts'))
		 .pipe(browserSync.reload({stream: true}))
});

gulp.task('bowercss', function(){
	return gulp.src(mainBowerFiles({base: 'bower_components', filter: '**/*.css'}))
		 .pipe(sourcemaps.init())
//		 .pipe(uncss({html: ['dev/view/*.html']}))
		 .pipe(concat('vendor.css'))
		 .pipe(gulpif(argv.production, minifyCSS()))
		 .pipe(rename({suffix: '.min'}))
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('prod/css'))
		 .pipe(browserSync.reload({stream: true}))
});


gulp.task('scripts', function () {
	return gulp.src(['dev/scripts/*.js', '!dev/scripts/modernizr-custom.js'])
     .pipe(sourcemaps.init())
		 .pipe(gulpif(argv.production, uglify()))
		 .pipe(rename({suffix: '.min'}))		 
		 .pipe(sourcemaps.write('.'))
		 .pipe(gulp.dest('prod/scripts'))
		 .pipe(browserSync.reload({stream: true}))
});
	

gulp.task('jshint', function() {
    return gulp.src('dev/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default')); //стилизуем вывод ошибок в консоль
});

gulp.task('modernizr', function() {
  var settings = require('./node_modules/modernizr/lib/config-all.json');
   gulp.src('./js/*.js')
  .pipe(modernizr('modernizr.js', settings))
   .pipe(rename({suffix: '.min'}))
   .pipe(gulp.dest("prod/scripts/"))
});
	
gulp.task ('watch', function(){
	gulp.watch('dev/view/**/*.html', ['HTML']);
	gulp.watch('dev/images/*', ['images']);
	gulp.watch('dev/fonts/**/*', ['fonts']);	
	gulp.watch('dev/style/**/*.less', ['styles']);
	gulp.watch('dev/scripts/*.js', ['scripts']);
	gulp.watch('bower_components/**/*', ['bowerjs'], ['bowercss']);
});

gulp.task ('default', ['modernizr', 'scripts', 'sprite', 'fonts', 'bowerjs', 'bowercss', 'styles', 'HTML', 'browserSync', 'jshint', 'watch']);

//  'gulp-inject' ,'images'
// http://geekswithblogs.net/shaunxu/archive/2015/02/17/10-awesome-gulp-plugins-working-with-angularjs-and-bower.aspx