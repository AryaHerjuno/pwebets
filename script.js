function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;

    if (name === "" || email === "") {
        alert("Nama dan email harus diisi");
        return false;
    }
}
