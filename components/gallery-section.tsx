"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/2 1.jpg",
    alt: "Premium Fresh Fruits",
    category: "Fruits",
  },
  {
    src: "/4 1.jpg",
    alt: "Fresh Vegetables Supply",
    category: "Vegetables",
  },
  {
    src: "/5 1.jpg",
    alt: "Logistics and Warehousing",
    category: "Logistics",
  },
  {
    src: "/6 2.jpg",
    alt: "Ship Chandelling Operations",
    category: "Marine",
  },
  {
    src: "/7 1.jpg",
    alt: "Cold Chain Storage Facilities",
    category: "Logistics",
  },
  {
    src: "/8.jpg",
    alt: "Direct Delivery Services",
    category: "Logistics",
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Gallery
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Our Premium Products & Operations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A glimpse into our world of fresh produce, state-of-the-art facilities, 
            and professional operations.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`relative ${index === 0 || index === 5 ? "h-full min-h-[400px]" : "aspect-square"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-sm font-medium text-foreground">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/40"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </motion.div>
      )}
    </section>
  )
}
