window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.BlocoModal = window.blockly.js.blockly.BlocoModal
		|| {};

var item;

/**
 * BlocoModal
 */
window.blockly.js.blockly.BlocoModal.Executar2 = function() {
	this.cronapi.screen.showModal("modal19687");
}

/**
 * BlocoModal
 */
window.blockly.js.blockly.BlocoModal.Executar3 = function() {
	this.cronapi.screen.hideModal("modal19687");
	this.cronapi.screen.hideModal("modal64063");
}

/**
 * BlocoModal
 */
window.blockly.js.blockly.BlocoModal.Executar = function() {
	this.cronapi.screen.showModal("modal64063");
}
