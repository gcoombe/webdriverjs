module.exports = function asyncScript (ms, callback) {

	this.requestHandler.create(
		"/session/:sessionId/timeouts/async_script",
		{ ms: ms },
		callback
	);
};

