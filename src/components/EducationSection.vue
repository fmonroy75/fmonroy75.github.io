<template>
  <section id="education" class="py-5 py-lg-6 position-relative">
    <div class="container position-relative z-2">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <div class="d-inline-flex align-items-center gap-2 badge-pill-glow mb-3">
          <i class="bi bi-mortarboard-fill"></i>
          <span>FORMACIÓN</span>
        </div>
        <h2 class="display-4 fw-extrabold mb-3">
          Educación & <span class="text-gradient-accent">Certificaciones</span>
        </h2>
        <p class="lead text-secondary mx-auto" style="max-width: 700px;">
          Formación universitaria de alto nivel y perfeccionamiento constante en desarrollo e ingeniería.
        </p>
      </div>

      <div class="row g-4 mb-5">
        <!-- Educación Superior -->
        <div class="col-lg-6">
          <div class="glass-card-premium p-4 p-lg-5 h-100" data-aos="fade-right">
            <div class="d-flex align-items-center mb-4">
              <div class="bg-gradient-accent rounded-circle p-3 text-white me-3 shadow-md">
                <i class="bi bi-bank2 fs-4"></i>
              </div>
              <h3 class="h4 fw-bold mb-0 text-primary">Educación Superior</h3>
            </div>

            <div v-for="(edu, index) in education" :key="edu.id"
                 :class="{ 'mb-4 pb-4 border-bottom border-subtle': index !== education.length - 1 }">
              <div class="d-flex gap-4 align-items-start">
                <!-- LOGO INSTITUCIÓN -->
                <div class="flex-shrink-0 edu-logo-box glass-card p-2 rounded-4">
                  <img :src="edu.image" :alt="edu.institution" class="edu-logo-img">
                </div>

                <!-- DETALLES -->
                <div class="flex-grow-1">
                  <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                    <h4 class="h5 fw-bold text-primary mb-0">{{ edu.degree }}</h4>
                    <span class="badge bg-accent text-white px-3 py-1 rounded-pill small fw-bold">
                      {{ edu.period }}
                    </span>
                  </div>

                  <p class="text-accent fw-semibold mb-1">{{ edu.institution }}</p>
                  <p class="text-secondary small mb-2">
                    <i class="bi bi-geo-alt-fill me-1 text-accent"></i>{{ edu.location }}
                  </p>
                  <p class="text-secondary small opacity-90 mb-0">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cursos y Diplomados -->
        <div class="col-lg-6">
          <div class="glass-card-premium p-4 p-lg-5 h-100" data-aos="fade-left">
            <div class="d-flex align-items-center mb-4">
              <div class="bg-gradient-accent rounded-circle p-3 text-white me-3 shadow-md">
                <i class="bi bi-patch-check-fill fs-4"></i>
              </div>
              <h3 class="h4 fw-bold mb-0 text-primary">Cursos y Perfeccionamiento</h3>
            </div>

            <div class="timeline-wrapper">
              <div v-for="course in sortedCourses" :key="course.id" 
                   class="position-relative mb-4 ps-4">
                <div class="timeline-dot"></div>
                <div class="d-flex justify-content-between align-items-start mb-1 flex-wrap">
                  <h4 class="h6 fw-bold text-primary mb-0 me-2">{{ course.name }}</h4>
                  <span class="badge bg-light text-primary border px-2 py-1 rounded-pill small">
                    {{ course.year }}
                  </span>
                </div>
                <p class="text-secondary small mb-1">{{ course.institution }}</p>
                <div class="d-flex align-items-center gap-2">
                  <span class="badge bg-accent text-white px-2 py-1 rounded-pill micro-badge">
                    {{ course.category }}
                  </span>
                  <span class="text-secondary small">
                    <i class="bi bi-geo-alt me-1"></i>{{ course.location }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Idiomas -->
      <div class="row">
        <div class="col-12" data-aos="fade-up">
          <div class="glass-card-premium p-4 p-lg-5">
            <div class="d-flex align-items-center mb-4">
              <div class="bg-gradient-accent rounded-circle p-3 text-white me-3 shadow-md">
                <i class="bi bi-translate fs-4"></i>
              </div>
              <h3 class="h4 fw-bold mb-0 text-primary">Competencia Lingüística</h3>
            </div>

            <div class="row g-3">
              <div v-for="lang in languages" :key="lang.name" class="col-md-4">
                <div class="glass-card p-3 rounded-4 d-flex align-items-center justify-content-between">
                  <div>
                    <span class="fw-bold text-primary">{{ lang.name }}</span>
                    <span class="text-secondary small ms-2">({{ lang.native }})</span>
                  </div>
                  <div class="d-flex gap-1">
                    <i v-for="i in 5" :key="i"
                       :class="[
                         'bi fs-6',
                         i <= lang.level ? 'bi-star-fill text-warning' : 'bi-star text-secondary opacity-50'
                       ]">
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { education, courses, languages } from '../data/portfolioData'

const sortedCourses = computed(() => {
  return [...courses].sort((a, b) => b.id - a.id)
})
</script>

<style scoped>
.edu-logo-box {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.edu-logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.micro-badge {
  font-size: 0.7rem;
}
</style>