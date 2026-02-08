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

// 1. CHỌN ELEMENT CHÍNH XÁC (Dùng ID #switch cho chắc chắn)
const toggleSwitch = document.querySelector('#switch');
const logoImg = document.querySelector('#logo-img'); // Chọn thêm logo để đổi màu

// 2. HÀM XỬ LÝ CHÍNH
function switchTheme(e) {
    const isDark = e.target.checked; 

    if (isDark) {
        // Bật Dark Mode
        document.documentElement.classList.add('dark'); // Cho Tailwind
        document.documentElement.setAttribute('data-theme', 'dark'); // Cho CSS thường
        localStorage.setItem('theme', 'dark');
        // Đổi logo (nếu cần)
        if(logoImg) logoImg.style.filter = "invert(1)"; 
    } else {
        // Tắt Dark Mode
        document.documentElement.classList.remove('dark');
        document.documentElement.removeAttribute('data-theme'); // Hoặc set là 'light'
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // Trả lại logo
        if(logoImg) logoImg.style.filter = "invert(0)";
    }
}

// 3. QUAN TRỌNG NHẤT: GẮN SỰ KIỆN (Dòng này bị thiếu trước đó)
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}

// 4. KIỂM TRA TRẠNG THÁI KHI LOAD TRANG
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        if (toggleSwitch) {
            toggleSwitch.checked = true;
        }
        document.documentElement.classList.add('dark');
        if(logoImg) logoImg.style.filter = "invert(1)";
    }
}

// ==================== FOOTER - NĂM HIỆN TẠI ====================
// Tự động cập nhật năm hiện tại ở footer
const dateElement = document.querySelector("#datee");
if (dateElement) {
  const currentYear = new Date().getFullYear();
  dateElement.innerHTML = currentYear;
}
