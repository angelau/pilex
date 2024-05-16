const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// aboutus-----
amoTeamVars.memberSC.push({"type":"member","scID":"#amoteam-sc-member-1966035209","itemWidth":250,"itemMargin":20,"align":"left",
"fullWidth":"yes","panel":"right"})
amoTeamVars.memberSC.push({"type":"member","scID":"#amoteam-sc-member-472063933","itemWidth":250,"itemMargin":20,"align":"left","fullWidth":"yes","panel":"right"})