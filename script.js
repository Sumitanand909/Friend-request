var isstatus = document.querySelector('h5')
var addFriend = document.querySelector('#add')
var removeFriend = document.querySelector('#remove')
var img = document.querySelector('img')

addFriend.addEventListener("click",function(){
    isstatus.innerHTML = 'Request Sent'
    isstatus.style.color = 'grey'
    setTimeout(d,1000)
    setTimeout(a,6000)
    setTimeout(b,8000)
    setTimeout(c,8000)
   
})

function d(){
    isstatus.innerHTML = 'Wait While request is accepting'
    isstatus.style.color = '#303841'
}

function a(){
isstatus.innerHTML = 'Request Accepted'
isstatus.style.color = '#66FF00'
}

function b(){
    isstatus.innerHTML = 'You are now friends'
    isstatus.style.color = 'green'
}

function c(){
    img.src = 'https://plus.unsplash.com/premium_photo-1661421746164-b8b53de3bd4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

removeFriend.addEventListener("click",function(){
    isstatus.innerHTML = 'Friendship break'
    isstatus.style.color = 'red'
    img.src = 'https://images.unsplash.com/photo-1592046285097-6cdf4daf0d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
})




