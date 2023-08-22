const button = document.querySelector(".botao-adicionar")
const input = document.querySelector(".input-tarefa")
const listaCompleta = document.querySelector(".lista-tarefas")

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })
    
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLista = ''




    minhaListaDeItens.forEach((item, index) => {
        novaLista = novaLista + `
        <li class="tarefas ${item.concluida && "done"}" >
            <img src="./img/checked.png" alt="Imagem de checagem" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="Imagem de uma lixeira" onclick='deletarItem(${index})'>
    </li>
    `
    })

    listaCompleta.innerHTML = novaLista

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))


}

function concluirTarefa(index) {

    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    console.log(index);
    mostrarTarefas()
}


function deletarItem(index) {

    minhaListaDeItens.splice(index, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const trefasDoLocalStorage = localStorage.getItem('lista')

    if (trefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(trefasDoLocalStorage)
    }
    console.log(trefasDoLocalStorage);

    mostrarTarefas()
}

function teclaEnter() {

    document.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
        
            var btn = document.querySelector(".botao-adicionar");
          
          btn.click();
        
        }
      });
    
}

teclaEnter()

recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)
