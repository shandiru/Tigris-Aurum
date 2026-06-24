import { useEffect, useState } from "react";
import { useOrderForm } from "./useOrderForm";

const ContactForm = () => {
  const { form, setForm, errors, handleSubmit } = useOrderForm({
    name: "",
    company: "",
    eventType: "",
    eventDate: "",
    location: "",
    expectedGuests: "",
    contactDetails: "",
    additionalRequirements: "",
  });

  const [animate, setAnimate] = useState(false);
  useEffect(() => { setAnimate(true); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="relative overflow-hidden px-4 py-5">
      <div className="relative z-10 max-w-3xl mx-auto pt-10">
        <div className="rounded-[28px] border border-[#E6D39C] bg-white/92 p-6 md:p-8 shadow-[0_20px_60px_rgba(26,26,26,0.12)] backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6">Event Enquiry Form</h3>

          {/* Inputs */}
          <div className="space-y-4 mb-6">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                className={`w-full bg-[#FCFAF5] border ${errors.name ? "border-red-500" : "border-[#D8C28A]"} text-[#1A1A1A] rounded-lg p-3 outline-none`}
              />
            </div>

            <div>
              <input
                name="company"
                type="text"
                placeholder="Company (if applicable)"
                value={form.company}
                onChange={handleChange}
                className="w-full bg-[#FCFAF5] border border-[#D8C28A] text-[#1A1A1A] rounded-lg p-3 outline-none"
              />
            </div>

            <div>
              <input
                name="eventType"
                type="text"
                placeholder="Event Type *"
                value={form.eventType}
                onChange={handleChange}
                className={`w-full bg-[#FCFAF5] border ${errors.eventType ? "border-red-500" : "border-[#D8C28A]"} text-[#1A1A1A] rounded-lg p-3 outline-none`}
              />
            </div>

            <div>
              <input
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={handleChange}
                className={`w-full bg-[#FCFAF5] border ${errors.eventDate ? "border-red-500" : "border-[#D8C28A]"} text-[#1A1A1A] rounded-lg p-3 outline-none`}
              />
            </div>

            <div>
              <input
                name="location"
                type="text"
                placeholder="Location *"
                value={form.location}
                onChange={handleChange}
                className={`w-full bg-[#FCFAF5] border ${errors.location ? "border-red-500" : "border-[#D8C28A]"} text-[#1A1A1A] rounded-lg p-3 outline-none`}
              />
            </div>

            <div>
              <input
                name="expectedGuests"
                type="number"
                min="1"
                placeholder="Expected Number of Guests *"
                value={form.expectedGuests}
                onChange={handleChange}
                className={`w-full bg-[#FCFAF5] border ${errors.expectedGuests ? "border-red-500" : "border-[#D8C28A]"} text-[#1A1A1A] rounded-lg p-3 outline-none`}
              />
            </div>
          </div>

          <textarea
            name="contactDetails"
            placeholder="Contact Details *"
            rows="3"
            value={form.contactDetails}
            onChange={handleChange}
            className={`w-full mt-4 bg-[#FCFAF5] border ${errors.contactDetails ? "border-red-500" : "border-[#D8C28A]"} text-[#1A1A1A] rounded-lg p-3 outline-none`}
          />

          <textarea
            name="additionalRequirements"
            placeholder="Additional Requirements"
            rows="3"
            value={form.additionalRequirements}
            onChange={handleChange}
            className="w-full mt-4 bg-[#FCFAF5] border border-[#D8C28A] text-[#1A1A1A] rounded-lg p-3 outline-none"
          />


          <button
            onClick={() => handleSubmit("+4477000000")}
            className="w-full mt-6 bg-gradient-to-r from-[#C8A950] to-[#b89840] text-black font-bold py-3 rounded-lg"
          >
            Inquire now
          </button>
          <p className="text-[10px] text-gray-400 mt-4 text-center">
            By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


