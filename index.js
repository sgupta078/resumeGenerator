/*
    Author :- Shubham Gupta
    Insta ID :- sgupta078
*/



/*Add new work experience field*/

function addWE(){
    let newFeild = document.createElement("textarea");
    newFeild.classList.add("form-control");
    newFeild.classList.add("weField");
    newFeild.classList.add("mt-2");
    newFeild.setAttribute("placeholder", "Enter here");

    let weBlock = document.getElementById("we");
    let btn = document.getElementById("weAddbtn");

    weBlock.insertBefore(newFeild, btn);
};


/*Add new academic qualification field*/

function addAQ(){
    let newFeild = document.createElement("textarea");
    newFeild.classList.add("form-control");
    newFeild.classList.add("aqField");
    newFeild.classList.add("mt-2");
    newFeild.setAttribute("placeholder", "Enter here");

    let aqBlock = document.getElementById("aq");
    let btn = document.getElementById("aqAddbtn");

    aqBlock.insertBefore(newFeild, btn);
};


/*Add new skills field*/

function addSK(){
    let newFeild = document.createElement("textarea");
    newFeild.classList.add("form-control");
    newFeild.classList.add("skillsField");
    newFeild.classList.add("mt-2");
    newFeild.setAttribute("rows", 1);
    newFeild.setAttribute("placeholder", "Enter here");

    let skBlock = document.getElementById("sk");
    let btn = document.getElementById("skillAddbtn");

    skBlock.insertBefore(newFeild, btn);
};


/*Generate resume using entered values in fields*/

function generateResume(){
    
    //name

    let nameForm = document.getElementById("nameField");
    let nameTemp = document.getElementById("nameT");
    nameTemp.innerHTML = nameForm.value;

    //phone number

    let contactForm = document.getElementById("contactField");
    let contactTemp = document.getElementById("contactT");
    contactTemp.innerHTML = contactForm.value;

    //email id

    let emailForm = document.getElementById("emailField");
    let emailTemp = document.getElementById("emailT");
    emailTemp.innerHTML = emailForm.value;
    emailTemp.setAttribute("href", "mailto:" + emailForm.value);

    //address

    let addressForm = document.getElementById("addressField");
    let addressTemp = document.getElementById("addressT");
    addressTemp.innerHTML = addressForm.value;

    //profile photo

    let imgForm = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imgForm);
    reader.onloadend = function(){
        document.getElementById("imgT").setAttribute("src", reader.result);
    };

    //likedin id
    
    let linkedinForm = document.getElementById("linkedinField");
    let linkedinTemp = document.getElementById("linkedinT");
    linkedinTemp.setAttribute("href", linkedinForm.value);

    //github id
    let githubForm = document.getElementById("githubField");
    let githubTemp = document.getElementById("githubT");
    githubTemp.setAttribute("href", githubForm.value);

    //objective

    let objectiveForm = document.getElementById("objectiveFeild");
    let objectiveTemp = document.getElementById("objectiveT");
    objectiveTemp.innerHTML = objectiveForm.value;

    //work experience

    let weForm = document.getElementsByClassName("weField");
    let weStr = "";
    for(let i of weForm){
        weStr = weStr + `<li>${i.value}</li>`;
    }
    let weTemp = document.getElementById("weT");
    weTemp.innerHTML = weStr;

    //academic qualifications

    let aqForm = document.getElementsByClassName("aqField");
    let aqStr = "";
    for(let i of aqForm){
        aqStr = aqStr + `<li>${i.value}</li>`;
    } 
    let aqTemp = document.getElementById("aqT");
    aqTemp.innerHTML = aqStr;

    //skills set

    let skForm = document.getElementsByClassName("skillsField");
    let skStr = "";
    for(let i of skForm){
        skStr = skStr + `<li>${i.value}</li>`;
    }
    let skTemp = document.getElementById("skillT");
    skTemp.innerHTML = skStr;

    //hide form and show template

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
};

function printResume(){
    window.print();
}