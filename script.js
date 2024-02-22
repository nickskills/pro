let products = [
  {
    title: 'milk',
    price: 22,
    image:
      'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg',
  },
  {
    title: 'juice',
    price: 24,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg',
  },
  {
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74',
  },
  {
    title: 'tea',
    price: 15,
    image:
      'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png',
  },
];

let wraps = document.getElementsByClassName('wrap');
let wrap = wraps[0];

function xxx(array) {
  for (const product of array) {
    let container = document.createElement('div');
    container.classList.add('container');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let btn = document.createElement('button');

    h2.innerText = `${product.title} - ${product.price} UAH`;
    img.src = product.image;
    btn.innerText = 'add to fav';

    btn.onclick = function () {
      if (localStorage.getItem('favProducts')) {
        let infoFromLocalStorageString = localStorage.getItem('favProducts');
        let infoFromLocalStorageArray = JSON.parse(infoFromLocalStorageString);
        infoFromLocalStorageArray.push(product.title);
        localStorage.setItem('favProducts', JSON.stringify(infoFromLocalStorageArray));
      } else {
        let infoFromLocalStorageArray = [];
        infoFromLocalStorageArray.push(product.title);
        localStorage.setItem('favProducts', JSON.stringify(infoFromLocalStorageArray));
      }
    };

    h2.appendChild(btn);
    container.append(h2, img);
    wrap.appendChild(container);

    if (product.price < 25) {
      h2.classList.add('color-red');
    }
  }
}

xxx(products);
