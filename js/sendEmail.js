function sendEmail(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject:document.getElementById("subject").value,
        message: document.getElementById("message").value,
        to_email: "elfekihons@gmail.com", // Destination de l'email
    };

    emailjs.send("service_790ma33", "template_nikt6aq", params)
        .then(function(response) {
            showMessage("Email sent successfully!", "success");
            document.getElementById("sendEmail").reset(); // Réinitialise le formulaire
        })
        .catch(function(error) {
            showMessage("Error sending the email. Please try again.", "error");
            console.error("Erreur EmailJS:", error);
        });
}

function showMessage(message, type) {
    let messageBox = document.getElementById("emailMessage");
    messageBox.textContent = message;
    messageBox.style.display = "block";
    messageBox.style.backgroundColor = type === "success" ? "#071777" : "red";
    messageBox.style.color = "white";
    messageBox.style.padding = "10px";
    messageBox.style.marginTop = "10px";
    messageBox.style.borderRadius = "5px";
}

// Ajoute un écouteur d'événement au formulaire
document.getElementById("sendEmail").addEventListener("submit", sendEmail);
