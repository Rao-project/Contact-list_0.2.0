document.getElementsByClassName("contact")[0].addEventListener('click', function (event) 
{
    window.location.href="index.html";
    console.log("clicked");
}); 
 // Close the dropdown if the user clicks outside of it
 window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function menu(){
var hide = document.getElementById("column");
if (hide.style.display === "none"){
hide.style.display = "block";
}else{
hide.style.display = "none";
}
}   
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
}
}
}
function upload_image() {
document.getElementById('input_file').click();
}
const previewImage = (event) => {
/**
* Get the selected files.
*/
const imageFiles = event.target.files;
/**
* Count the number of files selected.
*/
const imageFilesLength = imageFiles.length;
/**
* If at least one image is selected, then proceed to display the preview.
*/
if (imageFilesLength > 0) {
/**
 * Get the image path.
 */
const imageSrc = URL.createObjectURL(imageFiles[0]);
 
/**
 * Select the image preview element.
 */
const imagePreviewElement = document.querySelector("#img002");
/**
 * Assign the path to the image preview element.
 */
imagePreviewElement.src = imageSrc;
/**
 * Show the element by changing the display value to "block".
 */

}
};
//Converts image in base64
let imagebase64 = 0;
function image_uploaded()
{
    let file = document.querySelector('input[type=file]')["files"][0];
    let reader = new FileReader();
    reader.onload = function () 
    {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");

        imageBase64Stringsep = base64String;
        imagebase64 = base64String;
        console.log("Base 64 string",imagebase64);
        // alert(imageBase64Stringsep);
        
    }
    reader.readAsDataURL(file);
}


// function save(){
//     const first_name =  document.querySelector(".first_name").value;
//     const last_name =  document.querySelector(".last_name").value;
//     const label_1 =  document.querySelector(".label_1").value;
//     const phone_number_1 =  document.querySelector(".phone_number_1").value;
//     const label_2 =  document.querySelector(".label_2").value;
//     const email =  document.querySelector(".email").value;
//     const birthdate =  document.querySelector(".birthdate").value;
//     const note =  document.querySelector(".note").value;
//     const user_image = imagebase64;
//     console.log(first_name,last_name,label_1,phone_number_1,label_2,email,birthdate,note,user_image);

// }
document.addEventListener("DOMContentLoaded", () => {
    let db;
    const request = indexedDB.open("myDB", 1);

    request.onerror = event => {
        console.error("Database error:", event.target.error);
    };
    request.onupgradeneeded = event => {
        db = event.target.result;
        const objectStore = db.createObjectStore("contact", { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("first_name", "first_name", { unique: false },"last_name", "last_name", { unique: false }
        ,"label_1", "label_1", { unique: false },"phone_number_1", "phone_number_1", { unique: false }    
        ,"label_2", "label_2", { unique: false },"phone_number_2", "phone_number_2", { unique: false }    
        ,"email", "email", { unique: false },"birthdate", "birthdate", { unique: false }    
        ,"note", "note", { unique: false },"user_image", "user_image", { unique: false },
        "favourite","favourite",{ unique: false });
    };
    
    request.onsuccess = event => {
        db = event.target.result;
        const first_name =  document.querySelector(".first_name");
        const last_name =  document.querySelector(".last_name");
        const label_1 =  document.querySelector(".label_1");
        const phone_number_1 =  document.querySelector(".phone_number_1");
        const label_2 =  document.querySelector(".label_2");
        const phone_number_2 = document.querySelector(".phone_number_2");
        const email =  document.querySelector(".email");
        const birthdate =  document.querySelector(".birthdate");
        const note =  document.querySelector(".note");
        const user_image = imagebase64;
        const addcontact = document.querySelector(".upload");
        function addContact()
        {
            const fName = first_name.value.trim();
            const lName = last_name.value.trim();
            const label1 = label_1.value.trim();
            const phoneNumber1 = phone_number_1.value.trim();
            const label2 = label_2.value.trim();
            const phoneNumber2 = phone_number_2.value.trim();
            const eMail = email.value.trim();
            const birthDate = birthdate.value.trim();
            const Note = note.value.trim();
            const userImage = user_image;
            if(fName !== "")
            {
                const transaction = db.transaction(["contact"], "readwrite"); 
                const objectStore = transaction.objectStore("contact");
                const newContact =
                {
                    first_name: fName,last_name:lName,
                    label_1:label1,phone_number_1:phoneNumber1,
                    label_2:label2,phone_number_2:phoneNumber2,
                    email:eMail,birthdate:birthDate,
                    note:Note,user_image: userImage
                };
                const request = objectStore.add(newContact);

                request.onsuccess = () =>
                {
                    first_name.value = "";
                    last_name.value = "";
                    label_1.value = "";
                    phone_number_1.value = "";
                    label_2.value = "";
                    phone_number_2.value = "";
                    email.value = "";
                    birthdate.value = "";
                    note.value = "";
                    user_image.value = "";
                };
            }
        }
        addcontact.addEventListener("click",addContact);
    }
});
