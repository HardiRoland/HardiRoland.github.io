
let pelda = ['5+3', '2*2', '5-2', '4+4', '3-1', '4*5', '7-6', '4*1', '9-2', '1+1'];
let megoldas = [8, 4, 3, 8, 2, 20, 1, 4, 7, 2];
//let megoldas = [1,1,1,1,1,1,1,1,1,1]; //proba hogy helyesek-e az uzenetek

let k = 0;
let pontok = 0; //jatekos pontjai

$('.points').html('pontok ' + pontok + '/10'); 
$('.task').html(pelda[k]);

    $('#valasz').click (() => {
        if (k<10) {
          if (document.getElementById("megoldas").value === String(megoldas[k])) {
              pontok ++;  
            }
          k ++; 
          $('.task').html(pelda[k]);      
          $('.points').html('pontok ' + pontok + '/10');                
        } else {
          if (pontok === 10) {
            $('.uzenet').text(pontok + '/10 Ügyes vagy! Most már készen álsz az általános iskolára!');
          } else {
            $('.uzenet').text(pontok + '/10 Hát... nem rossz, de még gyakorolnék, hogy ne égjek be az általános iskolás barátok előtt!');
          }   
        }                    
     });  

     $('#vege').click (() => {  //ha megnyomja egybol a jatek vegere ugrik
        k = 10;
        if (pontok === 10) {
          $('.uzenet').text(pontok + '/10 Ügyes vagy! Most már készen álsz az általános iskolára!');
        } else {
          $('.uzenet').text(pontok + '/10 Hát... nem rossz, de még gyakorolnék, hogy ne égjek be az általános iskolás barátok előtt!');
        } 
     });
     
     





