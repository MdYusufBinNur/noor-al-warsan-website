"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Truck, Warehouse as WarehouseIcon, Thermometer, Ship, Globe } from "lucide-react"

const logistics = [
  {
    icon: Truck,
    title: "Fast Delivery Fleet",
    description: "Modern refrigerated vehicles for swift, fresh deliveries across UAE",
    stat: "50+",
    statLabel: "Delivery Vehicles",
  },
  {
    icon: WarehouseIcon,
    title: "Warehouse Efficiency",
    description: "State-of-the-art storage facilities with optimal conditions",
    stat: "10,000",
    statLabel: "Sq. Meters Storage",
  },
  {
    icon: Thermometer,
    title: "Cold-Chain Handling",
    description: "Unbroken temperature-controlled supply chain from source to delivery",
    stat: "100%",
    statLabel: "Temperature Monitored",
  },
  {
    icon: Ship,
    title: "Ship Supply Logistics",
    description: "Specialized marine provisioning for vessels at all major UAE ports",
    stat: "200+",
    statLabel: "Ships Supplied Monthly",
  },
  {
    icon: Globe,
    title: "UAE-Wide Distribution",
    description: "Comprehensive coverage across all Emirates with same-day options",
    stat: "7",
    statLabel: "Emirates Covered",
  },
]

export function LogisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="logistics" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Supply & Logistics
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">Precision Logistics for Maximum Freshness</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our advanced logistics infrastructure ensures that every product reaches 
              you in perfect condition. From our temperature-controlled warehouses to 
              our modern delivery fleet, we maintain the cold chain integrity throughout.
            </p>

            <div className="mt-10 space-y-6">
              {logistics.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {logistics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`group rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${
                  index === logistics.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-4">
                  <div className="font-serif text-3xl font-bold text-foreground">
                    {item.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.statLabel}</div>
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
