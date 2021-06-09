'use strict';
onInit();
var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    renderMeme(0);

}

function renderMeme(idx) {
    var meme = getMeme(idx);
    var img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    var line = meme.lines[meme.selectedLineIdx];
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px impact`;
        gCtx.textAlign = line.align;
        var posX = _getPosissionX(line.align);
        var posY = _getPosissionY(meme.selectedLineIdx, line.size);
        gCtx.fillText(line.txt, posX, posY);
        gCtx.strokeText(line.txt, posX, posY);
    }
    document.querySelector('.text-input').value = line.txt;
}


function _getPosissionX(align) {
    var pos;
    if (align === 'left') pos = 0;
    else if (align === 'right') pos = 500;
    else if (align === 'center') pos = 250;
    return pos;
}

function _getPosissionY(lineIdx, size) {
    console.log(lineIdx);
    var pos;
    if (lineIdx === 0) pos = 0 + size;
    else if (lineIdx === 1) pos = 500;
    else if (lineIdx > 1) pos = 250;
    return pos;
}

function onChangLine(elTxt) {
    changLineForIdx(0, elTxt.value);
    renderMeme(0);
}