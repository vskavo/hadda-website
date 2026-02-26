import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Network, Zap, Cpu, BarChart3, Database } from 'lucide-react';
import './App.css';

function App() {

  // Simple intersection observer configuration for scroll animations
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="particles-bg"></div>
      <div className="math-grid"></div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow"></div>
        <h1 className="h1-title">Hadda</h1>
        <p className="hero-subtitle">
          Inteligencia Operativa para Empresas que Quieren Escalar.<br />
          Transformamos el caos operativo en sistemas inteligentes que trabajan por ti.
        </p>
        <div className="button-group">
          <button className="btn btn-primary">Solicitar Diagnóstico</button>
          <button className="btn btn-secondary">Agendar Demo</button>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section problem-section">
        <motion.div
          className="problem-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div>
            <h2 className="section-title" style={{ left: '0', transform: 'none' }}>El problema no es tu equipo. <br /><span className="serif">Es el sistema.</span></h2>
            <p className="problem-statement">
              Las empresas en LATAM operan con procesos manuales repetitivos, información fragmentada en múltiples plataformas y equipos sobrecargados.
              <br /><br />
              La consecuencia: crecimiento lento, errores humanos y oportunidades perdidas.
            </p>
          </div>
          <ul className="problem-list">
            <li>CRM que no conversa con ERP</li>
            <li>Equipos sobrecargados con tareas operativas</li>
            <li>Reportes que llegan tarde</li>
            <li>Operaciones estancadas en hojas de cálculo</li>
          </ul>
        </motion.div>
      </section>

      {/* WHAT IS HADDA */}
      <section className="section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '5rem' }}
        >
          <h2 className="section-title">¿Qué es Hadda?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
            Hadda es una plataforma de automatización inteligente basada en agentes de IA empresariales.
            Somos una arquitectura de inteligencia operativa que conecta tus sistemas, ejecuta procesos
            automáticamente y genera decisiones accionables en tiempo real.
          </p>
        </motion.div>

        <div className="services-grid">
          {[
            {
              title: "Agentes de IA Especializados",
              icon: <Bot size={24} color="var(--color-primary)" />,
              items: ["Prospección automatizada", "Calificación de leads", "Gestión de CRM", "Generación de reportes"]
            },
            {
              title: "Integración Total",
              icon: <Network size={24} color="var(--color-primary)" />,
              items: ["CRM y ERP", "Plataformas de ventas", "Sistemas y BD internos", "Calendar y Mensajería"]
            },
            {
              title: "Automatización Compleja",
              icon: <Zap size={24} color="var(--color-primary)" />,
              items: ["Flujo lead a cierre", "Validación documental", "Coordinación entre áreas", "Seguimiento financiero"]
            },
            {
              title: "Inteligencia en Tiempo Real",
              icon: <BarChart3 size={24} color="var(--color-primary)" />,
              items: ["Métricas accionables", "Alertas estratégicas", "Análisis de riesgos", "Predicción operativa"]
            }
          ].map((service, i) => (
            <motion.div
              className="service-card"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2 className="section-title">Cómo funciona</h2>
        <div className="timeline">
          {[
            {
              title: "1. Diagnóstico Estratégico",
              desc: "Analizamos tu operación real, no lo que dice el manual."
            },
            {
              title: "2. Diseño de Arquitectura Inteligente",
              desc: "Definimos los agentes y procesos matemáticamente necesarios."
            },
            {
              title: "3. Integración y Orquestación",
              desc: "Conectamos tus sistemas y entrenamos a los agentes."
            },
            {
              title: "4. Activación y Optimización Continua",
              desc: "Medimos, ajustamos y escalamos."
            }
          ].map((item, i) => (
            <motion.div
              className="timeline-item"
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATION & LATAM FIRST */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">LATAM First</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 4rem', color: 'var(--color-text-muted)' }}>
          Procesos híbridos. Equipos pequeños. Infraestructura diversa.<br />
          No es una solución importada. Es inteligencia adaptada.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ padding: '4rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}
        >
          <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 300 }}>
            Muchas empresas hablan de IA.<br /> Nosotros la hacemos operar.
          </h3>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Mientras otros instalan software, nosotros diseñamos arquitectura.<br />
            Hadda no entrega herramientas sueltas. Entrega un sistema coordinado de inteligencia operativa.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          El futuro no es más personas haciendo más tareas. <br />
          <span className="serif" style={{ color: 'var(--color-primary)' }}>Es más inteligencia haciendo mejor trabajo.</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
          Hadda transforma tu operación.
        </p>
        <div className="button-group" style={{ justifyContent: 'center' }}>
          <button className="btn btn-primary">Solicitar Diagnóstico Estratégico</button>
          <button className="btn btn-secondary">Hablar con un Especialista</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="logo">Hadda</div>
        <p style={{ marginBottom: '1rem' }}>Arquitectura de Inteligencia Operativa para LATAM</p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', opacity: 0.6 }}>
          <a href="mailto:contacto@hadda.io">contacto@hadda.io</a>
          <a href="https://www.hadda.io">www.hadda.io</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
