const projects = [
    {
        "id" : 1,
        "type" : "web",
        "title" : "Twitch Tools",
        "description" : "<p>As part of a team of 2, we developed a web application in VueJs & .Net Core to help streamers tackle the raising concerns of DMCA strikes for having music caught in the background audio of their streams.</p><p>We also added some nifty features to visualise their chat data too! <a class=\"dialoglink\" onclick=\"openModal('copilotVidWrapper')\">Click Here</a> for a tour</p>",
        "images" : [
            "./images/CopilotCarousel/homepage.jpeg", 
            "./images/CopilotCarousel/PiscesPixieProfile.jpeg", 
            "./images/CopilotCarousel/piscesStream.jpeg"
        ],
        "video" : "",
    },
    {
        "id" : 2,
        "type" : "web",
        "title" : "Nexus (EPR)",
        "description" : "<p>Nexus is an Electronic Patient Record, built in Angular2+ & .Net Core, used for admitting patients and tracking their journey through a hospital.</p><p>It's main purpose is to remove the need of paper records being stored and traced, whilst allowing the medical and clinical staff to provide the best care with the necessary information needed.</p>",
        "images" : [
            "./images/NPR/nprDiagram.jpeg", 
            "./images/NPR/nprDiagramBeds.jpeg"
        ],
        "video" : "",
    },
    {
        "id" : 3,
        "type" : "web",
        "title" : "WebContractor",
        "description" : "<p>A solution for contractors within the field of construction, to improve the efficiency of managing multiple sub-contractors over multiple projects.</p><p>Companies can also manage applications for payments and invoices, whilst ensuring compliance with the UK Construction Act.</p>",
        "images" : [
            "./images/Webcontractor/subcontractOrders.jpeg", 
            "./images/Webcontractor/subcontractOrderCreate.jpeg"
        ],
        "video" : "",
    },
    {
        "id" : 4,
        "type" : "game",
        "title" : "Procedural Terrain",
        "description" : "<p>Through the use of perlin noise, creating my own mesh and building a shader for the colours of the terrain depending on it\’s height, I was able to generate different maps and then use “fall-off” to turn them into islands. I shared my findings and how I built this project on a <a class=\"dialoglink\" href=\"https://www.youtube.com/watch?v=cLs3CGNV120\" target=\"blank\">YouTube tutorial</a></p>",
        "images" : [],
        "video" : "<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/wmaskscrRvM\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    },
    {
        "id" : 5,
        "type" : "game",
        "title" : "ShieldMaidens",
        "description" : "<p>ShieldMaidens is a solo/co-op endless runner where you have to fight and block your way through enemies in a randomly generated world so you never go on the same run twice, shared-screen co-op and joypad support. Hand-drawn assets by myself and a combat system that allows the player/s to decide their own style of play. </p><p>You can get a link to games store-page <a class=\"dialoglink\" href=\"https://pangdev.itch.io/shieldmaidens\" target=\"blank\">Here</a></p>",
        "images" : [],
        "video" : "<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/BKQ04dLX_6w\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    },
    {
        "id" : 6,
        "type" : "game",
        "title" : "NPC AI",
        "description" : "<p>Inspired by 3D stealth games, I used a state machine design pattern to set the idle, investigate and attack states of the NPC. Then through the use of linear algebra and the Dot Product, I could check the position of the player from the NPC. Finally I gave the player a crouching state which meant their footsteps couldn’t be heard when sneaking behind a wall or the back of an enemy. </p><p><a class=\"dialoglink\" href=\"https://github.com/Pang/NpcLogic\">Click here</a> to see the logic</p>",
        "images" : [
            "./images/NpcAI/ShieldMaidens2Vision.jpeg",
            "./images/NpcAI/ShieldMaidens2pic2.jpeg",
            "./images/NpcAI/Sneak.jpeg"
        ],
        "video" : ""
    },
    {
        "id" : 7,
        "type" : "game",
        "title" : "HexWorld",
        "description" : "<p>A top down tower defence like game. The hex-tile grid is programmatically rendered and then uses the CSV selected from the menu to determine land, water & other interests on the map. The NPC units use A* Pathfinding and the Player's units use the ‘Breadth-First-Search’ algorithm to find viable paths around your lands.</p><p>You can get a link to games store-page <a class=\"dialoglink\" href=\"https://pangdev.itch.io/hexworld\" target=\"blank\">Here</a></p>",
        "images" : [
            "./images/HexWorld/HexWorldLedgeMap.jpeg",
            "./images/HexWorld/HexWorldSpiralMap.jpeg",
            "./images/HexWorld/HexWorldSimpleMap.jpeg",
        ],
        "video" : ""
    },
    {
        "id" : 8,
        "type" : "game",
        "title" : "StarRacers",
        "description" : "<p>A VR game that lets the player walk around their ship bay to select levels, then enter their ship to race around tracks and race against time. You can choose between using VR controllers, gamepad or Keyboard/Mouse. Race with your preferred method of control!</p>",
        "images" : [
            "./images/StarRacers/StarRacers1.jpg",
            "./images/StarRacers/StarRacers2.jpg"
        ],
        "video" : ""
    },
];
