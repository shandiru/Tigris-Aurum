import { useEffect, useState } from "react";
import { Plus, Trash2, Utensils } from "lucide-react";
import { categories, allItems } from "./MenuData";
import { useOrderForm } from "./useOrderForm";

const ContactForm = () => {
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
    <section className="relative overflow-hidden px-4 py-5">
      <div className="relative z-10 max-w-3xl mx-auto pt-10">
        <div className="bg-gradient-to-br from-[#C9A84C] to-[#A7862C] rounded-xl p-6 md:p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#C8A950] mb-6">Place Your Order</h3>

          {/* Inputs */}
          <div className="space-y-4 mb-6">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                  value={form[field]}
                  onChange={handleChange}
                  className={`w-full bg-[#1A1A1A] border ${errors[field] ? 'border-red-500' : 'border-[#C9A84C]/50'} text-white rounded-lg p-3 outline-none`}
                />
              </div>
            ))}
          </div>

          {/* MENU ITEMS */}
          <h4 className="text-[#C8A950] font-semibold flex items-center gap-2 mb-4">
            <Utensils size={18} /> Select Menu Items
          </h4>

          <div className="space-y-4">
            {menuItems.map((m, i) => (
              <div key={m.id} className="bg-[#1A1A1A] p-4 rounded-lg">
                <div className="flex justify-between mb-3">
                  <span className="text-[#C9A84C]">Item #{i + 1}</span>
                  {menuItems.length > 1 && (
                    <button onClick={() => removeMenuItem(m.id)}>
                      <Trash2 className="text-red-400" size={18} />
                    </button>
                  )}
                </div>

                <select
                  value={m.category}
                  onChange={(e) => handleMenuChange(m.id, "category", e.target.value)}
                  className="w-full mb-2 bg-[#C9A84C] text-white rounded-lg p-2"
                >
                  <option value="">Select Category</option>
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>

                <select
                  value={m.item}
                  disabled={!m.category}
                  onChange={(e) => handleMenuChange(m.id, "item", e.target.value)}
                  className="w-full mb-2 bg-[#C9A84C] text-white rounded-lg p-2 disabled:opacity-50"
                >
                  <option value="">Select Item</option>
                  {allItems.filter((item) => item.category === m.category).map((it) => (
                    <option key={it.title}>{it.title} – {it.price}</option>
                  ))}
                </select>

                <input
                  type="number"
                  min="1"
                  value={m.quantity}
                  onChange={(e) => handleMenuChange(m.id, "quantity", +e.target.value)}
                  className="w-24 bg-[#C9A84C] text-white rounded-lg p-2"
                />
              </div>
            ))}
          </div>

          <button onClick={addMenuItem} className="w-full mt-4 bg-[#C9A84C] text-white py-3 rounded-lg">
            <Plus className="inline mr-2" /> Add More Items
          </button>

          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            rows="3"
            value={form.message}
            onChange={handleChange}
            className="w-full mt-4 bg-[#1A1A1A] text-white rounded-lg p-3 outline-none"
          />


          <button
            onClick={() => handleSubmit("+447955363123")}
            className="w-full mt-6 bg-gradient-to-r from-[#C8A950] to-[#b89840] text-black font-bold py-3 rounded-lg"
          >
            Send Order via WhatsApp
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