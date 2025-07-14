document.addEventListener("DOMContentLoaded", () => {
    const sideBar = document.querySelector(".sidebar");
    const listGroup = document.querySelector(".list-group");
    const userDetails = document.querySelector(".user-details");
    const userProfile = document.querySelectorAll(".user-d");

    sideBar.addEventListener("mouseenter", () => {
        listGroup.classList.remove("hidden");
        userDetails.classList.remove("hidden");
        userProfile.classList.remove("hidden");
    });

    sideBar.addEventListener("mouseleave", () => {
        listGroup.classList.add("hidden");
        userDetails.classList.add("hidden");
        userProfile.classList.add("hidden");
    });
        
    // Carousel
    const cards = document.querySelectorAll(".card");
    let active = 0;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove("card-0", "card-1", "card-2", "card-3");

            if (index === active) card.classList.add("card-1");
            else if (index === (active + 1) % cards.length) card.classList.add("card-2");
            else if (index === (active - 1 + cards.length) % cards.length) card.classList.add("card-0");
            else card.classList.add("card-3");
        });
    }

    function nextSlide() {
        active = (active + 1) % cards.length;
        updateCarousel();
    }

    function prevSlide() {
        active = (active - 1 + cards.length) % cards.length;
        updateCarousel();
    }

    document.querySelector(".left").addEventListener("click", prevSlide);
    document.querySelector(".right").addEventListener("click", nextSlide);

    updateCarousel();
    console.log("script loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    fetch(`../data/articles.json`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.data.images) {
                image.src = data.data.images.original.url;
                searchInput.value = "";
                feedbackParagraph.textContent = "";
            } else {
                throw new Error("found error 404");
            }
        })
        .catch(error => {
            console.error("Error 404:", error);
            feedbackParagraph.textContent = error.message;
        });
});