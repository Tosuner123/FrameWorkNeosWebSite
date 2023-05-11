document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent=document.querySelector(".main")
    
    });
  
  window.addEventListener('resize', function() {
    if (window.innerWidth < 1042) {
      sidebar.classList.add("active");
    }
    else sidebar.classList.remove("active");

  });
