document.addEventListener('DOMContentLoaded', f_main);

function f_main()
{
    document.getElementById('right').addEventListener('click', right);
    document.getElementById('left').addEventListener('click', left);
}
let selected = -1;
const max_selected = 4;

function right()
{
    console.log('right');
    document.getElementById('content').scrollLeft += 600;
    selected_game(1);
}
function left()
{
    console.log('left');
    document.getElementById('content').scrollLeft -= 600;
    selected_game(-1);
}

function selected_game(num)
{
    if(selected == -1){
        selected = 0;
    }
    console.log(selected);
    if(selected + num >= 0 && selected + num < max_selected){
        document.getElementById('game-'+selected).classList.remove('selected-game');
        selected = selected + num;
        document.getElementById('game-'+selected).classList.add('selected-game');
    }
    
}