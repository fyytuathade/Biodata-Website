document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            if (link.href.startsWith(window.location.origin) && href !== "contact.html" && href !== "#") {
                event.preventDefault();
                document.body.classList.add("fade-color");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500);
            } else if (href === "#") {
                event.preventDefault();
                // Tidak ada transisi untuk tautan dengan href="#"
            }
        });
    });
});