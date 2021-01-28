var images=[
  
    
    "https://media.npr.org/assets/img/2014/05/08/simp2006_homerarmscrossed_f_custom-ec94cc7a10463aa8260b2c5a9a3ebea29c7ecbfe-s800-c85.jpg",
    
    "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    
    "https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png/revision/latest?cb=20201222215318",
    
    "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
    
    "https://static.wikia.nocookie.net/p__/images/a/a9/Abraham_Simpson.png/revision/latest?cb=20130122013405&path-prefix=protagonist"
    
  ];
  var member=[
  
    
    "Pavan Prayaga",
    
    "Sid",
    
    "Shyamala Prayag",
    
    "Baby",
    
    "Grandpa"
    
  ];
  
  var i=0;
  function change(){ 
    
    
   if(i==5){ 
  i=0;
   
   }
    document.getElementById("Family_Book").src=images[i];
    document.getElementById("Family_Book").src=member[i];
  i++;                               
  }
    
   
  