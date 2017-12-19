$(function  () {
    $('#banner').carousel({
        interval : 3000     //控制时间
    });
//				点击导航实现滚屏效果
    $('.navbar-nav a,[href="#top"]').click(function () {
        $('body,html').animate({
            scrollTop : $(this.hash).offset().top
        },500);
        return false
    });
    $('[data-toggle="tooltip"]').tooltip();
    $('.fix a:eq(0)').attr('title','010-68602900').tooltip().on('mouseover', function () {
        $(this).html('电话')
    }).on('mouseout', function () {
        $(this).html('<i class="glyphicon glyphicon-earphone"></i>')
    });
    $('.fix a:eq(1)').on('mouseover', function () {
        $(this).html('TOP')
    }).on('mouseout', function () {
        $(this).html('<i class="glyphicon glyphicon-hand-up"></i>')
    });

    //表单验证
    $('.n1,.n2').blur(function () {
        if( $(this).val() == '' ){
            $(this).siblings('.bg-danger').css('display','block')
        }else{
            $(this).siblings('.bg-danger').css('display','none')
        }
    });
    $('.registration [type="submit"]').click(function () {
        for(var i = 0; i < 3; i++){
            if($('.n1').eq(i).val() == ''){
                $('.n1').eq(i).siblings('.bg-danger').css('display','block')
            }
        }

    });
    $('[form="message"]').click(function () {
        for(var i = 0; i < 3; i++){
            if($('.registration .n2').eq(i).val() == ''){
                $('.registration .n2').eq(i).siblings('.bg-danger').css('display','block')
            }
        }
    });
    //弹出框初始化
    $('[data-toggle="popover"]').popover();
});
