//display sidebar
let toggleBar = document.getElementById('toggleBar');
let sidebar = document.getElementById('sidebar');
let sidebarWrap = document.getElementById('sidebarWrap');
let closeSideBar = document.getElementById('closeSideBar');
let body = document.body;
toggleBar.addEventListener('click', function(){
    sidebar.classList.remove('-left-full');
    sidebar.classList.add('left-0');
    sidebarWrap.classList.remove('opacity-0');
    sidebarWrap.classList.remove('invisible');
});
closeSideBar.addEventListener('click', function(){
    sidebar.classList.add('-left-full');
    sidebar.classList.remove('left-0');
    sidebarWrap.classList.add('opacity-0');
    sidebarWrap.classList.add('invisible');
});
body.addEventListener('click', function(e){
    if(e.target.id === 'sidebarWrap'){
        sidebar.classList.add('-left-full');
        sidebar.classList.remove('left-0');
        sidebarWrap.classList.add('opacity-0');
        sidebarWrap.classList.add('invisible');
    }
});