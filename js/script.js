// ==================== NAVBAR MOBILE TOGGLE ====================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Mở/đóng menu trên mobile khi bấm icon 3 gạch
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Đóng navbar khi click vào 1 link trong menu
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    if (hamburger && navMenu) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  })
);

// ==================== DARK MODE TOGGLE & LOGO ====================
// Đổi logo theo theme hiện tại
function updateLogo(theme) {
  const logoImg = document.getElementById("logo-img");
  if (!logoImg) return;

  if (theme === "dark") {
    logoImg.src = "./assets/favicon/mylogo-darkmode.png";
  } else {
    logoImg.src = "./assets/favicon/mylogo.png";
  }
}

// Lắng nghe sự kiện toggle dark/light mode
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

// Lưu theme người dùng chọn vào localStorage
function switchTheme(e) {
  const isDark = e.target.checked;
  const theme = isDark ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateLogo(theme);
}

if (toggleSwitch) {
  toggleSwitch.addEventListener("change", switchTheme, false);
}

// Áp dụng lại theme đã lưu khi load trang
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (toggleSwitch && currentTheme === "dark") {
    toggleSwitch.checked = true;
  }

  // Cập nhật logo theo theme đang dùng
  updateLogo(currentTheme);
} else {
  // Mặc định light mode logo
  updateLogo("light");
}

// ==================== FOOTER - NĂM HIỆN TẠI ====================
// Tự động cập nhật năm hiện tại ở footer
const dateElement = document.querySelector("#datee");
if (dateElement) {
  const currentYear = new Date().getFullYear();
  dateElement.innerHTML = currentYear;
}
