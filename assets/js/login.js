/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
          // Switch to text
          input.type = 'text'
 
          // Icon change
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
        } 
        else{
          // Change to password
          input.type = 'password'
 
          // Icon change
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass','pass-eye')
showHiddenPass('register-pass','register-pass-eye')
showHiddenPass('register-repass','register-repass-eye')

var Log = document.getElementById("login");
var Reg = document.getElementById("register");


function Register() {
    Log.style.left = "-520px";
    Log.style.opacity = 0;

    Reg.style.right = "20px";
    Reg.style.opacity = 1;

}

function Login() {
    Log.style.left = "20px";
    Log.style.opacity = 1;

    Reg.style.right = "-520px";
    Reg.style.opacity = 0;
}