import { useState } from "react";

export const useOrderForm = (initialForm, initialMenu, categories, allItems) => {
  const [form, setForm] = useState(initialForm);
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    
    if (!form.phone.trim()) errs.phone = "Phone is required";

    const hasValidItem = menuItems.some((item) => item.category && item.item);
    if (!hasValidItem) errs.menuItems = "Please select at least one menu item";

    return errs;
  };

  const handleSubmit = (whatsappNumber) => {
    const validationErrors = validate();
    setErrors(validationErrors);

    // If there are errors, stop execution
    if (Object.keys(validationErrors).length !== 0) return;

    const orderDetails = menuItems
      .filter((i) => i.category && i.item)
      .map((i) => `${i.quantity}x ${i.item}`)
      .join("\n");

    const message = `*New Order Request*\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n*Order Details*\n${orderDetails}\n\n*Message*\n${form.message || "None"}`;

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");

    setForm(initialForm);
    setMenuItems(initialMenu);
    setErrors({});
  };

  return { form, setForm, menuItems, setMenuItems, errors, setErrors, handleSubmit };
};