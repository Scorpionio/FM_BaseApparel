function email() {
    const email = document.getElementById("email");
    const border = document.getElementById("email-border");
    const errorImg = document.getElementById("error-img");
    const errorText = document.getElementById("error-text");
    
    if (/[A-Za-z0-9]+?@.+?\..+/g.test(email.value)) {
        border.style = "border: 1px solid hsl(0, 36%, 70%);"
        errorImg.style = "display: none;"
        errorText.style = "display: none;"
    } else {
        border.style = "border: 1px solid hsl(0, 93%, 68%);"
        errorImg.style = "display: block;"
        errorText.style = "display: block;"
    }
}