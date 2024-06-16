let contactForm = document.querySelector('.contact-form');
let students = document.querySelector('.students');
let ekle = document.querySelector('#ekle');
let sil = document.querySelector('#sil');
let namee = document.querySelector('#namee');
let age = document.querySelector('#age');
let sonuc = 0;
let hesap = 0;
let studentList = [];
if(typeof localStorage.studentList !== 'undefined') {
  studentList = JSON.parse(localStorage.studentList);
  renderStudents();
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(contactForm);
  let formObj = Object.fromEntries(formData);
  studentList.push(formObj);
  contactForm.reset();
  hesaplama();
  deletet();
  save();
  renderStudents();
}
ekle.addEventListener('click', handleFormSubmit);


function save() {
  localStorage.studentList = JSON.stringify(studentList);
}

function deletet() {
  localStorage.clear();
}
sil.addEventListener('click', deletet);




function renderStudents() {
  students.innerHTML = '';
  for(let i = 0; i < studentList.length; i++) {
    students.innerHTML += `<div class="student">
      <h3>${studentList[i].name}</h3>
      <h4>${studentList[i].age}</h4>
      <h4>${sonuc}</h4>
      <h4>${hesap}</h4>
    </div>`;
  }
}

function hesaplama() {
  sonuc = namee.value - age.value;
  
  if (sonuc < 0) {
    hesap = "zarardasın";
  } else {
    hesap = "kardasın";
  }
}


