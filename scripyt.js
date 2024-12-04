// function signup(e) {
// e.preventDefault()
// console.log('working');
// 
    // 
// }



document.getElementById('signupForm')
.addEventListener('submit',function (event) {

    event.preventDefault();

    let userName=document.getElementById('userName').value
    let userEmail=document.getElementById('userEmail').value
    let inPassword=document.getElementById('inPassword').value
    
    console.log(userName ,userEmail,inPassword);

    if (userName && userEmail && inPassword) {

    localStorage.setItem('name',userName)
    localStorage.setItem('email',userEmail)
    localStorage.setItem('password',inPassword)

    window.location.href='/index.html'
        
    }
    

});




