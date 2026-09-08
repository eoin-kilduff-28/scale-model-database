const btn = document.getElementById("btn");
const cards = document.querySelectorAll(".card-inner");
const exp = document.querySelectorAll(".expl");
const list = document.getElementById("list");

if(btn) { //will run on the home page, will be skipped on the other pages
btn.addEventListener("click", 
    function(){
        window.location.href = "test.html";
});
}

cards.forEach(function(card){  //runs the flip animation when clicked
card.addEventListener("click", 
    function(){
        card.classList.toggle("is-flipped");
    });
});

exp.forEach(function(explore){  //opens the scale page
explore.addEventListener("click", 
    function(event){
        event.stopPropagation(); //stops the card from spinning once pressed
        window.location.href = "size.html";
    });
});

//Scale data for each manufacturer
const manufacturers = {
    Airfix: {
        scales: ["1:1", "1:6", "1:8", "1:9", "1:10", "1:11", "1:12", "1:14", "1:16", "1:20", "1:21", "1:22", "1:24", "1:25", 
            "1:32", "1:35", "1:43", "1:45", "1:48", "1:51", "1:54", "1:63", "1:72", "1:76", "1:78",
            "1:85", "1:87", "1:89", "1:94", "1:95", "1:96", "1:100", "1:120", "1:130", "1:144", "1:150", "1:156", 
            "1:168", "1:180", "1:187", "1:300", "1:350", "1:400", "1:440", "1:480", "1:600", "1:700", "1:775", "1:1000", "1:1200",
            "1:4222"]
        },
    Tamiya: {
        scales: ["1:1", "1:6", "1:12", "1:16", "1:18", "1:20", "1:21", "1:24", "1:25", "1:28", "1:32", "1:35", "1:43", 
            "1:48", "1:50", "1:55", "1:60", "1:70", "1:72", "1:100", "1:122", "1:200", "1:250", 
            "1:300", "1:350", "1:500", "1:540", "1:400", "1:700", "1:800"] 
        }, //note: 1:35 is figures. Soldiers, civillians, animals etc
    Revell: {
            scales: ["1:1", "1:6", "1:8", "1:9", "1:12", "1:13", "1:16", "1:18", "1:20", "1:24", "1:25", "1:28",
             "1:31", "1:32", "1:35", "1:39", "1:40", "1:48", "1:50", "1:54", "1:56", "1:57", "1:64", "1:65", "1:67",
             "1:70", "1:72", "1:75", "1:76", "1:78", "1:81", "1:83", "1:87", "1:90", "1:96", "1:100", "1:104", "1:108", 
             "1:110", "1:112", "1:120", "1:125", "1:139", "1:144", "1:146", "1:150", "1:172", "1:175", "1:180", "1:200", 
             "1:220", "1:225", "1:275", "1:288", "1:350", "1:400", "1:530", "1:535", "1:542", "1:570", "1:600", "1:700", 
             "1:720", "1:1200"] //1:13 is their dinosaur range
         },
    Heller: {
        scales: ["1:8", "1:9", "1:12", "1:16", "1:18", "1:20", "1:24", "1:25", "1:30", "1:32", "1:35", "1:40", "1:43", "1:48", 
            "1:50", "1:60", "1:65", "1:72", "1:75", "1:76", "1:82", "1:85", "1:87", "1:90", "1:94", "1:96", "1:98", "1:100", 
            "1:110", "1:124", "1:125", "1:130", "1:144", "1:150", "1:170", "1:180", "1:200", "1:220", "1:225", "1:240", 
            "1:250", "1:270", "1:288", "1:300", "1:350", "1:400", "1:440", "1:450", "1:487", "1:500", "1:600", "1:650", 
            "1:750", "1:800", "1:1200", "1:1400", "1:1600", "1:1750", "1:2000"]
    },
    Italeri : {
        scales: ["1:6", "1:7", "1:9", "1:12", "1:16", "1:22", "1:24", "1:32", "1:35", "1:48", "1:56", "1:72", "1:87", "1:100",
                 "1:144", "1:200", "1:250", "1:350", "1:500", "1:540", "1:700", "1:720"]
  
    }
}

//Generating scale cards

if(list){
    const allScale = [...new Set(
        Object.values(manufacturers).flatMap(manufacturer => manufacturer.scales)
    )
    ];
    allScales.forEach(function(scale) {
        const card = document.createElement("li");
        card.classList.add("manufacturer-card");
        card.dataset.scale = scale;
        const descriptions = scaleDescriptions[scale] ||
        "A range of scale models for manufacturers.";
        card.innerHTML = 
        '
        <div class="card-inner">
        <div class="card-front">
            <h2>${scale}</h2>
            </div>
            <div class="card-back">
                <h3>${scale}</h3>
                <p>${descriptions}</p>
                <button class="expl">View model types:</button>
                </div>
            </div>
            ';
    })
}