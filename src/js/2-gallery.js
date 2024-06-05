const formData = {
    email: "",
    message: ""
}

const inputEmail = document.querySelectorAll('input');
const inputTextarea = document.querySelector('textarea');




// Функция для загрузки данных из локального хранилища
// function loadFormData() {
//     const savedData = localStorage.getItem('feedback-form-state');
//     if (savedData) {
//       formData = JSON.parse(savedData);
//       document.querySelector('.feedback-form input[name="email"]').value = formData.email;
//       document.querySelector('.feedback-form textarea[name="message"]').value = formData.message;
//     }
//   }
  
  // Функция для сохранения данных в локальное хранилище
//   function saveFormData() {
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   }
  
  // Загрузка данных при загрузке скрипта
//   loadFormData();
  
//   // Использование делегирования для отслеживания изменений в форме
//   document.querySelector('.feedback-form').addEventListener('input', (event) => {
//     if (event.target.name === 'email') {
//       formData.email = event.target.value;
//     } else if (event.target.name === 'message') {
//       formData.message = event.target.value;
//     }
//     saveFormData();
//   });