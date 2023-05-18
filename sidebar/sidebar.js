const head = document.getElementsByTagName('head')[0];
const script1 = document.createElement('script');
const script2 = document.createElement('script');
const script3 = document.createElement('script');
script1.src = "https://use.fontawesome.com/releases/v5.0.13/js/solid.js";
script1.integrity = "sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ";
script1.crossOrigin = "anonymous";
script1.defer = true;
script2.src = "https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js";
script2.integrity = "sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY";
script2.crossOrigin = "anonymous";
script2.defer = true;
script3.src = "https://kit.fontawesome.com/8c025b47e7.js";
script3.crossOrigin = "anonymous";
script3.defer = true;
head.appendChild(script1);
head.appendChild(script2);
head.appendChild(script3);




// Sayfa yüklendiğinde, scroll pozisyonunu localStorage'a kaydediyoruz
// Sidebar'ın kaydırma pozisyonunu depolama
const sidebar = document.querySelector('#sidebar');
sidebar.addEventListener('scroll', () => {
  localStorage.setItem('sidebarScrollPosition', sidebar.scrollTop);
});

// Sayfa yüklendiğinde, kaydırma pozisyonunu geri yükleme
window.addEventListener('load', () => {
  const sidebarScrollPosition = localStorage.getItem('sidebarScrollPosition');
  if (sidebarScrollPosition !== null) {
    sidebar.scrollTop = sidebarScrollPosition;
  }
});

  


