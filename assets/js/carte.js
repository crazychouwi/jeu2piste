  var infowindow = null;
  var image = {
    url: 'assets/img/navireRomain.png',
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // ancho
  };

  function AddMarker(locationMarker, titleString, contentString, map) {
      var marker = new google.maps.Marker({
          position: locationMarker,
          map: map,
          title: titleString
      });
      google.maps.event.addListener(marker, 'click', function() {
          if (infowindow) {
              infowindow.close();
          }
          infowindow = new google.maps.InfoWindow({
            content: contentString
          }
          );
          infowindow.open(map, marker);
      });
    // end function AddMarker
    }

  function initMap() {
      var narbonne = {lat: 43.18700000, lng: 3.0040000};
      /*
      var image = {
        url: 'assets/img/navireRomain.png',
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // ancho
      };
      */
      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: narbonne
      });

      // Moulin de Gua
      var titleGua = "Moulin de Gua";
      var contentGua = '<h3>6. '+titleGua+'</h3>';
      var locationMarker = {lat : 43.1911108, lng: 3.0007354};
      AddMarker(locationMarker, titleGua, contentGua, map);

      // Quai d'Alsace Lorraine
      var titleQuai = 'Quai d\'Alsace et Quai de Lorraine';
      var contentQuai = '<h3>5. '+titleQuai+'</h3>';
      var locationMarker = {lat : 43.1870456, lng: 2.9975724};
      AddMarker(locationMarker, titleQuai, contentQuai, map);

      // La Robine Médiathèque
      var titleMed = "Médiathèque";
      var contentMed = '<h3>4. '+titleMed+'</h3>';
      var locationMarker = {lat : 43.1850450, lng: 2.9996510};
      AddMarker(locationMarker, titleMed, contentMed, map);

      // La Robine -L’ecluse de la capitainerie
      var titleRob = 'L’écluse de la capitainerie';
      var contentRob = '<h3>3. '+titleRob+'</h3>';
      var locationMarker = {lat : 43.1841081, lng: 3.0017996};
      AddMarker(locationMarker, titleRob, contentRob, map);

      // Quai Mirabeau
      var titleMir = 'Quai mirabeau';
      var contentMir = '<h3>2. '+titleMir+'</h3>';
      var locationMarker = {lat : 43.1826491, lng: 3.0046293};
      AddMarker(locationMarker, titleMir, contentMir, map);

      // Quai Victor Hugo
      var titleVic = 'Quai Victor Hugo';
      var contentVic = '<h3>1.'+titleVic+'</h3>';
      var locationMarker = {lat : 43.1804527, lng: 3.0096638};
      AddMarker(locationMarker, titleVic, contentVic, map);

  // Fin function initMap()
  }
