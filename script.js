class Product{
    constructor(image, name, category, price, quantity){
        image = this.image
        name = this.name
        category = this.category
        price = this.price
        quantity = this.quantity

    }
}
class Cart{
    constructor(){
        this.cart = []
        this.total = 0
    }
    addToCart(){
        produitexist = this.cart.find((element)=>element.name == item.name)
        if(produitexist){
            produitexist.quantity += 1
           
        }else{
            this.cart.push({name:item.name, quantity:item.quantity, price:item.price})
                
        }
        this.total += item.price
        prixtotal.innerHTML = this.total
        panier.innerHTML = ''
        this.cart.forEach((cartproduct, index) =>{
            panier.innerHTML += `
                        <div class='product-cart'>
                            <div class="d-flex d-flex justify-content-between">
                                <h6 class = 'nomproduit'>${cartproduct.name}</h6>
                                <i class="btn-delete fas fa-trash-alt text-danger" id = ${index}></i>
                            </div>
                            <div class="d-flex d-flex justify-content-between">
                                <p class="q text-primary fw-semibold" >X${cartproduct.quantity}</p><hr>
                            </div>
                        </div>
                    `
                    suppression()
                    nbrproduit()
                    
    
        })
    }
    nbrproduit(){
        nbr = 0;
        cart.forEach(cartproduct=>{
            nbr += cartproduct.quantity
        })
        document.getElementById('articles').innerHTML = nbr;
    
    }
    suppression(){
        delete_btn = document.querySelectorAll('.fa-trash-alt');
        delete_btn.forEach(btn_delete=>{
            btn_delete.addEventListener('click', function(event){
                id = event.target.id 
                removeItem = this.cart.splice(id, 1)[0]
                addToCart()
                nbrproduit()
                total -= removeItem.price * removeItem.quantity
                prixtotal.innerHTML = total
            })
        })
    }
   
    
}
class UIhandler{
    constructor(container,cartContainer, totalprice, totalItems ){
        container = this.container
        cartContainer = this.cartContainer
        totalprice = this.totalprice
        totalItems = this.totalItems
    }
    ajouterproduit(){
        data.forEach((item) => {

            const card = document.createElement('div')
            card.classList.add('card', 'p-0', 'col-3', 'm-2')
    
            const img = document.createElement('img')
            img.classList.add('card-img-top')
            img.src = item.image.desktop
    
            const card_body = document.createElement('div')
            card_body.classList.add('card-body','p-2')
    
            const title = document.createElement('h5')
            title.innerText = item.name
    
            const category = document.createElement('p')
            category.innerText = item.price
    
            const price = document.createElement('p')
            price.innerText = item.category
    
            const btn = document.createElement('button')
            btn.classList.add('btn', 'btn-outline-danger', 'p-1')
            btn.innerText = '+'
    
            const btn2 = document.createElement('button')
            btn2.classList.add('btn', 'btn-outline-danger', 'p-1')
            btn2.innerText = '-'
    
    
    
            card_body.appendChild(title)
            card_body.appendChild(price)
            card_body.appendChild(category)
            card_body.appendChild(btn)
            card_body.appendChild(btn2)
    
    
            card.appendChild(img)
            card.appendChild(card_body)
    
            this.container.appendChild(card)})
    }
}