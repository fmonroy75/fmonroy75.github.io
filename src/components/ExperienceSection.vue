<template>
  <section id="experience" class="py-5 py-lg-6 position-relative">
    <div class="container position-relative z-2">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <div class="d-inline-flex align-items-center gap-2 badge-pill-glow mb-3">
          <i class="bi bi-clock-history"></i>
          <span>TRAYECTORIA</span>
        </div>
        <h2 class="display-4 fw-extrabold mb-3">
          Experiencia <span class="text-gradient-accent">Profesional</span>
        </h2>
        <p class="lead text-secondary mx-auto" style="max-width: 700px;">
          Liderazgo técnico y desarrollo de proyectos clave en empresas e instituciones de Chile.
        </p>
      </div>

      <!-- Timeline Structure -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div v-for="(exp, index) in sortedExperience" :key="exp.id" 
               class="row g-0 mb-5 timeline-row"
               data-aos="fade-up">
            
            <!-- Columna Izquierda: Periodo y Empresa -->
            <div class="col-md-4 text-md-end pe-md-5 mb-3 mb-md-0">
              <div class="sticky-top" style="top: 100px;">
                <span class="badge bg-accent text-white px-4 py-2 rounded-pill mb-2 shadow-sm fw-bold">
                  {{ exp.period }}
                </span>
                <h3 class="h4 fw-bold text-primary mb-1">{{ exp.company }}</h3>
                <div class="text-accent fw-semibold mb-1">{{ exp.position }}</div>
                <div class="text-secondary small">
                  <i class="bi bi-geo-alt-fill me-1 text-accent"></i>
                  {{ exp.location }}
                </div>
              </div>
            </div>
            
            <!-- Columna Derecha: Card de Contenido -->
            <div class="col-md-8 position-relative">
              <div class="glass-card-premium p-4 p-lg-5">
                <ul class="list-unstyled mb-4 d-flex flex-column gap-3">
                  <li v-for="highlight in exp.highlights" :key="highlight"
                      class="d-flex align-items-start gap-3">
                    <span class="badge-icon-box bg-gradient-accent rounded-circle p-1 text-white flex-shrink-0 mt-1">
                      <i class="bi bi-chevron-right fs-7"></i>
                    </span>
                    <span class="text-primary opacity-90 fs-6">{{ highlight }}</span>
                  </li>
                </ul>
                
                <!-- Tech Tags -->
                <div class="d-flex flex-wrap gap-2 pt-4 border-top border-subtle">
                  <span v-for="tech in exp.technologies" :key="tech"
                        class="badge bg-light text-primary border px-3 py-2 rounded-pill">
                    <i :class="getTechIcon(tech)" class="me-1 text-accent"></i>
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Badge de Trayectoria Total -->
      <div class="row mt-4">
        <div class="col-12 text-center" data-aos="fade-up">
          <div class="glass-card-premium p-4 d-inline-flex align-items-center gap-4 rounded-5 shadow-xl">
            <div class="bg-gradient-accent rounded-circle p-3 text-white shadow-md">
              <i class="bi bi-trophy-fill fs-3"></i>
            </div>
            <div class="text-start">
              <span class="text-secondary small text-uppercase fw-bold tracking-wider">Trayectoria Consolidada</span>
              <div class="display-6 fw-extrabold text-gradient-accent">1997 - Presente</div>
              <span class="text-accent fw-semibold">27+ años de experiencia continua en TI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { experience } from '../data/portfolioData'

const sortedExperience = computed(() => {
  return [...experience].sort((a, b) => {
    const yearA = parseInt(a.period.split(' – ')[0] || a.period.split(' - ')[0])
    const yearB = parseInt(b.period.split(' – ')[0] || b.period.split(' - ')[0])
    return yearB - yearA
  })
})

const getTechIcon = (tech) => {
  const icons = {
    'Murex': 'bi-database-fill',
    'SQL': 'bi-database',
    'Java': 'bi-code-square',
    'Excel': 'bi-file-earmark-spreadsheet',
    'Oracle': 'bi-database-gear',
    'VB': 'bi-code-square',
    'PeopleSoft': 'bi-building',
    'SAP': 'bi-building-gear',
    'ASP': 'bi-code',
    'JavaScript': 'bi-filetype-js',
    'Python': 'bi-filetype-py'
  }
  return icons[tech] || 'bi-gear-fill'
}
</script>

<style scoped>
.timeline-row {
  position: relative;
}
</style>