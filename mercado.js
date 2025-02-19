var items = [];


document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');
   
    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    /*    <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>`+val.valor+`</span></h3>
        </div>
    */

    let listaProdutos = document.querySelector('.lista-produtos')
    listaProdutos.innerHTML = "";
        items.map(function(val){
            listaProdutos.innerHTML+= `

            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
            </div>

            `;
        });

    
    nomeProduto.value = "";
    precoProduto.value = "";
});