import { motion, useScroll, useTransform } from 'framer-motion';
import { Send } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
    }
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 min-h-screen"
      ref={containerRef}
      style={{ opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a question or want to work together? Drop me a message!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-primary/5 to-primary-dark/5 p-6 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">Location</h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                Hyderabad, India
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-primary/5 to-primary-dark/5 p-6 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">Email</h3>
              <a 
                href="mailto:ysampath36@gmail.com" 
                className="text-text-light-secondary dark:text-text-dark-secondary hover:text-primary transition-colors"
              >
                ysampath36@gmail.com
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-light-primary dark:text-text-dark-primary">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-light-primary dark:text-text-dark-primary"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-light-primary dark:text-text-dark-primary">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-light-primary dark:text-text-dark-primary"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-light-primary dark:text-text-dark-primary">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-text-light-primary dark:text-text-dark-primary"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-colors ${
                (isSubmitting || isSubmitted) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : isSubmitted ? (
                'Message Sent!'
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}