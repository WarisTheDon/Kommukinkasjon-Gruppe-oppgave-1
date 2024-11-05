document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([59.4075, 11.3796], 10);

    // Legg til OpenStreetMap lag
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Marker Sarpsborg Busstasjon
    const sarpsborgMarker = L.marker([59.2832, 11.1101]).addTo(map)
        .bindPopup('Sarpsborg Busstasjon')
        .openPopup();

    // Marker Halden Høgskole
    const haldenMarker = L.marker([59.1296, 11.3796]).addTo(map)
        .bindPopup('Halden Høgskole');

    // Marker stopp i mellom
    const busStops = [
        { name: "Kjellerup Busstopp", coords: [59.305, 11.165] },
        { name: "Rolvsøy", coords: [59.296, 11.115] },
        { name: "Grålum", coords: [59.285, 11.115] },
        { name: "Borge", coords: [59.240, 11.220] },
        { name: "Remmen Høgskole", coords: [59.1296, 11.3786] },
    ];

    busStops.forEach(stop => {
        L.marker(stop.coords).addTo(map).bindPopup(stop.name);
    });
});
