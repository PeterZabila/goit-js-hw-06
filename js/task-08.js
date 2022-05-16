const formEl = document.querySelector('.login-form');

formEl.addEventListener("submit", processFormEl);

    function processFormEl(event) {
        event.preventDefault();
            const {
                elements: {email, password} } = event.currentTarget;
                if(email.value === "" || password.value === "") {
                 alert("Please fill out all the fields of the form");
            }

            const formData = {};
                formData.email = email.value;
                formData.password = password.value;

            console.dir(formData);

        event.currentTarget.reset();
    }

        // const {email, password} = event.currentTarget.elements;
        // const isInvalidForm = [...event.target.elements]
        //     .filter((el) => el.tagName === "INPUT")
        //     .some((el) => el.value === "");
        //     if(isInvalidForm) {
        //         alert("Please fill out all the fields of the form");
        //     }
    // };

