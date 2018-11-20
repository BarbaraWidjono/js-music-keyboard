$(document).ready( function() {

  // $('.c').click(function(){
  //   console.log("In the C");
  //   $('audio#cAudio')[0].currentTime = 0;
  //   $('audio#cAudio')[0].play();
  // });

  // $('body').keydown(function(event){
  //   // if 'c' is pressed on keyboard
  //   if(event.keyCode === 67){
  //     $('audio#cAudio')[0].currentTime = 0;
  //     $('audio#cAudio')[0].play();
  //   }
  // })

  $('body').keydown(function(event){
    console.log("Helloo");
    // 'keyCode' refers to keyboard code
    console.log(event.keyCode);
    // 'key' refers to the letter on the keyboard
    console.log(event.key);

    // if 'c' is pressed on keyboard
    // if(event.keyCode === 67){
    //   $('audio#cAudio')[0].currentTime = 0;
    //   $('audio#cAudio')[0].play();
    // }

    let fileToPlay = `audio#${event.key}Audio`;
    console.log(fileToPlay);
    $(`${fileToPlay}`)[0].currentTime = 0;
    $(`${fileToPlay}`)[0].play();
  })
});
