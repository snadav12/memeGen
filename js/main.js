'use strict';
onInit();
var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');

    onAddImgToCanvas(getMemeImg(0));
    onAddText(getMemeLine(0))
}

function onAddImgToCanvas(imgIdx) {
    console.log();
    var img = new Image()
    img.src = `img/${imgIdx}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
}

function onAddText(line) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.size}px Arial`;
    gCtx.textAlign = line.align;
    var pos = _getPosission(line.align);
    gCtx.fillText(line.txt, pos, line.size);
    gCtx.strokeText(line.txt, pos, line.size);

}

function _getPosission(align) {
    var pos;
    if (align === 'left') pos = 0;
    else if (align === 'right') pos = 500;
    else if (align === 'center') pos = 250;
    return pos;
}