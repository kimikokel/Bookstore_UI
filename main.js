function nav_visible() {
    if (document.getElementById("nav-visible").style.display == "flex") {
        document.getElementById("nav-visible").style.display = "none";
    } else {
        document.getElementById("nav-visible").style.display = "flex";
    }
}