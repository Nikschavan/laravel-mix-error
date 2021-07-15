const mix = require( 'laravel-mix' );

mix
	.sass( 'src/style.scss', 'dist' )
	.options({
		postCss: [require( 'postcss-flexibility' )],
	  });
  
