import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HomeInquiry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [status, setStatus] = useState("idle") // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("loading")

        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus("success")
                setFormData({ name: "", email: "", phone: "", message: "" })
            } else {
                setStatus("error")
            }
        } catch (error) {
            setStatus("error")
        }
    }

    return (
        <section className="bg-[#f2f2f2] py-24 md:py-40 px-6 md:px-16" id="contact">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-8 leading-tight"
                    >
                        Start Your <br />
                        <span className="font-semibold">Dream Project</span>
                    </motion.h2>
                    <p className="text-lg text-gray-500 font-light mb-12 max-w-md italic">
                        "Your vision, our architecture. Let's create something timeless."
                    </p>

                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-[0.2em] text-[#C18F08] mb-1 font-bold">Email Us</span>
                            <a href="mailto:ar.divyamgupta@gmail.com" className="text-xl font-medium text-gray-900 hover:text-[#C18F08] transition-colors">
                                ar.divyamgupta@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-[0.2em] text-[#C18F08] mb-1 font-bold">Call Us</span>
                            <a href="tel:+919956737555" className="text-xl font-medium text-gray-900 hover:text-[#C18F08] transition-colors" >
                                +91-9956737555
                            </a>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 rounded-lg relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Message Sent!</h3>
                                <p className="text-gray-500 max-w-xs mb-8">
                                    Thank you for reaching out. We have received your enquiry and will contact you soon.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="px-8 py-3 bg-black text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#C18F08] hover:text-black transition-all"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-[#C18F08] font-bold">Name</label>
                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border-b-2 border-gray-100 py-3 focus:border-[#C18F08] outline-none transition-all font-light text-gray-800"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-[#C18F08] font-bold">Email</label>
                                        <input
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            className="w-full border-b-2 border-gray-100 py-3 focus:border-[#C18F08] outline-none transition-all font-light text-gray-800"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#C18F08] font-bold">Phone Number</label>
                                    <input
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#C18F08] outline-none transition-all font-light text-gray-800"
                                        placeholder="+91 - Requesting Contact"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#C18F08] font-bold">Project Details</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full border-b-2 border-gray-100 py-3 focus:border-[#C18F08] outline-none transition-all font-light resize-none text-gray-800"
                                        placeholder="Tell us about your project vision..."
                                    />
                                </div>

                                <button
                                    disabled={status === "loading"}
                                    type="submit"
                                    className="w-full py-5 bg-black text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#C18F08] hover:text-black transition-all duration-300 mt-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                                >
                                    {status === "loading" ? (
                                        <span className="animate-pulse">Processing...</span>
                                    ) : (
                                        <>
                                            Submit Enquiry
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                {status === "error" && (
                                    <p className="text-red-500 text-xs text-center mt-4">Something went wrong. Please try again or call us directly.</p>
                                )}
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
