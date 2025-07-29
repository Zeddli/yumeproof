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
    <section id="proof-of-real-device" className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2 
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl text-foreground"
            >
              Proof-Of-Real-Device
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-6 font-subheading text-lg text-[#5995eb]"
            >
              Blockchain-Based Device Credentialing
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="mt-8 font-body text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Our device verification system leverages IOTA Blockchain for immutable device identity, Google Play Integrity API for hardware attestation, and Trusted Execution Environment (TEE) for secure cryptographic operations. This multi-layered approach ensures that images can only be captured and verified by authenticated devices.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:max-w-4xl md:grid-cols-3 lg:max-w-5xl"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card 
                  className="group relative overflow-hidden border-2 border-border/50 bg-surface transition-all duration-300 hover:border-primary/30 hover:shadow-lg h-full flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
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