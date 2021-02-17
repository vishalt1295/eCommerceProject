// Navbar Collapse
var coll = document.getElementsByClassName("navbar-toggler");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
// Dropdown
function dropdownMenu(a) {
    a.parentNode.getElementsByClassName("dropdown-menu")[0].classList.toggle("show");
}

// Used to switch between light and dark mode
document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark'): document.querySelector('body').classList.remove('dark')
})

function save_state() {
    var checkbox = document.getElementById('cbx');
    localStorage.setItem('cbx', checkbox.checked);
}
function load() {
    var checked = JSON.parse(localStorage.getItem('cbx'));
    document.getElementById("cbx").checked = checked;
}

function wis() {
    location.reload();
    localStorage.clear()
}
load();