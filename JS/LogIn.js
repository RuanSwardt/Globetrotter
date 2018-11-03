function visible()
{
  //var visInvis = document.getElementById('inPassword');
  if($('#inPassword').attr('type') === 'password')
  {
    $('#inPassword').attr('type', 'text');
    $('#iEye').attr('class', 'glyphicon glyphicon-eye-open');
  }
  else
  {
    $('#inPassword').attr('type', 'password');
    $('#iEye').attr('class', 'glyphicon glyphicon-eye-close');
  }
}



function validateUserCredentials()
{
  var usernameRegex = /^[a-zA-Z0-9]{8,16}/;
  var elUsername = document.getElementById('inUsername').value;
  var userNameResult = usernameRegex.test(elUsername);

  var passwordRegex = /^[a-zA-Z0-9]{8,16}/;
  var elPassword = document.getElementById('inPassword').value;
  var passwordResult = passwordRegex.test(elPassword);

  if(userNameResult == false)
  {
    alert('Please enter a valid username.');
    return false;
  }

  if(passwordResult == false)
  {
    alert('Please enter a valid password.');
    return false;
  }

  if (elUsername == elPassword)
  {
      alert("Credentials cant be the same.");
  }
  else
  {
      window.location.href = 'C:\\Users\\RuanVZ\\Desktop\\Secret Project\\Main.html';
  }
}
