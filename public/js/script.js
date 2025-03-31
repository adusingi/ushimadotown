// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  // Create mobile menu toggle button
  const menuToggle = document.createElement('button')
  menuToggle.className = 'menu-toggle'
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
  document.body.appendChild(menuToggle)

  const sidebar = document.querySelector('.sidebar')

  // Toggle sidebar on button click
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active')

    // Change icon based on sidebar state
    if (sidebar.classList.contains('active')) {
      menuToggle.innerHTML = '<i class="fas fa-times"></i>'
    } else {
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })

  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (event) => {
    if (
      window.innerWidth <= 767 &&
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      sidebar.classList.contains('active')
    ) {
      sidebar.classList.remove('active')
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      sidebar.classList.remove('active')
    }
  })

  // Hero slider functionality
  const dots = document.querySelectorAll('.dot')
  const prevBtn = document.querySelector('.hero-nav-btn.prev')
  const nextBtn = document.querySelector('.hero-nav-btn.next')

  let currentSlide = 0
  const totalSlides = dots.length

  function updateSlider() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide)
    })
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
      updateSlider()
    })

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides
      updateSlider()
    })
  }

  // Optional: Auto-rotate slides
  setInterval(() => {
    if (dots.length > 0) {
      currentSlide = (currentSlide + 1) % totalSlides
      updateSlider()
    }
  }, 5000)

  // Add smooth scrolling to navigation links
  document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.addEventListener('click', (e) => {
      // Only close sidebar on mobile
      if (window.innerWidth <= 767) {
        const sidebar = document.querySelector('.sidebar')
        const menuToggle = document.querySelector('.menu-toggle')
        sidebar.classList.remove('active')
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
      }
    })
  })
})
