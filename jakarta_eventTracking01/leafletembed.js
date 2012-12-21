var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © OpenStreetMap contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});		

	// start the map in jakarta
	map.setView(new L.LatLng(-6.08, 106.45),9);
	map.addLayer(osm);
    
    
                                                
                                                
    //add 321 layer                                            
    var layer321URL= '321/{z}/{x}/{y}.png';
    var layer321 = new L.TileLayer(layer321URL, {maxZoom: 18, scheme:'tms'});
    map.addLayer(layer321);


	//add 432 layer
    var layer432URL= '432/{z}/{x}/{y}.png';
    var layer432 = new L.TileLayer(layer432URL, {maxZoom: 18, scheme:'tms'});
    map.addLayer(layer432);


	//add 453 layer
    var layer453URL= '453/{z}/{x}/{y}.png';
    var layer453 = new L.TileLayer(layer453URL, {maxZoom: 18, scheme:'tms'});
    map.addLayer(layer453);


	//add 543 layer
    var layer543URL= '543/{z}/{x}/{y}.png';
    var layer543 = new L.TileLayer(layer543URL, {maxZoom: 18, scheme:'tms'});
    map.addLayer(layer543);

	//add 754 layer
    var layer754URL= '754/{z}/{x}/{y}.png';
    var layer754 = new L.TileLayer(layer754URL, {maxZoom: 18, scheme:'tms'});
    map.addLayer(layer754);

	//create an object that holds the base layers
	
	var baselayers= {
		"Open Street Maps": osm,
		"True Color": layer321,
		"Vegetation": layer432,
		"Urban": layer543,
		"Soil": layer453,
		"Moisture": layer754
	};
	
	var layersControl = new L.Control.Layers(baselayers);

	map.addControl(layersControl);

}