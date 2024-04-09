document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch('srilankan animals.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(content => {
            localStorage.setItem("DOWC", JSON.stringify(content));
  
            const data = JSON.parse(localStorage.getItem("DOWC"));
            console.log(data);
            
            document.getElementById("intro5-text").innerHTML =
            data.sections [0].content.header;
            document.getElementById("asd-1").innerHTML =
            data.sections [1].content.text;
            document.getElementById("iconic-animals1").innerHTML =
            data.sections [2].content.header;
            document.getElementById("subtopic-1-text2").innerHTML =
            data.sections [2].content.animals[0].name;
            const iconic_image1 = data.sections[2].content.animals[0].image;
            document.getElementById("subtopic-1-text1").src = `./${iconic_image1}`;
            document.getElementById("subtopic-1-text23").innerHTML =
            data.sections [2].content.animals[0].description;
            document.getElementById("subtopic-1-text24").innerHTML =
            data.sections [2].content.animals[1].name;
            const iconic_image2 = data.sections[2].content.animals[1].image;
            document.getElementById("subtopic-1-text inverse").src = `./${iconic_image2}`;
            document.getElementById("subtopic-1-text25").innerHTML =
            data.sections [2].content.animals[1].description;
            document.getElementById("subtopic-1-text26").innerHTML =
            data.sections [2].content.animals[2].name;
            const iconic_image3 = data.sections[2].content.animals[2].image;
            document.getElementById("subtopic-1-text12").src = `./${iconic_image3}`;
            document.getElementById("subtopic-1-text27").innerHTML =
            data.sections [2].content.animals[2].description;
            




        
        

        
        
        


  
           
  
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
   });