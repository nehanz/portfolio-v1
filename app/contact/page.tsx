'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    message: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Basic validation
    if (!formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Email and message are required'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID ?? '',
        EMAILJS_TEMPLATE_ID ?? '',
        {
          to_name: 'Nehan',
          from_name: formData.name,
          from_email: formData.email,
          title: formData.title,
          name: formData.name,
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
          date: new Date().toLocaleDateString(),
          timestamp: new Date().toISOString()
        },
        EMAILJS_PUBLIC_KEY ?? ''
      );

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });

        // Reset form
        setFormData({
          title: '',
          name: '',
          message: '',
          email: '',
          phone: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-full p-10">
        <div className="relative">
          <section className="mb-10">
            <h1 className="text-5xl font-bold text-(--color-primary) mb-10 mt-5">
              Get in touch
            </h1>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <p>I'm open to new opportunities and collaborations. Feel free to reach out to me through the contact form or connect with me on social media.</p>
                <div>
                  <div className="mt-4">
                    <a href="mailto:nehannimsara003@gmail.com" className="text-(--color-accent) hover:underline">
                      Email: nehannimsara003@gmail.com
                    </a>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://wa.me/94757076608?text=Hello!"
                      className="text-(--color-accent) hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp: +94 75 707 6608
                    </a>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://www.facebook.com/nehan.wijayagunarathna/"
                      className="text-(--color-accent) hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook: Nehan Wijayagunarathna
                    </a>
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://www.instagram.com/nehannimsara_/"
                      className="text-(--color-accent) hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram: @nehannimsara_
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {submitStatus.message && (
                  <div className={`p-4 rounded-md mb-4 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium mb-1">
                        Title/Subject
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:border-transparent"
                        placeholder="e.g., Job Opportunity"
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:border-transparent"
                        placeholder="+94 77 123 4567"
                      />
                    </div>
                  </div>

                  {/* Removed Preferred Contact Time */}

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:border-transparent"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-md font-medium ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-(--color-accent) text-white hover:bg-opacity-90'
                    } transition duration-300`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
