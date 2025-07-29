"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    review: "YumeProof has revolutionized how we verify image authenticity. The blockchain integration is seamless and verification process is very fast.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    review: "As a photographer, this tool gives me peace of mind knowing my work can be verified as authentic. The user interface is intuitive and professional.",
    rating: 5
  },
  {
    name: "Dr. Emily Watson",
    review: "The cryptographic proof validation is impressive. This technology will be essential for combating deepfakes and image manipulation.",
    rating: 5
  },
  {
    name: "James Liu",
    review: "Outstanding innovation in image verification. The real-device proof feature sets it apart from other solutions in the market.",
    rating: 4
  },
  {
    name: "Anna Thompson",
    review: "Simple, effective, and reliable. YumeProof makes image authentication accessible to everyone without compromising on security.",
    rating: 5
  },
  {
    name: "David Kim",
    review: "The blockchain transparency and no-registration requirement make this the perfect solution for professional image verification needs.",
    rating: 4
  }
]

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2))
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2))

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative h-48 w-80 cursor-pointer overflow-hidden rounded-xl border p-6 mx-2",
        "border-gray-200 bg-white hover:border-[#5995eb] hover:shadow-lg transition-all duration-300"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Name */}
        <h4 className="font-semibold text-foreground text-sm mb-2">
          {testimonial.name}
        </h4>
        
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              )}
            />
          ))}
        </div>
        
        {/* Review */}
        <p className="text-sm text-gray-700 leading-relaxed flex-1">
          &ldquo;{testimonial.review}&rdquo;
        </p>
      </div>
      
      {isHovered && (
        <BorderBeam
          duration={3}
          size={300}
          className="from-transparent via-[#5995eb] to-transparent"
        />
      )}
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full">
        <motion.div 
          className="text-center mb-16 px-4 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            What Our Users Say
          </h2>
          <p className="font-subheading text-xl text-[#5995eb] max-w-2xl mx-auto">
            Trusted by Photographers, Developers & Security Experts
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden rounded-lg">
          {/* First Row - Left to Right */}
          <div className="flex animate-marquee hover:animate-pause space-x-4 py-4 w-max">
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
            {/* Multiple duplicates for full width coverage */}
            {firstRow.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-dup1`} testimonial={testimonial} />
            ))}
            {firstRow.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-dup2`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Second Row - Right to Left */}
          <div className="flex animate-marquee-reverse hover:animate-pause space-x-4 py-4 w-max">
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
            {/* Multiple duplicates for full width coverage */}
            {secondRow.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-dup1`} testimonial={testimonial} />
            ))}
            {secondRow.map((testimonial) => (
              <TestimonialCard key={`${testimonial.name}-dup2`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}