const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('login-form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value == '' || username.value == null){
        messages.push('username required')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})

function createSuccess()
{
    onclick= alert("Succesfully Created Account!");
} 

function goHome()
{
    window.location.href= "index.html";
}