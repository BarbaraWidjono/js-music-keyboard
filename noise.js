$(document).ready( function() {

  $('body').keydown(function(event){
    console.log("Helloo");
    // 'keyCode' refers to keyboard code
    console.log(event.keyCode);
    // 'key' refers to the letter on the keyboard
    console.log(event.key);

    let fileToPlay = `audio#${event.key}Audio`;
    console.log(fileToPlay);
    $(`${fileToPlay}`)[0].currentTime = 0;
    $(`${fileToPlay}`)[0].play();
  })

  // PLAYS WHEN BOX CLICKED
  // $('.c').click(function(){
  //   console.log("In the C");
  //   $('audio#cAudio')[0].currentTime = 0;
  //   $('audio#cAudio')[0].play();
  // });

  // PLAYS WHEN THE KEYBOARD IS PRESSED
  // $('body').keydown(function(event){
  //   // if 'c' is pressed on keyboard
  //   if(event.keyCode === 67){
  //     $('audio#cAudio')[0].currentTime = 0;
  //     $('audio#cAudio')[0].play();
  //   }
  // })

  // IF 'C' IS PLAYED ON THE KEYBOARD
  // if(event.keyCode === 67){
  //   $('audio#cAudio')[0].currentTime = 0;
  //   $('audio#cAudio')[0].play();
  // }

});
