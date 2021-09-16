function getElement(id) {
  return document.getElementById(id).value;
}
function isEmpty(id) {
  if (getElement(id) == '') {
    return true;
  }
  return false;
}
function onSubmitHandle() {
  var isFormValid = true;
  if (isEmpty('firstName')) {
    isFormValid = false;
    alert('Please enter first name');
  } else if (isEmpty('lastName')) {
    isFormValid = false;
    alert('Please enter last name');
  } else if (isEmpty('email')) {
    isFormValid = false;
    alert('Please enter email');
  } else if (isEmpty('password')) {
    isFormValid = false;
    alert('Please enter password');
  }

  return isFormValid;
}
