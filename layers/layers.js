var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleEart_1 = new ol.layer.Tile({
            'title': 'Google Eart',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AesesaPerKelurahan_2 = new ol.format.GeoJSON();
var features_AesesaPerKelurahan_2 = format_AesesaPerKelurahan_2.readFeatures(json_AesesaPerKelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AesesaPerKelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AesesaPerKelurahan_2.addFeatures(features_AesesaPerKelurahan_2);
var lyr_AesesaPerKelurahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AesesaPerKelurahan_2, 
                style: style_AesesaPerKelurahan_2,
                popuplayertitle: 'Aesesa Per Kelurahan',
                interactive: false,
                title: '<img src="styles/legend/AesesaPerKelurahan_2.png" /> Aesesa Per Kelurahan'
            });
var format_JalanAesesacopy_3 = new ol.format.GeoJSON();
var features_JalanAesesacopy_3 = format_JalanAesesacopy_3.readFeatures(json_JalanAesesacopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanAesesacopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanAesesacopy_3.addFeatures(features_JalanAesesacopy_3);
var lyr_JalanAesesacopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanAesesacopy_3, 
                style: style_JalanAesesacopy_3,
                popuplayertitle: 'Jalan Aesesa copy',
                interactive: true,
    title: 'Jalan Aesesa copy<br />\
    <img src="styles/legend/JalanAesesacopy_3_0.png" /> Aegela-Danga Segmen 1<br />\
    <img src="styles/legend/JalanAesesacopy_3_1.png" /> Aegela-Danga Segmen 2<br />\
    <img src="styles/legend/JalanAesesacopy_3_2.png" /> Aegela-Danga Segmen 3<br />\
    <img src="styles/legend/JalanAesesacopy_3_3.png" /> Jl Depan Bank NTT<br />\
    <img src="styles/legend/JalanAesesacopy_3_4.png" /> Jl Depan Gereja Aeramo<br />\
    <img src="styles/legend/JalanAesesacopy_3_5.png" /> Jl. Aeramo 1<br />\
    <img src="styles/legend/JalanAesesacopy_3_6.png" /> Jl. Aeramo 2<br />\
    <img src="styles/legend/JalanAesesacopy_3_7.png" /> Jl. Aeramo 3<br />\
    <img src="styles/legend/JalanAesesacopy_3_8.png" /> Jl. Aeramo Segmen 4<br />\
    <img src="styles/legend/JalanAesesacopy_3_9.png" /> Jl. Anton Bhia Wea<br />\
    <img src="styles/legend/JalanAesesacopy_3_10.png" /> Jl. Bendungan Sutami<br />\
    <img src="styles/legend/JalanAesesacopy_3_11.png" /> Jl. Civic Center<br />\
    <img src="styles/legend/JalanAesesacopy_3_12.png" /> Jl. Dadiwuwu Kobafesa<br />\
    <img src="styles/legend/JalanAesesacopy_3_13.png" /> Jl. Danau Sentani<br />\
    <img src="styles/legend/JalanAesesacopy_3_14.png" /> Jl. Depan RA Kartini<br />\
    <img src="styles/legend/JalanAesesacopy_3_15.png" /> Jl. Dewi Sartika<br />\
    <img src="styles/legend/JalanAesesacopy_3_16.png" /> Jl. Dr. Sutomo<br />\
    <img src="styles/legend/JalanAesesacopy_3_17.png" /> Jl. Fatmawati<br />\
    <img src="styles/legend/JalanAesesacopy_3_18.png" /> Jl. Gang 08 Paudo<br />\
    <img src="styles/legend/JalanAesesacopy_3_19.png" /> Jl. I.H. Doko<br />\
    <img src="styles/legend/JalanAesesacopy_3_20.png" /> Jl. Ir. Djuanda Segmen 2<br />\
    <img src="styles/legend/JalanAesesacopy_3_21.png" /> Jl. Ir. H. Djuanda Segmen 1<br />\
    <img src="styles/legend/JalanAesesacopy_3_22.png" /> Jl. Ir.H. Djuanda Segemen 3<br />\
    <img src="styles/legend/JalanAesesacopy_3_23.png" /> Jl. Jakarta<br />\
    <img src="styles/legend/JalanAesesacopy_3_24.png" /> Jl. Jayapura<br />\
    <img src="styles/legend/JalanAesesacopy_3_25.png" /> Jl. Jendral Soeharto<br />\
    <img src="styles/legend/JalanAesesacopy_3_26.png" /> Jl. Jendral Sudirman Segmen 1<br />\
    <img src="styles/legend/JalanAesesacopy_3_27.png" /> Jl. Jendral Sudirman Segmen 2<br />\
    <img src="styles/legend/JalanAesesacopy_3_28.png" /> Jl. Jhon Bei<br />\
    <img src="styles/legend/JalanAesesacopy_3_29.png" /> Jl. Kelimutu<br />\
    <img src="styles/legend/JalanAesesacopy_3_30.png" /> Jl. KH. Hasyim Asy\'ari<br />\
    <img src="styles/legend/JalanAesesacopy_3_31.png" /> Jl. Kh. Zaenul Arifin<br />\
    <img src="styles/legend/JalanAesesacopy_3_32.png" /> Jl. Ki Hadjar Dewantara<br />\
    <img src="styles/legend/JalanAesesacopy_3_33.png" /> Jl. Kompar<br />\
    <img src="styles/legend/JalanAesesacopy_3_34.png" /> Jl. Kutilang<br />\
    <img src="styles/legend/JalanAesesacopy_3_35.png" /> Jl. Langsat<br />\
    <img src="styles/legend/JalanAesesacopy_3_36.png" /> Jl. Lapangan Aeramo<br />\
    <img src="styles/legend/JalanAesesacopy_3_37.png" /> Jl. LB Moerdani<br />\
    <img src="styles/legend/JalanAesesacopy_3_38.png" /> Jl. Marinir<br />\
    <img src="styles/legend/JalanAesesacopy_3_39.png" /> Jl. Masuk Pasar<br />\
    <img src="styles/legend/JalanAesesacopy_3_40.png" /> Jl. Mgr A.L. da Cunha<br />\
    <img src="styles/legend/JalanAesesacopy_3_41.png" /> Jl. Mgr. Gabriel Manek<br />\
    <img src="styles/legend/JalanAesesacopy_3_42.png" /> Jl. Moh. Hatta<br />\
    <img src="styles/legend/JalanAesesacopy_3_43.png" /> Jl. Mr. Supratman<br />\
    <img src="styles/legend/JalanAesesacopy_3_44.png" /> Jl. Piet A Tallo<br />\
    <img src="styles/legend/JalanAesesacopy_3_45.png" /> Jl. Pramuka<br />\
    <img src="styles/legend/JalanAesesacopy_3_46.png" /> Jl. Puskesmas Kota<br />\
    <img src="styles/legend/JalanAesesacopy_3_47.png" /> Jl. RA Kartini<br />\
    <img src="styles/legend/JalanAesesacopy_3_48.png" /> Jl. Roga Ngole<br />\
    <img src="styles/legend/JalanAesesacopy_3_49.png" /> Jl. Samping Bank BRI<br />\
    <img src="styles/legend/JalanAesesacopy_3_50.png" /> Jl. Sultan Hasanudin<br />\
    <img src="styles/legend/JalanAesesacopy_3_51.png" /> Jl. Suprapto<br />\
    <img src="styles/legend/JalanAesesacopy_3_52.png" /> Jl. To Boawae Segmen 1<br />\
    <img src="styles/legend/JalanAesesacopy_3_53.png" /> Jl. To Boawae Segmen 2<br />\
    <img src="styles/legend/JalanAesesacopy_3_54.png" /> Jl. W.Y. Lalamentik<br />' });
