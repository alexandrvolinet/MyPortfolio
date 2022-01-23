const lists = document.querySelectorAll(".feature-sub")
const btns = document.querySelectorAll(".feature__link")

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btns.forEach((btn, idx) => {
            if (btn === btnItem) {
                lists[idx].classList.toggle("hidden");
                btn.classList.toggle("feature__link_active")
            }
            else {
                lists[idx].classList.add("hidden")
                btn.classList.remove("feature__link_active")
            }
        })
    })
})