import { useState } from "react";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Wadoud", // Your name
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", response);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
        Send Me a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="flex items-center gap-2 text-sm font-medium text-primary mb-2"
          >
            <User size={18} />
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 bg-bg-buttons border-2 ${
              errors.fullName ? "border-red-500" : "border-transparent"
            } rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-bg-secondary transition-colors`}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium text-primary mb-2"
          >
            <Mail size={18} />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 bg-bg-buttons border-2 ${
              errors.email ? "border-red-500" : "border-transparent"
            } rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-bg-secondary transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="flex items-center gap-2 text-sm font-medium text-primary mb-2"
          >
            <FileText size={18} />
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className={`w-full px-4 py-3 bg-bg-buttons border-2 ${
              errors.subject ? "border-red-500" : "border-transparent"
            } rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-bg-secondary transition-colors`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="flex items-center gap-2 text-sm font-medium text-primary mb-2"
          >
            <MessageSquare size={18} />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Tell me about your project..."
            className={`w-full px-4 py-3 bg-bg-buttons border-2 ${
              errors.message ? "border-red-500" : "border-transparent"
            } rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-bg-secondary transition-colors resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-bg-secondary text-white font-medium rounded-lg hover:bg-[#4d4fcd] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg">
            <p className="text-green-700 dark:text-green-400 font-medium">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg">
            <p className="text-red-700 dark:text-red-400 font-medium">
              ✗ Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
