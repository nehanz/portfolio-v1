"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// Animation variants for staggered fade-in
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

type FormData = {
  title: string;
  name: string;
  message: string;
  email: string;
  phone: string;
};

type SubmitStatus = {
  type: "success" | "error" | "";
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    name: "",
    message: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: "",
    message: "",
  });

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Enhanced validation
    if (!formData.email || !formData.message || !formData.name) {
      setSubmitStatus({
        type: "error",
        message: "Name, email and message are required",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Validate environment variables
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Email service configuration is missing");
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: "Nehan Wijayagunarathna",
          from_name: formData.name,
          from_email: formData.email,
          title: formData.title,
          name: formData.name,
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
          date: new Date().toLocaleDateString(),
          timestamp: new Date().toISOString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        // Reset form
        setFormData({
          title: "",
          name: "",
          message: "",
          email: "",
          phone: "",
        });

        setTimeout(() => {
          setSubmitStatus({ type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });

      setTimeout(() => {
        setSubmitStatus({ type: "", message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <MdEmail className="text-xl text-(--color-accent)" />,
      href: "mailto:nehannimsara003@gmail.com",
      label: "Email",
    },
    {
      icon: <FaWhatsapp className="text-xl text-(--color-accent)" />,
      href: "https://wa.me/94757076608?text=Hello!",
      label: "WhatsApp",
    },
    {
      icon: <FaFacebook className="text-xl text-(--color-accent)" />,
      href: "https://www.facebook.com/nehan.wijayagunarathna/",
      label: "Facebook",
    },
    {
      icon: <FaInstagram className="text-xl text-(--color-accent)" />,
      href: "https://www.instagram.com/nehannimsara_/",
      label: "Instagram",
    },
  ];

  return (
    <motion.div
      className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* prevent autofill background color */}
      <style jsx global>{`
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          box-shadow: 0 0 0 1000px var(--color-accent1) inset !important;
          -webkit-box-shadow: 0 0 0 1000px var(--color-accent1) inset !important;
          -webkit-text-fill-color: var(--color-foreground) !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill:focus {
          box-shadow: 0 0 0 1000px var(--color-accent1) inset !important;
          -webkit-box-shadow: 0 0 0 1000px var(--color-accent1) inset !important;
          -webkit-text-fill-color: var(--color-foreground) !important;
        }
      `}</style>
      <div className="w-full p-10">
        <div className="flex flex-col justify-center items-center h-full">
          <motion.section className="flex flex-col justify-center items-center h-full" variants={containerVariants} initial="hidden" animate="show">
            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div className="flex flex-col gap-4" variants={fadeInVariant}>
                <h1 className="text-5xl font-bold text-[var(--color-primary)] mb-10 mt-5">
                  Get in touch
                </h1>
                <p className="text-lg pr-5">
                  I’m always open to new opportunities and meaningful
                  collaborations. If you’d like to work together, discuss an
                  idea, or simply connect, feel free to reach out through the
                  contact form or connect with me on social media. I enjoy
                  meeting like-minded people and exploring projects that create
                  value and make an impact.
                </p>
                <div className="mt-10 flex flex-col gap-5">
                  {socialLinks.map(({ icon, href, label }) => (
                    <div key={label} className="w-0">
                      <a
                        href={href}
                        target={label !== "Email" ? "_blank" : undefined}
                        rel={
                          label !== "Email" ? "noopener noreferrer" : undefined
                        }
                        aria-label={`Connect via ${label}`}
                      >
                        <div className="flex items-center gap-3 bg-[var(--color-accent1)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] p-2 w-40 justify-center hover:border-[var(--color-primary)] transition-all duration-300">
                          {icon}
                          {label}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="flex flex-col gap-4 bg-[var(--color-accent1)] px-6 pt-5 mt-10 h-full" variants={fadeInVariant}>
                <h2 className="text-3xl font-semibold mb-4">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium mb-1"
                      >
                        Title/Subject
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`w-full p-3 border border-(--color-accent2) focus:outline-none hover:border-(--color-foreground) transition-all duration-300 ${formData.title ? " border-(--color-foreground)" : ""}`}
                        placeholder="Project Idea, Collaboration, etc."
                        aria-label="Message title or subject"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 border border-(--color-accent2) focus:outline-none hover:border-(--color-foreground) transition-all duration-300 ${formData.name ? " border-(--color-foreground)" : ""}`}
                        placeholder="Your name"
                        required
                        aria-required="true"
                        aria-label="Your full name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 border border-(--color-accent2) focus:outline-none hover:border-(--color-foreground) transition-all duration-300 ${formData.email ? " border-(--color-foreground)" : ""}`}
                        placeholder="your.email@example.com"
                        required
                        aria-required="true"
                        aria-label="Your email address"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-3 border border-(--color-accent2) focus:outline-none hover:border-(--color-foreground) transition-all duration-300 ${formData.phone ? " border-(--color-foreground)" : ""}`}
                        placeholder="+94 77 123 4567"
                        aria-label="Your phone number (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full p-3 border border-(--color-accent2) focus:outline-none hover:border-(--color-foreground) transition-all duration-300 ${formData.message ? " border-(--color-foreground)" : ""}`}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      aria-required="true"
                      aria-label="Your message"
                    ></textarea>
                  </div>

                  {submitStatus.message && (
                    <div
                      className={`p-4 mb-4 text-sm ${
                        submitStatus.type === "error"
                          ? "text-red-400"
                          : "text-white-400"
                      }`}
                      role="alert"
                      aria-live="polite"
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-10 py-3 px-4 font-medium ${
                      isSubmitting
                        ? "bg-[var(--color-accent2)] cursor-not-allowed hover:cursor-not-allowed"
                        : "bg-[var(--color-primary)] hover:bg-[var(--color-accent2)] text-[var(--color-background)] hover:text-[var(--color-foreground)] transition-all duration-300 cursor-pointer"
                    } transition duration-300`}
                    aria-label={
                      isSubmitting ? "Sending message" : "Send message"
                    }
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}
