
let cards =  document.getElementById('cards')


fetch('https://fakestoreapi.com/products?limit=10')
  .then((response) => response.json() ) 
  .then((res) => getData((res)) ) 
  .catch((err) => console.log(err) )




  function getData(params) {

        for (const iterator of params) {
                
            let card = document.createElement('div')
            let img = document.createElement('img')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
            let p2 = document.createElement('p2')


            card.classList.add('product')
            img.src = iterator?.image

            card.classList.add('product_h3')
            h3.textContent = iterator?.title

            card.classList.add('description')
            p.textContent = iterator?.description

            card.classList.add('price')
            p.textContent = iterator?.price


            card.appendChild(img)
            card.appendChild(p)
            card.appendChild(p2)
            card.appendChild(h3)
            cards.appendChild(card)
            
        }
  }


