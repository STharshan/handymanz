import { useEffect, useState } from "react";
import { X, Calendar, Clock, User, Mail, PhoneCall, MessageSquare, Car } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function MOTBookingModal({ isOpen, onClose }) {
  const whatsappNumber = "447752364546";

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", vehicle: "", date: "", time: "", message: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const isValid = formData.name && formData.phone && formData.vehicle && formData.date && formData.time;

  const handleSubmit = () => {
    const dateStr = new Date(formData.date).toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    const text = `*MOT Booking Request*\n\n Date: ${dateStr}\n Time: ${formData.time}\n\n Name: ${formData.name}\n Phone: ${formData.phone}${formData.email ? `\n Email: ${formData.email}` : ""}\n Vehicle Reg: ${formData.vehicle}${formData.message ? `\n Notes: ${formData.message}` : ""}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
    onClose();
    setFormData({ name: "", phone: "", email: "", vehicle: "", date: "", time: "", message: "" });
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-lg rounded-2xl shadow-2xl bg-linear-to-tr from-gray-900 to-black border border-orange-600/25 max-h-[92vh] overflow-y-auto">

        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-orange-500/15 border border-orange-500/35">
                <Calendar size={18} className="text-orange-500" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-white">Book Your MOT</h2>
                <p className="text-xs mt-0.5 text-gray-500">ACG – Auto Centre, Nottingham</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/12 transition"
            >
              <X size={15} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 py-5 space-y-4">

          {/* Row 1: Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              icon={<User size={14} className="text-orange-500" />}
              label="Full Name"
              required
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              icon={<PhoneCall size={14} className="text-orange-500" />}
              label="Phone Number"
              required
              name="phone"
              placeholder="07xxx xxxxxx"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Row 2: Email + Vehicle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              icon={<Mail size={14} className="text-orange-500" />}
              label="Email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
            
            <InputField
              icon={<Car size={14} className="text-orange-500" />}
              label="Vehicle Registration"
              required
              name="vehicle"
              placeholder="AB12 CDE"
              value={formData.vehicle}
              onChange={handleChange}
            />
          </div>

          {/* Row 3: Date + Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              icon={<Calendar size={14} className="text-orange-500" />}
              label="Preferred Date"
              required
              name="date"
              type="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
            />
            <InputField
              icon={<Clock size={14} className="text-orange-500" />}
              label="Preferred Time"
              required
              name="time"
              type="time"
              min="08:30"
              max="17:00"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          {/* Hours hint */}
          <div className="rounded-xl px-4 py-2.5 flex items-center gap-2 bg-orange-500/6 border border-orange-500/15">
            <Clock size={12} className="text-orange-500 shrink-0" />
            <p className="text-xs text-gray-400">
              <span className="font-semibold text-orange-500">Hours:</span> Mon–Fri 8:30am–5:30pm &middot; Sat 9:00am–3:00pm &middot; Sun Closed
            </p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold mb-1.5 text-gray-400">
              Additional Notes <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-3 pointer-events-none">
                <MessageSquare size={14} className="text-orange-500" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific concerns, make/model, or special requests..."
                rows={3}
                className="w-full pl-9 pr-3 py-3 rounded-xl text-sm bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300
              ${isValid ? "bg-linear-to-tr from-green-500 to-teal-700 text-white shadow-lg hover:brightness-110" : "bg-white/7 text-gray-600 cursor-not-allowed"}
            `}
          >
            <FaWhatsapp size={18} />
            Send Booking via WhatsApp
          </button>

          <p className="text-xs text-center text-gray-500">
            This opens WhatsApp with your details pre-filled. By submitting you agree to us processing your details to respond to your enquiry.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Input Field Component ──────────────────────────────────────
function InputField({ icon, label, optional, ...props }) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5 text-gray-400">
        {label} {optional ? <span className="text-gray-500 font-normal">(optional)</span> : <span className="text-orange-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </div>
        <input
          className={`w-full pl-9 pr-3 py-3 text-sm rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all ${props.className || ""}`}
          {...props}
        />
      </div>
    </div>
  );
}

export default MOTBookingModal;