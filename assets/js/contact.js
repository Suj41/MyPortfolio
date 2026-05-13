
(function () {
    emailjs.init("BNYzF92ZQcZx8KQ7l"); // Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Send message to your Gmail (Contact Us template)
    emailjs.sendForm("service_squ81qh", "template_5d1z67g", this)
        .then(() => {
            console.log("Message sent to your inbox");
        }, (error) => {
            console.error("Failed to send to inbox:", error);
        });

    // Send auto-reply to the visitor (Auto-Reply template)
    emailjs.sendForm("service_squ81qh", "template_4x8pr4v", this)
        .then(() => {
            console.log("Auto-reply sent to visitor");
            alert("Message sent successfully! A confirmation email has been sent.");
        }, (error) => {
            console.error("Failed to send auto-reply:", error);
        });
});
