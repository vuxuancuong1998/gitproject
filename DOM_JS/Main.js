const form = document.querySelector('#my-form');
const Todotext = document.querySelector('.textTodo');
const btn = document.querySelector('.btn');
const list = document.querySelector('#list');

document.addEventListener('DOMContentLoaded', () => {
    getLocalStorage().map( (todo) => {
      if (todo !== ''){
       // --------------
       addResult(todo);
        
       
      }
      
    });
    Checkbox();
});
function addResult(todo){
  
  let li = document.createElement('li');
  switch (todo) {
          
      case '1':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Bảo bình</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        
      break;

      case '2':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Song ngư</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '3':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Bạch dương</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '4':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Kim ngưu</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '5':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Song tử</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '6':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Cự giải</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '7':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Sư tử</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '8':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Xử nữ</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '9':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Thiên Bình</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '10':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Nhân mã</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        case '11':
        li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Ma kết</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;

        

    default:
      li.innerHTML = `<input type = 'checkbox' class = 'checkbox'>
        <span >Cung Bảo bình</span> 
          <span class = 'closeItem' > <input type = 'button' value = 'X' class = 'remove'> </span>`
        break;
  }
  list.appendChild(li);
  removeItem();
}
btn.addEventListener('click', (event) => {
  event.preventDefault();
  if(Todotext.value !== ''){
    // -------------------
    addResult(Todotext.value);
  addLocalStorage(Todotext.value);
  Checkbox();
  }
  Todotext.value = '';
});

function getLocalStorage(){
  let todos = [];
  if(localStorage.getItem('ListTodo') ===  null ){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem('ListTodo'));
  }
  return todos;
}

function addLocalStorage(todo){
  let todos = getLocalStorage();
  todos.push(todo);
  localStorage.setItem('ListTodo', JSON.stringify(todos));
}
function removeItem(){
  var BtnRemove = document.getElementsByClassName("remove");
    for (var i = 0; i < BtnRemove.length; i++){
      BtnRemove[i].addEventListener('click',function(){
        removeLocalStogare(i);
        var parent = this.parentElement;
        parent.remove();
      });
    }
}
var flag = true;
function removeLocalStogare(i){
  if(flag){
    let todos = JSON.parse(localStorage.getItem('ListTodo'));
      todos.splice(i-1,1);
      localStorage.setItem('ListTodo',JSON.stringify(todos));
      flag = false;
      location.reload();
  }
}
function Checkbox(){
  var checkbox = document.getElementsByClassName('checkbox');
  for(var i = 0; i < checkbox.length; i++)
    {
        checkbox[i].addEventListener( 'change', function() {
            if(this.checked) {
                this.parentElement.style.background = "black";
            } else {
                this.parentElement.style.background = "none";
            }
        });
    }
}