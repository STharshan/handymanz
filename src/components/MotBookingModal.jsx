import { useEffect, useState } from "react";
import { X, Calendar, Clock, User, Mail, PhoneCall, MessageSquare, Car } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function MOTBookingModal({ isOpen, onClose }) {
  const whatsappNumber = "447752364546";

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", vehicle: "", date: "", time: "", message: "",
  });

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
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

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#e5e5e5",
    caretColor: "#f97316",
    colorScheme: "dark",
  };
  const onFocus = (e) => {
    e.target.style.border = "1px solid rgba(249,115,22,0.6)";
    e.target.style.background = "rgba(249,115,22,0.04)";
    e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)";
  };
  const onBlur = (e) => {
    e.target.style.border = "1px solid rgba(255,255,255,0.1)";
    e.target.style.background = "rgba(255,255,255,0.05)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #1c1c1c 0%, #111 100%)",
          border: "1px solid rgba(249,115,22,0.25)",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.35)" }}>
                <Calendar size={18} color="#f97316" />
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight" style={{ color: "#fff" }}>Book Your MOT</h2>
                <p className="text-xs mt-0.5" style={{ color: "#666" }}>ACG – Auto Centre, Nottingham</p>
              </div>
            </div>
            <button onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{ background: "rgba(255,255,255,0.05)" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            >
              <X size={15} color="#888" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 py-5 space-y-4">

          {/* Row 1: Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "#999" }}>
                Full Name <span style={{ color: "#f97316" }}>*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><User size={14} color="#f97316" /></div>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your full name" required
                  className="w-full pl-9 pr-3 py-3 rounded-xl text-sm outline-none transition-all"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "#999" }}>
                Phone Number <span style={{ color: "#f97316" }}>*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><PhoneCall size={14} color="#f97316" /></div>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="07xxx xxxxxx" required
                  className="w-full pl-9 pr-3 py-3 rounded-xl text-sm outline-none transition-all"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>
          </div>

          {/* Row 2: Email + Vehicle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "#999" }}>
                Email <span style={{ color: "#555", fontWeight: 400 }}>(optional)</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><Mail size={14} color="#f97316" /></div>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-9 pr-3 py-3 rounded-xl text-sm outline-none transition-all"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "#999" }}>
                Vehicle Registration <span style={{ color: "#f97316" }}>*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><Car size={14} color="#f97316" /></div>
                <input type="text" name="vehicle" value={formData.vehicle} onChange={handleChange}
                  placeholder="e.g. AB12 CDE" required
                  className="w-full pl-9 pr-3 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{ ...inputStyle, textTransform: "uppercase" }} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>
          </div>

          {/* Row 3: Date + Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "#999" }}>
                Preferred Date <span style={{ color: "#f97316" }}>*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><Calendar size={14} color="#f97316" /></div>
                <input type="date" name="date" value={formData.date} onChange={handleChange}
                  min={today} required
                  className="w-full pl-9 pr-3 py-3 rounded-xl text-sm outline-none transition-all"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "#999" }}>
                Preferred Time <span style={{ color: "#f97316" }}>*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><Clock size={14} color="#f97316" /></div>
                <input type="time" name="time" value={formData.time} onChange={handleChange}
                  min="08:30" max="17:00" required
                  className="w-full pl-9 pr-3 py-3 rounded-xl text-sm outline-none transition-all"
                  style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>
          </div>

          {/* Hours hint */}
          <div className="rounded-xl px-4 py-2.5 flex items-center gap-2"
            style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)" }}>
            <Clock size={12} color="#f97316" className="shrink-0" />
            <p className="text-xs" style={{ color: "#aaa" }}>
              <span className="font-semibold" style={{ color: "#f97316" }}>Hours:</span>{" "}
              Mon–Fri 8:30am–5:30pm &middot; Sat 9:00am–3:00pm &middot; Sun Closed
            </p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold mb-1.5" style={{ color: "#999" }}>
              Additional Notes <span style={{ color: "#555", fontWeight: 400 }}>(optional)</span>
            </label>
            <div className="relative">
              <div className="absolute left-3 top-3 pointer-events-none"><MessageSquare size={14} color="#f97316" /></div>
              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder="Any specific concerns, make/model, or special requests..."
                rows={3}
                className="w-full pl-9 pr-3 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300"
            style={{
              background: isValid ? "linear-gradient(135deg, #25D366, #128C7E)" : "rgba(255,255,255,0.07)",
              color: isValid ? "#fff" : "#444",
              cursor: isValid ? "pointer" : "not-allowed",
              boxShadow: isValid ? "0 6px 24px rgba(37,211,102,0.3)" : "none",
            }}
            onMouseEnter={e => { if (isValid) e.currentTarget.style.filter = "brightness(1.1)"; }}
            onMouseLeave={e => { if (isValid) e.currentTarget.style.filter = "brightness(1)"; }}
          >
            <FaWhatsapp size={18} />
            Send Booking via WhatsApp
          </button>

          <p className="text-xs text-center" style={{ color: "#3a3a3a" }}>
            This opens WhatsApp with your details pre-filled. By submitting you agree to us processing your details to respond to your enquiry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MOTBookingModal;