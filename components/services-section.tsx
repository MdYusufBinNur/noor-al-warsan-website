"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Apple, Carrot, Package, Store, Ship, Warehouse } from "lucide-react"

const services = [
  {
    icon: Apple,
    title: "Fresh Fruits",
    description:
      "Premium quality fruits sourced from trusted farms worldwide. From exotic to everyday varieties, delivered fresh to your business.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Carrot,
    title: "Fresh Vegetables",
    description:
      "Farm-fresh vegetables with guaranteed quality and freshness. Complete range for restaurants, hotels, and retail businesses.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2084&auto=format&fit=crop",
  },
  {
    icon: Package,
    title: "Dry Foods & Essentials",
    description:
      "Rice, onions, potatoes, garlic, and packaged essentials. Bulk quantities with consistent quality for your business needs.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Store,
    title: "Supermarket Supply",
    description:
      "Reliable scheduled deliveries for retail businesses. Comprehensive product range with competitive wholesale pricing.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2074&auto=format&fit=crop",
  },
  {
    icon: Ship,
    title: "Ship Chandelling Supply",
    description:
      "Specialized fresh food supply for vessels and marine operations. Meeting international maritime standards with timely delivery.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
  },
  {
    icon: Warehouse,
    title: "Bulk Wholesale Distribution",
    description:
      "Large-scale supply capability for major buyers. Flexible ordering and delivery schedules to meet your volume requirements.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Comprehensive Fresh Produce Solutions</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From farm to your business, we provide end-to-end supply chain solutions 
            for all your fresh produce and food requirements.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
