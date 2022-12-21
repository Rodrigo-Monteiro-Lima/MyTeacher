const teacherForms = document.querySelectorAll('.teacher-contract');
teacherForms.forEach((teacher) => {
  teacher.addEventListener('submit', (e) => {
    e.preventDefault();
    const total = teacher.price.value * teacher.hours.value;
    alert('O valor total do contrato é de R$ ' + total);
  });
});
