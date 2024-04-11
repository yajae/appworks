
const btnToggle = document.querySelector('.btn-toggle');
const welcomeToggle=document.querySelector('.container-welcome');

welcomeToggle.addEventListener('click', () => {
    
    if(welcomeToggle.textContent === "Welcome Message"){
        welcomeToggle.textContent = "Have a GoodTime!";
    }else{
        welcomeToggle.textContent = "Welcome Message";
    }
     
});


btnToggle.addEventListener('click', () => {
    const hiddenContainer = document.querySelector('.hidden-container');
    
    if(hiddenContainer.style.display==="none"){
        hiddenContainer.style.display="flex";
    }else{
        hiddenContainer.style.display="none"
    }
     
});
