// Get App ID
var url = window.location.pathname;
var pathArray = url.split( '/' );
var appid = pathArray[pathArray.length - 1];
var uri = 'https://www.microsoft.com/store/apps/' + appid;
// Insert QR Code
var qrcode = '<div id="qrCode"><div>'
$('.ph-brand').first().after(qrcode);

var qrcode = new QRCode("qrCode", {
    text: uri,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff"
});