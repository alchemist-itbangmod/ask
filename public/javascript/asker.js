'use strict'

$(document).ready(function() {
    window.freshman;

    if(localStorage.getItem('freshman') != null) {
        window.freshman = JSON.parse(localStorage.getItem('freshman'));
        $('.login').addClass('inactive');
        setTimeout(function(){
            $('.main').addClass('active');
            $('.logout').addClass('active');
        },500);

        $('.main .id span').text(window.freshman.school);
        $('.main .name span').text('น้อง'+window.freshman.username);

    }

    // login
    $('.login-btn').click(function(){
      if($('.username input').val() != '' && $('.school input').val() != ''){

        window.freshman = {
          username: $('.username input').val(),
          school: $('.school input').val()
        };

        localStorage.setItem('freshman', JSON.stringify(freshman));
        $('.login').addClass('inactive');
        setTimeout(function(){
            $('.main').addClass('active');
            $('.logout').addClass('active');
        },500);

        $('.main .id span').text(window.freshman.school);
        $('.main .name span').text('น้อง'+window.freshman.username);
      }
    });

    // logout
    $('.logout').click(function(){
        localStorage.clear();

        $('.main').removeClass('active');
        $('.logout').removeClass('active');
        setTimeout(function(){
            $('.login').removeClass('inactive');
        },500);
    });


    // main function
    $('.sender-button').click(function() {
        Sender();
    });

    $('.help').click(function() {
        swal({
            text: "I will close in 2 seconds.",
            timer: 2000,
            showConfirmButton: false });
    });

    // socket Zone

    var socket = io.connect();
    socket.on('asker', function(data) {
        if (data.std_id == freshman.stdID) {
            swal({
                title: "อาจารย์กำลังตอบคำถามของน้องอยู่!",
                text: "หน้าต่างนี้จะปิดเองภายใน 10 วินาที.",
                timer: 10000,
                showConfirmButton: false,
                type: "success",
            });
        } else if (data.feedback) {
            swal({
                title: "ชอบรึเปล่า!?",
                text: "เป็นไงบ้างง : ) ถ้าพี่ๆ จะให้มีสอนเขียนเว็บแอพแบบนี้ จะสนใจรึเปล่า ??",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "~",
            }, function(inputValue){

                if (inputValue === false)
                    return false;
                if (inputValue === "") {
                    swal.showInputError("ตอบนะ ตอบนะ นิดนึงก็ยังดี!");
                    return false;
                }

                data = {
                    content: inputValue,
                    std_id: window.freshman.school+" "+window.freshman.username
                };

                $.ajax({
                        method: 'POST',
                        url: "/feedback",
                        data: data,
                    }).done(function(msg) {
                        console.log(msg)
                        swal("เยี่ยม!", "ขอบคุณนะ ! แล้วเจอกันที่ Brown Bag #1 วันที่ 28 กรกฎาคมนี้จ้าา","success");
                    });
            });
        }
    });

    function Sender() {
        if ($('.sender-area').val().length >= 4) {
            swal({
                title: "แน่ใจแล้วนะครับ?",
                text: "น้องกำลังจะส่งคำถามว่า `" + $('.sender-area').val() + "`",
                showCancelButton: true,
                confirmButtonColor: "#37bc9b",
                confirmButtonText: "ใช่, ถูกต้อง!",
                cancelButtonText: "ไม่ใช่",
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
            }, function(isConfirm) {
                if (isConfirm) {
                    // init data
                    var data = {
                        content: $('.sender-area').val(),
                        std_id: window.freshman.school+" "+window.freshman.username
                    };
                    // ajax
                    $.ajax({
                        method: 'POST',
                        url: "/question",
                        data: data,
                    }).done(function(msg) {
                        if (msg.success) {
                            swal({
                                title: "ส่งเรียบร้อยแล้ว!",
                                text: "นั่งรอฟังคำตอบจากอาจารย์ได้เลยครับ : )",
                                type: "success",
                            });
                        } else {
                            swal({
                                title: "เกิดปัญหากับการส่ง!",
                                text: "กรุณาติดต่อพี่ ๆ สตาฟ",
                                type: "warning",
                            });
                        }
                        // clear textarea
                        $('.sender-area').val('');
                    });
                }
            });
        } else {
            swal({
                title: "ยังส่งไม่ได้นะ!",
                text: "เงื่อนไขการส่งยังผิดอยู่ มีคำหยาบหรือว่าคำถามสั้นเกินไปหรือเปล่า ?",
                type: "warning",
            });
        }
    }

});
