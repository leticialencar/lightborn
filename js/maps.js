var map = L.map('mapid').setView([-7.205917, -39.312102], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var alertIcon = L.divIcon({
    className: 'solid-icon',
    html: '<div style="width: 20px; height: 20px; border-radius: 50%; background-color: red;"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -15]
});

function addAlertMarker(lat, lng, label, details) {
    var marker = L.marker([lat, lng], { icon: alertIcon }).addTo(map);
    
    var popupContent = `
        <b>${label}</b><br>
        <p><strong>Detalhes:</strong> ${details}</p>
    `;
    
    var popup = marker.bindPopup(popupContent, {
        closeButton: false
    });

    marker.on('mouseover', function() {
        marker.openPopup();
    });

    marker.on('mouseout', function() {
        marker.closePopup();
    });

    marker.on('click', function() {
        marker.openPopup();
    });
}

addAlertMarker(-7.205917, -39.312102, "Rua Santa Isabel", "Poste com falha na iluminação, necessita de reparo.");
addAlertMarker(-7.2062, -39.3145, "Rua Doutor Diniz", "Poste quebrado, iluminação intermitente.");
addAlertMarker(-7.2071, -39.3103, "Rua São Luís", "Fiação exposta, risco de curto-circuito.");
addAlertMarker(-7.2100, -39.3200, "Rua Delmiro Gouveia", "Poste com lâmpada queimado, necessita de substituição.");
addAlertMarker(-7.2150, -39.3300, "Rua Monsenhor Lima", "Poste instável, risco de queda.");
addAlertMarker(-7.2125, -39.3150, "Rua Avenida Carlos Cruz", "Poste com iluminação intermitente, necessita de revisão.");
addAlertMarker(-7.2175, -39.3350, "Rua Francisco Edmilson de Sá", "Poste com fiação exposta, risco de curto-circuito.");

