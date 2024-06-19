jQuery(document).ready(function($){

    $('#coin').on('click', function(){
      var flipResult = Math.random();
      $('#coin').removeClass();
      setTimeout(function(){
        if(flipResult > 0){
          $('#coin').addClass('heads');
          console.log('it is head');
        }
        else{
            $('#coin').addClass('heads');
          console.log('it is head');
        }
      }, 100);
    });

    var coin = document.getElementById("coin");
    var comment = document.getElementById("comment");
    // var output = document.getElementById("output");
    var h4 = document.getElementById("h4");

    coin.onclick = counter;
    let clickNumber = 0;

    function counter(){
      
      h4.style.display = "none";
      clickNumber++;

      if (clickNumber === 1){
        setTimeout(function() {
          comment.innerHTML = "Heads!";
      }, 3500);
        
        

      }else if (clickNumber === 2){
        comment.innerHTML = "&nbsp;&nbsp;";
        setTimeout(function() {
          comment.innerHTML = "Heads!";
      }, 3500);

      }else if (clickNumber === 3){
        comment.innerHTML = "&nbsp;&nbsp;";
        setTimeout(function() {
          comment.innerHTML = "Heads Again!";
      }, 3500);

      }else if (clickNumber === 4){
        comment.innerHTML = "&nbsp;&nbsp;";
        setTimeout(function() {
          comment.innerHTML = "Oh wow, heads again. What a surprise!";
      }, 3500);

      }else if (clickNumber === 5){
        comment.innerHTML = "&nbsp;&nbsp;";
        setTimeout(function() {
          comment.innerHTML = "Heads! It's like this coin has a favorite side.";
      }, 3500);

      }else if (clickNumber === 6){
        comment.innerHTML = "&nbsp;&nbsp;";
        setTimeout(function() {
          comment.innerHTML = "Wow, another heads. This coin must really love heads.";
      }, 3500);
      }

      else if (clickNumber === 7){
        comment.innerHTML = "&nbsp;&nbsp;";
        setTimeout(function() {
          comment.innerHTML = "Again? Who programmed this thing?";
      }, 3500);
     }
     else if (clickNumber === 8){
      comment.innerHTML = "&nbsp;&nbsp;";
      setTimeout(function() {
        comment.innerHTML = "It's like this coin is broken.";
    }, 3500);
    
    }else if (clickNumber === 9){
      comment.innerHTML = "&nbsp;&nbsp;";
      setTimeout(function() {
        comment.innerHTML = "Heads again? It's almost like this is rigged or something.?";
    }, 3500);
     }
     else if (clickNumber === 10){
      comment.innerHTML = "&nbsp;&nbsp;";
      setTimeout(function() {
        comment.innerHTML = "Someone should alert the authorities, we've got 10 heads in a row.";
    }, 3500);
    
   }

   else if (clickNumber === 11){
    comment.innerHTML = "&nbsp;&nbsp;";
    setTimeout(function() {
      comment.innerHTML = "Heads. I never would've guessed!";
  }, 3500);
  }
  else if (clickNumber === 12){
    comment.innerHTML = "&nbsp;&nbsp;";
    setTimeout(function() {
      comment.innerHTML = "Heads. Never saw that one coming.";
  }, 3500);
  }
  else if (clickNumber === 13){
    comment.innerHTML = "&nbsp;&nbsp;";
    setTimeout(function() {
      comment.innerHTML = "Another heads? What a plot twist!";
  }, 3500);
 }
 else if (clickNumber === 14){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads! I never would have guessed it.";
}, 3500);
}
else if (clickNumber === 15){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads, heads, heads. So exciting.";
}, 3500);
}
else if (clickNumber === 16){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Let me guess...heads? Nailed it!";
}, 3500);
}
else if (clickNumber === 17){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Guess what? It's heads! Again.";
}, 3500);
}
else if (clickNumber === 18){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Another heads? Someone call the coin police.";
}, 3500);
}
else if (clickNumber === 19){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads? What an unexpected outcome.";
}, 3500);
}
else if (clickNumber === 20){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Is it heads? Of course, it's heads.";
}, 3500);
}
else if (clickNumber === 21){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads? No way! How totally unpredictable.";
}, 3500);
}
else if (clickNumber === 22){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads? Who programmed this thing?";
}, 3500);
}
else if (clickNumber === 23){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Let me guess... heads! I'm a psychic.";
}, 3500);
}
else if (clickNumber === 24){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Oh look, heads. What a thrilling adventure.";
}, 3500);
}
else if (clickNumber === 25){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads? Wow, this is as unpredictable as sunrise.";
}, 3500);
}
else if (clickNumber === 26){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads again! Somebody give this coin a promotion.";
}, 3500);
}
else if (clickNumber === 27){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads again? It’s like it’s stuck in a loop.";
}, 3500);
}
else if (clickNumber === 28){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads! Because tails are for losers.";
}, 3500);
}
else if (clickNumber === 29){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads again? This coin needs a new hobby.";
}, 3500);
}
else if (clickNumber === 30){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads? Stop the madness!";
}, 3500);
}
else if (clickNumber === 31){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads? Well, there goes my lottery dreams.";
}, 3500);
}
else if (clickNumber === 32){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads! This coin is breaking all the records for predictability.";
}, 3500);
}
else if (clickNumber === 33){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads again? Maybe it just really likes looking up.";
}, 3500);
}
else if (clickNumber === 34){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads. I’m starting to think this coin is biased.";
}, 3500);
}
else if (clickNumber === 35){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads? I was really expecting it to land on the edge this time.";
}, 3500);
}
else if (clickNumber === 37){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads again? This coin is really predictable.";
}, 3500);
}
else if (clickNumber === 38){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads! This coin should write a book on predictability.";
}, 3500);
}
else if (clickNumber === 39){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads again? I'm sensing a pattern here.";
}, 3500);
}
else if (clickNumber === 40){
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads again? Who would have thought?";
}, 3500);
}
else{
  comment.innerHTML = "&nbsp;&nbsp;";
  setTimeout(function() {
    comment.innerHTML = "Heads! (also your code might be broken)";
}, 3500);
}
      console.log(clickNumber);

    }


  });
  