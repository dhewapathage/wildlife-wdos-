document.addEventListener("DOMContentLoaded", function () {
    // Fetching data from JSON
    fetch('index.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('network respond doesnt work');
            }
            return response.json();
        })
        .then(content => {
            if (!localStorage.getItem("homepage")) { localStorage.setItem("homepage", JSON.stringify(content)); }
  
            const data = JSON.parse(localStorage.getItem("homepage"));
            console.log(data);

            document.getElementById("content-1").innerHTML =
        data.sections [0].content.heading;
        document.getElementById("content-2").innerHTML =
        data.sections [0].content.subheading;
        document.getElementById("content-3").innerHTML =
        data.sections [0].content.paragraph;
        document.getElementById("intro-home").innerHTML =
        data.sections [1].content.paragraph;
        document.getElementById("secret").innerHTML =
        data.sections [2].name;
        document.getElementById("secret-content").innerHTML =
        data.sections [2].secrets[0].title;
        const index_image = data.sections[2].secrets[0].image;
      document.getElementById("secret-flex").src = `./${index_image}`;
      document.getElementById("secret-content2").innerHTML =
      data.sections [2].secrets[0].description;
      document.getElementById("secret-content3").innerHTML =
      data.sections [2].secrets[1].title;
      const index_image1 = data.sections[2].secrets[1].image;
      document.getElementById("ecret-flex inverse").src = `./${index_image1}`;
      document.getElementById("secret-content4").innerHTML =
      data.sections [2].secrets[1].description;
      document.getElementById("secret-content5").innerHTML =
      data.sections [2].secrets[2].title;
      const index_image3 = data.sections[2].secrets[2].image;
      document.getElementById("secret-flex1").src = `./${index_image3}`;
      document.getElementById("secret-content6").innerHTML =
      data.sections [2].secrets[2].description;
      document.getElementById("times1").innerHTML =
      data.sections [3].guide[0].title;
      document.getElementById("news-section small").innerHTML =
      data.sections [4].must_visit_places[0].heading;
      document.getElementById("box1").innerHTML =
      data.sections [4].must_visit_places[1].name;
      const index_image4 = data.sections[4].must_visit_places[1].image;
      document.getElementById("box").src = `./${index_image4}`;
      document.getElementById("box3").innerHTML =
      data.sections [4].must_visit_places[2].name;
      const index_image5 = data.sections[4].must_visit_places[2].image;
      document.getElementById("box2").src = `./${index_image5}`;
      document.getElementById("box5").innerHTML =
      data.sections [4].must_visit_places[3].name;
      const index_image6 = data.sections[4].must_visit_places[3].image;
      document.getElementById("box4").src = `./${index_image6}`;
      document.getElementById("box7").innerHTML =
      data.sections [4].must_visit_places[4].name;
      const index_image7 = data.sections[4].must_visit_places[4].image;
      document.getElementById("box6").src = `./${index_image7}`;
      document.getElementById("box9").innerHTML =
      data.sections [4].must_visit_places[5].name;
      const index_image8 = data.sections[4].must_visit_places[5].image;
      document.getElementById("box8").src = `./${index_image8}`;
      
        
        
        


  
           
  
        })
        .catch(error => {
            console.error('There was a error with the fetch :', error);
        });
   });