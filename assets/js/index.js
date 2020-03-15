const openNav = () => {
    document.getElementById('mySidenav').style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

const closeNav = () => {
    document.getElementById('mySidenav').style.width = "0px";
    document.body.style.backgroundColor = "#000";
}