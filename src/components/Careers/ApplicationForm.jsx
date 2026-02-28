"use client";

import { useState } from "react";

export default function CareersPage() {
  return (
    <main className="bg-white text-black h-screen max-h-screen overflow-hidden py-10">

      {/* MAIN GRID */}
      <section className="h-full w-full flex items-center px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center pr-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Careers
            </h1>

            <p className="text-lg text-gray-700 max-w-xl mb-8 leading-relaxed">
              We’re always looking for talented architects, designers, and creative thinkers
              who want to shape the future of spatial design. Submit your application below and
              our HR team will reach out to you shortly.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="h-[75vh] overflow-y-auto border-l border-gray-300 pl-6 pr-2 custom-scroll">
            <ApplicationForm />
          </div>

        </div>
      </section>

      {/* CUSTOM SCROLL */}
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #b5b5b5;
          border-radius: 20px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              APPLICATION FORM                               */
/* -------------------------------------------------------------------------- */

function ApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileError, setFileError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setFileError("");

    const file = e.target.resume.files[0];

    if (!file) {
      setFileError("Please upload your resume.");
      setLoading(false);
      return;
    }
    if (file.type !== "application/pdf") {
      setFileError("Only PDF files allowed.");
      setLoading(false);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError("Max file size is 5MB.");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.target);

    const res = await fetch("/api/careers", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl w-full space-y-5 pt-4">

      {/* NAME + EMAIL ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* NAME */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-gray-50 focus:border-black focus:ring-1 focus:ring-black transition"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-gray-50 focus:border-black focus:ring-1 focus:ring-black transition"
          />
        </div>

      </div>

      {/* PHONE */}
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          name="phone"
          type="tel"
          required
          placeholder="Enter your phone number"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-gray-50 focus:border-black focus:ring-1 focus:ring-black transition"
        />
      </div>

      {/* LINKEDIN */}
      <div>
        <label className="block text-sm font-medium mb-1">LinkedIn (optional)</label>
        <input
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/username"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-gray-50 focus:border-black focus:ring-1 focus:ring-black transition"
        />
      </div>

      {/* POSITION */}
      <div>
        <label className="block text-sm font-medium mb-1">Position Applying For</label>
        <input
          name="position"
          type="text"
          required
          placeholder="Architect, Designer, etc."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-gray-50 focus:border-black focus:ring-1 focus:ring-black transition"
        />
      </div>

      {/* RESUME */}
      <div>
        <label className="block text-sm font-medium mb-1">Upload Resume (PDF, max 5MB)</label>
        <input
          name="resume"
          type="file"
          required
          accept="application/pdf"
          className="w-full border border-gray-300 rounded-md bg-gray-50 px-3 py-2"
        />
        {fileError && (
          <p className="text-red-500 text-sm mt-1">{fileError}</p>
        )}
      </div>

      {/* SUBMIT BUTTON */}
      <button
        disabled={loading}
        className="px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition cursor-pointer w-full md:w-auto"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {success && (
        <p className="text-green-600 text-sm">
          ✔ Thank you! Your application has been submitted.
        </p>
      )}
    </form>
  );
}
