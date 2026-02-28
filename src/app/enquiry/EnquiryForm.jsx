"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-16">

      {/* LEFT SIDE: FORM */}
      <form onSubmit={handleSubmit} className="space-y-6 w-full">

        <h2 className="text-3xl font-light tracking-wide mb-6">Get in Touch</h2>

        {/* NAME */}
        <input
          name="name"
          required
          placeholder="Name*"
          className="w-full border border-gray-300 px-5 py-4 text-gray-800 
            focus:outline-none focus:border-black transition text-sm tracking-wide"
        />

        {/* PHONE */}
        <input
          name="phone"
          required
          placeholder="Phone Number*"
          className="w-full border border-gray-300 px-5 py-4 text-gray-800 
            focus:outline-none focus:border-black transition text-sm tracking-wide"
        />

        {/* EMAIL */}
        <input
          name="email"
          required
          placeholder="Email Address*"
          className="w-full border border-gray-300 px-5 py-4 text-gray-800 
            focus:outline-none focus:border-black transition text-sm tracking-wide"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="6"
          placeholder="Message"
          className="w-full border border-gray-300 px-5 py-4 text-gray-800 
            focus:outline-none focus:border-black transition text-sm tracking-wide"
        />

        {/* CHECKBOX */}
        <label className="flex items-start gap-3 text-xs text-gray-600">
          <input type="checkbox" required className="mt-1" />
          <span>I understand that my data will be stored in accordance with the privacy policy.</span>
        </label>

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          className="px-10 py-3 border border-black text-black tracking-widest text-xs 
            hover:bg-black hover:text-white transition"
        >
          {loading ? "SUBMITTING..." : "SUBMIT"}
        </button>

        {success && (
          <p className="text-green-600 text-sm pt-2">
            ✔ Thank you! Your enquiry has been submitted.
          </p>
        )}
      </form>

    </div>
  );
}
