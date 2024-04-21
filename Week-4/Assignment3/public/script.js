document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    // Perform signup logic (you can customize this part)
    console.log("Email:", email);
    console.log("Password:", password);
    
    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:3000/signupForm", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            
            if (response.redirected) {
                window.location.href = response.url;
            }
            let result = await response.json();
            const content = document.createElement("div");
            content.innerText = `${result.message}`;
            document.body.appendChild(content); 

        } catch (error) {
            console.error("Error:", error);
        }
    }
    const data = { email: `${email}`, password: `${password}` };
    postJSON(data);

    // Reset form
    document.getElementById("signupForm").reset();
});

document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var email = document.getElementById("signinEmail").value;
    var password = document.getElementById("signinPassword").value;

    //post email.password to http://localhost:3000/signinForm
    async function postJSON(data) {
        try {
            const response = await fetch("http://localhost:3000/signinForm", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.redirected) {
                window.location.href = response.url;
            }
            let data1 = await response.json();
            const content = document.createElement("div");
            content.innerText = `${data1.message}`;
            document.body.appendChild(content); 

        } catch (error) {
            console.error("Error:", error);
        }
    }
    const data = { email: `${email}`, password: `${password}` };
    postJSON(data);
   
    
});
