document.addEventListener("DOMContentLoaded", () => {
    const pullButton = document.getElementById("PullButton");
    const pullAnimation = document.getElementById("pull-animation");
    const pullResults = document.getElementById("pull-background");
    const pullContainer = document.getElementById("pull-container");

    pullButton.addEventListener("click", async () => {
        pullAnimation.style.display = "block";
        pullAnimation.play();

        pullAnimation.onended = async () => {
            pullAnimation.style.display = "none";
            const pulledItems = await generatePulls();
            displayPullResults(pulledItems);
        };
    });
});

async function generatePulls() {
    try {
        const response = await fetch("../data/wish-inventory.json");
        const data = await response.json();
        const items = data.item;
        let pulls = [];

        for (let i = 0; i < 10; i++) {
            let value = Math.floor(Math.random() * 101);
            let rarity = 3;
            if (value >= 98) rarity = 5;
            else if (value >= 90) rarity = 4;

            const filteredItems = items.filter(item => item.rarity === rarity);
            const randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];
            pulls.push(randomItem);
        }

        return pulls;
    } catch (error) {
        console.error("Error loading inventory:", error);
        return [];
    }
}

function displayPullResults(items) {
    const pullResults = document.getElementById("pull-background");
    const pullContainer = document.getElementById("pull-container");

    pullContainer.innerHTML = "";
    items.forEach(item => {
        let div = document.createElement("div");
        div.className = "pull";
        let innerItem = document.createElement("div");
        innerItem.className = "pull-item";
        div.appendChild(innerItem);
        innerItem.style.backgroundImage = `url(assets/${item.splashart})`;

        if (item.rarity === 5) div.style.boxShadow = "0px 0px 15px gold";
        else if (item.rarity === 4) div.style.boxShadow = "0px 0px 15px purple";
        else div.style.boxShadow = "0px 0px 15px blue";

        pullContainer.appendChild(div);
    });

    pullResults.classList.remove("hidden");
}

function closeCollection() {
    document.getElementById("pull-background").classList.add("hidden");
}