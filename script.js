function searchBtn() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    if(searchInput == "mobile" || searchInput == "tv"  ){
        let pop = document.querySelector('.popup')
        pop.style.display = "block" // Pop up Appears
        search = searchInput;
    } else{
        let pop = document.querySelector('.popup')
        pop.style.display = "none" // Pop up Hides
        alert('No Data Found')
    }

}

let products = [ //Obejects used as Data of Products
    {
      title: "Samsung Mobile",
      price: 15000,
    },
    {
      title: "Lenovo Tv",
      price: 30000,
    },
  ];

function popupMessage(){  // Popup Message Function.
for (let i=0; i<products.length; i++){ //Iterating over the products
    let data = products[i].title.toLowerCase();
    if(data.indexOf(search)>=0){
        alert(`Title: ${products[i].title} Price: ${products[i].price}`)
    }
}
}

// Login page Redirect
function redirectToLogin() {
    window.location.href = "./login.html";
}
