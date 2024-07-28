window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".fa-chevron-left");

    closeBtn.addEventListener("click", function(){
        sidebar.classList.toggle("close")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("close")) {
            closeBtn.classList.replace("fa-chevron-left", "fa-chevron-right")
        }
        else {
            closeBtn.classList.replace("fa-chevron-right", "fa-chevron-left")
        }
    }
}