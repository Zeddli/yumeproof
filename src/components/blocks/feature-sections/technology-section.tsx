"use client"

import { motion } from "framer-motion"

const technologies = [
  {
    name: "IOTA",
    description: "Blockchain foundation for secure identity and notarization",
    icon: "🔗"
  },
  {
    name: "Google Play Integrity API",
    description: "Device attestation and app integrity verification",
    icon: "🛡️"
  },
  {
    name: "Google Confidential VM",
    description: "Secure computing environment for sensitive operations",
    icon: "☁️"
  },
  {
    name: "Kotlin",
    description: "Modern Android application development",
    icon: "📱"
  },
  {
    name: "Rust Uniffi",
    description: "Cross-platform Android-Rust interoperability",
    icon: "⚙️"
  }
]

export default function TechnologySection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Technology Stack
          </h2>
          <p className="font-subheading text-xl text-[#5995eb] max-w-2xl mx-auto">
            Built on Cutting-Edge Technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#5995eb] hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {tech.name}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 