var format_JalanAesesa_4 = new ol.format.GeoJSON();
var features_JalanAesesa_4 = format_JalanAesesa_4.readFeatures(json_JalanAesesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanAesesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanAesesa_4.addFeatures(features_JalanAesesa_4);
var lyr_JalanAesesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanAesesa_4, 
                style: style_JalanAesesa_4,
                popuplayertitle: 'Jalan Aesesa',
                interactive: true,
                title: '<img src="styles/legend/JalanAesesa_4.png" /> Jalan Aesesa'
            });
var format_KebutuhanPJU_5 = new ol.format.GeoJSON();
var features_KebutuhanPJU_5 = format_KebutuhanPJU_5.readFeatures(json_KebutuhanPJU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KebutuhanPJU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KebutuhanPJU_5.addFeatures(features_KebutuhanPJU_5);
var lyr_KebutuhanPJU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KebutuhanPJU_5, 
                style: style_KebutuhanPJU_5,
                popuplayertitle: 'Kebutuhan PJU',
                interactive: true,
                title: '<img src="styles/legend/KebutuhanPJU_5.png" /> Kebutuhan PJU'
            });
var format_PJUEksisting_6 = new ol.format.GeoJSON();
var features_PJUEksisting_6 = format_PJUEksisting_6.readFeatures(json_PJUEksisting_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PJUEksisting_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PJUEksisting_6.addFeatures(features_PJUEksisting_6);
var lyr_PJUEksisting_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PJUEksisting_6, 
                style: style_PJUEksisting_6,
                popuplayertitle: 'PJU Eksisting ',
                interactive: true,
    title: 'PJU Eksisting <br />\
    <img src="styles/legend/PJUEksisting_6_0.png" /> HIDUP<br />\
    <img src="styles/legend/PJUEksisting_6_1.png" /> MATI<br />' });

