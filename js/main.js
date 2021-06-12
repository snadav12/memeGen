'use strict';
var gCanvas;
var gCtx;
var gCurrMemeIdx;

function onInit() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    gCurrMemeIdx = getCurrMeme();
}

function renderMeme(idx) {
    var meme = getMeme(idx);
    var img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        if (meme.lines.length > 0) _addLinesToMeme(meme.lines);
    }
    document.querySelector('.text-input').value = (meme.lines.length > 0) ? meme.lines[meme.selectedLineIdx].txt : '';

}

function onChangLinePosY(diff) {}

function onRemoveLine() {
    console.log(gCurrMemeIdx);
    removeLine(gCurrMemeIdx);
    renderMeme(gCurrMemeIdx);
}

function onChangLinePosX(pos) {
    changLinePosX(gCurrMemeIdx, pos);
    renderMeme(gCurrMemeIdx);
}

function onIncDecFont(diff) {
    incDecFont(gCurrMemeIdx, diff);
    renderMeme(gCurrMemeIdx);
}


function onAddLineToMeme() {
    addLineToMeme(gCurrMemeIdx);
    renderMeme(gCurrMemeIdx);
}

function onOpanEditor(imgId) {
    document.querySelector('.gallary').classList.toggle('hidden');
    document.querySelector('.meme-editor ').classList.toggle('hidden');
    document.querySelector('.btn-gallery').classList.toggle('active');
    addMeme(imgId);
    gCurrMemeIdx = getCurrMeme();
    renderMeme(gCurrMemeIdx);
}

function onSwicthLine() {
    var lines = getMeme(gCurrMemeIdx).lines;
    var lineIdx = getMemeLineIdx(gCurrMemeIdx);
    if (lineIdx + 1 > lines.length - 1) lineIdx = 0;
    else lineIdx++;

    changLineIdxForIdx(gCurrMemeIdx, lineIdx);
    renderMeme(gCurrMemeIdx);
}

function _addLinesToMeme(lines) {
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = 'black';
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px impact`;
        gCtx.textAlign = line.align;
        var posX = _getPosissionX(line.align);
        var posY = _getPosissionY(i, line.size);
        gCtx.fillText(line.txt, posX, posY);
        gCtx.strokeText(line.txt, posX, posY);
    }
}

function _getPosissionX(align) {
    var pos;
    if (align === 'left') pos = 0;
    else if (align === 'right') pos = gCanvas.width;
    else if (align === 'center') pos = gCanvas.width / 2;
    return pos;
}

function _getPosissionY(lineIdx, size) {
    var pos;
    if (lineIdx === 0) pos = 0 + size;
    else if (lineIdx === 1) pos = gCanvas.height;
    else if (lineIdx > 1) pos = gCanvas.height / 2;
    return pos;
}

function onChangLine(elTxt) {
    changLineForIdx(gCurrMemeIdx, elTxt.value);
    renderMeme(gCurrMemeIdx);
}

function opanGallery() {
    document.querySelector('.meme-editor ').classList.add('hidden');
    document.querySelector('.gallary').classList.remove('hidden');
    document.querySelector('.btn-gallery').classList.add('active');
}