import { useState } from "react";

export const useOrderForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};

    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.eventType.trim()) errs.eventType = "Event type is required";
    if (!form.eventDate.trim()) errs.eventDate = "Event date is required";
    if (!form.location.trim()) errs.location = "Location is required";

    if (!form.expectedGuests.trim()) {
      errs.expectedGuests = "Expected number of guests is required";
    } else if (!/^\d+$/.test(form.expectedGuests.trim())) {
      errs.expectedGuests = "Enter a valid number of guests";
    }

    if (!form.contactDetails.trim()) errs.contactDetails = "Contact details are required";

    return errs;
  };

  const handleSubmit = (whatsappNumber) => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    const message = `*New Event Enquiry*\n\nName: ${form.name}\nCompany: ${form.company || "N/A"}\nEvent Type: ${form.eventType}\nEvent Date: ${form.eventDate}\nLocation: ${form.location}\nExpected Number of Guests: ${form.expectedGuests}\nContact Details: ${form.contactDetails}\nAdditional Requirements: ${form.additionalRequirements || "None"}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");

    setForm(initialForm);
    setErrors({});
  };

  return { form, setForm, errors, handleSubmit };
};
