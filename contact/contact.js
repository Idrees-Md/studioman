 const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (response.ok) {
          successMessage.style.display = "block";
          form.reset();
          setTimeout(() => {
            location.reload();
          }, 3000);
        } else {
          alert("There was a problem. Please try again.");
        }
      })
      .catch(error => {
        alert("Something went wrong.");
        console.error(error);
      });
    });