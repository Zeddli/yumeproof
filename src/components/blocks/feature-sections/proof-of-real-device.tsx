"use client"

import { Shield, Key, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProofOfRealDeviceSection() {
  const features = [
    {
      title: "IOTA Blockchain",
      description: "Decentralized device identity storage with immutable credential records",
      icon: Shield
    },
    {
      title: "Google Play Integrity API",
      description: "Hardware-level attestation ensuring device authenticity and security",
      icon: Lock
    },
    {
      title: "Google Confidential VM",
      description: "Verify a real device running application using IOTA Identity",
      icon: Key
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="proof-of-real-device" className="bg-transparent py-16 sm:py-20 md:py-24 lg:py-32 w-full max-w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="mx-auto max-w-2xl text-center px-4 sm:px-0">
            <motion.h2 
              variants={itemVariants}
              className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground"
            >
              Proof-Of-Real-Device
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 sm:mt-6 font-subheading text-base sm:text-lg md:text-xl text-[#5995eb]"
            >
              Blockchain-Based Device Credentialing
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="mt-6 sm:mt-8 font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Our device verification system leverages IOTA Blockchain for immutable device identity, Google Play Integrity API for hardware attestation, and Trusted Execution Environment (TEE) for secure cryptographic operations. This multi-layered approach ensures that images can only be captured and verified by authenticated devices.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="mx-auto mt-12 sm:mt-16 md:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 md:max-w-4xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 px-4 sm:px-0"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card 
                  className="group relative overflow-hidden border-2 border-border/50 bg-surface transition-all duration-300 hover:border-primary/30 hover:shadow-lg h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="p-4 sm:p-6">
                    <div className="mb-3 sm:mb-4 inline-flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                    <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}