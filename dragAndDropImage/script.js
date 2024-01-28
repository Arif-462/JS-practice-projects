

const dragArea = document.querySelector(".content"),
dragText = dragArea.querySelector("h1"),
myButton = dragArea.querySelector("button"),
myInput = dragArea.querySelector("input");

let myFile;

myButton.onclick = () =>{
    myInput.click();
}

myInput.addEventListener("change", function(){
    myFile = this.files[0];
    dragArea.classList.add("active");
    showFile();
});

dragArea.addEventListener("dragover", function(e){
    e.preventDefault();
    dragArea.classList.add("active");
    dragText.textContent = "Release To Upload File"

})

dragArea.addEventListener("dragleave", function(e){
    dragArea.classList.remove("active");
    dragText.textContent = "Drag & Drop"
});

dragArea.addEventListener("drop", function(e){
    e.preventDefault();
    myFile = e.dataTransfer.files[0];
    showFile();
});

function showFile(){
    let filetype = myFile.type;
    let validation = ["image/jpeg", "image/jpg", "image/png"];
    if(validation.includes(filetype)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let imageUrl = fileReader.result;
            let img = `<img src="${imageUrl}" alt="">`
            dragArea.innerHTML = img;
        }
        fileReader.readAsDataURL(myFile);
    }
    else{
        alert("This file format is not valid");
        dragArea.classList.remove("active");
        dragText.textContent = "Drag & Drop"
    }

}