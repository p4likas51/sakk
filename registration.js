function validateForm() {
    var name = document.forms["registration"]["name"].value;
    var email = document.forms["registration"]["email"].value;
    var phone = document.forms["registration"]["phone"].value;
    var rating = document.forms["registration"]["rating"].value;
    var password = document.forms["registration"]["password"].value;
    var confirmPassword = document.forms["registration"]["confirmPassword"].value;

    if (name == "" || email == "" || phone =="" || rating == "" || password == "" || confirmPassword == "") {
      alert("Minden mezőt ki kell tölteni!");
      return false;
    }

    if (password != confirmPassword) {
      alert("A jelszók nem egyeznek!");
      return false;
    }

    document.getElementById("success-message").innerHTML = "Köszönjük a jelentkezését!<br>További információkról emailben értesítjük.";
    document.getElementById("registration-main-div").style.paddingLeft = 0;
    document.getElementById("registration-main-div").style.width = "75%"
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("apply").style.display = "none";
    return false;
  }