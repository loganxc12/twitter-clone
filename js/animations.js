$(document).ready(function() {
    $("#char-count").hide();
    $("#tweet-controls").hide(); 
    
    $(".tweet").hover(function() {
        $(this).css('cursor', 'pointer');
        $(".tweet-actions", this).css("display", "block");
    }, function() {
        $(".tweet-actions", this).css("display", "none");
    });
    
    $(".tweet", this).click(function() {
        $(".stats", this).slideToggle('fast');
        $(".reply", this).slideToggle('fast');
    });
    
    $(".tweet-compose").focus(function() {
        $(this).css("height", "5em");
        $("#char-count").show();
        $("#tweet-controls").show();
    });
        var count;
    $(".tweet-compose").on('keyup', function() {
        count = 140 - $(".tweet-compose").val().length;
        if (count <= 10) {
            $("#char-count").css('color', 'red');
        }
        if (count >= 10) {
            $("#char-count").css('color', '#999');
        }
        if (count <= 0) {
            $(".button").prop("disabled", true);
        }
        if (count > 0) {
            $(".button").prop("disabled", false);
        }
        $("#char-count").html(count);
    });
  
    $("#tweet-submit").on('click', function() {
        var tweetText = function () {
            var content = $(".tweet-compose").val();
            return content;
        }
        //Find and return tweet content.
        var tweetInfo = '<div class="tweet">' + '<div class="content">' +'<img class="avatar" src="img/logan.jpg" />' + '<strong class="fullname">Logan Marshall</strong> ' + '<span class="username">@loganxc12</span>' + '<p class="tweet-text">'+ tweetText() +'</p>' + '</div>' + '</div>';
        
        $("#stream").prepend(tweetInfo);
        $(".tweet-compose").val('');
        
    });
    
});