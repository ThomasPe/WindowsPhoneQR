// Get App ID
var url = window.location.pathname;
var pathArray = url.split( '/' );
var appid = pathArray[5];
var uri = 'http://windowsphone.com/s?appId=' + appid;
// Insert QR Code
var qrcode = '<div id="qrCode"><div>'
$('#offerRating').after(qrcode);

var qrcode = new QRCode("qrCode", {
    text: uri,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff"
});