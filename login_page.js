const login_box = document.querySelector('.login');
    const loginLink = document.querySelector('.login-link'); // Assuming you have a login-link element
    const registrationLink = document.querySelector('.registration-link'); // Assuming you have a registration-link element
    const setPasswordLink=document.querySelector('.forgot-password');
    const PasswordLink=document.querySelector('.setpassword-link');
    registrationLink.addEventListener('click', () => {
        login_box.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        login_box.classList.remove('active');
    });

    setPasswordLink.addEventListener('click',()=>{

        login_box.classList.add('active1');
    })
    PasswordLink.addEventListener('click',()=>{
        login_box.classList.remove('active1');
    })
    

    const passwordField = document.getElementById('password_r');
    const confirmPasswordField = document.getElementById('password_csr');
    const submitbtn= document.getElementsByClassName('Submit_btn');
    const passwordField1 = document.getElementById('password_s');
    const confirmPasswordField1 = document.getElementById('password_cs');
    const specialchar=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const user_type=document.getElementsByName('usertype');
    
    const passwordField2 = document.getElementById('password_l');

    submitbtn[1].addEventListener('click',()=>{

        passwordField.setCustomValidity('');
        confirmPasswordField.setCustomValidity('');

        if((passwordField.value)!== (confirmPasswordField.value)){
            confirmPasswordField.setCustomValidity('Passwords do not match');

                   }        
        if(passwordField.value.length <8 || passwordField.value.length>=20 || !specialchar.test(passwordField.value))
                   {
                       passwordField.setCustomValidity("Password Length is incorrect. Min[8]-Max[20]. Must have atleast one special character");
                   }
        
        })
        submitbtn[0].addEventListener('click',()=>{

            passwordField2.setCustomValidity('');
            
            
            if(passwordField2.value.length <8 || passwordField2.value.length>=20 || !specialchar.test(passwordField2.value))
                       {
                           passwordField2.setCustomValidity("Password Length is incorrect. Min[8]-Max[20]. Must have atleast one special character");
                       }
            
            })

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
            var selectedUserType = document.querySelector('input[name="usertype"]:checked');
           
            if (selectedUserType) {
                var userTypeValue = selectedUserType.value;
                if (userTypeValue === 'Customer') {
                    window.location.href = 'customer_homepage.html';
                } else if (userTypeValue === 'Employee') {
                    window.location.href = 'employee_homepage.html';
                } else if (userTypeValue === 'Manager') {
                    window.location.href = 'manager_homepage.html';
                }
                
            }
        });

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
            var selectedUserType = document.querySelector('input[name="usertype"]:checked');
           
            if (selectedUserType) {
                var userTypeValue = selectedUserType.value;
                if (userTypeValue === 'Customer') {
                    window.location.href = 'customer_homepage.html';
                } else if (userTypeValue === 'Employee') {
                    window.location.href = 'employee_homepage.html';
                } else if (userTypeValue === 'Manager') {
                    window.location.href = 'manager_homepage.html';
                }
                
            }
        });

        
    
        
    



        submitbtn[2].addEventListener('click',()=>{

            passwordField1.setCustomValidity('');
            confirmPasswordField1.setCustomValidity('');
    
            if((passwordField1.value)!== (confirmPasswordField1.value)){
                confirmPasswordField1.setCustomValidity('Passwords do not match');
    
                       }        
            if(passwordField1.value.length <8 || passwordField1.value.length>=20 || !specialchar.test(passwordField1.value))
                       {
                           passwordField1.setCustomValidity("Password Length is incorrect. Min[8]-Max[20].Passwords must include atleast 1 special character");
                       }
            
            })
       

   

  