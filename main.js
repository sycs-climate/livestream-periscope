function adjustFrames() {
  var frames = document.getElementsByTagName('iframe');
  var dimensions = Math.ceil(Math.sqrt(frames.length || 1));
  var dimensionX = 100 / dimensions;
  var dimensionY = (frames.length < dimensions ** 2 - dimensions + 1) ? 100 / (dimensions - 1) : dimensionX;
  if (window.innerHeight > window.innerWidth) {
    var dimensionTmp = dimensionX;
    dimensionX = dimensionY;
    dimensionY = dimensionTmp;
  }
  for (var i = 0; i < frames.length; i++) {
    frames[i].style.width = dimensionX.toString() + '%';
    frames[i].style.height = dimensionY.toString() + '%';
  }
}

function createFrame(url) {
  document.getElementById('no-livestreams-message').className = 'hidden';
  var iframe = document.createElement('iframe');
  iframe.src = url;
  document.getElementById('iframe-container').appendChild(iframe);
  adjustFrames();
}

function deleteFrame(url) {
  var iframes = document.querySelectorAll('[src="' + url + '"]');
  for (var i = 0; i < iframes.length; i++) {
    document.getElementById('iframe-container').removeChild(iframes[i]);
  }
  iframes = document.querySelectorAll('[src="' + url + '"]');
  if (!iframes.length) {
    document.getElementById('no-livestreams-message').className = '';
  }
  adjustFrames();
}

window.addEventListener("resize", adjustFrames);
