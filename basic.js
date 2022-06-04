  else if(category.id === 'dinner'){
      let dinnerMenu = menu.filter(function(dinnerItems){
        return dinnerItems.category == category.id
      })
    }
    else if(category.id === 'lunch'){
      let lunchMenu = menu.filter(function(lunchItems){
        return lunchItems.category == category.id
      })
    } 



const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')



window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu)

  displayButtonItems()

});




function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    return`<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
};


function displayButtonItems(){

  const categories = menu.reduce(function(values,item){
  if(!values.includes(item.category)){
      values.push(item.category)
      console.log(values)
  }; return values

  },['all']);

const categoryBtns = categories.map(function(category){
  return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`
}).join('');
  container.innerHTML = categoryBtns

  // `<button type="button"      class="filter-btn"       data-id=${category}>${category}</button>`
  const filterBtns = document.querySelectorAll('.filter-btn')


 // kad kliknes na buttons za svaki button se pokrece akcija  uzmi kategoriju iz buttona sto si na njega kliknuo
filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id 

    // this functiomn will return inside of varijabe menuCategory objekte koje se podudaraju menuItem.category === category
    // we use filter coz we will skip all elements that we do not need and get only yhose ones we need
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem
         }
    });

 
    if(category === 'all'){
       displayMenuItems(menu)
    }
    else{
       displayMenuItems(menuCategory) // 
    }
  });
});
};






/*explanation function displayMenuItems(menuItems)

i think this si called dinamic displaying data 
we garb our section center into a varijable
then we do map method, we make  new array into varijable displayMenu and we return it into html 9 times coz is 9 items
then sectionCenter.innerHTML = displayMenu means inside it return my html


we do join method because we want our html being conected like a string, if no it will be like a list, the difference is that
woud be displayed in onother way
note, you coud display all that data in html but that mean you would need to do a lot of more work writting

*/




    // // x  = `<button type="button" class="filter-btn">${item.category}</button>`
    // if(item.category == 'shakes'){
    //   return `<button type="button" class="filter-btn">shakes</button>`

    // };
    // if(item.category == 'dinner'){
    //   return `<button type="button" class="filter-btn">dinner</button>`

    // };
    // if(item.category == 'breakfast'){
    //   return `<button type="button" class="filter-btn">breakfast</button>`
    
    // };
    // if(item.category == 'lunch'){
    //   return `<button type="button" class="filter-btn">lunch</button>`
    // }





// window.addEventListener("DOMContentLoaded", function () {
//   let displayMenu = menu.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;