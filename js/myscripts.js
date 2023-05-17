const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  if (name.value === "") {
    alert("Please enter your name.");
    name.focus();
    return false;
  }
  if (email.value === "") {
    alert("Please enter your email address.TESTTESTTEST");
    email.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);
