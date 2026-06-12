// Centralized Data Object mapping Sorkin's Cast of Characters
const characterData = [
    {
        id: "mitchell",
        name: "Charles E. Mitchell",
        role: "Chairman & CEO of National City Bank",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Charles_Edwin_Mitchell_cph.3c10065.jpg",
        motivation: "To support asset prices, defend aggressive commercial banking expansion strategies, and avoid a systemic margin call cascade at all costs.",
        summary: "Appears early on driving the massive institutional expansion of call loans to retail investors. During the high-pressure peaks of October, he famously steps up with millions in direct liquid reserves to manually bypass Federal Reserve constraints, ensuring credit remains available for stock speculation. His absolute optimism becomes a central pillar of the market's psychological vulnerability."
    },
    {
        id: "durant",
        name: "William C. Durant",
        role: "Wall Street Speculator & Founder of General Motors",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/William_C_Durant.jpg",
        motivation: "To exploit momentum and coordinate hidden 'stock pools' that intentionally squeeze short sellers and small retail market participants.",
        summary: "Sorkin tracks Durant as a mastermind of unregulated liquidity syndicates. He operates behind closed doors, coordinating groups of wealthy operators to mass-purchase target company stocks, intentionally leaking bullish projections to financial reporters. This artificial inflation successfully pulls small investors into the frenzy right before the syndicates quietly extract their capital at the top."
    },
    {
        id: "lamont",
        name: "Thomas W. Lamont",
        role: "Acting Head of the House of Morgan",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Thomas_W._Lamont.jpg",
        motivation: "Protecting institutional solvency, maintaining the reputation of J.P. Morgan, and preserving general societal trust in capitalist infrastructure.",
        summary: "Becomes the focal operational figure during the critical hours of Black Thursday. Sorkin explicitly captures his emergency closed-door meeting with the city's leading financial executives. Lamont orchestrates a coordinated capital pool, positioning high-profile floor brokers to execute large buy orders on defensive anchor assets like U.S. Steel, temporary staging a psychological rescue."
    },
    {
        id: "livermore",
        name: "Jesse Livermore",
        role: "Independent Speculator / Short Seller",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Jesse_Livermore.jpg",
        motivation: "Identifying structural discrepancies between fundamental corporate data and psychological mass behavior to secure asymmetric gains.",
        summary: "Stands as the critical contrarian foil in the text. While the crowd operates under absolute speculative mania, Livermore identifies that current valuations have separated entirely from physical output. He builds vast short positions in secret. By late October, as the system caves inward, he achieves legendary notoriety by netting roughly $100 million in returns from the systemic collapse."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.getElementById("charTabsContainer");
    const displayPanel = document.getElementById("charDisplayPanel");

    // Initialize UI Elements
    function initCharacterInterface() {
        tabsContainer.innerHTML = "";
        
        characterData.forEach((char, index) => {
            const button = document.createElement("button");
            button.className = `tab-btn ${index === 0 ? 'active' : ''}`;
            button.innerText = char.name;
            button.setAttribute("data-id", char.id);
            
            button.addEventListener("click", () => {
                document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                renderCharacter(char.id);
            });
            
            tabsContainer.appendChild(button);
        });

        // Load baseline data
        if (characterData.length > 0) {
            renderCharacter(characterData[0].id);
        }
    }

    // Dynamic Display Card Renderer
    function renderCharacter(id) {
        const character = characterData.find(c => c.id === id);
        if (!character) return;

        displayPanel.innerHTML = `
            <div class="char-layout">
                <div class="char-img-wrapper">
                    <img src="${character.image}" alt="Historical portrait of ${character.name}">
                </div>
                <div class="char-meta">
                    <h3>${character.name}</h3>
                    <div class="char-title-tag">${character.role}</div>
                    
                    <div class="meta-block">
                        <strong>Operational Motivation:</strong>
                        <p>${character.motivation}</p>
                    </div>
                    
                    <div class="meta-block">
                        <strong>Narrative Summary & Role:</strong>
                        <p>${character.summary}</p>
                    </div>
                </div>
            </div>
        `;
    }

    initCharacterInterface();
});