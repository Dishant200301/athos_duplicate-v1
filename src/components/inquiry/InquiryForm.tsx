import { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    productName: "Fish Collagen Peptide",
    quantity: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-white py-12">
      {/* CONTAINER */}
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        {/* HEADING */}
        <h1 className="text-[30px] md:text-[40px] font-bold text-[#1D7AA3] mb-4 ">
          Inquiry
        </h1>

        {/* FORM */}
        <form className="space-y-2">
          {/* Company Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Company name
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full h-[40px] rounded-md border border-gray-300 px-3 focus:outline-none focus:border-[#1D7AA3]"
            />
          </div>

          {/* Contact + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Contact Person Name *
              </label>
              <input
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
                className="w-full h-[40px] rounded-md border border-gray-300 px-3"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[40px] rounded-md border border-gray-300 px-3"
              />
            </div>
          </div>

          {/* Product + Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Product Name *
              </label>
              <select
                className="w-full h-[44px] rounded-md border border-gray-300 px-3 bg-white"
                value={formData.productName}
                onChange={(e) =>
                  setFormData({ ...formData, productName: e.target.value })
                }
              >
                <option>Fish Collagen Peptide</option>
                <option>Fish Gelatin</option>
                <option>Fish Collagen Peptide & Fish Gelatin</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Quantity *
              </label>
              <input
                name="quantity"
                required
                placeholder="Ex: 100 ton/kg/lb"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full h-[40px] rounded-md border border-gray-300 px-3"
              />
            </div>
          </div>

          {/* Country + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Country *
              </label>
              <input
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full h-[40px] rounded-md border border-gray-300 px-3"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone *
              </label>
              <input
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-[40px] rounded-md border border-gray-300 px-3"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Message *
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-[110px] rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 bg-[#198754] text-white px-6 py-2 rounded-tl-md rounded-br-md hover:bg-[#157347]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
