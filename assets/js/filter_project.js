document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");
            const projects = document.querySelectorAll(".Project-card");

            projects.forEach(project => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });