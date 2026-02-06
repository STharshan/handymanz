"use client";
import React, { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const whatsappNumber = "+447752364546";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hello! My name is ${formData.name}. Email: ${formData.email}. Phone: ${formData.phone}. Message: ${formData.message}`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="scroll-m-20 w-full py-10 bg-[#F5F5F5] dark:bg-black transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-[38px] font-semibold text-black dark:text-white mb-4 transition-colors">
                        Get In Touch
                    </h2>
                    <p className="text-[18px] text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
                        Have questions? Contact us today for a free quote or to schedule your service.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left Info Box */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-[#E0E0E0] dark:border-gray-700 space-y-8 transition-colors shadow-md">
                            {/* Address */}
                            <div>
                                <h3 className="text-[24px] font-medium text-black dark:text-white mb-2 transition-colors">
                                    Address
                                </h3>
                                <a href="https://maps.app.goo.gl/5bJYgZZG9fhxHqwB9" target="_blank" rel="noreferrer">
                                    <p className="text-[18px] text-black dark:text-gray-200 font-semibold hover:opacity-80 transition-colors">
                                        20 Little Tennis Street, Nottingham, NG2 4EL, United Kingdom
                                    </p>
                                </a>
                            </div>

                            {/* Phone */}
                            <div>
                                <h3 className="text-[24px] font-medium text-black dark:text-white mb-2 transition-colors">Phone</h3>
                                <a
                                    href={`tel:${whatsappNumber}`}
                                    className="text-[18px] text-black dark:text-gray-200 font-semibold hover:opacity-80 transition-colors"
                                >
                                    {whatsappNumber}
                                </a>
                            </div>

                            {/* Hours */}
                            <div>
                                <h3 className="text-[24px] font-medium text-black dark:text-white mb-2 transition-colors">Hours</h3>
                                <div className="text-[16px] text-gray-700 dark:text-gray-300 space-y-1 transition-colors">
                                    <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>

                            {/* Payment */}
                            {/* <div>
                                <h3 className="text-[24px] font-medium text-black dark:text-white mb-3 transition-colors">
                                    Payment Methods
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Google Pay", "PayPal", "Visa"].map((method) => (
                                        <span
                                            key={method}
                                            className="px-3 py-1 text-sm rounded-full bg-[#F5F5F5] dark:bg-gray-700 text-black dark:text-gray-200 border border-[#E0E0E0] dark:border-gray-600 transition-colors"
                                        >
                                            {method}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[14px] text-gray-700 dark:text-gray-300 mt-2 transition-colors">
                                    Contactless payments available
                                </p>
                            </div> */}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-[#E0E0E0] dark:border-gray-700 transition-colors shadow-md">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {["name", "email", "phone", "message"].map((field) => {
                                const label =
                                    field === "name"
                                        ? "Full Name *"
                                        : field === "email"
                                            ? "Email *"
                                            : field === "phone"
                                                ? "Phone"
                                                : "Message *";
                                const inputProps = {
                                    name: field,
                                    value: formData[field],
                                    onChange: handleChange,
                                    required: field !== "phone",
                                    placeholder:
                                        field === "name"
                                            ? "Your name"
                                            : field === "email"
                                                ? "your@email.com"
                                                : field === "phone"
                                                    ? "Your phone number"
                                                    : "Tell us about your dent removal needs...",
                                    className:
                                        "w-full px-4 py-3 text-[16px] border border-[#E0E0E0] dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white outline-none resize-none text-black dark:text-gray-200 bg-white dark:bg-gray-700 transition-colors",
                                };

                                return (
                                    <div key={field}>
                                        <label className="block text-[16px] font-medium text-black dark:text-white mb-2 transition-colors">
                                            {label}
                                        </label>
                                        {field !== "message" ? (
                                            <input type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} {...inputProps} />
                                        ) : (
                                            <textarea rows={5} {...inputProps}></textarea>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-black dark:bg-white text-white dark:text-black text-[16px] font-semibold py-4 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-300 transition-colors"
                            >
                                Send Message
                            </button>
                              <p className="text-xs text-center dark:text-gray-300">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
