"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Al Maktoum",
    role: "Procurement Manager",
    company: "Dubai Fresh Supermarkets",
    content:
      "Noor Al Warsan has been our trusted supplier for over 5 years. Their consistency in quality and reliability in delivery has made them an invaluable partner for our 20+ store chain.",
    rating: 5,
  },
  {
    name: "Captain James Morrison",
    role: "Fleet Operations Director",
    company: "Gulf Marine Services",
    content:
      "Outstanding ship chandelling service. They understand maritime logistics and always deliver fresh provisions on time, even with short notice. Essential partner for our fleet operations.",
    rating: 5,
  },
  {
    name: "Sarah Al Zaabi",
    role: "Executive Chef",
    company: "Jumeirah Hotels Group",
    content:
      "The quality of produce we receive is exceptional. Their team goes above and beyond to source specialty items for our restaurants. Highly professional and responsive.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Trusted by Industry Leaders</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients 
            have to say about partnering with Noor Al Warsan LLC.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-3xl bg-card p-8 shadow-sm"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Quote className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mt-4 text-card-foreground leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-6">
                <div className="font-semibold text-card-foreground">
                  {testimonial.name}
                </div>
                {/*<div className="mt-1 text-sm text-muted-foreground">*/}
                {/*  {testimonial.role}*/}
                {/*</div>*/}
                {/*<div className="text-sm font-medium text-primary">*/}
                {/*  {testimonial.company}*/}
                {/*</div>*/}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
