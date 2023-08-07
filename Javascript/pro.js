function save(){
    var first_name =  document.querySelector(".first_name").value;
    var last_name =  document.querySelector(".last_name").value;
    var label_1 =  document.querySelector(".label_1").value;
    var phone_number_1 =  document.querySelector(".phone_number_1").value;
    var label_2 =  document.querySelector(".label_2").value;
    var email =  document.querySelector(".email").value;
    var birthdate =  document.querySelector(".birthdate").value;
    var note =  document.querySelector(".note").value;
    var image =  document.querySelector(".image").value;
    console.log(first_name,last_name,label_1,phone_number_1,label_2,email,birthdate,note,image);
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

