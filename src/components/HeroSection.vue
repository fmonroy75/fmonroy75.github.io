<template>
  <section id="home" class="hero-section min-vh-100 d-flex align-items-center position-relative overflow-hidden py-5 pt-lg-6">
    <!-- Overlay de Fondo con degradado ambiental y textura -->
    <div class="hero-bg-overlay position-absolute w-100 h-100 top-0 start-0 pointer-events-none">
      <div class="hero-bg-img" :style="{ backgroundImage: 'url(' + fondoImage + ')' }"></div>
      <div class="hero-bg-gradient"></div>
    </div>

    <div class="container position-relative z-2">
      <div class="row align-items-center min-vh-100 py-5">
        <!-- Columna Izquierda: Información & CTA -->
        <div class="col-lg-7 text-center text-lg-start">
          <div class="hero-content">
            <!-- Availability Badge -->
            <div class="d-inline-flex align-items-center gap-2 badge-pill-glow mb-4 glass-card px-4 py-2 rounded-pill shadow-sm">
              <span class="status-dot-pulse"></span>
              <span class="fw-semibold text-uppercase fs-7 tracking-wider">FULL STACK DEVELOPER • LEADER</span>
            </div>

            <!-- Título Principal -->
            <h1 class="display-1 fw-extrabold mb-3 lh-sm">
              Francisco <span class="text-gradient-accent">Monroy H.</span>
            </h1>

            <!-- Subtítulo -->
            <h2 class="h3 fw-medium text-secondary mb-4 opacity-90">
              Ingeniero de Sistemas • Civil Industrial • <span class="text-accent fw-bold">15+ Años</span> de Experiencia
            </h2>

            <!-- Descripción -->
            <p class="lead text-secondary mb-5 opacity-80 mx-auto mx-lg-0" style="max-width: 620px;">
              Especialista en desarrollo full stack, arquitectura de software, gestión de proyectos tecnológicos y soluciones de análisis de datos de alto impacto.
            </p>

            <!-- Botones de Acción -->
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mb-5">
              <button @click="scrollToSection('contact')" class="btn btn-accent btn-lg btn-shimmer d-flex align-items-center gap-2 shadow-lg">
                <i class="bi bi-send-fill"></i>
                <span>Contactar ahora</span>
              </button>

              <button @click="scrollToSection('portfolio')" class="btn btn-outline-accent btn-lg d-flex align-items-center gap-2">
                <i class="bi bi-briefcase-fill"></i>
                <span>Ver proyectos</span>
              </button>

              <a :href="personalInfo.cvFile" download="Francisco_Monroy_CV.pdf" class="btn btn-outline-light btn-lg d-flex align-items-center gap-2">
                <i class="bi bi-file-earmark-arrow-down-fill"></i>
                <span>CV</span>
              </a>
            </div>

            <!-- Estadísticas Destacadas (Stats Cards) -->
            <div class="row g-3 pt-3 border-top border-subtle">
              <div v-for="stat in personalInfo.stats" :key="stat.label" class="col-6 col-sm-3">
                <div class="glass-card p-3 rounded-4 text-center text-lg-start h-100 hover-stat-card">
                  <div class="display-6 fw-extrabold text-gradient-accent mb-1">{{ stat.value }}</div>
                  <div class="small text-secondary fw-medium opacity-90">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Avatar Interactivo con Anillo Luminoso & Badges Flotantes -->
        <div class="col-lg-5 d-none d-lg-block mt-5 mt-lg-0">
          <div class="position-relative hero-avatar-wrapper mx-auto">
            <!-- Halo Glow de Fondo -->
            <div class="hero-avatar-glow"></div>
            
            <!-- Anillo Giratorio de Gradiente -->
            <div class="hero-avatar-ring animate-spin-slow"></div>

            <!-- Avatar Container -->
            <div class="hero-avatar-container shadow-2xl">
              <img :src="fm" alt="Francisco Monroy H." class="hero-avatar-img">
            </div>

            <!-- Badge Flotante Superior Derecho -->
            <div class="glass-card position-absolute top-0 end-0 p-3 rounded-4 shadow-xl animate-float floating-badge-top">
              <div class="d-flex align-items-center gap-3">
                <div class="badge-icon-box bg-gradient-accent rounded-circle p-2 text-white">
                  <i class="bi bi-award-fill fs-5"></i>
                </div>
                <div class="text-start">
                  <div class="fw-bold text-primary mb-0">15+ Años</div>
                  <div class="small text-secondary">Experiencia Senior</div>
                </div>
              </div>
            </div>

            <!-- Badge Flotante Inferior Izquierdo -->
            <div class="glass-card position-absolute bottom-0 start-0 p-3 rounded-4 shadow-xl animate-float-reverse floating-badge-bottom">
              <div class="d-flex align-items-center gap-3">
                <div class="badge-icon-box bg-gradient-accent rounded-circle p-2 text-white">
                  <i class="bi bi-code-slash fs-5"></i>
                </div>
                <div class="text-start">
                  <div class="fw-bold text-primary mb-0">Vue & Python</div>
                  <div class="small text-secondary">Full Stack & Data</div>
                </div>
              </div>
            </div>

            <!-- Badge Flotante Medio -->
            <div class="glass-card position-absolute top-50 start-0 translate-middle-y p-2 px-3 rounded-pill shadow-lg animate-float">
              <span class="small fw-bold text-gradient-accent">🚀 ERP & SQL Master</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Indicador de Scroll -->
    <div class="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-3 text-center">
      <a href="#experience" @click.prevent="scrollToSection('experience')" class="scroll-down-link text-secondary text-decoration-none">
        <div class="glass-card rounded-circle p-3 shadow-sm hover-bounce d-inline-flex">
          <i class="bi bi-chevron-down fs-4 text-accent"></i>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { personalInfo } from '../data/portfolioData'
