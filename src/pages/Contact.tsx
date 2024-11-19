import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export function Contact() {
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
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        Get in Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" />
                <a href="mailto:ysampath36@gmail.com" className="hover:text-primary transition-colors">
                  ysampath36@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" />
                <span>Rajahmundry, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" />
                <span>Available on request</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Social Links</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/just-sampath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Github size={24} className="text-primary" />
              </a>
              <a
                href="https://linkedin.com/in/just-sampath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={24} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface dark:bg-surface-dark rounded-xl p-6 elevation-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition-shadow"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full font-medium py-2 px-4 rounded-lg transition-colors ${
                status === 'sending'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary-dark text-white'
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
    </motion.div>
  );
}