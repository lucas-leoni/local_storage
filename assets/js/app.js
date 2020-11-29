let buttonAdd = document.getElementById('add');
let buttonModificar = document.getElementById('modificar');
let buttonRemover = document.getElementById('remover');
let buttonRemoverTudo = document.getElementById('removerTudo');

buttonAdd.addEventListener('click', function(e) {
    e.preventDefault()
    var item = document.forms.criarLista.item.value;
	var quantidade = document.forms.criarLista.quantidade.value;
	localStorage.setItem(item, quantidade);
	mostrarTudo();
});

buttonModificar.addEventListener('click', function(e) {
    e.preventDefault()
    var item = document.forms.criarLista.item.value;
	document.forms.criarLista.quantidade.value = localStorage.getItem(item);
	mostrarTudo();
});

buttonRemover.addEventListener('click', function(e) {
    e.preventDefault()
    var item = document.forms.criarLista.item.value;
	document.forms.criarLista.quantidade.value = localStorage.removeItem(item);
	mostrarTudo();
});

buttonRemoverTudo.addEventListener('click', function(e) {
    e.preventDefault()
    localStorage.clear();
	mostrarTudo();
});

function mostrarTudo() {
    var chave = '';
    var lista = '';
    var i = 0;
	for (i = 0; i <= localStorage.length - 1; i++) {
		chave = localStorage.key(i);
        lista += "<li>" + chave + " " + localStorage.getItem(chave) + "</li>";
	}
	document.getElementById('lista').innerHTML = lista;
}