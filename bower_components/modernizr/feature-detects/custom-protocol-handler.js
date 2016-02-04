/*
	Custom protocol handler support
	http://developers.whatwg.org/timers/#custom-handlers
	
	Added by @benschwarz
*/

Modernizr.addTest('customprotocolhandler', function () {
    return !!navigator.registerProtocolHandler;
});
