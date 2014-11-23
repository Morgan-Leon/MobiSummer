jQuery(document).ready(function($){
    $('*[data-toggle="tooltip"]').tooltip();
    //
    $('#profile-nav').click(function(){
        $('body').removeAttr('class');
        $('body').toggleClass('profile-visible');
    });
    $('#filter-nav').click(function(){
        $('body').removeAttr('class');
        $('body').toggleClass('filter-visible');
    });
    //
    $('main').click(function(){
        $('body').removeAttr('class');
    });
    //
    var header = $('.navbar-left ul').html();
    var fakeheader = $(header).appendTo('.menu-nav ul');
    $('#menu-nav').click(function(){
        $('body').toggleClass('menu-visible');
    });
    $(window).resize(function() {
        if($(window).width() > 768) {
            $('body').removeAttr('class');
        }
    });
    //
    var bodyEl = $(".tab-menu");
    $(window).on("scroll", function() {
      var scrollTop = $(this).scrollTop();
      $("section").each(function() {
        var el = $(this),
            className = el.attr("id");
        if (el.offset().top < scrollTop + 60) {
          bodyEl.addClass(className);
        } else {
          bodyEl.removeClass(className);
        }
      });
    });
    //
    $(".vote").click(
        function() {
            var some = $(this);
            var thepost = $(this).attr("post");
            var theuser = $(this).attr("user");
            $.post("/wp-content/themes/cssanoir/vote.php", {user: theuser, post: thepost},
        function(data) {
            var votebox = ".vote"+thepost+" span";
            $(votebox).text(data);
            $(some).replaceWith('<a href="javascript:void(0);" class="love"><i class="fa fa-heart"></i></a>');
        });
    });
    //
    $('#twitter-share').sharrre({
        share: {
            twitter: true
        },template: '<i class="fa fa-twitter"></i>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options){
            api.simulateClick();
            api.openPopup('twitter');
        }
    });
    $('#facebook-share').sharrre({
        share: {
            facebook: true
    },template: '<i class="fa fa-facebook"></i>',
        enableHover: false,
        enableTracking: true,
        click: function(api, options){
            api.simulateClick()
            ;api.openPopup('facebook');
        }
    });
    //
    $('#add_comment').click(function(){
        $('#respond').show();
        $(this).hide();

    });
    $('#js_comments').click(function(){
        $('body').toggleClass('comment_panel');
    });
    //
    $('#js_comments_read').click(function(){
        $('body').toggleClass('comment_panel success');
    });
    $('#submit').addClass('btn btn-outlined pull-right').attr('value','Submit');

    var commentform=$('#commentform');
    commentform.prepend('<div id="comment-status" ></div>');
    var statusdiv=$('#comment-status');

    commentform.submit(function(){
        var formdata=commentform.serialize();
        statusdiv.html('<p class="text-muted"><small>Processing...</small></p>');
        var formurl=commentform.attr('action');
        $.ajax({
            type: 'post',
            url: formurl,
            data: formdata,
            error: function(XMLHttpRequest, textStatus, errorThrown)
                {
                    statusdiv.html('<p class="ajax-error text-muted" ><small>Really?</small></p>');
                },
            success: function(data, textStatus){
                if(data == "success" || textStatus == "success"){
                    statusdiv.html('<p class="ajax-success text-muted" ><small>Thanks for your comment. We appreciate your response.</small></p>');
                         window.location = "?comment=success";
                }else{
                    statusdiv.html('<p class="ajax-error text-muted" ><small>Please wait a while before posting your next comment</small></p>');
                    commentform.find('textarea[name=comment]').val('');
                }
            }
        });
        return false;
    });


});
