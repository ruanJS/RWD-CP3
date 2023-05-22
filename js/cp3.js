function toggleDarkMode() {
    let body = document.body;
    let currentBackgroundColor = body.style.backgroundColor;
        if (currentBackgroundColor === "" || currentBackgroundColor === "rgb(255, 255, 255)") {
        body.style.backgroundColor = "#212121";
    } else {
        body.style.backgroundColor = "#ffffff";
    }
}
