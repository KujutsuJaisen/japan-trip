var div = document.getElementById('container');
var PSV = new PhotoSphereViewer({
    panorama: 'img/f01_01.jpg',
    container: div,
    default_position: {long: 4.7, lat: 0},
    time_anim: false, //於幾秒後自轉，預設2000(2秒)，設定為false取消自轉
    navbar: false,
    navbar_style: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
});