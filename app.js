// Centralized Data Object mapping Sorkin's Cast of Characters
// Centralized Data Object mapping Sorkin's Cast of Characters
const characterData = [
    {
        id: "mitchell",
        name: "Charles E. Mitchell",
        role: "Chairman & CEO of National City Bank",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Charles_Edwin_Mitchell_cph.3c10065.jpg",
        motivation: "To support asset prices, defend aggressive commercial banking expansion strategies, and avoid a systemic margin call cascade at all costs.",
        summary: "<strong>Early 1929:</strong> Mitchell appears as the ultimate banking bull, aggressively expanding National City's retail brokerage arm and pushing ordinary Americans into equities.<br><br><strong>March 1929 (The First Tremor):</strong> When the Federal Reserve attempts to starve the market of credit, Mitchell openly defies Washington, unilaterally injecting $25 million into the call money market to stop an early panic. He is hailed as a hero by Wall Street but marks himself as a target for regulators.<br><br><strong>Late Summer:</strong> Mitchell publicly dismisses the mounting structural risks, claiming the economic fundamentals are permanently sound.<br><br><strong>October 24–29 (The Crash):</strong> He joins the Morgan consortium to bail out the market on Black Thursday, but by Black Tuesday, his own bank's stock is plummeting. He watches his leveraged empire crack.<br><br><strong>The Aftermath:</strong> Sorkin tracks Mitchell's brutal fall from grace—he is forced to resign in disgrace and faces federal tax evasion charges as the ultimate scapegoat for the banking sector's hubris."
    },
    {
        id: "durant",
        name: "William C. Durant",
        role: "Wall Street Speculator & Founder of General Motors",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/William_C_Durant.jpg",
        motivation: "To exploit momentum and coordinate hidden 'stock pools' that intentionally squeeze short sellers and small retail market participants.",
        summary: "<strong>1928–Early 1929:</strong> Durant is introduced as the 'Bull of Bulls,' operating out of a multi-telephone suite, coordinating massive, unregulated stock pools. He targets companies like RCA, pumping their valuations and leaking tips to reporters to bring retail investors in.<br><br><strong>Summer 1929:</strong> Realizing the market is overextended, Durant secretly visits the White House to warn President Hoover that a crash is imminent unless margin rules are relaxed to let the air out slowly—a meeting Hoover rebuffs.<br><br><strong>October 1929:</strong> Despite his own warnings, Durant is trapped by his immense leverage. During the crash weeks, he desperately tries to organize syndicates to buy the dip and support his own failing positions.<br><br><strong>The Aftermath:</strong> His vast $50 million fortune evaporates. Sorkin details his tragic final act, reduced to running a bowling alley in Michigan, symbolizing the total destruction of the era's great speculators."
    },
    {
        id: "lamont",
        name: "Thomas W. Lamont",
        role: "Acting Head of the House of Morgan",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Thomas_W._Lamont.jpg",
        motivation: "Protecting institutional solvency, maintaining the reputation of J.P. Morgan, and preserving general societal trust in capitalist infrastructure.",
        summary: "<strong>Early 1929:</strong> With J.P. Morgan Jr. largely absent, Lamont acts as the de facto leader of Wall Street's most powerful institution. He observes the speculation with aristocratic disdain but fails to curb the rampant margin lending.<br><br><strong>October 24 (Black Thursday):</strong> This is Lamont's defining scene. As panic erupts, he calls an emergency 12:00 PM meeting at 23 Wall Street with the city's top bankers. He famously steps out to tell the press there is merely a 'little distress selling' and orchestrates a $1.25 billion (adjusted) relief pool. He dispatches Richard Whitney to the NYSE floor to dramatically buy U.S. Steel at $205, temporarily halting the panic.<br><br><strong>October 29 (Black Tuesday):</strong> Lamont realizes the avalanche is too large even for the House of Morgan. He pulls the consortium's support, letting the market find its natural, devastating bottom.<br><br><strong>The Aftermath:</strong> He spends the 1930s defending the House of Morgan in congressional hearings, representing the old guard trying to survive the new regulatory era."
    },
    {
        id: "livermore",
        name: "Jesse Livermore",
        role: "Independent Speculator / Short Seller",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Jesse_Livermore.jpg",
        motivation: "Identifying structural discrepancies between fundamental corporate data and psychological mass behavior to secure asymmetric gains.",
        summary: "<strong>Early to Mid 1929:</strong> Livermore sits isolated in his secretive Fifth Avenue office suite with a private ticker tape. Recognizing that valuations have detached from reality, he quietly builds massive short positions, using dozens of dummy brokers to hide his trades from the public.<br><br><strong>Late Summer:</strong> He boldly tells a New York Times reporter the market is at 'ridiculously high prices,' drawing the ire of the bulls.<br><br><strong>October 1929:</strong> As the market violently unwinds, Livermore's short traps spring. Sorkin captures a chilling scene: Livermore returns to his Long Island estate on Black Tuesday. His wife, hearing of the crash, is weeping, believing they are ruined. Livermore calmly informs her he has just made exactly $100 million in a single day.<br><br><strong>The Aftermath:</strong> Blamed by the public and press as the architect of the crash, Livermore faces death threats and requires armed guards, becoming the era's ultimate villain despite only betting on the inevitable."
    },
    {
        id: "hoover",
        name: "Herbert Hoover",
        role: "31st President of the United States",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/HerbertHoover.jpg",
        motivation: "To rein in rampant speculation without triggering an economic panic, relying on 'associationalism' over direct government intervention.",
        summary: "<strong>March 1929:</strong> Sorkin introduces Hoover at his inauguration. Privately, Hoover is deeply alarmed by the Wall Street bubble, calling it a 'fever of speculation.'<br><br><strong>Spring/Summer 1929:</strong> Instead of public regulation, Hoover attempts back-channel pressure. He urges the Federal Reserve to tighten credit and begs newspaper publishers to warn the public. His warnings are ignored, and his reluctance to use direct federal authority paralyzes the executive branch.<br><br><strong>October 1929:</strong> When the crash hits, Hoover publicly projects calm, issuing statements that the 'fundamental business of the country is on a sound and prosperous basis.'<br><br><strong>The Aftermath:</strong> Hoover attempts to persuade business leaders not to cut wages voluntarily. His refusal to implement direct federal relief seals his political doom, setting the stage for FDR and reshaping the American presidency."
    },
    {
        id: "churchill",
        name: "Winston Churchill",
        role: "British Statesman and Writer",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Sir_Winston_Churchill_-_19086236948.jpg",
        motivation: "Touring America for lucrative speaking engagements and investing in the booming American stock market to rebuild his personal finances.",
        summary: "<strong>Summer/Fall 1929:</strong> Churchill is out of political power ('the wilderness years') and tours the United States, marveling at American industrial might while heavily investing his own money in the bull market.<br><br><strong>October 24, 1929:</strong> In one of the book's most cinematic scenes, Churchill is physically present on Wall Street. He is given a guest pass to the NYSE visitor's gallery and watches the visceral chaos of Black Thursday unfold below him.<br><br><strong>October 29, 1929:</strong> Sorkin describes Churchill witnessing a crowd gathered outside his hotel, realizing the human toll of the financial ruin.<br><br><strong>The Aftermath:</strong> Having lost a fortune in the crash, a humbled Churchill is forced to write frantically to pay off his debts, an ironic twist that keeps him in the public eye during the 1930s leading up to WWII."
    },
    {
        id: "glass",
        name: "Senator Carter Glass",
        role: "U.S. Senator (Virginia) and Architect of the Federal Reserve Act",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Carter_Glass_1913.jpg",
        motivation: "To sever the link between commercial banking deposits and speculative investment banking, and punish the bankers he views as gamblers.",
        summary: "<strong>Early 1929:</strong> Glass serves as the narrative's Cassandra in Washington. He takes to the Senate floor to furiously denounce 'stock gamblers' and directly attacks Charles Mitchell for using Federal Reserve credit to fund margin loans.<br><br><strong>Summer 1929:</strong> He drafts angry letters and pushes legislation to curb speculation, but is largely dismissed as an old-fashioned curmudgeon who doesn't understand the 'New Era' economics.<br><br><strong>October 1929:</strong> The crash vindicates Glass entirely. Sorkin frames him watching the collapse not with triumph, but with grim horror at the damage done to the working class.<br><br><strong>The Aftermath:</strong> Glass weaponizes the public outrage. He channels the post-crash fury into the Pecora Commission hearings and authors the landmark Glass-Steagall Act of 1933, permanently reshaping the structure of global finance."
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