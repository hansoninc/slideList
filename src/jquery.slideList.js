;(function ( $, window, document, undefined ) {

	'use strict';

	var pluginName = 'slideList',
	defaults = {
		showButton: '#filter',
		forwardButtonClass: '.list-group-item',
		backButtonClass: '.go-back',
		slideClass: '.slide'
	};

	function Plugin ( element, options ) {
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {

		currentSlide: 0,
		totalSlides: null,

		/**
		 * Initiates plugin
		 */
		init: function () {
			this.totalSlides = $(this.element).find(this.settings.slideClass).length;
			this.setSliderHeight();

			// get reference to plugin
			var module = this;

			$(this.element).find(this.settings.forwardButtonClass).on('click', function () {
			    if ( $(this).is(module.settings.backButtonClass) ) {
			        module.slideProgression(-1);
			    } else if (module.currentSlide !== module.totalSlides) {
			        module.slideProgression(1);
			    }
			});
			$(this.settings.showButton).not(module.settings.backButtonClass).on('click', function () {
			    $(module.element).toggleClass('mobile-showing-filters');
			    module.setSliderHeight();
			    module.goToSlide(0);
			});
		},

		/**
		 * Go to the specified slide (int)
		 * @param  {integer}
		 */
		goToSlide: function(slideNum) {
			// stay within bounds
			if (slideNum < this.totalSlides) {
			    $(this.element).find(this.settings.slideClass).each(function () {
			        var slide = $(this);
			        var index = slide.index();
			        var leftPos = 0;
			        slide.removeClass('current');
			        if (index < slideNum) {
			            leftPos = '-110%';
			        } else if (index > slideNum) {
			            leftPos = '110%';
			        } else {
			            slide.addClass('current');
			        }
			        slide.css({
			            left: leftPos
			        });
			    });
			    this.currentSlide = slideNum;
			}
		},

		/**
		 * Increments or decrements the current slide by the specified amount
		 * @param  {integer}
		 */
		slideProgression: function (progress) {
			this.goToSlide(this.currentSlide + progress);
			this.setSliderHeight();
		},

		/**
		 * Sets the height of the slider based on the current slide
		 * NOTE: RUN setSliderHeight(); WHEN LEAVING MOBILE BREAKPOINT
		 */
		setSliderHeight: function() {
			$(this.element).css({
				minHeight: $(this.settings.slideClass+'.current').height()
			});
		}
		
	});

	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, 'plugin_' + pluginName ) ) {
				$.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
			}
		});
	};

})( jQuery, window, document );
