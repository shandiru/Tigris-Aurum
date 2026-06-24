import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useOrderForm } from "./useOrderForm";

const Contact = () => {
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
    <div id='contact' className="scroll-m-10 min-h-screen w-full bg-[#FCFAF5] p-4 md:p-12 relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#C9A84C 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#C9A84C]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#C9A84C]/15 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#C9A84C]/10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`text-center mb-10 relative z-10 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">Begin Your <span className="text-[#C9A84C]!">Tigris Aurum</span> Experience</h2>
        <p className="text-sm md:text-lg text-gray-700 font-semibold max-w-3xl mx-auto">
          Planning an event? Share your requirements with us and we will get back to you with the same care and precision we put into every blend.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 relative z-10">
        <div className={`rounded-[28px] border border-[#E6D39C] bg-white p-6 md:p-8 shadow-[0_20px_60px_rgba(26,26,26,0.12)] transition-all duration-1000 hover:shadow-[0_20px_60px_rgba(201,168,76,0.18)] ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Event Enquiry Form</h2>

          {/* Customer Info */}
          <div className="space-y-4 mb-6">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name *"
                value={form.name}
                onChange={handleChange}
                className={`bg-[#FCFAF5] border ${errors.name ? 'border-red-500' : 'border-[#D8C28A]'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#C9A84C] transition-all text-[#1A1A1A] outline-none`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                name="company"
                type="text"
                placeholder="Company (if applicable)"
                value={form.company}
                onChange={handleChange}
                className="bg-[#FCFAF5] border border-[#D8C28A] placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#C9A84C] transition-all text-[#1A1A1A] outline-none"
              />
            </div>

            <div>
              <input
                name="eventType"
                type="text"
                placeholder="Event Type *"
                value={form.eventType}
                onChange={handleChange}
                className={`bg-[#FCFAF5] border ${errors.eventType ? 'border-red-500' : 'border-[#D8C28A]'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#C9A84C] transition-all text-[#1A1A1A] outline-none`}
              />
              {errors.eventType && <p className="text-red-400 text-xs mt-1">{errors.eventType}</p>}
            </div>

            <div>
              <input
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={handleChange}
                className={`bg-[#FCFAF5] border ${errors.eventDate ? 'border-red-500' : 'border-[#D8C28A]'} rounded-lg p-3 w-full focus:ring-2 focus:ring-[#C9A84C] transition-all text-[#1A1A1A] outline-none`}
              />
              {errors.eventDate && <p className="text-red-400 text-xs mt-1">{errors.eventDate}</p>}
            </div>

            <div>
              <input
                name="location"
                type="text"
                placeholder="Location *"
                value={form.location}
                onChange={handleChange}
                className={`bg-[#FCFAF5] border ${errors.location ? 'border-red-500' : 'border-[#D8C28A]'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#C9A84C] transition-all text-[#1A1A1A] outline-none`}
              />
              {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
            </div>

            <div>
              <input
                name="expectedGuests"
                type="number"
                min="1"
                placeholder="Expected Number of Guests *"
                value={form.expectedGuests}
                onChange={handleChange}
                className={`bg-[#FCFAF5] border ${errors.expectedGuests ? 'border-red-500' : 'border-[#D8C28A]'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#C9A84C] transition-all text-[#1A1A1A] outline-none`}
              />
              {errors.expectedGuests && <p className="text-red-400 text-xs mt-1">{errors.expectedGuests}</p>}
            </div>
          </div>

          <textarea
            name="contactDetails"
            placeholder="Contact Details *"
            rows="3"
            value={form.contactDetails}
            onChange={handleChange}
            className={`bg-[#FCFAF5] border ${errors.contactDetails ? 'border-red-500' : 'border-[#D8C28A]'} text-[#1A1A1A] rounded-lg p-3 w-full resize-none outline-none mb-2`}
          />
          {errors.contactDetails && <p className="text-red-400 text-xs mb-4">{errors.contactDetails}</p>}

          <textarea
            name="additionalRequirements"
            placeholder="Additional Requirements"
            rows="3"
            value={form.additionalRequirements}
            onChange={handleChange}
            className="bg-[#FCFAF5] border border-[#D8C28A] text-[#1A1A1A] rounded-lg p-3 w-full resize-none outline-none mb-6"
          />

          <button
            onClick={() => handleSubmit("44770000000")}
            className="w-full bg-gradient-to-r from-[#C8A950] to-[#b89840] text-black font-bold py-3 rounded-lg hover:scale-[1.02] transition-all text-lg shadow-lg"
          >
            Inquire now
          </button>
          <p className="text-[10px] text-gray-400 mt-5 text-center px-4">
            By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
          </p>
        </div>

        {/* Right Info Section */}
        <div className={`flex flex-col gap-6 transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="rounded-2xl border border-[#E6D39C] bg-white p-5 flex gap-4 items-center shadow-lg">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm">Our Location</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E6D39C] bg-white p-5 flex gap-4 items-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a href="tel:077000000" className="text-[#2C2C2C] hover:text-[#A7862C] transition-colors">077000000</a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E6D39C] bg-white p-5 flex gap-4 items-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:tigrisaurum@gmail.com" className="text-[#2C2C2C] hover:text-[#A7862C] transition-colors text-sm">tigrisaurum@gmail.com</a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E6D39C] bg-white p-5 flex gap-4 items-start shadow-lg">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-sm leading-relaxed">
                Monday – Thursday: 9 AM – 5 PM <br />
                Friday: 9 AM – 4:30 PM <br />
                Saturday : 11 AM – 3 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={`max-w-7xl mx-auto mt-12 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <iframe
          className="w-full h-96 border-4 border-[#C9A84C]"
          src="https://www.google.com/maps?q=Stamford,England&output=embed"
          allowFullScreen
          loading="lazy"
          title="Tigris Aurum Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;


