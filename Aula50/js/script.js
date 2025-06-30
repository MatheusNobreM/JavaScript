// keydown

document.addEventListener('keydown', function(event) {

    if(event.key === 'Enter') {
        console.log('Você pressionou a tecla Enter');
    }
});

//keyup
document.addEventListener('keyup', function(event) {
    
    if(event.key === 'Enter') {
        console.log('Você soltou a tecla Enter');
    }
});
