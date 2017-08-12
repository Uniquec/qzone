import {visitors} from './config';
$(function () {
    let current = 0;

    function setText(res, current) {
        // TODO for重构
        $('#image1').attr('src', res[current].image);
        $('#image-name1').text(res[current].name);
        $('#image2').attr('src', res[current + 1].image);
        $('#image-name2').text(res[current + 1].name);
        $('#image3').attr('src', res[current + 2].image);
        $('#image-name3').text(res[current + 2].name);
        $('#image4').attr('src', res[current + 3].image);
        $('#image-name4').text(res[current + 3].name);
        $('#image5').attr('src', res[current + 4].image);
        $('#image-name5').text(res[current + 4].name);
        $('#image6').attr('src', res[current + 5].image);
        $('#image-name6').text(res[current + 5].name);
        $('#image7').attr('src', res[current + 6].image);
        $('#image-name7').text(res[current + 6].name);
        $('#image8').attr('src', res[current + 7].image);
        $('#image-name8').text(res[current + 7].name);
        $('#image9').attr('src', res[current + 8].image);
        $('#image-name9').text(res[current + 8].name);
    }

    $.getJSON(visitors, (res)=> {
        setText(res, current);
        console.log(res);

    })


})