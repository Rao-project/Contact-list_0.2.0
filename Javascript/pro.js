const person = {};

function save(){
    var first_name =  document.querySelector(".first_name").value;
    var last_name =  document.querySelector(".last_name").value;
    var label_1 =  document.querySelector(".label_1").value;
    var phone_number_1 =  document.querySelector(".phone_number_1").value;
    var label_2 =  document.querySelector(".label_2").value;
    var email =  document.querySelector(".email").value;
    let birthdate =  document.querySelector(".birthdate").value;
    var note =  document.querySelector(".note").value;
    var image =  document.querySelector(".image").value;
    console.log(first_name,last_name,label_1,phone_number_1,label_2,email,birthdate,note,image);
    person = {first_name,last_name,label_1,phone_number_1,label_2,email,birthdate,note,image};
    console.log("object"+person);
}
export default person; 


