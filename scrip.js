// Testdata
const boats = [
    {
        id: "A-01",
        name: "Testperson",
        phone: "90000000",
        email: "test@example.no",

        // Prosent av kartet
        x: 18,
        y: 72
    }
];

const overlay = document.getElementById("overlay");

// Når bildet er lastet
window.addEventListener("load", drawMarkers);

function drawMarkers() {

    overlay.innerHTML = "";

    boats.forEach(boat => {

        let circle =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );

        circle.setAttribute("cx", boat.x + "%");
        circle.setAttribute("cy", boat.y + "%");
        circle.setAttribute("r", 12);

        circle.setAttribute("fill", "#1e88e5");
        circle.setAttribute("stroke", "white");
        circle.setAttribute("stroke-width", 3);

        circle.style.cursor = "pointer";

        circle.addEventListener("click", () => {
            showBoat(boat);
        });

        overlay.appendChild(circle);

    });

}

function showBoat(boat){

    document.getElementById("popup-title").innerText = boat.id;

    document.getElementById("popup-name").innerHTML =
        "👤 " + boat.name;

    document.getElementById("popup-phone").innerHTML =
        "📞 " + boat.phone;

    document.getElementById("popup-email").innerHTML =
        "✉️ " + boat.email;

    document.getElementById("popup")
        .classList.remove("hidden");

}

function closePopup(){

    document.getElementById("popup")
        .classList.add("hidden");

}
