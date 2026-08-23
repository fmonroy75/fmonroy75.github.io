<template>
  <section id="contact" class="py-5 py-lg-6 position-relative text-white overflow-hidden">
    <!-- Ambient Background Glow -->
    <div class="contact-glow-bg position-absolute inset-0 pointer-events-none"></div>

    <div class="container position-relative z-2">
      <div class="row justify-content-center">
        <div class="col-lg-10 text-center" data-aos="fade-up">
          <div class="glass-card-premium p-4 p-md-5 rounded-5 shadow-2xl text-center">
            <!-- Badge -->
            <div class="d-inline-flex align-items-center gap-2 badge-pill-glow mb-4">
              <i class="bi bi-chat-dots-fill"></i>
              <span>HABLEMOS</span>
            </div>
            
            <!-- Título -->
            <h2 class="display-3 fw-extrabold mb-4 text-primary">
              ¿Tienes un <span class="text-gradient-accent">proyecto</span> en mente?
            </h2>
            
            <!-- Descripción -->
            <p class="lead text-secondary mb-5 mx-auto opacity-90" style="max-width: 680px;">
              Estoy abierto a nuevas oportunidades profesionales, consultorías de desarrollo e ingeniería y proyectos de alto nivel.
            </p>
            
            <!-- Botones de Acción -->
            <div class="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
              <!-- WhatsApp CTA -->
              <a :href="whatsappUrl" target="_blank"
                 class="btn btn-whatsapp btn-lg px-5 py-3 rounded-pill d-flex align-items-center justify-content-center gap-3 shadow-lg text-white">
                <i class="bi bi-whatsapp fs-3"></i>
                <span class="fw-bold">Escribir por WhatsApp</span>
              </a>
              
              <!-- Email CTA -->
              <a :href="'mailto:' + personalInfo.email"
                 class="btn btn-outline-accent btn-lg px-5 py-3 rounded-pill d-flex align-items-center justify-content-center gap-3">
                <i class="bi bi-envelope-fill fs-3"></i>
                <span class="fw-bold">{{ personalInfo.email }}</span>
              </a>
            </div>
            
            <!-- Redes Sociales -->
            <div class="d-flex justify-content-center gap-3">
              <a :href="personalInfo.linkedin" target="_blank" class="social-icon-btn" title="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>
              <a :href="personalInfo.github" target="_blank" class="social-icon-btn" title="GitHub">
                <i class="bi bi-github"></i>
              </a>
              <a :href="'mailto:' + personalInfo.email" class="social-icon-btn" title="Email">
                <i class="bi bi-envelope-fill"></i>
              </a>
              <a :href="whatsappUrl" target="_blank" class="social-icon-btn" title="WhatsApp">
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personalInfo } from '../data/portfolioData'

const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${personalInfo.whatsappMessage}`
</script>

<style scoped>
.contact-glow-bg {
  background: radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.15) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 80%);
}

.btn-whatsapp {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%) !important;
  border: none !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.35) !important;
}

.btn-whatsapp:hover {
  transform: translateY(-3px) scale(1.02) !important;
  box-shadow: 0 16px 32px rgba(37, 211, 102, 0.5) !important;
}

.social-icon-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(248, 250, 252, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.8);
  color: #0F172A;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

[data-bs-theme="dark"] .social-icon-btn {
  background: rgba(17, 24, 39, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
  color: #F8FAFC;
}

.social-icon-btn:hover {
  background: #0D9488;
  color: white !important;
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 10px 20px rgba(13, 148, 136, 0.4);
}

[data-bs-theme="dark"] .social-icon-btn:hover {
  background: #2DD4BF;
  color: #0F172A !important;
  box-shadow: 0 10px 20px rgba(45, 212, 191, 0.4);
}
</style>