//log-in

let modalSignUpBtn = document.getElementById(`modal_sign_up_btn`);
let modalSignInBtn = document.getElementById(`modal_sign_in_btn`);
let signOutBtn = document.getElementById(`sign_out_btn`);
let modalPasswordInput = document.getElementById(`sign_in_password_input`);
let modalNameInput = document.getElementById(`sign_in_name_input`);
let signUpBtn = document.getElementById(`sign_up_btn`);
let signInBtn = document.getElementById(`sign_in_btn`);
let modalSignUpStatusTitle = document.getElementById(`sign_up_status_title`);
let modalSignInStatusTitle = document.getElementById(`sign_in_status_title`);
let passwordInput = document.getElementById(`sign_up_password_input`);
let repeatPasswordInput = document.getElementById(`repeat_password_input`);
let nameInput = document.getElementById(`sign_up_name_input`);
let EmailInput = document.getElementById(`Email_name_input`);
let modalSignUp = document.getElementById('id01');
let modalSignIn = document.getElementById(`id02`);
let sideName = document.getElementById(`side_user_name`);
let bagRedDot = document.getElementById(`bag_red_dot`);
let Content_Title_Bag = document.getElementById(`content_title_bag`);
bagRedDot.style.display = `none`;
Content_Title_Bag.style.display = `none`;

// Nút đăng ký
function signUpOnclickCallback() {
    modalSignUp.style.display = `block`;
    modalSignUpStatusTitle.textContent = `Đăng ký thành viên trang web`;
    modalSignUpStatusTitle.style.color = `black`;
}
signUpBtn.addEventListener(`click`, signUpOnclickCallback);

// Nút đăng nhập
function signInOnClickCallback() {
    modalSignInStatusTitle.textContent = `Đăng nhập thành viên trang web`;
    modalSignInStatusTitle.style.color = `black`;
   
}
signInBtn.addEventListener(`click`, signInOnClickCallback);

//Nút đăng ký trong phần Đăng ký
function modalSignUpOnclickCallback() {
const word = ' ';
const CheckString=(passwordInput.value);
    if (passwordInput.value != repeatPasswordInput.value ||
        nameInput.value == `` || passwordInput.value == `` || repeatPasswordInput.value == `` ||
        nameInput.value == null || EmailInput.value == ``) {
        modalSignUpStatusTitle.textContent = `Sai thông tin! Vui lòng nhập lại!`;
        modalSignUpStatusTitle.style.color = `red`;
        passwordInput.value = null;
        repeatPasswordInput.value = null;
        return;
    }
  else if(CheckString.includes(word)==true)
    {
      alert('password không được có khoảng trắng');
      console.log(CheckString)
      passwordInput.value = null;
      repeatPasswordInput.value = null;
      nameInput.value == null;
      EmailInput.value == null;
    }
    else{
    let newUser = {
        user_name: nameInput.value,
        password: repeatPasswordInput.value,
        email:EmailInput.value
    }
    user.push(newUser);
    nameInput.value = null;
    EmailInput.value=null;
    passwordInput.value = null;
    repeatPasswordInput.value = null;
    modalSignUp.style.display = `none`;
}
}
modalSignUpBtn.addEventListener(`click`, modalSignUpOnclickCallback);

//Nút đăng nhập trong phần Đăng nhập
function modalSignInOnclickCallback() {
    let isUserTypeRight = false;
    for (let i = 0; i < user.length; i++) {
        if (user[i].name==modalNameInput.value && user[i].password==modalPasswordInput.value)
        {
            isUserTypeRight = true;
        }
    else if(isUserTypeRight = true)
        {
           signIn(i);
          Content_Title_Bag.style.display = `block`;
            modalNameInput.value = null;
            modalPasswordInput.value = null;
            modalSignIn.style.display = `none`;
            
        }
        
    else if(isUserTypeRight = false)
    {
       
        modalSignInStatusTitle.textContent = `Thông tin sai! Vui lòng điền lại`;
        modalSignInStatusTitle.style.color = `red`;
        modalNameInput.value = null;
        modalPasswordInput.value = null;
    }
}
}


modalSignInBtn.addEventListener(`click`, modalSignInOnclickCallback);

function signIn(index) {
    signInBtn.style.display = `none`;
    signUpBtn.style.display = `none`;
    signOutBtn.style.display = `block`;
    console.log('user[index].name')
    sideName.textContent = user[index].name;
}

// Nút đăng xuất
function signOut() {
    signInBtn.style.display = `block`;
    signUpBtn.style.display = `block`;
    signOutBtn.style.display = `none`;
    sideName.textContent = `no name`;
  Content_Title_Bag.style.display = `none`
}

signOutBtn.addEventListener(`click`, signOut);


//showPro
let mainProd = document.getElementById('main-content');
//fnc list
function showList(productsData){
    // let entry = data.entry;
    // console.log(entry);
    // console.log(productsData)
    for(let prod of productsData){
        let imageUrl = prod.imageUrl;
        let name = prod.name;
        // console.log(name)
        let brand = prod.brand;
        let price = prod.price;
        let size = prod.size;
        let sex = prod.sex;
        let scent = prod.scent;
        // let more = prod['link'][0].attributes.href;
        product(imageUrl,name, brand,price,size,sex,scent);
    }
}
// console.log(showList);
showList(productsData);


// fnc prod
function product(imageUrl,name, brand,price,size,sex,scent){

    // console.log(mainProd)
    mainProd.insertAdjacentHTML('beforeend',`
    <div class="main-item">
        <div class="main-pic">
            <img wirdth="170" height="170" src="${imageUrl}" alt="${name}"/>
        </div>
        <div class="title">
            <b>${brand}</b><br/>
            <span>${price}</span>

        </div>
    </div>
`);
}
//DOM add-delete

const table_body = document.getElementById('body');
const add_btns = document.getElementsByClassName('add_btns');
const remove_btns = document.getElementsByClassName('remove_btn');
const tableChoice = document.getElementById('table_choice');
const product_choice=[ ];

function update_table() {

    // table_body.innerHTML = '';

    for (let data of productsData) {
        table_body.insertAdjacentHTML('beforeend', `<tr><td>${data.name}</td><td>${data.brand}</td><td>${data.price}</td><td><td>${data.size}</td><td>${data.sex}</td><td>${data.scent}</td></td><button class="add_btns">Add</button></td></tr>`);
      };
}
update_table();


// button Add table choice
  for (let i = 0; i < add_btns.length; i++) {
        add_btns[i].addEventListener('click', () => {
           let choice ={name:productsData[i].name, brand:productsData[i].brand, price:productsData[i].price, size:productsData[i].size,sex:productsData[i].sex,scent:productsData[i].scent}
           product_choice.push(choice)
           // console.log(choice)
           // console.log(product_choice)
           update_tableChoice();
        })
  }


function  update_tableChoice(){

    tableChoice.innerHTML = '';

    for (let prod of product_choice) {
        tableChoice.insertAdjacentHTML('beforeend', `<tr><td>${prod .name}</td><td>${prod .brand}</td><td>${prod .price}</td>   <td>${prod .size}</td><td>${prod .sex}</td><td>${prod .scent}</td><button onclick="Remove ()" class="remove_btn">X</button></tr>`)
       
      }
} 


 // button remove table choice
function Remove(){
 for (let i = 0; i < remove_btns.length; i++) {
        remove_btns[i].addEventListener('click', () => {
            product_choice.splice(i, 1);
          console.log(product_choice)
           update_tableChoice();
        });
 }
}
