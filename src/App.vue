<template>
  <div id="app" class="position-relative overflow-hidden">
    <!-- Barra de progreso de lectura (Scroll Progress Bar) -->
    <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Ambient Glowing Orbs Background -->
    <div class="ambient-orbs-container" aria-hidden="true">
      <div class="ambient-orb orb-1"></div>
      <div class="ambient-orb orb-2"></div>
      <div class="ambient-orb orb-3"></div>
    </div>

    <!-- Navbar Glassmórfica -->
    <nav class="navbar navbar-expand-lg fixed-top glass-navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="container">
        <!-- Logo Brand -->
        <a class="navbar-brand d-flex align-items-center gap-3" href="#home" @click.prevent="scrollToSection('home')">
          <div class="brand-logo-container">
            <img :src="logoImage" alt="Francisco Monroy" class="brand-logo-img">
            <div class="brand-logo-ring"></div>
          </div>
          <div class="d-flex flex-column">
            <span class="fw-bold fs-5 brand-name">
              F.<span class="text-gradient-accent">Monroy</span>
            </span>
            <span class="brand-title d-none d-sm-inline">Senior Developer</span>
          </div>
        </a>

        <div class="d-flex align-items-center gap-2">
          <!-- Theme Toggle Button -->
          <ThemeToggle />
          
          <button class="navbar-toggler border-0 p-2" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-center gap-lg-1">
            <li class="nav-item" v-for="item in menuItems" :key="item.name">
              <a class="nav-link px-3 py-2 fw-semibold nav-link-custom" :href="item.path" 
                 :class="{ active: activeSection === item.path.substring(1) }"
                 @click.prevent="scrollToSection(item.path.substring(1))">
                {{ item.name }}
              </a>
            </li>
            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href="#contact" class="btn btn-accent btn-sm rounded-pill px-4 btn-shimmer"
                 @click.prevent="scrollToSection('contact')">
                <i class="bi bi-envelope-fill me-2"></i>
                Contactar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content Sections -->
    <main class="position-relative z-1">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Back to top Floating Button -->
    <Transition name="fade-scale">
      <button v-show="showBackToTop" @click="scrollToTop" 
              class="btn btn-accent rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg back-to-top-btn"
              aria-label="Volver arriba" title="Volver arriba">
        <i class="bi bi-arrow-up-short fs-3"></i>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { menuItems } from './data/portfolioData'
import logoImage from './assets/images/sigla.png'

// Componentes
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'

const showBackToTop = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')
const scrollProgress = ref(0)

const checkScroll = () => {
  const currentScroll = window.scrollY
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  
  // Progreso de scroll %
  scrollProgress.value = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100))
  
  showBackToTop.value = currentScroll > 300
  isScrolled.value = currentScroll > 50

  // Detectar sección activa
  const sections = menuItems.map(item => item.path.substring(1))
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = section
        break
      }
    }
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId

    // Cerrar navbar en móvil si está abierto
    const navbarCollapse = document.getElementById('navbarNav')
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show')
    }
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style>
/* Scroll progress line */
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #0D9488 0%, #2DD4BF 50%, #6366F1 100%);
  z-index: 1050;
  transition: width 0.1s ease-out;
  box-shadow: 0 0 10px rgba(45, 212, 191, 0.7);
}

/* Ambient Ambient Glowing Orbs Background */
.ambient-orbs-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.15;
  transition: opacity 0.5s ease;
}

[data-bs-theme="dark"] .ambient-orb {
  opacity: 0.22;
}

.orb-1 {
  width: 450px;
  height: 450px;
  background: #0D9488;
  top: -100px;
  right: -100px;
  animation: floatOrb 20s infinite alternate ease-in-out;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: #6366F1;
  bottom: 10%;
  left: -150px;
  animation: floatOrb 25s infinite alternate-reverse ease-in-out;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: #06B6D4;
  top: 40%;
  right: 15%;
  animation: floatOrb 18s infinite alternate ease-in-out;
}

@keyframes floatOrb {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -60px) scale(1.1); }
  100% { transform: translate(-30px, 40px) scale(0.95); }
}

/* Glassmorphic Navbar */
.glass-navbar {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.7);
  transition: all 0.3s ease;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.navbar-scrolled {
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

[data-bs-theme="dark"] .glass-navbar {
  background: rgba(11, 15, 23, 0.82) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand-logo-container {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-logo-img {
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.brand-logo-ring {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0D9488, #2DD4BF, #6366F1);
  z-index: -1;
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.navbar-brand:hover .brand-logo-img {
  transform: scale(1.08);
}

.navbar-brand:hover .brand-logo-ring {
  opacity: 1;
  transform: scale(1.1);
}

.brand-name {
  color: #0F172A;
  line-height: 1.1;
}

[data-bs-theme="dark"] .brand-name {
  color: #F8FAFC;
}

.brand-title {
  font-size: 0.72rem;
  color: #64748B;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

[data-bs-theme="dark"] .brand-title {
  color: #94A3B8;
}

/* Nav Links Custom */
.nav-link-custom {
  color: #334155 !important;
  border-radius: 100px;
  transition: all 0.3s ease;
  position: relative;
}

[data-bs-theme="dark"] .nav-link-custom {
  color: #CBD5E1 !important;
}

.nav-link-custom:hover {
  color: #0D9488 !important;
  background: rgba(13, 148, 136, 0.06);
}

[data-bs-theme="dark"] .nav-link-custom:hover {
  color: #2DD4BF !important;
  background: rgba(45, 212, 191, 0.1);
}

.nav-link-custom.active {
  color: #0D9488 !important;
  background: rgba(13, 148, 136, 0.1);
  font-weight: 700 !important;
}

[data-bs-theme="dark"] .nav-link-custom.active {
  color: #2DD4BF !important;
  background: rgba(45, 212, 191, 0.16);
}

/* Back to Top Button */
.back-to-top-btn {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  z-index: 999;
  box-shadow: 0 10px 25px rgba(13, 148, 136, 0.4) !important;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.back-to-top-btn:hover {
  transform: translateY(-5px) scale(1.1) !important;
}

/* Animations */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
</style>