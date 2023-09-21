

   const aboutOpenClose = document.getElementById('mySidenav-about');
   const menuOpenClose = document.getElementById('mySidenav-menu');
   const jobOpenClose = document.getElementById('mySidenav-job');
   const contactOpenClose = document.getElementById('mySidenav-contact');


function aboutClicked(){
  
  if(aboutOpenClose.style.width ==='65%'){
    aboutOpenClose.style.width ='0'
  }
  else{
        menuOpenClose.style.width = '0'
        jobOpenClose.style.width = '0'
        contactOpenClose.style.width = '0'
        aboutOpenClose.style.width = '65%'
      }
}

function menuClicked(){

  if(menuOpenClose.style.width==='65%'){
    menuOpenClose.style.width = '0'
  }
  else{
    aboutOpenClose.style.width = '0'    
    jobOpenClose.style.width = '0'
    contactOpenClose.style.width = '0'
    menuOpenClose.style.width = '65%'
  }
}


function jobClicked(){

  if(jobOpenClose.style.width==='65%'){
    jobOpenClose.style.width = '0'
  }
  else{
    aboutOpenClose.style.width = '0'      
    contactOpenClose.style.width = '0'
    menuOpenClose.style.width = '0'
    jobOpenClose.style.width = '65%'
  }
}


function contactClicked(){

  if(contactOpenClose.style.width==='65%'){
    contactOpenClose.style.width = '0'
  }
  else{
    aboutOpenClose.style.width = '0'        
    menuOpenClose.style.width = '0'
    jobOpenClose.style.width = '0'
    contactOpenClose.style.width = '65%'
  }
}
function homeClicked(){

  aboutOpenClose.style.width = '0'        
    menuOpenClose.style.width = '0'
    jobOpenClose.style.width = '0'
    contactOpenClose.style.width = '0'
}













