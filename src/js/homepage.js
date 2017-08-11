$(function () {
    let current = 0;
    function setText(res, current) {
        $('#image-name1').text(res[current].name);
        $('#image-name2').text(res[current+1].name);
        $('#image-name3').text(res[current+2].name);
        $('#image-name4').text(res[current+3].name);
        $('#image-name5').text(res[current+4].name);
        $('#image-name6').text(res[current+5].name);
        $('#image-name7').text(res[current+6].name);
        $('#image-name8').text(res[current+7].name);
        $('#image-name9').text(res[current+8].name);
    }

    $.get('../data/visitors.json', (res)=> {
        setText(res, current);
        console.log(res);

    })

})