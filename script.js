  window.addEventListener('resize', function() {
    if (window.innerWidth < 1042) {
      sidebar.classList.add("active");
    }
    else sidebar.classList.remove("active");

  });
