"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Award,
  Truck,
  Clock,
  DollarSign,
  RefreshCcw,
  Users,
  MapPin,
  Anchor,
} from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest produce sourced from certified suppliers",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "Temperature-controlled fleet ensuring freshness",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-schedule deliveries, every single time",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Best value without compromising on quality",
  },
  {
    icon: RefreshCcw,
    title: "Fresh Daily Supply",
    description: "Daily sourcing for maximum freshness",
  },
  {
    icon: Users,
    title: "Professional Service",
    description: "Dedicated account managers for each client",
  },
  {
    icon: MapPin,
    title: "UAE Market Expertise",
    description: "Deep understanding of local market needs",
  },
  {
    icon: Anchor,
    title: "Marine Supply Capability",
    description: "Specialized ship chandelling services",
  },
]

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
            <span className="text-balance">Excellence in Every Delivery</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-background/70">
            We&apos;ve built our reputation on quality, reliability, and exceptional 
            customer service. Here&apos;s what sets us apart.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-background/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 transition-colors group-hover:bg-accent/30">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-background">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
