'use strict';

var gMeme = [{
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 40,
        align: 'left',
        color: 'red'
    }]
}, ]


function getMemeImg(idx = 0) {
    var meme = gMeme[idx];
    return meme.selectedImgId;
}

function getMemeLine(idx = 0) {
    var meme = gMeme[idx];
    return meme.lines[meme.selectedLineIdx];
}