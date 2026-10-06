"use client"

import {motion} from "framer-motion"
import {useInView} from "framer-motion"
import {useRef, useState} from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import {useToast} from "@/hooks/use-toast"

export function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})
    const {toast} = useToast()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    })

    // Dynamic Contact Info from Env Variables with Sensible Fallbacks
    const address = process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Dubai International City, England Cluster, Building-Y18 "
    const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 52 999 6746"
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Nooralwarsan999@gmail.com"
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+971529996746"
    const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const messageParts = [
            `*New Quote / Supply Inquiry - Noor Al Warsan LLC*`,
            `*Name:* ${formData.name}`,
            formData.company ? `*Company:* ${formData.company}` : null,
            formData.phone ? `*Phone:* ${formData.phone}` : null,
            formData.email ? `*Email:* ${formData.email}` : null,
            `\n*Requirements / Message:*\n${formData.message}`,
        ].filter(Boolean).join("\n")

        const text = encodeURIComponent(messageParts)
        window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank")

        toast({
            title: "Opening WhatsApp",
            description: "Connecting you directly with our sales team on WhatsApp...",
        })

        setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
        })
    }

    const contactInfo = [
        {
            icon: MapPin,
            title: "Address",
            content: address,
            href: "https://maps.google.com/?q=Dubai+International+City+England+Cluster+Building+Y18",
        },
        {
            icon: Phone,
            title: "Phone",
            content: phone,
            href: `tel:${phone.replace(/\s+/g, "")}`,
        },
        {
            icon: Mail,
            title: "Email",
            content: email,
            href: `mailto:${email}`,
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Sunday - Thursday: 8AM - 6PM",
            href: null,
        },
    ]

    return (
        <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
            <div className="absolute inset-0 bg-foreground"/>
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center"
                >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contact Us
          </span>
                    <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
                        <span className="text-balance">Partner With Noor Al Warsan LLC Today</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-background/70">
                        Reliable fresh produce and food supply solutions for supermarkets,
                        ships, and businesses across UAE.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-background/80">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-background/80">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-background/80">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                                        className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="Your company"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-background/80">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                        placeholder="+971 XX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-background/80">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="mt-2 w-full resize-none rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                    placeholder="Tell us about your requirements..."
                                    required
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <button
                                    type="submit"
                                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:bg-[#20ba5a] hover:shadow-xl shadow-lg shadow-[#25D366]/25"
                                >
                                    <WhatsAppIcon className="h-5 w-5" />
                                    <span>Send Quote Request on WhatsApp</span>
                                </button>
                                <a
                                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hello Noor Al Warsan LLC, I would like to inquire about your fresh food and vegetable supply services.")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-background/20 bg-background/5 px-6 py-4 text-sm font-medium text-background hover:bg-background/15 transition-all text-center"
                                >
                                    Direct Chat Without Form
                                </a>
                            </div>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="space-y-8"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            {contactInfo.map((info) => {
                                const Content = (
                                    <>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                                            <info.icon className="h-5 w-5 text-accent"/>
                                        </div>
                                        <h3 className="mt-4 font-semibold text-background">{info.title}</h3>
                                        <p className="mt-1 text-background/70">{info.content}</p>
                                    </>
                                )

                                return info.href ? (
                                    <a
                                        key={info.title}
                                        href={info.href}
                                        target={info.href.startsWith("http") ? "_blank" : undefined}
                                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="rounded-2xl border border-background/10 bg-background/5 p-6 transition-all hover:border-accent hover:bg-background/10"
                                    >
                                        {Content}
                                    </a>
                                ) : (
                                    <div
                                        key={info.title}
                                        className="rounded-2xl border border-background/10 bg-background/5 p-6"
                                    >
                                        {Content}
                                    </div>
                                )
                            })}
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hello Noor Al Warsan LLC, I would like to inquire about your services.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between rounded-2xl border-2 border-[#25D366]/40 bg-[#25D366]/10 p-6 transition-all hover:border-[#25D366] hover:bg-[#25D366]/20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/30">
                                    <WhatsAppIcon className="h-7 w-7" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold text-background">Chat Directly on WhatsApp</div>
                                    <div className="text-sm text-background/70">Connect instantly with our sales team</div>
                                </div>
                            </div>
                            <span className="hidden sm:inline-block rounded-full bg-[#25D366]/20 px-3 py-1 text-xs font-semibold text-[#25D366] border border-[#25D366]/40">
                                Online
                            </span>
                        </a>

                        {/* Map Placeholder */}
                        <div className="relative h-64 overflow-hidden rounded-2xl bg-background/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613.4228058283877!2d55.4012555797147!3d25.172474044964748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67001112cea5%3A0xed8111b62821c4b8!2sY18%20England%20cluster!5e0!3m2!1sen!2sbd!4v1780480152412!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
