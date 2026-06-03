"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"

const features = [
  "UAE-based fresh produce and food supply company",
  "Focus on freshness, timely delivery, and long-term relationships",
  "Supplying supermarkets, marine vessels, and hospitality businesses",
  "Strong sourcing network and rigorous quality control",
  "Reliable logistics and professional operations",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=2060&auto=format&fit=crop"
                alt="Fresh produce warehouse"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-6 shadow-2xl sm:right-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-serif text-2xl font-bold text-primary">7+</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Years of</div>
                  <div className="text-muted-foreground">Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Your Trusted Partner in Fresh Produce Supply</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Noor Al Warsan LLC is a UAE-based fresh produce and food supply company 
              dedicated to delivering excellence. We specialize in sourcing and distributing 
              premium quality fruits, vegetables, and dry foods to businesses across the UAE 
              and international waters.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our commitment to freshness, reliability, and customer satisfaction has 
              made us the preferred supplier for supermarkets, hotels, restaurants, 
              marine vessels, and wholesale markets throughout the region.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
