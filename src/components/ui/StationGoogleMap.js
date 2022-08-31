import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
const StationGoogleMap = ({ mapInfo }) => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyDH67DN6864NNdapUfUulrrQHmwa5zU8OA",
      version: "weekly",
    });
    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 20,
      });
      var infowindow = new window.google.maps.InfoWindow();
      var marker, i;
      const bounds = new window.google.maps.LatLngBounds();

      mapInfo.forEach((item, index) => {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(item.stop_lat, item.stop_lon),
          map: map,
        });
        bounds.extend({ lat: item.stop_lat, lng: item.stop_lon });
        window.google.maps.event.addListener(
          marker,
          "click",
          (function (marker, i) {
            return function () {
              infowindow.setContent(`<div>
              <div> <b> Stop Code : </b> ${item.stop_code} </div>
              <div> <b> Stop Name : </b> ${item.stop_name} </div>
              <div> <b> Stop Latitude : </b> ${item.stop_lat} </div>
              <div> <b> Stop Longitude : </b> ${item.stop_lon} </div>
              <div> <b> Stop Description : </b> ${item.stop_desc} </div>
              </div>`);
              infowindow.open(map, marker);
            };
          })(marker, i)
        );
      });
      map.fitBounds(bounds);
    });
  }, [mapInfo]);

  return (
    <div>
      <div style={{ height: "400px" }} id="map"></div>
    </div>
  );
};

export default StationGoogleMap;
