document.addEventListener('DOMContentLoaded', (event) => {
    intervalID = setInterval(startCount, 1000);
});
const counter = document.getElementById('counter')

let count = 0;

let arr = []
function startCount() {
    count += 1;
    counter.textContent = count;
}

let btnAdd = document.getElementById('plus')
btnAdd.addEventListener("click", () => {
    count++;
})
let btnSubtract = document.getElementById('minus')
btnSubtract.addEventListener("click",  () => {
    count--;
})

let likes = document.getElementById('heart')
likes.addEventListener('click', handleLike)
let likeCount 
function handleLike () {
    let likeLocation = document.querySelector('.likes')  
    if(arr.includes(count)){
        let thisClick = document.getElementById(count)
        thisClick.innerText = `${counter.textContent} has been clicked ${likeCount+=1} times`
    } else {  
        let li = document.createElement('li') 
        li.id = count
        li.innerText = `${counter.textContent} has been clicked ${likeCount=1} time`
        likeLocation.append(li)
    }
    arr.push(count)
}
    
const pause = document.getElementById('pause')
pause.addEventListener("click", function () {
    
if (pause.innerText == "pause"){
    clearInterval(intervalID);
    likes.disabled = true
    pause.innerText = "resume" 
} else if (pause.innerText == "resume"){
    intervalID = setInterval(startCount, 1000);
    likes.disabled = false
    pause.innerText = "pause"
}
});

const buttons = document.getElementsByTagName("button");
let buttonsArray = []

for (let i = 0; i < buttons.length; i++){
    if (buttons[i].id !== "pause"){
        buttonsArray.push(buttons[i])
    }
}


document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()
    handleComment(e.target.querySelector("#comment-input").value)
})

function handleComment(comment){
    let p = document.createElement('p')
    p.textContent = comment    
    document.querySelector('#list').appendChild(p)
}




