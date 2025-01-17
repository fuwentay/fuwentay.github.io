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
});
