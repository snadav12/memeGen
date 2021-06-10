'use strict';

var gMeme = [{
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 40,
        align: 'center',
        color: 'white'
    }, ]
}, ]

function addMeme(ImgId) {
    var meme = {
        selectedImgId: ImgId,
        selectedLineIdx: 0,
        lines: []
    }
    gMeme.push(meme);
}

function addLineToMeme(idx) {
    var meme = gMeme[idx];
    var line = {
        txt: '',
        size: 40,
        align: 'center',
        color: 'white'
    }
    meme.lines.push(line);
}

function changLinePosX(idx, pos) {
    gMeme[idx].lines[gMeme[idx].selectedLineIdx].align = pos;
}

function incDecFont(idx, diff) {
    gMeme[idx].lines[gMeme[idx].selectedLineIdx].size += diff;

}


function getMeme(idx) {
    var meme = gMeme[idx];
    return meme;
}

function getMemeLineIdx(idx) {
    var meme = gMeme[idx];
    return meme.selectedLineIdx;
}

function changLineIdxForIdx(idx, lineIdx) {
    gMeme[idx].selectedLineIdx = lineIdx;
}

function changLineForIdx(idx, txt) {
    if (gMeme[idx].lines.length > 0) gMeme[idx].lines[gMeme[idx].selectedLineIdx].txt = txt;
}

function getCurrMeme() {
    return gMeme.length - 1;
}