<template>
  <footer class="footer-section bg-dark text-white py-5 position-relative border-top border-subtle">
    <div class="container position-relative z-2">
      <div class="row g-4 mb-4">
        <!-- Columna 1: Brand Info -->
        <div class="col-lg-4">
          <h4 class="fw-bold mb-3 font-heading">
            Francisco <span class="text-gradient-accent">Monroy H.</span>
          </h4>
          <p class="text-secondary small mb-4 opacity-90" style="max-width: 320px;">
            {{ personalInfo.title }}
          </p>
          <div class="d-flex gap-2">
            <a :href="personalInfo.linkedin" target="_blank" 
               class="social-footer-btn" title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
            <a :href="personalInfo.github" target="_blank" 
               class="social-footer-btn" title="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a :href="'mailto:' + personalInfo.email" 
               class="social-footer-btn" title="Email">
              <i class="bi bi-envelope-fill"></i>
            </a>
            <a :href="personalInfo.cvFile" download="Francisco_Monroy_CV.pdf"
               class="social-footer-btn" title="Descargar CV">
              <i class="bi bi-file-earmark-person-fill"></i>
            </a>
          </div>
        </div>
        
        <!-- Columna 2: Links Rápidos -->
        <div class="col-lg-4">
          <h5 class="fw-bold mb-3 font-heading text-white">Navegación</h5>
          <ul class="list-unstyled">
            <li v-for="item in menuItems" :key="item.name" class="mb-2">
              <a :href="item.path" class="footer-nav-link">
                <i class="bi bi-chevron-right me-2 text-accent small"></i>
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Columna 3: Información de Contacto -->
        <div class="col-lg-4">
          <h5 class="fw-bold mb-3 font-heading text-white">Contacto</h5>
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li class="d-flex align-items-center gap-3">
              <div class="badge-icon-box bg-gradient-accent rounded-circle p-2 text-white">
                <i class="bi bi-envelope-fill fs-6"></i>
              </div>
              <a :href="'mailto:' + personalInfo.email" 
                 class="footer-nav-link">
                {{ personalInfo.email }}
              </a>
            </li>
            <li class="d-flex align-items-center gap-3">
              <div class="badge-icon-box bg-gradient-accent rounded-circle p-2 text-white">
                <i class="bi bi-geo-alt-fill fs-6"></i>
              </div>
              <span class="text-secondary small opacity-90">{{ personalInfo.location }}</span>
            </li>
            <li class="d-flex align-items-center gap-3">
              <div class="badge-icon-box bg-gradient-accent rounded-circle p-2 text-white">
                <i class="bi bi-file-earmark-arrow-down-fill fs-6"></i>
              </div>
              <a :href="personalInfo.cvFile" download="Francisco_Monroy_CV.pdf" class="footer-nav-link">
                Descargar CV en PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <hr class="my-4 border-subtle opacity-25">
      
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
          <p class="small text-secondary mb-0">
            © {{ currentYear }} Francisco Monroy H. Todos los derechos reservados.
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <span class="badge bg-light text-primary border rounded-pill px-3 py-1 small">
            Desarrollado con Vue 3 + Vite + Bootstrap 5
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { personalInfo, menuItems } from '../data/portfolioData' 

const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer-section {
  background-color: #030712 !important;
}

.social-footer-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-footer-btn:hover {
  background: #0D9488;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(13, 148, 136, 0.35);
}

.footer-nav-link {
  color: #CBD5E1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.25s ease;
}

.footer-nav-link:hover {
  color: #2DD4BF;
  padding-left: 4px;
}
</style>