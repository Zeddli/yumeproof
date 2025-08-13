"use client"

import { motion } from "framer-motion"
import { Camera, ShieldCheck, Database, CheckCircle } from "lucide-react"

interface FlowStep {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const flowSteps: FlowStep[] = [
  {
    icon: Camera,
    title: "Capture",
    description: "Image taken with verified device",
  },
  {
    icon: ShieldCheck,
    title: "Notarize",
    description: "Cryptographic signature generated",
  },
  {
    icon: Database,
    title: "Store",
    description: "Proof anchored to blockchain",
  },
  {
    icon: CheckCircle,
    title: "Verify",
    description: "Public verification available",
  },
]

export default function ProofOfRealImageSection() {
  return (
    <section id="proof-of-real-image" className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Centered */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground"
          >
            Proof-Of-Real-Image
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 font-subheading text-base sm:text-lg md:text-xl text-[#5995eb]"
          >
            Advanced Image Notarization & Verification
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our image verification system creates cryptographic proofs at the moment of capture, ensuring
            complete image integrity from device to verification. Through advanced notarization protocols, each
            image receives a unique digital signature that cannot be forged or replicated.
          </motion.p>
        </div>

        {/* Flow Steps Section - Centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="relative">
              {/* Horizontal line connecting steps */}
              <div className="absolute left-0 top-12 hidden h-0.5 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"></div>
              
              {/* Grid layout for flow steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                {flowSteps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Icon container */}
                      <div className="relative z-10 mb-4 sm:mb-6">
                        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary shadow-lg">
                          <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Text content */}
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      
                      {/* Connecting line between steps (hidden on mobile) */}
                      {index < flowSteps.length - 1 && (
                        <div className="absolute left-full top-8 -ml-2 hidden h-0.5 w-16 bg-gradient-to-r from-primary/30 to-transparent md:block"></div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <div className="w-full max-w-3xl">
            <div className="rounded-2xl border border-border bg-muted/50 p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Enterprise-Ready Security</h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
                Each image carries an immutable cryptographic fingerprint that can be independently verified
                by any party without compromising privacy or requiring platform-specific access.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}