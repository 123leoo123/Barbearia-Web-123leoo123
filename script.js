const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for(let i = 0; i <barbearia.cortes.length; i++){
        if(id == barbearia.cortes[i].id){
            return barbearia.cortes[i];
        } 
    }
    return "corte não encontrado"
}

function buscaBarbaPorId(id) {
    for(let i = 0; i <barbearia.barbas.length; i++){
        if(id == barbearia.barbas[i].id){
            return barbearia.barbas[i];
        } 
    }
    return "Barba não encontrada"
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto == true){
        return "Estamos abertos";
    }
    return "Estamos fechados"
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let pedido = 
    {nome: nomeCliente, 
    pedidoCorte: buscaCortePorId,
    pedidoCortePreco: 0,
    pedidoBarba: buscaBarbaPorId,
    pedidoBarbaPreco: 0,
    }
    

    for(let i = 0; i < barbearia.cortes.length; i++){
        if(corteId == barbearia.cortes[i].id){
            pedido.pedidoCorte = barbearia.cortes[i].tipo;
            pedido.pedidoCortePreco = barbearia.cortes[i].valor;
        }
    }
    for(let j = 0; j < barbearia.cortes.length; j++){
        if(barbaId == barbearia.barbas[j].id){
            pedido.pedidoBarba = barbearia.barbas[j].tipo;
            pedido.pedidoBarbaPreco = barbearia.barbas[j].valor;
        }
    }
    return pedido;
 }


 function atualizarServico(lista, id, tipo, valor) 
    // let novoId = id;
    
//     for (let i = 0; i < lista.length; i++) {
//         if(lista[i].id == id){
//         lista[i].id.pull(novoId); 
//         if(lista[i].id == id){
//         lista[i].tipo.pull(tipo);
//         if(lista[i].id == id){
//         lista[i].valor.pull(valor);
//         break;
//         }
//     } 
// }
//     } 
// return lista;
// }

function calculaTotal(pedido) {
    let precoCorte = pedido.pedidoCortePreco;
    let precoBarba = pedido.pedidoBarbaPreco;
    console.log(pedido)
    return  precoBarba + precoCorte;
}
  
  
