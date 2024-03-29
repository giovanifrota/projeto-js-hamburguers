const list = document.querySelector('ul')
const buttonMostrarTudo = document.querySelector('.mostrar-tudo')
const buttonMaperTudo = document.querySelector('.mapear-tudo')
const buttonSomarTudo = document.querySelector('.somar-tudo')
const buttonFilter = document.querySelector('.filtrar')

function valorDaMoeda (value){
    const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return newValue
}

function mostrarTudo(productsArray){
    myLi = ''
    productsArray.forEach(products => {

        myLi += `
        <li>
            <img src=${products.src}>
            <p>${products.name}</p>
            <p class="item-price"> ${ valorDaMoeda (products.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

function maperTudo (){
    const newList = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9,
    }))
    mostrarTudo(newList)
}

function somarTudo(){
    const valorTotal = menuOptions.reduce((acc , cur) => acc + cur.price , 0)
    list.innerHTML = 
    `
    <li>
        <p>O valor total dos produtos é de ${valorDaMoeda(valorTotal)}</p>
    </li>
    `
}

function filtrarTudo (){
    const lanchesVeganos = menuOptions.filter((products) => products.vegan )

    mostrarTudo(lanchesVeganos)
}

buttonMostrarTudo.addEventListener('click', () => mostrarTudo (menuOptions))
buttonMaperTudo.addEventListener('click',maperTudo )
buttonSomarTudo.addEventListener('click',somarTudo)
buttonFilter.addEventListener('click', filtrarTudo)