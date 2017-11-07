window.onload = function(){
    var board = document.querySelector('.board-js');

   /* board.addEventListener('dblclick', function(event) {
    event.target.style.backgroundColor = 'yelow';
    event.target.style.border = '5px solid green';
    event.target.textContent ='x';
    });*/

   /* var boar = document.querySelector('.board-js');
    
        boar.addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'red';
        event.target.style.border = '2px solid #fff';
        event.target.textContent ='0';
        }); */
board.addEventListener('click',addX);
    };
    var centinel = true;
function addX(event){
    if(centinel)
    event.target.textContent ='0';
    else
    event.target.textContent = 'x';
centinel = !centinel;
}


