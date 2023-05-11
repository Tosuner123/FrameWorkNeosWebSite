document.addEventListener("DOMContentLoaded", function() {
    // const sidebarCollapse = document.getElementById("sidebarCollapse");
    const sidebar = document.getElementById("sidebar");
    const mainContent=document.querySelector(".main")
    
  
    // sidebarCollapse.addEventListener("click", function() {
    //   sidebar.classList.toggle("active");
    // });
  });
  

  window.addEventListener('resize', function() {
    if (window.innerWidth < 1042) {
      sidebar.classList.add("active");
    }
    else sidebar.classList.remove("active");

  });