lyr_GoogleMap_0.setVisible(true);lyr_GoogleEart_1.setVisible(true);lyr_AesesaPerKelurahan_2.setVisible(true);lyr_JalanAesesacopy_3.setVisible(true);lyr_JalanAesesa_4.setVisible(true);lyr_KebutuhanPJU_5.setVisible(true);lyr_PJUEksisting_6.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_GoogleEart_1,lyr_AesesaPerKelurahan_2,lyr_JalanAesesacopy_3,lyr_JalanAesesa_4,lyr_KebutuhanPJU_5,lyr_PJUEksisting_6];
lyr_AesesaPerKelurahan_2.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_JalanAesesacopy_3.set('fieldAliases', {'id': 'id', 'Nama jalan': 'Nama jalan', });
lyr_JalanAesesa_4.set('fieldAliases', {'id': 'id', 'Nama jalan': 'Nama jalan', });
lyr_KebutuhanPJU_5.set('fieldAliases', {'ID_PJU': 'ID_PJU', 'Ruas_Jalan': 'Ruas_Jalan', 'Wilayah_Administrasi_ Kecamatan': 'Wilayah_Administrasi_ Kecamatan', 'Wilayah_Administrasi_ Kelurahan': 'Wilayah_Administrasi_ Kelurahan', 'Kondisi_PJU': 'Kondisi_PJU', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Daya': 'Daya', 'Sumber Daya': 'Sumber Daya', 'Tanggal Inventaris/perbaikan': 'Tanggal Inventaris/perbaikan', 'Tanggal': 'Tanggal', });
lyr_PJUEksisting_6.set('fieldAliases', {'ID_PJU': 'ID_PJU', 'Ruas_Jalan': 'Ruas_Jalan', 'Wilayah_Administrasi_ Kecamatan': 'Wilayah_Administrasi_ Kecamatan', 'Wilayah_Administrasi_ Kelurahan': 'Wilayah_Administrasi_ Kelurahan', 'Kondisi_PJU': 'Kondisi_PJU', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Daya': 'Daya', 'Sumber Daya': 'Sumber Daya', 'Tanggal Inventaris/perbaikan': 'Tanggal Inventaris/perbaikan', 'Tanggal': 'Tanggal', });
lyr_AesesaPerKelurahan_2.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'GID_4': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_JalanAesesacopy_3.set('fieldImages', {'id': 'TextEdit', 'Nama jalan': 'TextEdit', });
lyr_JalanAesesa_4.set('fieldImages', {'id': 'TextEdit', 'Nama jalan': 'TextEdit', });
lyr_KebutuhanPJU_5.set('fieldImages', {'ID_PJU': 'TextEdit', 'Ruas_Jalan': 'TextEdit', 'Wilayah_Administrasi_ Kecamatan': 'TextEdit', 'Wilayah_Administrasi_ Kelurahan': 'TextEdit', 'Kondisi_PJU': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Daya': 'TextEdit', 'Sumber Daya': 'TextEdit', 'Tanggal Inventaris/perbaikan': 'TextEdit', 'Tanggal': 'TextEdit', });
lyr_PJUEksisting_6.set('fieldImages', {'ID_PJU': 'TextEdit', 'Ruas_Jalan': 'TextEdit', 'Wilayah_Administrasi_ Kecamatan': 'TextEdit', 'Wilayah_Administrasi_ Kelurahan': 'TextEdit', 'Kondisi_PJU': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Daya': 'TextEdit', 'Sumber Daya': 'TextEdit', 'Tanggal Inventaris/perbaikan': 'TextEdit', 'Tanggal': 'TextEdit', });
lyr_AesesaPerKelurahan_2.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'GID_4': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_JalanAesesacopy_3.set('fieldLabels', {'id': 'no label', 'Nama jalan': 'no label', });
lyr_JalanAesesa_4.set('fieldLabels', {'id': 'no label', 'Nama jalan': 'inline label - always visible', });
lyr_KebutuhanPJU_5.set('fieldLabels', {'ID_PJU': 'inline label - always visible', 'Ruas_Jalan': 'inline label - always visible', 'Wilayah_Administrasi_ Kecamatan': 'header label - visible with data', 'Wilayah_Administrasi_ Kelurahan': 'inline label - always visible', 'Kondisi_PJU': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Daya': 'header label - visible with data', 'Sumber Daya': 'header label - visible with data', 'Tanggal Inventaris/perbaikan': 'inline label - always visible', 'Tanggal': 'header label - visible with data', });
lyr_PJUEksisting_6.set('fieldLabels', {'ID_PJU': 'inline label - always visible', 'Ruas_Jalan': 'inline label - always visible', 'Wilayah_Administrasi_ Kecamatan': 'header label - visible with data', 'Wilayah_Administrasi_ Kelurahan': 'inline label - always visible', 'Kondisi_PJU': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Daya': 'header label - visible with data', 'Sumber Daya': 'header label - visible with data', 'Tanggal Inventaris/perbaikan': 'inline label - always visible', 'Tanggal': 'header label - visible with data', });
lyr_PJUEksisting_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});