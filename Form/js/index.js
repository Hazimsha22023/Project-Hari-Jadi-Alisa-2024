//hide-unhide password

function eyeFunction(){
    var x = document.getElementById("password");
    var y = document.getElementById("hide");
    var z = document.getElementById("show");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none"; 
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

// form loading animation

const wrapper = [...document.querySelector('.wrapper').children];

wrapper.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

window.onload = () => {
    if(sessionStorage.name){
        location.href = '/';
    }
}

// login form


function checkPassword() {
    var enteredUsername = document.getElementsByName('username')[0].value;
    var enteredPassword = document.getElementsByName('password')[0].value;
    
    if (enteredUsername !=='5ud4h 53m3571ny4 41i54' , enteredPassword !== '7ig4 H4r18ul4n du4 74hun du4 r18u 71g4') {
        alert('salah? cuba copy link ni= https://morsecode.world/international/translator.html');
        return false;
    }
    return true;
}
