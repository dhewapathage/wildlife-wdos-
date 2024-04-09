const get_data_button = document.getElementById("selectPage");
if (get_data_button) {
  get_data_button.addEventListener("click", function (e) {
    const selectPage = document.querySelector(".selectPage").value;
    let textarea = document.querySelector(".jsonTextarea");

    if (selectPage == "homepage") {
      textarea.value = localStorage.getItem("homepage");
    } else if (selectPage == "intro") {
      textarea.value = localStorage.getItem("intro");
    } else if (selectPage == "DOWC") {
      textarea.value = localStorage.getItem("DOWC");
    } else if (selectPage == "leopard") {
      textarea.value = localStorage.getItem("leopard");
    } else if (selectPage == "Animals") {
      textarea.value = localStorage.getItem("Animals");
    } else if (selectPage == "Wilpattu") {
      textarea.value = localStorage.getItem("Wilpattu");
    } else if (selectPage == "yala") {
      textarea.value = localStorage.getItem("yala");
    }
  });
}

const editPageButton = document.getElementById("saveChanges");
if (editPageButton) {
  editPageButton.addEventListener("click", function (e) { 
    const selectPage = document.querySelector(".selectPage").value;
    const textareaValue = document.querySelector(".jsonTextarea").value;

    if (selectPage && textareaValue) {
      if (selectPage == "homepage") {
        localStorage.setItem("homepage", textareaValue);
        
      } else if (selectPage == "intro") {
        localStorage.setItem("intro", textareaValue);
      } else if (selectPage == "DOWC") {
        localStorage.setItem("DOWC", textareaValue);
      } else if (selectPage == "leopard") {
        localStorage.setItem("leopard", textareaValue);
      } else if (selectPage == "Animals") {
        localStorage.setItem("Animals", textareaValue);
      } else if (selectPage == "Wilpattu") {
        localStorage.setItem("Wilpattu", textareaValue);
      } else if (selectPage == "yala") {
        localStorage.setItem("yala", textareaValue);
      } else {
       
      }
    }
  });
}