import fondoImage from '../assets/images/fondo.jpg'
import fm from '../assets/images/IMG_1299.JPG'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(241, 245, 249, 0.95) 100%);
}

[data-bs-theme="dark"] .hero-section {
  background: linear-gradient(135deg, rgba(11, 15, 23, 0.95) 0%, rgba(17, 24, 39, 0.98) 100%) !important;
}

.hero-bg-overlay {
  z-index: 1;
  overflow: hidden;
}

.hero-bg-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.08;
  filter: grayscale(80%) contrast(120%);
}

[data-bs-theme="dark"] .hero-bg-img {
  opacity: 0.12;
  filter: grayscale(100%) contrast(150%);
}

.hero-bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 30%, rgba(45, 212, 191, 0.12) 0%, transparent 60%);
}

/* Status Dot Pulse */
.status-dot-pulse {
  width: 10px;
  height: 10px;
  background-color: #10B981;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 10px #10B981;
}

.status-dot-pulse::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px solid #10B981;
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(2.2); opacity: 0; }
}

/* Stats Cards Hover */
.hover-stat-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.hover-stat-card:hover {
  transform: translateY(-4px);
  border-color: rgba(45, 212, 191, 0.4);
  box-shadow: 0 12px 25px rgba(13, 148, 136, 0.12);
}

/* Avatar Showcase */
.hero-avatar-wrapper {
  width: 380px;
  height: 380px;
}

.hero-avatar-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%);
  filter: blur(30px);
  border-radius: 50%;
}

.hero-avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #0D9488, #2DD4BF, #6366F1, #06B6D4, #0D9488);
  padding: 3px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.hero-avatar-container {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  background: #ffffff;
  position: relative;
}

[data-bs-theme="dark"] .hero-avatar-container {
  border-color: #1E293B;
  background: #111827;
}

.hero-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hero-avatar-container:hover .hero-avatar-img {
  transform: scale(1.06);
}

.floating-badge-top {
  margin-top: -20px;
  margin-right: -20px;
  z-index: 10;
}

.floating-badge-bottom {
  margin-bottom: -20px;
  margin-left: -20px;
  z-index: 10;
}

/* Scroll Bounce */
.hover-bounce {
  transition: all 0.3s ease;
}

.hover-bounce:hover {
  transform: translateY(5px);
  box-shadow: 0 10px 20px rgba(13, 148, 136, 0.2);
}
</style>