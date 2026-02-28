import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { Bot, Network, Zap, BarChart3, ArrowRight, MousePointerClick } from 'lucide-react';
import './App.css';

function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="app-container">
      {/* Background Ambience (Magia Matemática) */}
      <div className="particles-bg"></div>
      <div className="math-grid"></div>

      {/* Glowing Orbs for Depth */}
      <div className="ambient-glow top-left"></div>
      <div className="ambient-glow bottom-right"></div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-orb"></div>
        <motion.div style={{ y: y1 }} className="hero-content" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 variants={fadeUp}>
            <img src="/logo.png" alt="Hadda" className="hero-logo" />
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>
            Inteligencia Operativa para Empresas que Quieren Escalar.<br />
            Transformamos el caos operativo en sistemas inteligentes que trabajan por ti.
          </motion.p>
          <motion.div className="button-group" variants={fadeUp}>
            <button className="btn btn-primary">
              Solicitar Diagnóstico <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary">
              Agendar Demo <MousePointerClick size={18} />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section">
        <motion.div className="problem-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
            <h2 className="section-title">
              El problema no es tu equipo. <br />
              <span className="serif-highlight">Es el sistema.</span>
            </h2>
            <p className="problem-statement" style={{ textAlign: 'center' }}>
              Las empresas en LATAM operan con procesos manuales repetitivos, información fragmentada en múltiples plataformas y equipos sobrecargados.
              <br /><br />
              La consecuencia: crecimiento lento, errores humanos y oportunidades perdidas.
            </p>
          </motion.div>

          <motion.div className="problem-list" variants={staggerContainer}>
            {['CRM que no conversa con ERP', 'Equipos sobrecargados operativos', 'Reportes que llegan tarde', 'Operaciones estancadas en planillas'].map((item, i) => (
              <motion.div className="problem-list-item" key={i} variants={fadeUp}>
                <div className="problem-list-item-icon"></div>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT IS HADDA */}
      <section className="section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
          <h2 className="section-title">¿Qué es Hadda?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            Hadda es una empresa de consultoría de automatización e inteligencia artificial.
            Somos una <span className="serif-highlight">arquitectura de inteligencia operativa</span> que conecta tus sistemas, ejecuta procesos
            automáticamente y genera decisiones accionables en tiempo real.
          </p>
        </motion.div>

        <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          {[
            {
              title: "Agentes Especializados",
              icon: <Bot size={28} color="var(--color-primary)" />,
              items: ["Prospección automatizada", "Calificación de leads", "Gestión de CRM", "Generación de reportes"]
            },
            {
              title: "Integración Total",
              icon: <Network size={28} color="var(--color-primary)" />,
              items: ["Flujos CRM y ERP", "Plataformas de ventas", "Sistemas y BD internas", "Calendar & Mensajería"]
            },
            {
              title: "Automatización Compleja",
              icon: <Zap size={28} color="var(--color-primary)" />,
              items: ["Ciclo completo de lead a cierre", "Validación documental", "Coordinación entre áreas", "Seguimiento ágil"]
            },
            {
              title: "Toma de Decisiones",
              icon: <BarChart3 size={28} color="var(--color-primary)" />,
              items: ["Métricas accionables", "Alertas estratégicas", "Análisis de riesgo", "Insights preventivos"]
            }
          ].map((service, i) => (
            <motion.div className="glass-card service-card" key={i} variants={fadeUp}>
              <div className="glass-card-icon-wrap">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TIMELINE (HOW IT WORKS) - SCROLL PARALLAX */}
      <section className="section" style={{ position: 'relative' }}>
        <motion.div style={{ y: y2, position: 'absolute', right: '5%', top: '20%', opacity: 0.1, zIndex: -1 }}>
          <Network size={400} />
        </motion.div>

        <h2 className="section-title">Cómo funciona</h2>
        <div className="timeline">
          {[
            {
              title: "1. Diagnóstico Estratégico",
              desc: "Analizamos tu operación real, no lo que dice el manual. Observamos los flujos de información invisibles."
            },
            {
              title: "2. Diseño de Arquitectura Inteligente",
              desc: "Definimos matemáticamente los agentes y procesos necesarios para eliminar cuellos de botella."
            },
            {
              title: "3. Integración y Orquestación",
              desc: "Conectamos tus sistemas heredados y entrenamos a los agentes con lógica de tu negocio."
            },
            {
              title: "4. Activación y Optimización",
              desc: "Desplegamos el sistema. Medimos, ajustamos la fricción y escalamos el procesamiento iterativamente."
            }
          ].map((item, i) => (
            <motion.div className="timeline-item" key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="timeline-node"><div className="timeline-node-inner"></div></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATION & LATAM FIRST */}
      <section className="section">
        <motion.div className="glass-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', padding: '5rem 3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>LATAM First</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
            Procesos híbridos. Equipos pequeños. Infraestructura diversa.<br />
            Hadda no es una solución importada, es inteligencia <span className="serif-highlight">adaptada al contexto real.</span>
          </p>

          <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 300, lineHeight: '1.2' }}>
            Muchas empresas hablan de IA.<br /> <span className="serif-highlight" style={{ fontSize: '3rem' }}>Nosotros la hacemos operar.</span>
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Mientras otros instalan software, nosotros construimos arquitectura.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section">
        <motion.div className="cta-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 500, lineHeight: 1.3 }}>
            El futuro no es personas haciendo más tareas. <br />
            <span className="serif-highlight" style={{ fontSize: '3rem' }}>Es inteligencia haciendo mejor trabajo.</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
            La magia matemática transforma tu operación.
          </p>
          <div className="button-group" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary">Solicitar Diagnóstico Estratégico</button>
            <button className="btn btn-secondary">Hablar con un Especialista</button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="section" style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div>
          <img src="/logo.png" alt="Hadda" className="footer-logo" />
        </div>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          Arquitectura de Inteligencia Operativa
        </p>
        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', opacity: 0.7 }}>
          <a href="mailto:contacto@hadda.io" style={{ color: '#fff', textDecoration: 'none' }}>contacto@hadda.io</a>
          <a href="https://www.hadda.io" style={{ color: '#fff', textDecoration: 'none' }}>hadda.io</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
