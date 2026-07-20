import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    subject: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.product) {
      newErrors.product = "Product selection is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission to backend/email services
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({
        companyName: "",
        name: "",
        email: "",
        subject: "",
        product: "",
        message: "",
      });
    }, 1000);
  };

  const inputBorderClass = (fieldName: string) => {
    return errors[fieldName]
      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
      : "border-[#CED4DA] focus:border-[#1D7AA3] focus:ring-1 focus:ring-[#1D7AA3]";
  };

  const inputBase =
    "w-full h-[44px] rounded-[6px] border px-[12px] text-[16px] text-black placeholder-[#6C757D] focus:outline-none transition-colors";

  return (
    <section className="bg-white pb-[100px] pt-[20px]">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] xl:gap-[40px] items-start">
          {/* FORM */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-[16px]">
              {/* Company Name */}
              <div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Please Enter Company Name *"
                  className={`${inputBase} ${inputBorderClass("companyName")}`}
                />
                {errors.companyName && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.companyName}
                  </span>
                )}
              </div>

              {/* Name & Email Inline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Please enter your name *"
                    className={`${inputBase} ${inputBorderClass("name")}`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[12px] mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please enter your email *"
                    className={`${inputBase} ${inputBorderClass("email")}`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[12px] mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject *"
                  className={`${inputBase} ${inputBorderClass("subject")}`}
                />
                {errors.subject && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Select Product */}
              <div>
                <div className="relative">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={`${inputBase} ${inputBorderClass("product")} bg-white pr-10 appearance-none ${
                      formData.product ? "text-black" : "text-[#6C757D]"
                    }`}
                  >
                    <option value="" disabled hidden>
                      Select Product *
                    </option>
                    <option value="Fish Collagen Peptide">Fish Collagen Peptide</option>
                    <option value="Fish Gelatin">Fish Gelatin</option>
                    <option value="Both">Both (Fish Collagen Peptide & Fish Gelatin)</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#6C757D]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
                {errors.product && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.product}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message for Us *"
                  className={`w-full h-[140px] rounded-[6px] border px-[12px] py-[10px] text-[16px] text-black placeholder-[#6C757D] focus:outline-none transition-colors resize-none ${inputBorderClass(
                    "message"
                  )}`}
                />
                {errors.message && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[44px] bg-[#1D81A5] hover:bg-[#338dad] text-white rounded-tl-[6px] rounded-br-[6px] font-semibold text-[16px] transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="w-full h-[350px] lg:h-[445px] rounded-[6px] overflow-hidden animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <iframe
              src="https://www.google.com/maps?q=Athos%20Collagen%20Pvt%20Ltd&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Athos Collagen Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
