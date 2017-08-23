import {visitors, smalltalks} from './config';
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

    $.get(visitors, (res)=> {
        setText(res, current);
        // console.log(res);
    });

    $.get(smalltalks, (res)=> {
        createSmalltalk(res);
    })

    function createSmalltalk(smalltalkarr) {
        // console.log(smalltalkarr);
        for (let i = 0; i < smalltalkarr.length; i++) {
            let data = smalltalkarr[i];
            // console.log(data);
            let smalltalk = $(` <div class="small-talk">`);
            let talkerMessage = $(`
                <div class="talker-message">
                    <img src="../image/head-portrait.jpg" class="talker-image">
                    <div class="talker-tips">
                        <div class="talker-name">岁月静好。</div>
                        <div>${data.time}</div>
                    </div>
                    <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                </div>
            `);
            let talkContent = $(`
                <div class="talk-content">
                    <div class="words">${data.content}</div>
                    <div class="talk-image"><img src="${data.pic}"></div>
                    <div class="mobile-logo"><i class="iconfont icon-p-shouji"></i>来自 ${data.equipment}</div>
                </div>
            `);
            let likesarr = data.star.join('、');
            let a = data.starNumber === data.star.length ? '共' : '等';
            let talkMessage = $(`
                 <div class="talk-message">
                    <div class="looks-people">浏览${data.watchNumber}次<i class="iconfont icon-dianzan1"></i><i
                            class="iconfont icon-comment"></i><i class="iconfont icon-share"></i></div>
                    <div class="grey-line"></div>
                    <div class="likes-people">
                        <div class="icon-bgc"><i class="iconfont icon-dianzan1"></i></div>
                        <div class="likes-name">${likesarr}${a}${data.starNumber}人觉得很赞</div>
                    </div>
                </div>
            `);

            let specificComments = $(`<div class="specific-comments"></div>`);
            for (let j = 0; j < data.comment.length; j++) {
                let commentdata = data.comment[j];
                // console.log('commentdata');
                // console.log(commentdata);
                let ReSpecificComments = $(`
                    <div class="comment">
                        <div class="reviewer-comment">
                            <img src="${commentdata.pic}">
                            <div class="comment-content">
                                <div><span>${commentdata.from}</span>  : ${commentdata.content}</div>
                                <div class="comment-time">${commentdata.time}</div>
                            </div>
                        </div>
                    </div>
                `);
                let replyComments = $(' <div class="reply-comments"></div>')
                if(commentdata.reply) {
                    for (let k = 0; k < commentdata.reply.length; k++) {
                        let rcommentdata = commentdata.reply[k];
                        // console.log('rcommentdata');
                        // console.log(rcommentdata);
                        let replyComment = $(`
                            <div class="reply-comments-image">
                                <img src="${rcommentdata.pic}">
                            </div>
                            <div class="reply-comments-content">
                                <div><span>${rcommentdata.from} </span>回复<span>${rcommentdata.to} </span>: ${rcommentdata.content}</div>
                                <div class="comment-time">${rcommentdata.time}</div>
                            </div>
                        </div>
                    `);
                        replyComments.append(replyComment);
                    }
                }
                specificComments.append(ReSpecificComments).append(replyComments);

            }
            let talkComment = $(`
                <div class="talk-comment">
                    <textarea placeholder="评论" class="comment-text"></textarea>
                    <i class="iconfont icon-camera"></i>
                </div>
            `);





            smalltalk.append(talkerMessage).append(talkContent).append(talkMessage).append(specificComments).append(talkComment);

            $('.homepage-rmessage').append(smalltalk);

        }

        let publishComment = $(`
             <div class="publish-comment">
                <div class="comment-expression">
                    <i class="iconfont icon-biaoqing"></i>
                    <div class="expression-scircle"></div>
                </div>
                <i class="iconfont icon-aite"></i>
                <div class="white-circle"></div>
                <div class="private-comment">私密评论</div>
                <i class="iconfont icon-diamonds"></i>
                <button>发表</button>
             </div>
        `);

        $(".comment-text").click(function (e) {
            $(".comment-text").css("height","40px");
            $(".icon-camera").css("padding-top","8px");
            let commentText = $(e.currentTarget);
            commentText.css("height","77px");
            commentText.attr('placeholder','');
            $(commentText.next()).css("padding-top","45px");
            $(commentText.next()).css("color","#e6b85c");
            commentText.parent().parent().append(publishComment);
        });
    }
});