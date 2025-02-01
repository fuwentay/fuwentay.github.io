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

    const topButton = document.createElement("button");
    topButton.id = "topButton";
    topButton.innerHTML = `<img src="svg/arrow_up.svg" alt="Jump to Top" width="36px" height="36px">`;
    topButton.style.display = "none";
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "30px";
    topButton.style.zIndex = "99";
    topButton.style.border = "none";
    topButton.style.outline = "none";
    topButton.style.background = "none";
    topButton.style.cursor = "pointer";
    topButton.onclick = scrollToTop;
    document.body.appendChild(topButton);

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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
