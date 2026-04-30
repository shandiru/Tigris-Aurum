import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Plus, Trash2, Utensils } from 'lucide-react';
import { categories, allItems } from "../components/MenuData";
import { useOrderForm } from "./useOrderForm";

const Contact = () => {
  const { form, setForm, menuItems, setMenuItems, errors, handleSubmit } = useOrderForm(
    { name: "", email: "", phone: "", message: "" },
    [{ id: 1, category: "", item: "", quantity: 1 }],
    categories,
    allItems
  );

  const [animate, setAnimate] = useState(false);
  useEffect(() => { setAnimate(true); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleMenuChange = (id, field, value) => {
    setMenuItems(menuItems.map((item) =>
      item.id === id ? { ...item, [field]: value, ...(field === "category" && { item: "" }) } : item
    ));
  };

  const addMenuItem = () => {
    const newId = menuItems.length > 0 ? Math.max(...menuItems.map((i) => i.id)) + 1 : 1;
    setMenuItems([...menuItems, { id: newId, category: "", item: "", quantity: 1 }]);
  };

  const removeMenuItem = (id) => {
    if (menuItems.length > 1) setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div id='contact' className="scroll-m-10 min-h-screen w-full bg-white text-white p-4 md:p-12 relative overflow-hidden">
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
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">Order & Get In Touch</h2>
        <p className="text-sm md:text-lg text-gray-700 font-semibold max-w-xl mx-auto">
          Place your order or send us a message via WhatsApp!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 relative z-10">
        <div className={`bg-gradient-to-br from-[#C9A84C] to-[#A7862C] rounded-xl p-6 md:p-8 shadow-2xl transition-all duration-1000 hover:shadow-[#C9A84C]/50 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#C8A950]">Place Your Order</h2>

          {/* Customer Info */}
          <div className="space-y-4 mb-6">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <input
                  name={field}
                  type={field === "email" ? "email" : "tel"}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                  value={form[field]}
                  onChange={handleChange}
                  className={`bg-[#1A1A1A] border ${errors[field] ? 'border-red-500' : 'border-[#C9A84C]/50'} placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#C9A84C] transition-all text-white outline-none`}
                />
                {errors[field] && <p className="text-red-400 text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}
          </div>

          {/* Menu Items */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-[#C8A950] flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[#C8A950]" />
              Select Menu Items
            </h3>

            {/* Custom Scrollbar using inline Tailwind Utilities */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 
              [&::-webkit-scrollbar]:w-[6px] 
              [&::-webkit-scrollbar-track]:bg-[#1A1A1A] 
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#C9A84C] 
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-[#B8953F]">
              
              {menuItems.map((m, index) => (
                <div key={m.id} className="bg-[#1A1A1A] rounded-lg p-4 border border-[#C9A84C]/30 hover:border-[#C9A84C]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#C9A84C] font-semibold text-sm bg-[#C9A84C]/20 px-3 py-1 rounded-full">
                      Item #{index + 1}
                    </span>
                    {menuItems.length > 1 && (
                      <button onClick={() => removeMenuItem(m.id)} className="text-red-400 hover:bg-red-900/30 p-2 rounded-full transition-all">
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <select
                      value={m.category}
                      onChange={(e) => handleMenuChange(m.id, "category", e.target.value)}
                      className="bg-[#C9A84C] border border-[#C9A84C]/50 text-white rounded-lg p-2.5 w-full outline-none"
                    >
                      <option value="">Select Category</option>
                      {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>

                    <select
                      value={m.item}
                      disabled={!m.category}
                      onChange={(e) => handleMenuChange(m.id, "item", e.target.value)}
                      className="bg-[#C9A84C] border border-[#C9A84C]/50 text-white rounded-lg p-2.5 w-full disabled:opacity-50 outline-none"
                    >
                      <option value="">Select Item</option>
                      {allItems.filter((it) => it.category === m.category).map((it) => (
                        <option key={it.title} value={it.title}>{it.title} – {it.price}</option>
                      ))}
                    </select>

                    <div className="flex items-center gap-3">
                      <label className="text-sm text-gray-300">Quantity:</label>
                      <input
                        type="number"
                        min="1"
                        value={m.quantity}
                        onChange={(e) => handleMenuChange(m.id, "quantity", +e.target.value || 1)}
                        className="bg-[#C9A84C] border border-[#C9A84C]/50 text-white rounded-lg p-2 w-20 text-center outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {errors.menuItems && <p className="text-red-400 text-sm mt-2">{errors.menuItems}</p>}

            <button onClick={addMenuItem} className="w-full mt-4 bg-gradient-to-r from-[#C9A84C] to-[#B8953F] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
              <Plus size={20} /> Add More Items
            </button>
          </div>

          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            rows="3"
            value={form.message}
            onChange={handleChange}
            className="bg-[#1A1A1A] border border-[#C9A84C]/50 text-white rounded-lg p-3 w-full resize-none outline-none mb-6"
          />

          <button
            onClick={() => handleSubmit("+447955363123")}
            className="w-full bg-gradient-to-r from-[#C8A950] to-[#b89840] text-black font-bold py-3 rounded-lg hover:scale-[1.02] transition-all text-lg shadow-lg"
          >
            Send Order via WhatsApp
          </button>
          <p className="text-[10px] text-gray-400 mt-5 text-center px-4">
            By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
          </p>
        </div>

        {/* Right Info Section */}
        <div className={`flex flex-col gap-6 transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="bg-gradient-to-br from-[#C9A84C] to-[#A7862C] rounded-xl p-5 flex gap-4 items-center shadow-xl">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-1">Location</h3>
              <p className="text-gray-300 text-sm">9a Great Central Road, Loughborough, England, LE11 1RW</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#C9A84C] to-[#A7862C] rounded-xl p-5 flex gap-4 items-center shadow-xl">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-1">Phone</h3>
              <a href="tel:+447850053653" className="text-gray-300 hover:text-white transition-colors">07850 053653</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#C9A84C] to-[#A7862C] rounded-xl p-5 flex gap-4 items-center shadow-xl">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-1">Email</h3>
              <a href="mailto:samochaihouse@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">samochaihouse@gmail.com</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#C9A84C] to-[#A7862C] rounded-xl p-5 flex gap-4 items-start shadow-xl">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A950] to-[#b89840] flex items-center justify-center text-black flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[#C8A950] mb-2">Hours</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.773641243165!2d-1.2062534!3d52.7547703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e606a2000001%3A0x6d90000000000000!2s9a%20Great%20Central%20Rd%2C%20Loughborough%20LE11%201RW!5e0!3m2!1sen!2suk!4v1700000000000"
          allowFullScreen
          loading="lazy"
          title="Samochai Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;