const listaProdutos = document.getElementById("listaProdutos");
const btnForEacha = document.getElementById("BTNforEach")
const BTNMap = document.getElementById("BTNMap")
const btnSomarTudo = document.getElementById("btnSomarTudo")
const btnFiltrar = document.getElementById("btnFiltrar")

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}
function ProdutosList(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p> ${formatCurrency(product.price)}</p>
        </li>
       `
    });
    listaProdutos.innerHTML = myLi
}

function produtosComDesconto() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price - (product.price / 10),

    }))
    ProdutosList(newPrices)
}

function somarTudo() {
    const total = menuOptions.reduce((acumulador, valorAtual) => acumulador + valorAtual.price, 0)

    listaProdutos.innerHTML = `
    <li>
    O Valor Total dos itens  é  ${formatCurrency(total)}
    </li>
    `;

    console.log(total);
}

function vegano() {

    const filtrar = menuOptions.filter(produtosVeganos => produtosVeganos.vegan === true)
    ProdutosList(filtrar)
}

btnForEacha.addEventListener('click', () => ProdutosList(menuOptions))
BTNMap.addEventListener('click', produtosComDesconto);
btnSomarTudo.addEventListener('click', somarTudo);
btnFiltrar.addEventListener('click', vegano);