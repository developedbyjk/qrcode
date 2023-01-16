let img = document.createElement("img");
let qr = document.querySelector(".qr-code");
qr.appendChild(img);
function generate(){
    let input = document.getElementById("input");
    if(input.value){
        input.style.borderColor = "#c7c7c7";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${input.value}`;
        console.log("image link>>" + img.src);
        // var mylink = document.getElementById("lnk").href = img.src;
        // console.log(mylink);
    }
    else{
        input.style.borderColor="red";
        return false;
    }
    input.value = "";

 
}


let btnDownload = document.querySelector('#mybutton');
let imgdwn = document.querySelector('img');


// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
    let imagePath = imgdwn.getAttribute('src');
    console.log("img path >> " +    imagePath);
    let fileName = getFileName(imagePath);
    console.log("filename is" + fileName);
    saveAs(imagePath, fileName);
});

function getFileName(str) {
    let gotstr = str.substring(str.lastIndexOf('=') + 1 );
    console.log("What you got>>" + gotstr);
    // let modifylnk =  str.split(".").pop();
    // console.log("Modefied link >>" + modifylnk);
    let format = ".jpg";
    return  gotstr.concat(format);
}

