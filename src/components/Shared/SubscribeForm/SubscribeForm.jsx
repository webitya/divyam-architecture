"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubscribe(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
    };

    const res = await fetch("/api/subscribeform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 4000);
    }
  }

  return (
    <form onSubmit={handleSubscribe} className="space-y-3 w-full max-w-md">

      {/* NAME */}
      <input
        required
        name="name"
        type="text"
        placeholder="Your Full Name"
        className="w-full px-4 py-2.5 rounded-md 
                   bg-white text-black placeholder-gray-500 
                   border border-gray-300 
                   hover:border-gray-500 hover:brightness-110
                   focus:outline-none focus:ring-2 focus:ring-gray-400
                   focus:text-black focus:brightness-125
                   transition"
      />

      {/* EMAIL */}
      <input
        required
        name="email"
        type="email"
        placeholder="Your Email Address"
        className="w-full px-4 py-2.5 rounded-md 
                   bg-white text-black placeholder-gray-500 
                   border border-gray-300 
                   hover:border-gray-500 hover:brightness-110
                   focus:outline-none focus:ring-2 focus:ring-gray-400
                   focus:text-black focus:brightness-125
                   transition"
      />

      {/* BUTTON */}
      <button
        disabled={loading}
        className="w-full bg-white text-black font-semibold py-2.5 rounded-md
                   hover:bg-gray-100 hover:brightness-110 
                   cursor-pointer active:scale-[0.98]
                   transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Subscribing..." : "Subscribe Now"}
      </button>

      {/* SUCCESS */}
      {success && (
        <p className="text-green-400 text-sm pt-1">
          ✔ You’re subscribed! We’ll keep you updated.
        </p>
      )}
    </form>
  );
}
