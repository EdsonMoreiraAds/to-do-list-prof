function novaTarefa() {
    overlay.classList.add("active");
    modal.classList.add("active");
    criar.classList.add("active");
}

function confirmarExclusao(id) {
    overlay.classList.add("active");
    modal.classList.add("active");
    confirmacao.classList.add("active");
    deletedID = id;
}

function fecharModal() {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    criar.classList.remove("active");
    confirmacao.classList.remove("active");
}

document.addEventListener('keyup', (evento) => {
    if (evento.key == "Escape") {
        fecharModal();
    }
});


let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let deletedID = 0;

function listarTarefas() {
        lista.innerHTML = "";

    tarefas.map((tarefa) => {
        lista.innerHTML += `
            <li>
                <div>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                </div>
                <div>
                    <box-icon name='trash' onclick="confirmarExclusao(${tarefa.id})"></box-icon>
                </div>
            </li>        
        `;
    })
}
listarTarefas();

function adicionarTarefa(){
    event.preventDefault();
    let tarefa = { 
        id: tarefas.length + 1,
        titulo: titulo.value,
        descricao: descricao.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    fecharModal();
    listarTarefas();
}
function deletarTarefa(){
    let tarefasFiltradas = [];
    tarefasFiltradas = tarefas.filter(tarefa =>{
        if(tarefa.id != deletedID){
            return tarefa;
        }
   
    })
    tarefas = tarefasFiltradas;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    fecharModal();
    listarTarefas();
}


   


