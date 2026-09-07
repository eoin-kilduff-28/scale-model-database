const btn = document.getElementById("btn");
const cards = document.querySelectorAll(".card-inner");
const exp = document.querySelectorAll(".expl");

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
        window.location.href = "scale1.html";
    });
});

const manufacturers = {
    Airfix: {
        scales: ["1:1", "1:4", "1:6", "1:8", "1:9", "1:10", "1:11", "1:12", "1:14", "1:16", "1:20", "1:21", "1:22", "1:24", "1:25", "1:26", "1:29",
            "1:32", "1:34", "1:35", "1:38", "1:43", "1:45", "1:48", "1:51", "1:54", "1:58", "1:63", "1:72", "1:74", "1:75", "1:76", "1:78",
            "1:85", "1:87", "1:89", "1:91", "1:94", "1:95", "1:96", "1:100", "1:120", "1:130", "1:144", "1:150", "1:168", "1:180", "1:200", "1:300", "1:350", "1:400", "1:440",
            "1:480", "1:600", "1:700", "1:775", "1:1000", "1:1200", "1:4222"]
        },
    Tamiya: {
        scales: ["1:1", "1:6", "1:12", "1:16", "1:18", "1:20", "1:21", "1:24", "1:25", "1:28", "1:32", "1:35", "1:36", 
            "1:48", "1:43", "1:48", "1:50", "1:55", "1:60", "1:70", "1:72", "1:100", "1:122", "1:144", "1:200", "1:250", 
            "1:300", "1:350", "1:500", "1:540", "1:400", "1:700", "1:800"] 
        }, //note: 1:35 is figures. Soldiers, civillians, animals etc
        Revell: {
            scales: ["1:1", "1:6", "1:8", "1:9", "1:12", "1:13", "1:16", "1:18", "1:20", "1:24", "1:25", "1:28",
             "1:31", "1:32", "1:35", "1:39", "1:40", "1:48", "1:50", "1:54", "1:56", "1:57", "1:64", "1:65", "1:67",
             "1:70", "1:72", "1:75", "1:76", "1:78", "1:81", "1:83", "1:87", "1:90", "1:96", "1:100", "1:104", "1:108", 
             "1:110", "1:112", "1:120", "1:125", "1:133", "1:139", "1:144", "1:146", "1:150", "1:172", "1:175", "1:180", "1:200", 
             "1:220", "1:225", "1:275", "1:288", "1:350", "1:400", "1:530", "1:535", "1:542", "1:570", "1:600", "1:700", 
             "1:720", "1:1200"] //1:13 is their dinosaur range
            }
    }
