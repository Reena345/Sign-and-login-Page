document.getElementById('loginForm').addEventListener('submit',function (event) {

    event.preventDefault();


  let localEmail = localStorage.getItem('email')
  let localPassword = localStorage.getItem('password')

    let userEmail=document.getElementById('userEmail').value
    let inPassword=document.getElementById('inPassword').value
    
  if (userEmail === localEmail && inPassword === localPassword) {

    window.location .href='/home.html'
    
  }else {
    alert('Some  went wrong!')
  }
   
    
    
})