'use strict';
const KEY = 'Memes';

var gMemes = [{
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 40,
        align: 'center',
        color: 'white'
    }, ]
}, ]
saveToStorage(KEY, gMemes);

function getMemes() {
    return loadFromStorage(KEY);
}

function removeLine(idx) {
    var lineIdx = gMemes[idx].selectedLineIdx;
    gMemes[idx].lines.splice(lineIdx, 1);
    gMemes[idx].selectedLineIdx = 0;
    saveToStorage(KEY, gMemes);
}


function addMeme(ImgId) {
    var meme = {
        selectedImgId: ImgId,
        selectedLineIdx: 0,
        lines: []
    }
    gMemes.push(meme);
    saveToStorage(KEY, gMemes);
}

function addLineToMeme(idx) {
    var meme = gMemes[idx];
    var line = {
        txt: '',
        size: 40,
        align: 'center',
        color: 'white'
    }
    meme.lines.push(line);
    saveToStorage(KEY, gMemes);
}

function changLinePosX(idx, pos) {
    gMemes[idx].lines[gMemes[idx].selectedLineIdx].align = pos;
}

function incDecFont(idx, diff) {
    gMemes[idx].lines[gMemes[idx].selectedLineIdx].size += diff;

}


function getMeme(idx) {
    var meme = gMemes[idx];
    return meme;
}

function getMemeLineIdx(idx) {
    var meme = gMemes[idx];
    return meme.selectedLineIdx;
}

function changLineIdxForIdx(idx, lineIdx) {
    gMemes[idx].selectedLineIdx = lineIdx;
}

function changLineForIdx(idx, txt) {
    if (gMemes[idx].lines.length > 0) gMemes[idx].lines[gMemes[idx].selectedLineIdx].txt = txt;
}

function getCurrMeme() {
    return gMemes.length - 1;
}