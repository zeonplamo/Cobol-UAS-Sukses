const openButton = document.getElementById('btnopen');
const closeButton = document.getElementById('btnclose');
const sidebar = document.getElementById('sidebar');

closeButton.addEventListener("click", closeSidebar);
openButton.addEventListener("click", openSidebar);

function openSidebar(){
    sidebar.classList.remove('hidden');
    openButton.classList.add('hidden');
}

function closeSidebar(){
    sidebar.classList.add('hidden');
    openButton.classList.remove('hidden');
}