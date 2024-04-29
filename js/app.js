function alertAdd() {
  alert('Ви можете додати цю сторінку до закладок, натиснувши CTRL + D на клавіатурі.')
}

function alertTomorrow() {
  alert('Ця функція ще в розробці.')
}

function requestSupport() {
  let button_checker = document.querySelector('.feedback__checkbox-input').checked
  console.log(document.getElementById('email').value)
  if (!button_checker || document.getElementById('email').value.length === 0 || document.getElementById('message').value.length === 0) {
    alert("Помилка! Введено не вірні данні!")
  }
  else {
    alert("Повідомлення відправлено!")
  }
}
