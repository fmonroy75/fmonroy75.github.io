<template>
  <section id="portfolio" class="py-5 py-lg-6 position-relative">
    <div class="container position-relative z-2">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <div class="d-inline-flex align-items-center gap-2 badge-pill-glow mb-3">
          <i class="bi bi-briefcase-fill"></i>
          <span>PORTAFOLIO</span>
        </div>
        <h2 class="display-4 fw-extrabold mb-3">
          Proyectos <span class="text-gradient-accent">Destacados</span>
        </h2>
        <p class="lead text-secondary mx-auto" style="max-width: 700px;">
          Selección de aplicaciones web, soluciones empresariales y proyectos de analítica desarrollados con máxima calidad.
        </p>
      </div>

      <!-- Filtros de Categoría -->
      <div class="d-flex justify-content-center flex-wrap gap-2 mb-5" data-aos="fade-up">
        <button v-for="filter in filters" :key="filter.value"
                @click="activeFilter = filter.value"
                :class="[
                  'btn px-4 py-2 rounded-pill fw-semibold transition-all',
                  activeFilter === filter.value 
                    ? 'btn-accent text-white shadow-md' 
                    : 'btn-outline-accent'
                ]">
          {{ filter.label }}
        </button>
      </div>

      <!-- Grid de Proyectos -->
      <div class="row g-4">
        <div v-for="project in filteredProjects" :key="project.id" 
             class="col-lg-4 col-md-6"
             data-aos="fade-up">
          
          <div class="card card-portfolio h-100 shadow-sm" @click="openProjectModal(project)">
            <!-- Header Imagen del Proyecto -->
            <div class="position-relative overflow-hidden project-img-box">
              <img :src="project.image" :alt="project.title" 
                   class="w-100 h-100 object-fit-cover project-img">
              
              <!-- Hover Overlay -->
              <div class="position-absolute top-0 start-0 w-100 h-100 project-overlay d-flex align-items-center justify-content-center opacity-0">
                <span class="btn btn-accent btn-sm rounded-pill px-4 shadow-lg btn-shimmer">
                  <i class="bi bi-eye-fill me-2"></i>Ver detalles
                </span>
              </div>
              
              <!-- Badges de Categoria & Featured -->
              <div class="position-absolute top-0 start-0 p-3 d-flex gap-2 z-2">
                <span v-if="project.featured" 
                      class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold shadow-sm d-flex align-items-center gap-1">
                  <i class="bi bi-star-fill"></i> Destacado
                </span>
                <span class="badge bg-accent text-white px-3 py-2 rounded-pill shadow-sm">
                  {{ project.categoryLabel || 'Web & Data' }}
                </span>
              </div>
            </div>
            
            <!-- Contenido de la Tarjeta -->
            <div class="card-body p-4 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h3 class="h5 fw-bold text-primary mb-0 me-2">{{ project.title }}</h3>
                  <span class="badge bg-light text-secondary border rounded-pill">{{ project.year }}</span>
                </div>
                
                <p class="text-secondary small mb-4 opacity-90 line-clamp-3">{{ project.description }}</p>
              </div>
              
              <!-- Tecnologías Tags -->
              <div class="d-flex flex-wrap gap-1 pt-3 border-top border-subtle">
                <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
                      class="badge bg-light text-primary border px-2 py-1 rounded-pill small">
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3"
                      class="badge bg-light text-secondary border px-2 py-1 rounded-pill small">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA GitHub -->
      <div class="text-center mt-5 pt-3" data-aos="fade-up">
        <a href="https://github.com/fmonroy75" target="_blank" 
           class="btn btn-outline-accent btn-lg px-5 py-3 rounded-pill btn-shimmer d-inline-flex align-items-center gap-2">
          <i class="bi bi-github fs-4"></i>
          <span>Ver todos los proyectos en GitHub</span>
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>

    <!-- Modal Detalle del Proyecto -->
    <Transition name="fade-modal">
      <div v-if="showModal" class="modal fade show d-block position-fixed inset-0 z-modal" tabindex="-1" style="background: rgba(11, 15, 23, 0.85); backdrop-filter: blur(8px);">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content glass-card border-0 rounded-4 shadow-2xl overflow-hidden">
            <div class="modal-header border-0 p-4 pb-0">
              <h3 class="modal-title h4 fw-bold text-primary">{{ selectedProject?.title }}</h3>
              <button type="button" class="btn-close" aria-label="Cerrar" @click="showModal = false"></button>
            </div>
            
            <div class="modal-body p-4">
              <div v-if="selectedProject">
                <!-- Banner de Imagen -->
                <div class="rounded-4 overflow-hidden mb-4 shadow-md" style="height: 280px;">
                  <img :src="selectedProject.image" :alt="selectedProject.title" 
                       class="w-100 h-100 object-fit-cover">
                </div>
                
                <!-- Descripción -->
                <p class="text-secondary lead fs-6 mb-4">{{ selectedProject.fullDescription || selectedProject.description }}</p>
                
                <!-- Lista de Características -->
                <h4 class="h6 fw-bold text-primary mb-3">Características principales:</h4>
                <div class="row g-2 mb-4">
                  <div v-for="feature in selectedProject.features" :key="feature" class="col-md-6">
                    <div class="d-flex align-items-start gap-2 p-2 glass-card rounded-3">
                      <i class="bi bi-check-circle-fill text-accent flex-shrink-0 mt-1"></i>
                      <span class="small text-secondary fw-medium">{{ feature }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Tecnologías -->
                <h4 class="h6 fw-bold text-primary mb-3">Stack Tecnológico:</h4>
                <div class="d-flex flex-wrap gap-2">
                  <span v-for="tech in selectedProject.technologies" :key="tech"
                        class="badge bg-light text-primary border px-3 py-2 rounded-pill">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="modal-footer border-0 p-4 pt-0">
              <a v-if="selectedProject?.webUrl" :href="selectedProject.webUrl" target="_blank" 
                 class="btn btn-accent px-4 py-2 rounded-pill d-flex align-items-center gap-2">
                <i class="bi bi-box-arrow-up-right"></i>
                <span>Ver Proyecto / Código</span>
              </a>
              <button type="button" class="btn btn-outline-secondary px-4 py-2 rounded-pill" 
                      @click="showModal = false">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/portfolioData'

const activeFilter = ref('all')
const showModal = ref(false)
const selectedProject = ref(null)

const filters = [
  { label: 'Todos los proyectos', value: 'all' },
  { label: 'Desarrollo Web', value: 'web' },
  { label: 'Python & Data', value: 'python' }
]

const filteredProjects = computed(() => {
  let filtered = activeFilter.value === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter.value)
  return filtered.sort((a, b) => b.id - a.id)
})

const openProjectModal = (project) => {
  selectedProject.value = project
  showModal.value = true
}
</script>

<style scoped>
.project-img-box {
  height: 240px;
}

.project-img {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-portfolio:hover .project-img {
  transform: scale(1.08);
}

.project-overlay {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 100%);
  transition: opacity 0.35s ease;
}

.card-portfolio:hover .project-overlay {
  opacity: 1 !important;
}

.z-modal {
  z-index: 1060;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Modal Transition */
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.3s ease;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
}
</style>