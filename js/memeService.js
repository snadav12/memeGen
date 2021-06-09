'use strict';

var gMeme = [{
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 40,
        align: 'center',
        color: 'white'
    }]
}, ]


function getMeme(idx = 0) {
    var meme = gMeme[idx];
    return meme;
}

function getMemeLine(idx = 0) {
    var meme = gMeme[idx];
    return meme.lines[meme.selectedLineIdx];
}

function changLineForIdx(idx, txt) {
    gMeme[idx].lines[gMeme[idx].selectedLineIdx].txt = txt;
}