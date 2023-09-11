document.addEventListener("DOMContentLoaded", function () {
    // Fetch the IP address and display it
    fetch("https://api64.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById("ip-address").textContent = ipAddress;
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
            document.getElementById("ip-address").textContent = "Error";
        });

    // Copy IP address to clipboard
    const copyButton = document.getElementById("copy-button");
    copyButton.addEventListener("click", function () {
        const ipAddress = document.getElementById("ip-address").textContent;
        const textArea = document.createElement("textarea");
        textArea.value = ipAddress;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        // Show the copy success modal
        const copySuccessModal = document.getElementById("copy-success-modal");
        const closeModalButton = copySuccessModal.querySelector(".close");
        closeModalButton.addEventListener("click", () => {
            copySuccessModal.style.display = "none";
        });

        const modalMessage = copySuccessModal.querySelector(".modal-message");
        modalMessage.textContent = "IP Address copied to clipboard!";
        copySuccessModal.style.display = "block";
    });
});
