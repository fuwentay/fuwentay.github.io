document.addEventListener("DOMContentLoaded", function() {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar").innerHTML = data;
            const currentPage = window.location.pathname.split("/").pop();
            document.querySelectorAll(".sidenav a").forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("pageHighlight");
                }
            });
        });

    // Create and append the "Jump to Top" button
    const topButton = document.createElement("button");
    topButton.id = "topButton";
    topButton.innerHTML = "&#8679;"; // Vertical arrow pointing up
    topButton.style.display = "none"; // Initially hidden
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "30px";
    topButton.style.zIndex = "99";
    topButton.style.border = "none";
    topButton.style.outline = "none";
    topButton.style.background = "none"; // Remove background
    topButton.style.color = "red"; // Change color to red
    topButton.style.cursor = "pointer";
    topButton.style.fontSize = "36px"; // Increase font size for better visibility
    topButton.onclick = scrollToTop;
    document.body.appendChild(topButton);

    // Show the "Jump to Top" button when the user scrolls down 20px from the top of the document
    window.onscroll = function() {
        const topButton = document.getElementById("topButton");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    };
});

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
