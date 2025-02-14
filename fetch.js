// const fetchPromise = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   fetchPromise
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[0].name);
//     })
//     .catch((error) => {
//       console.error(`Could not get products: ${error}`);
//     });

// Exercise 6: API Data Fetcher
// Goal: Create a simple webpage that:
// Has a button labeled "Load Data".
// When the button is clicked, it fetches a list of posts from JSONPlaceholder.
// Displays the title and body of each post in a list on the page.
// Requirements:
// Use the fetch() API.
// Handle loading (e.g., display a "Loading..." message) and errors gracefully.
// Bonus:
// Add a search input to filter posts by title.


let posts = []
let btn  = document.querySelector("div.center button");
let loadLabel = document.querySelector("div.center #Load");
const searchBar = document.querySelector("div.center input");


searchBar.addEventListener("input", (e) =>{
    const value = e.target.value.toLowerCase();
    console.log(posts)
    posts.forEach(post => {
        const isVisible = post.title.includes(value) || post.body.includes(value);
        console.log(isVisible)
        post.element.classList.toggle("hide", !isVisible)
    });

})

btn.addEventListener("click", ()=>{
    const fetchPromise = fetch(
        'https://jsonplaceholder.typicode.com/posts'
        )
        
        fetchPromise
            .then((response) =>{
            if (!response.ok){
                return console.log(`There was an error with the fetch: ${response.status}`);
            } 
            return response.json();
            })
            .then((data) =>{
                let ul = document.querySelector("div.center ul");
                let loadFather = loadLabel.parentElement
                loadFather.removeChild(loadLabel)
                posts = data.map((post) =>{
                    let titleElement = document.createElement("h3");
                    titleElement.textContent = `Title: ${post.title}`;
                    let bodyElement = document.createElement("p");
                    bodyElement.textContent = `${post.body}`;
                    let liElement = document.createElement("li");
                    liElement.appendChild(titleElement);
                    liElement.appendChild(bodyElement);
                    ul.appendChild(liElement);
                    return {title: post.title, body: post.body, element: liElement};
                })
            
            })
            
            .catch((error) =>{
                console.log(`Could not get posts. Error: ${error}`)
            })
            loadLabel.innerHTML = ("Loading data...")
})

