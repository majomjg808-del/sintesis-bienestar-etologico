/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-slate-200 selection:text-slate-900">
      <main className="max-w-4xl mx-auto px-8 py-20 md:py-28">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 border-b-4 border-slate-900 pb-12"
        >
          <h1 className="text-3xl md:text-4xl font-sans font-black tracking-tight leading-tight mb-6 uppercase italic">
            Conclusión Técnica: <br />
            <span className="text-slate-500 font-light not-italic">Sistemas de Bienestar Integral</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400 font-bold">
            Síntesis Académica • Protocolos de Resiliencia
          </p>
        </motion.header>

        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-12 text-lg md:text-xl leading-relaxed font-sans text-slate-700"
        >
          <p>
            En conclusión, la arquitectura del Bienestar Etológico o Comportamental moderno se sustenta en la convergencia sinérgica de sus componentes fundamentales, donde el Análisis Multidimensional actúa como el marco diagnóstico esencial. Este enfoque permite una comprensión profunda de las variables biológicas y psicosociales, asegurando que las intervenciones no sean respuestas aisladas, sino parte de una estrategia integral que preserva la armonía conductual. La capacidad de evaluar el entorno desde múltiples perspectivas garantiza que el bienestar no sea un objetivo accidental, sino el resultado de un diseño sistémico orientado a la estabilidad y la salud a largo plazo.
          </p>

          <p>
            Esta estructura se dinamiza a través de los mecanismos de Comunicación Intraespecífica e Interespecífica, los cuales funcionan como los canales críticos para la decodificación de necesidades y estados internos. La fluidez de esta información es lo que permite que la Conducta Intencional o Proactiva se manifieste con precisión, transformando los datos en acciones deliberadas que anticipan el conflicto. Al integrar estos flujos comunicativos, el sistema adquiere una inteligencia operativa capaz de trascender la mera reacción, estableciendo un diálogo constante con el entorno que es vital para la detección temprana de anomalías y la preservación de la cohesión social.
          </p>

          <p>
            Finalmente, la relevancia de la proactividad como facilitadora del Apoyo o Soporte Social se consolida como el factor determinante para optimizar la calidad de vida en situaciones críticas. La integración de estos conceptos permite que, ante una crisis, el sistema despliegue recursos de contención de manera inmediata y efectiva, mitigando el impacto del estrés y acelerando la restauración del equilibrio homeostático. En última instancia, la colaboración entre el análisis riguroso, la comunicación fluida y la intervención proactiva crea una red de seguridad resiliente que no solo protege al individuo, sino que eleva los estándares de bienestar colectivo, asegurando una respuesta ética y técnica ante los desafíos más complejos del comportamiento contemporáneo.
          </p>
        </motion.article>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 pt-10 border-t-2 border-slate-900 flex justify-between items-center"
        >
          <div className="text-[10px] uppercase tracking-[0.6em] text-slate-400 font-black">
            Final Synthesis • Ethological Systems v1.0
          </div>
          <div className="flex gap-4">
            <div className="h-4 w-4 bg-slate-900 rotate-45" />
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
