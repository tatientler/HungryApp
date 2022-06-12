
let placeholder
let btnLike = document.getElementsByClassName('bi bi-heart bi-color')

function toggleBtnLike(foo) {
    placeholder = foo
    if (foo.className === "bi bi-heart bi-color") {
        foo.className = foo.className.replace("bi bi-heart bi-color", "bi bi-heart-fill")
    } else {
        foo.className = foo.className.replace("bi bi-heart-fill", "bi bi-heart bi-color")
    }
}
