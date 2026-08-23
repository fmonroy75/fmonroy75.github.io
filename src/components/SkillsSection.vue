<template>
  <section id="skills" class="py-5 py-lg-6 position-relative">
    <div class="container position-relative z-2">
      <!-- Section Header -->
      <div class="text-center mb-5" data-aos="fade-up">
        <div class="d-inline-flex align-items-center gap-2 badge-pill-glow mb-3">
          <i class="bi bi-cpu-fill"></i>
          <span>COMPETENCIAS CLAVE</span>
        </div>
        <h2 class="display-4 fw-extrabold mb-3">
          Habilidades <span class="text-gradient-accent">Técnicas</span> & Stack
        </h2>
        <p class="lead text-secondary mx-auto" style="max-width: 700px;">
          Dominio avanzado en desarrollo de software, gestión de bases de datos y arquitectura de sistemas empresariales.
        </p>
      </div>

      <!-- General Technical Competencies & Specializations -->
      <div class="row g-4 mb-5">
        <!-- Competencias Clave con Barras de Progreso -->
        <div class="col-lg-7">
          <div class="glass-card-premium p-4 p-lg-5 h-100">
            <div class="d-flex align-items-center mb-4">
              <div class="bg-gradient-accent rounded-circle p-3 text-white me-3 shadow-md">
                <i class="bi bi-bar-chart-line-fill fs-4"></i>
              </div>
              <div>
                <h3 class="h4 fw-bold mb-1 text-primary">Nivel de Dominio Técnico</h3>
                <span class="small text-secondary">Años de práctica continua y proyectos reales</span>
              </div>
            </div>

            <div v-for="skill in mainSkills" :key="skill.name" class="mb-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="fw-semibold text-primary d-flex align-items-center gap-2">
                  <i :class="skill.icon" class="text-accent fs-5"></i>
                  {{ skill.name }}
                </span>
                <span class="badge bg-accent text-white px-3 py-1 rounded-pill fw-bold">{{ skill.level }}%</span>
              </div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" 
                     :style="{ width: skill.level + '%' }"
                     :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Especializaciones -->
        <div class="col-lg-5">
          <div class="glass-card-premium p-4 p-lg-5 h-100">
            <div class="d-flex align-items-center mb-4">
              <div class="bg-gradient-accent rounded-circle p-3 text-white me-3 shadow-md">
                <i class="bi bi-stars fs-4"></i>
              </div>
              <div>
                <h3 class="h4 fw-bold mb-1 text-primary">Especializaciones</h3>
                <span class="small text-secondary">Enfoque estratégico e ingeniería</span>
              </div>
            </div>

            <div class="d-flex flex-column gap-3">
              <div v-for="spec in specializations" :key="spec.title" 
                   class="glass-card p-3 rounded-4 hover-spec-card">
                <div class="d-flex align-items-start gap-3">
                  <div class="badge-icon-box bg-gradient-accent rounded-circle p-2 text-white flex-shrink-0">
                    <i :class="spec.icon" class="fs-5"></i>
                  </div>
                  <div>
                    <h4 class="h6 fw-bold text-primary mb-1">{{ spec.title }}</h4>
                    <p class="small text-secondary mb-0 opacity-90">{{ spec.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Categorías Tecnológicas (Píldoras) -->
      <div class="row g-4">
        <!-- Motores de BD & ERP -->
        <div class="col-md-6 col-lg-3">
          <div class="glass-card-premium p-4 h-100">
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-database-fill fs-3 text-accent"></i>
              <h4 class="h5 fw-bold mb-0 text-primary">Bases de Datos & ERP</h4>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="tech in databaseSkills.concat(erpSkills)" :key="tech"
                    class="tech-chip">
                <i class="bi bi-check2-circle text-accent"></i>
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Lenguajes de Programación -->
        <div class="col-md-6 col-lg-3">
          <div class="glass-card-premium p-4 h-100">
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-code-slash fs-3 text-accent"></i>
              <h4 class="h5 fw-bold mb-0 text-primary">Lenguajes</h4>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="lang in programmingLanguages" :key="lang.name"
                    class="tech-chip">
                <i class="bi bi-code me-1 text-accent"></i>
                {{ lang.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Frameworks & Web -->
        <div class="col-md-6 col-lg-3">
          <div class="glass-card-premium p-4 h-100">
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-boxes fs-3 text-accent"></i>
              <h4 class="h5 fw-bold mb-0 text-primary">Frameworks</h4>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="fw in frameworks" :key="fw.name"
                    class="tech-chip">
                <i class="bi bi-box-seam me-1 text-accent"></i>
                {{ fw.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Herramientas & DevOps -->
        <div class="col-md-6 col-lg-3">
          <div class="glass-card-premium p-4 h-100">
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-tools fs-3 text-accent"></i>
              <h4 class="h5 fw-bold mb-0 text-primary">Herramientas</h4>
            </div>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="tool in tools" :key="tool.name"
                    class="tech-chip">
                <i class="bi bi-wrench-adjustable me-1 text-accent"></i>
                {{ tool.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  programmingLanguages, 
  frameworks, 
  tools 
} from '../data/portfolioData'

const mainSkills = [
  { name: 'Desarrollo Full Stack (Vue, Node, PHP)', level: 95, icon: 'bi-window-stack' },
  { name: 'Python & Data Analysis', level: 90, icon: 'bi-filetype-py' },
  { name: 'SQL & Gestión de Bases de Datos (Oracle, MySQL)', level: 95, icon: 'bi-database' },
  { name: 'Gestión de Proyectos & Liderazgo', level: 90, icon: 'bi-diagram-3' },
  { name: 'Sistemas ERP (SAP, PeopleSoft)', level: 85, icon: 'bi-building-gear' }
]

const specializations = [
  {
    title: 'Gestión & Liderazgo de Proyectos',
    description: 'Liderazgo de equipos multidisciplinarios, metodologías ágiles y control de entregables.',
    icon: 'bi-briefcase-fill'
  },
  {
    title: 'Arquitectura de Software',
    description: 'Diseño de aplicaciones escalables, mantenibles y seguras para clientes empresariales.',
    icon: 'bi-diagram-3-fill'
  },
  {
    title: 'Análisis de Datos & BI',
    description: 'Extracción, transformación de datos (ETL) e generación de reportes estratégicos.',
    icon: 'bi-graph-up-arrow'
  },
  {
    title: 'Integración ERP & Legacy Systems',
    description: 'Conexión eficiente entre plataformas ERP corporativas y soluciones web modernas.',
    icon: 'bi-hdd-network-fill'
  }
]

const databaseSkills = ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
const erpSkills = ['SAP', 'PeopleSoft', 'Murex']
</script>

<style scoped>
.hover-spec-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.7);
}

.hover-spec-card:hover {
  transform: translateX(6px);
  border-color: rgba(45, 212, 191, 0.4);
  box-shadow: 0 10px 20px rgba(13, 148, 136, 0.08);
}

.tech-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(248, 250, 252, 0.8);
  border: 1px solid rgba(226, 232, 240, 0.9);
  color: #334155;
  padding: 0.4rem 0.85rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

[data-bs-theme="dark"] .tech-chip {
  background: rgba(17, 24, 39, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
  color: #CBD5E1;
}

.tech-chip:hover {
  transform: translateY(-2px);
  border-color: rgba(45, 212, 191, 0.5);
  color: #0D9488;
  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.15);
}

[data-bs-theme="dark"] .tech-chip:hover {
  color: #2DD4BF;
}
</style>