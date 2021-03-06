//------------------- Helpers -------------------//

// accepts jQuery object, node list, string selector, then called a setup for each element
var loopPressureElements = function(selector, closure, options = {}){
  // if a string is passed in as an element
  if(typeof selector === 'string' || selector instanceof String){
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      new Element(elements[i], closure, options);
    }
  // if a single element object is passed in
  } else if(isElement(selector)){
    new Element(selector, closure, options);
  // if a node list is passed in ex. jQuery $() object
  } else {
    for (var i = 0; i < selector.length; i++) {
      new Element(selector[i], closure, options);
    }
  }
}

//Returns true if it is a DOM element
var isElement = function(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}

// the map method allows for interpolating a value from one range of values to another
// example from the Arduino documentation: https://www.arduino.cc/en/Reference/Map
var map = function(x, in_min, in_max, out_min, out_max){
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// check if device is desktop device
var isDesktop = 'ontouchstart' in document === false;

// check if device is regular mobile device
var isMobile = 'ontouchstart' in document === true;

// check if device is an Apple iOS 10+ device
var supportsTouchForceChange = 'ontouchforcechange' in document;
