function toggleSidebar(){
    var sidebar = document.querySelector('.sideBar');
    sidebar.style.display = (sidebar.style.display === 'none') ? 'flex' : 'none';
}

document.getElementById('toggleButton1').addEventListener('click', toggleSidebar);


function katti(){
    var sidebar1 = document.querySelector('.sideBar');
    sidebar1.style.display = sidebar1.style.display = 'none';
}