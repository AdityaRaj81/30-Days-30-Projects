var icon = document.getElementById("icon");
var modeText = document.getElementById("modeText");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./images/sun.png";
        modeText.textContent = "Light mode🌅";
    } else {
        icon.src = "./images/moon.png";
        modeText.textContent = "Dark mode🌖";
    }
}
