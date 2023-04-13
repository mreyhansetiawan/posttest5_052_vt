var container = document.querySelector('#container');

var panorama = new PANOLENS.ImagePanorama('gambar1.jpg');
var panorama2 = new PANOLENS.ImagePanorama('gambar2.jpg');
var panorama3 = new PANOLENS.ImagePanorama('gambar3.jpg');

var viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama, panorama2, panorama3);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);

var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot2.position.set(0, -2000, -5000);
panorama2.add(infospot2);

var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot3.position.set(0, -2000, -5000);
panorama3.add(infospot3);

infospot.addEventListener('click', function() {
    viewer.setPanorama(panorama2);
});

infospot2.addEventListener('click', function() {
    viewer.setPanorama(panorama3);
});

infospot3.addEventListener('click', function() {
    viewer.setPanorama(panorama);
});