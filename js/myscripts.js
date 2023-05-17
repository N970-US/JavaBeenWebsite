submitBtn.addEventListener('click', validate);


const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const emailAddress = document.getElementById('email-address');
  if (username.value === "") {
    alert("USERNAME IS  NULLL");
    username.focus();
    return false;
  }
  if (emailAddress.value === "") {
    alert("Please enter your email address.ESTTESTTES");
    emailAddress.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);