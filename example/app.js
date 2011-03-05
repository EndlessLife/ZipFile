// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var zipfile = require('zipfile');
Ti.API.info("module is => " + zipfile);

label.text = zipfile.example();

Ti.API.info("module exampleProp is => " + zipfile.exampleProp);
zipfile.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = zipfile.createExample({message: "Creating an example Proxy"});
	proxy.printMessage("Hello world!");
}