"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form Input Validations
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a subject.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus("error");
      setErrorMessage("Please write a message (at least 10 characters).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Auto return to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Could not connect to the mail server. Please try again.");
    }
  };

  return (
    <div className="xl:p-10 p-4 rounded-md w-full xl:w-3/5 max-xl:py-10 relative flex flex-col justify-center min-h-[480px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center w-full text-foreground h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <div className="flex flex-col gap-1.5 w-full">
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-5 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300 disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-5 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300 disabled:opacity-50"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-1.5 w-full">
          <Input
            type="text"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-5 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300 disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Textarea
            id="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            disabled={status === "submitting"}
            className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 min-h-[220px] focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300 resize-none disabled:opacity-50"
          />
        </div>

        {/* Dynamic Error Feedback */}
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 font-semibold text-sm self-start flex items-center gap-1.5"
            >
              <span>⚠️ {errorMessage}</span>
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <div className="w-full flex justify-end mt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="relative px-8 py-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-bold rounded-xl flex items-center gap-2.5 shadow-lg shadow-primary/20 hover:shadow-primary/35 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer group"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Floating Success Overlay Notification */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center z-30 border border-emerald-500/20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/30 animate-pulse"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </motion.div>
            
            <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              Message Sent Successfully!
            </h4>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm text-sm mb-6 leading-relaxed">
              Thank you for reaching out! Your message has been received securely. I will review it and get back to you shortly.
            </p>
            
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
