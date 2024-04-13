document
  .getElementById("submit")
  .addEventListener("click", function submit_button() {
    //   calc inputs
    var weight_input = document.getElementById("input_1").value;
    var height_input = document.getElementById("input_2").value;
    // variables
    var weight = weight_input;
    var height = height_input /100 ;
    var body_mass = weight / (height * height);
    // showing results in web page
    var result_inner_1 = document.getElementById("result_1");
    var result_inner_2 = document.getElementById("result_2");
    // if statement
    ////     BMI    /////

    if (body_mass < 18) {
      //نحافه
      result_inner_1.innerHTML = `${body_mass}`;
      result_inner_2.innerHTML = `نحافه`;
    } else if (body_mass >= 18 && body_mass < 24.9) {
      //وزن مثالي
      result_inner_1.innerHTML = `${body_mass}`;
      result_inner_2.innerHTML = `وزن مثالي`;
    } else if (body_mass <= 25 && body_mass > 29.9) {
      //وزن زائد
      result_inner_1.innerHTML = `${body_mass}`;
      result_inner_2.innerHTML = `وزن زائد`;
    } else if (body_mass <= 30 && body_mass < 34.9) {
      //سمنه درجه اولي
      result_inner_1.innerHTML = `${body_mass}`;
      result_inner_2.innerHTML = `سمنه درجه اولي`;
    } else if (body_mass <= 35 && body_mass < 39.9) {
      //سمنه درجه ثانيه
      result_inner_1.innerHTML = `${body_mass}`;
      result_inner_2.innerHTML = `سمنه درجه ثانيه`;
    } else if (body_mass >= 40){
    result_inner_1.innerHTML = `${body_mass}`;
    result_inner_2.innerHTML = `سمنه خطيرة`;
  
  }
});
