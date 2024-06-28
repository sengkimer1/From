// document.getElementById('box').style.border="1px solid red";

let friends = document.getElementsByName('sreymoch');
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].innerText, friends[i].classList);
}