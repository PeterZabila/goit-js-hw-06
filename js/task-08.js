const formEl = document.querySelector('.login-form');

formEl.addEventListener("submit", processFormEl);

    function processFormEl(event) {
        event.preventDefault();
            const {
                elements: {email, password} } = event.currentTarget;
                
                if(email.value === "" || password.value === "") {
                   
                    return alert("Please fill out all the fields of the form");
                } else {
                    const formData = {};
                        formData.email = email.value;
                        formData.password = password.value;

                        console.log(formData);
                    event.currentTarget.reset();
                }
    };