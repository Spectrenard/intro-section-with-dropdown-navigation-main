document.addEventListener("DOMContentLoaded", function () {
  const featuresMenuItem = document.querySelector(".menu-item");
  const featuresMenuContent = document.querySelector(".features-content");
  const companyMenuItem = document.querySelector(".menu-item2");
  const companyMenuContent = document.querySelector(".company-content");

  featuresMenuItem.addEventListener("click", function () {
    featuresMenuContent.classList.toggle("show-menu");
  });

  companyMenuItem.addEventListener("click", function () {
    companyMenuContent.classList.toggle("show-menu");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".side-bar");
  const toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const titlef = document.querySelector("span");
  const itemsf = document.querySelector(".features-items");

  titlef.addEventListener("click", function () {
    itemsf.classList.toggle("show-features");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuCompany = document.getElementById('company')
  const companyItems = document.querySelector(".company-items");

  menuCompany.addEventListener("click", function () {
    companyItems.classList.toggle("show-company");
  });
});

