// ???
tt.setProductInfo('<your-product-name>', '<your-product-version>');
            
var map = tt.map({
    key: 'NLbGYpRnYCS3jxXsynN2IfGsmEgZJJzB',
    container: 'map',
    dragPan: !isMobileOrTablet(),
    center: [8.905637901540159, 45.87046993195745],
    zoom: 3
});

map.addControl(new tt.FullscreenControl());

map.addControl(new tt.NavigationControl());

function createMarker(icon, position, color, popupText) {
    var markerElement = document.createElement('div');

    markerElement.className = 'marker';

    var markerContentElement = document.createElement('div');

    markerContentElement.className = 'marker-content';

    markerContentElement.style.backgroundColor = color;

    markerElement.appendChild(markerContentElement);

    var iconElement = document.createElement('div');

    iconElement.className = 'marker-icon';

    iconElement.style.backgroundImage =
        'url(https://api.tomtom.com/maps-sdk-for-web/cdn/static/' + icon + ')';

    markerContentElement.appendChild(iconElement);

    var popup = new tt.Popup({offset: 30}).setText(popupText);

    // add marker to map
    new tt.Marker({element: markerElement, anchor: 'bottom'})
        .setLngLat(position)
        .setPopup(popup)
        .addTo(map);
}

// marker for places 
// first number for long second for lat
createMarker('accident.colors-white.svg', [8.905637901540159, 45.87046993195745], '#5327c3', 'Davide');
createMarker('accident.colors-white.png', [13.718313926673803, 51.040246512618175], '#c30b82', 'Eugenio');
createMarker('accident.colors-white.jpg', [8.066856451730139, 45.55913188493817], '#c31a26', 'GIovanni');
createMarker('accident.colors-white.jpg', [12.495479108282913, 41.91816100618742], '#c31a26', 'Camilla');
