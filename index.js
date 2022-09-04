function addWE(){
    let newFeild = document.createElement("textarea");
    newFeild.classList.add("form-control");
    newFeild.classList.add("weFeild");
    newFeild.classList.add("mt-2");
    newFeild.setAttribute("placeholder", "Enter here");

    let weBlock = document.getElementById("we");
    let btn = document.getElementById("weAddbtn");

    weBlock.insertBefore(newFeild, btn);
};


function addAQ(){
    let newFeild = document.createElement("textarea");
    newFeild.classList.add("form-control");
    newFeild.classList.add("aqFeild");
    newFeild.classList.add("mt-2");
    newFeild.setAttribute("placeholder", "Enter here");

    let aqBlock = document.getElementById("aq");
    let btn = document.getElementById("aqAddbtn");

    aqBlock.insertBefore(newFeild, btn);
};



function addSK(){
    let newFeild = document.createElement("textarea");
    newFeild.classList.add("form-control");
    newFeild.classList.add("skillsFeild");
    newFeild.classList.add("mt-2");
    newFeild.setAttribute("rows", 1);
    newFeild.setAttribute("placeholder", "Enter here");

    let skBlock = document.getElementById("sk");
    let btn = document.getElementById("skillAddbtn");

    skBlock.insertBefore(newFeild, btn);
};