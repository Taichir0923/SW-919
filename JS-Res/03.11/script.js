const text = document.querySelector('#text');
const file = document.querySelector('#file');
const color = document.querySelector('#color');
const container = document.querySelector('.container');
// "" , ''
// ``

// container.innerHTML = container.innerHTML + val
function getTextValue(){
    const imageFiles = file.files;
    for(var i = 0; i < imageFiles.length; i++){
        const imgPath = URL.createObjectURL(imageFiles[i]);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const borderColor = `rgb(${red} , ${green} , ${blue})`;
        container.innerHTML += `<img style="border: 5px solid ${borderColor}; width: 300px" src=${imgPath} alt="" />`;
    }
}

// rgb(0-255 , 0-255 , 0-255)

// Гэрт: Хэрэглэгч бүртгэх форм

// 