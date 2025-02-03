import { motion } from 'framer-motion';
import { useState, FormEvent, useEffect } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: Github, href: 'https://github.com/just-sampath', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/just-sampath', label: 'LinkedIn' }
];

export function Contact() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sampath',
          to_email: 'ysampath36@gmail.com'
        }
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-secondary-dark">
            Contact Information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-dark">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <a
                  href="mailto:ysampath36@gmail.com"
                  className="text-text-secondary dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary transition-colors"
                >
                  ysampath36@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-dark">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-text-secondary dark:text-text-secondary-dark">
                  Rajahmundry, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-dark">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-text-secondary dark:text-text-secondary-dark">
                  Available on request
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white hover:scale-110 transform transition-transform duration-200"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 ${
                  status === 'sending'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : ''
                }`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}