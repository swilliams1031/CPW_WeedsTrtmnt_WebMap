document.addEventListener('DOMContentLoaded', function() {
    /*
    your code will go here
    this is the event callback function that is called when the document content has been loaded
    we need our map container to be ready before dropping our map in, for example
    *this is new as js bin takes care of this for you

    Put all of the ArcGIS API stuff in here.  This is what makes the map work.
    */

    require([
        "esri/map",
        "esri/layers/FeatureLayer",
        "dojo/domReady!"
    ],
            function(
            Map,
             FeatureLayer
            ) {

        var map = new Map("map", {
            basemap: "hybrid",
            center: [-105.7821, 39.5501],
            zoom: 7
        });

        var parksPoints = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/COParks_WeedTreat_Tracking/FeatureServer/0");    
        map.addLayer(parksPoints);

        var parksBoundaries = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/COParks_WeedTreat_Tracking/FeatureServer/3");
        map.addLayer(parksBoundaries);

        var parkIndexGrids = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/COParks_WeedTreat_Tracking/FeatureServer/2");
        map.addLayer(parkIndexGrids);

        var weedTreatments = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/COParks_WeedTreat_Tracking/FeatureServer/1");
        map.addLayer(weedTreatments);

    });
});