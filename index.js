const $targetEl = document.getElementById('dropdownNavbar');
const $triggerEl = document.getElementById('dropdownNavbarLink');

$triggerEl.addEventListener("click", () => {
    $targetEl.classList.toggle("hidden");
})

window.onclick = (event) => {
    if (!event.target.matches('#dropdownNavbarLink')) {
        $targetEl.classList.add("hidden");
    }
}