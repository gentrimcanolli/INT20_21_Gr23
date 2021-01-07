const init = function(){
	document.getElementById('button-cancel').addEventListener('click', reset);
}
const reset = function(){
	ec.preventDefault();
	document.getElementById('form-user').reset();
}
document.addEventListener('DOMContentLoaded', init);


// --------------------

