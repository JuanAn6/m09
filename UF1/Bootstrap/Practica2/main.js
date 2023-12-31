document.addEventListener('DOMContentLoaded', f_main);

function f_main()
{
    document.getElementById('right').addEventListener('click', right);
    document.getElementById('left').addEventListener('click', left);
}

function right()
{
    console.log('right');
    document.getElementById('content').scrollLeft += 600;
}
function left()
{
    console.log('left');
    document.getElementById('content').scrollLeft -= 600;
}