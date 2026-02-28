"use client";
import Footer from "@/components/Shared/Footer/Footer";

export default function RefundPolicy() {
    return (
        <>
            <main className="min-h-screen bg-black text-gray-300 py-24 px-6 md:px-20 leading-relaxed">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Refund Policy</h1>

                    <div className="space-y-8 text-sm md:text-base">
                        <p>
                            We want you to have a smooth experience with us. While we’re unable to offer refunds in most cases, we’re always here to help if something doesn’t go as expected.
                        </p>
                        <p>
                            If you feel you’re eligible for a refund, just send us an email with all the important details. Our team will review your request and get back to you as soon as possible.
                        </p>
                        <p>
                            Please note that we may approve or decline refund requests based on the situation.
                            If your refund is approved, we’ll process it right away, and you should see the amount credited back to your original payment method within 10 business days. Your bank or card provider may take a little extra time to show the refund on your statement.
                        </p>

                        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                            <p>H K ENTERPRISES</p>
                            <p>Email: <a href="mailto:planedgearchitect@gmail.com" className="hover:text-white transition-colors">planedgearchitect@gmail.com</a></p>
                            <p>Phone: +91 9971189665</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
