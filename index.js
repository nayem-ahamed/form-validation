let formData = document.querySelector(".form");
let submitBtn = document.querySelector(".button");
let errMsg = document.querySelectorAll(".error-message")
let emtField = document.querySelectorAll(".empty-field")
let showPwdBtn = document.querySelector(".btn")
let firstName, lastName, email, password
let fnTarget, lnTarget, emailTarget, pwdTarget
let fnFlag, lnFlag, emailFlag, pwdFlag
let field

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passRegex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;


for (let err of errMsg) {
    err.classList.add("d-none")
}
for (let emt of emtField) {
    emt.classList.add("d-none")
}


formData.addEventListener("keyup", (e) => {
    e.preventDefault();
    field = e.target.dataset.key;
    switch (field) {
        case "firstName":
            firstName = e.target.value;
            fnTarget = e.target;
            break;
        case "lastName":
            lastName = e.target.value;
            lnTarget = e.target;
            break;
        case "email":
            email = e.target.value;
            emailTarget = e.target;
            break;
        case "password":
            password = e.target.value;
            pwdTarget = e.target;
            break;
    }

})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password)

    if (firstName) {
        if (!nameRegex.test(firstName)) {
            fnTarget.classList.add("error")
            errMsg[0].classList.remove("d-none")
            fnFlag = false
        } else {
            fnTarget.classList.remove("error")
            errMsg[0].classList.add("d-none")
            fnFlag = true
        }
    } else {
        emtField[0].classList.remove("d-none")
    }
    if (lastName) {
        if (!nameRegex.test(lastName)) {
            lnTarget.classList.add("error")
            errMsg[1].classList.remove("d-none")
            lnFlag = false
        } else {
            lnTarget.classList.remove("error")
            errMsg[1].classList.add("d-none")
            lnFlag = true
        }
    } else {
        emtField[1].classList.remove("d-none")
    }
    if (email) {
        if (!emailRegex.test(email)) {
            emailTarget.classList.add("error")
            errMsg[2].classList.remove("d-none")
            emailFlag = false
        } else {
            emailTarget.classList.remove("error")
            errMsg[2].classList.add("d-none")
            emailFlag = true
        }
    } else {
        emtField[2].classList.remove("d-none")
    }
    if (password) {
        if (!passRegex.test(password)) {
            pwdTarget.classList.add("error")
            errMsg[3].classList.remove("d-none")
            pwdFlag = flase
        } else {
            pwdTarget.classList.remove("error")
            errMsg[3].classList.add("d-none")
            pwdFlag = true
        }
    } else {
        emtField[3].classList.remove("d-none")
    }
    if (fnFlag && lnFlag && emailFlag && pwdFlag) {
        window.location.href = "/success.html"
    }

});

showPwdBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (pwdTarget.getAttribute("type") === "text") {
        pwdTarget.setAttribute("type", "password")
    } else {
        pwdTarget.setAttribute("type", "text")
    }
})