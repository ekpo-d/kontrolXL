if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function($, window, document, undefined){

  var Kontrol = {

    init : function(elem, content){
			var self = this,
					$content = $(content),
					$elem = $(elem)

			self.elem = elem
			self.$elem = $elem
			self.$content = $content

			$elem.on('click', function(e){
				self.linkedFile = self.$elem.attr('href')
				e.preventDefault()
				self.display()
			})

    },

		display : function(){
			if (this.linkedFile === '#') return

			this.$content.slideToggle()
			this.fetch()
			this.$content.slideToggle()
			// window.location = '/' + this.linkedFile
		},

		fetch : function(){
			$('html').load( this.linkedFile )
		}

  }

  $.fn.createKontrol =  function(option, data){
		return this.each(function(){
			var kontrol = Object.create( Kontrol),
					elem = this
			// console.log(elem)
	    kontrol.init(this, $('html'))
		})

  }

	// $('nav a').createKontrol()

	// one time event


	function checkSize(){
	if ($(window).width() >= 1024){
		var contentHeight = ($('.panel').innerHeight() - 55 )
	 	$('.thumbnail').css('height', '' + contentHeight / 2 + 'px')
		}
	 }

	 $(window).resize(checkSize)

})( jQuery, window, document)
