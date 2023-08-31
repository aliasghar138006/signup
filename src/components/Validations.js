const Validations = (data , type) => {
  const errors = {};

  if (type === "signup") {
    if(!data.name.trim()){
      errors.name = "name requierd"
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword){
      errors.confirmPassword = "confirm required"
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "confirm and password not match"
    } else {
      delete errors.confirmPassword;
    }
  
    if(!data.isAccepted) {
      errors.isAccepted = "please accept regular!!"
    } else {
     delete errors.isAccepted;
    }
  }



  if(!data.email){
    errors.email = "email required"
  } else if(!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "this email invalid";
  } else {
    delete errors.email;
  }

  if(!data.password) {
    errors.password = "password required"
  } else if (data.password.length < 6){
    errors.password = "password must be gt 6"
  }else {
    delete errors.password;
  }

  

  

  return errors;
}


export default Validations;
