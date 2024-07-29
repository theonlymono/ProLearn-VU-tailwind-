function toggleNavbar() {
    const navbarNav = document.querySelector('.navbar-nav');
    navbarNav.classList.toggle('active');
}

function openNav() {
    document.getElementById("slideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("slideMenu").style.width = "0";
}

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

