jQuery(document).ready(function($){

    var coin = document.getElementById("coin");
    var comment = document.getElementById("comment");

    $('#coin').on('click', function(){
      var flipResult = Math.random();
      $('#coin').removeClass();
      setTimeout(function(){
        if(flipResult > 0){
          $('#coin').addClass('heads');
          comment.innerHTML = "Heads";
          console.log('it is head');
        }
        else{
            $('#coin').addClass('heads');
            comment.innerHTML = "Heads";
          console.log('it is head');
        }
      }, 100);
    });
});

