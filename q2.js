var url_string = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
var url = new URL(url_string);
var c = url.searchParams.get("utm_medium");
var d = url.searchParams.get("utm_campaign");
console.log(c);
console.log(d);