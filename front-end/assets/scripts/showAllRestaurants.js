const restaurantCardTemplate = document.querySelector("[data-restaurant-template]")
const restaurantCardContainer = document.querySelector("[data-restaurant-cards-container]")
const searchInput = document.querySelector("[data-search]")
const searchInputMobile = document.querySelector("[data-search-input-mobile]")

let restaurants = []

searchInputMobile.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    restaurants.forEach(restaurant => {
        const isVisible = restaurant.name.toLowerCase().includes(value)
        restaurant.element.classList.toggle("hide", !isVisible)
    })
})

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    restaurants.forEach(restaurant => {
        const isVisible = restaurant.name.toLowerCase().includes(value)
        restaurant.element.classList.toggle("hide", !isVisible)
    })
})

fetch('http://localhost:3000/restaurants/all')
    .then(response => response.json())
    .then(data => {
        restaurants = data.map(restaurant => {
            const card = restaurantCardTemplate.content.cloneNode(true).children[0]
            const img = card.querySelector("[data-restaurant-img]")
            const name = card.querySelector("[data-restaurant-name]")
            const rating = card.querySelector("[data-restaurant-rating]")

            img.src = restaurant.avatar
            name.textContent = restaurant.name
            rating.textContent = restaurant.rating
            restaurantCardContainer.append(card)

            return { name: restaurant.name, element: card }
        })
    })


async function reply_click(src) {
    console.log(src);

    await fetch('http://localhost:3000/restaurants/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(restaurant => {
                if (restaurant.avatar == src) {
                    let link = String(restaurant._id)
                    //showRestaurant(link);
                    //showAllMeals(link);
                    window.location.href = "./restaurant.html"
                    console.log(link)
                }
            })
        })

}