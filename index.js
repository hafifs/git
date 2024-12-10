const $targetEl = document.getElementById('dropdownNavbar');
const $triggerEl = document.getElementById('dropdownNavbarLink');

$triggerEl.addEventListener("click", () => {
    $targetEl.classList.toggle("hidden");
})