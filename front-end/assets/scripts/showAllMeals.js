const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click', showRestaurant())
searchBtn.addEventListener('click', showAllMeals())
const titulo = document.getElementById('titulo')

const restaurantWrapper = document.querySelector("[data-restaurant-card]")
const main = document.getElementById('restaurant-wrapper')

async function showRestaurant(id = '629fadb2109f24e9efccd186') {
    await fetch(`http://localhost:3000/restaurants/${id}`)
        .then(response => response.json())
        .then(restaurant => {
            const card = restaurantWrapper.content.cloneNode(true).children[0]

            const img = card.querySelector("[data-restaurant-img-card]")
            const logo = card.querySelector("[data-restaurant-logo-card]")
            const name = card.querySelector("[data-restaurant-name-card]")
            const address = card.querySelector("[data-restaurant-address-card]")
            const phone = card.querySelector("[data-restaurant-phone-card]")
            const rating = card.querySelector("[data-restaurant-rating-card]")

            img.src = restaurant.backgroundImage
            logo.src = restaurant.avatar
            name.textContent = restaurant.name
            address.textContent = restaurant.address
            rating.textContent = restaurant.rating
            phone.textContent = restaurant.phone
            console.log(img.src)

            main.appendChild(card)

            titulo.innerHTML = restaurant.name
        })
}


const mealTemplate = document.querySelector("[data-meal-template]")
const mealsWrapper = document.querySelector("[data-meals-card-container]")
const seachInput = document.querySelector("[data-meal-search]")

let meals = []

seachInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    meals.forEach(meal => {
        const isVisible = meal.name.toLowerCase().includes(value)
        meal.element.classList.toggle("hide", !isVisible)
    })
})

async function showAllMeals(id = '629fadb2109f24e9efccd186') {
    await fetch(`http://localhost:3000/restaurants/${id}`)
        .then(response => response.json())
        .then(data => {
            meals = data.meals.map(meal => {
                const mealCard = mealTemplate.content.cloneNode(true).children[0]
                const imgMeal = mealCard.querySelector("[data-meal-img]")
                const mealName = mealCard.querySelector("[data-meal-name]")
                const mealDescription = mealCard.querySelector("[data-meal-description]")
                const mealPrice = mealCard.querySelector("[data-meal-price]")

                imgMeal.src = meal.avatar
                mealName.textContent = meal.name
                mealDescription.textContent = meal.description
                mealPrice.textContent = meal.price

                mealsWrapper.append(mealCard)

                return { name: meal.name, element: mealCard }
            })
        })
}
