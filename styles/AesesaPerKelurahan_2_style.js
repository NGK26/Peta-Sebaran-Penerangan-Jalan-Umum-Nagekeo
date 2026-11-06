var size = 0;
var placement = 'point';

var style_AesesaPerKelurahan_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Open Sans SemiBold\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("NAME_4") !== null) {
        labelText = String(feature.get("NAME_4"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,243,180,1.0)', lineDash: [9.12,4.56], lineCap: 'butt', lineJoin: 'miter', width: 4.56}),fill: new ol.style.Fill({color: 'rgba(221,221,221,0.39215686274509803)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
