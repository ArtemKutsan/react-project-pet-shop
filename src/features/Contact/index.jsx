// src/features/Contact/index.jsx
import ContactItem from './ContactItem';
import { contactData } from './contactData';

export default function Contact() {
  return (
    <div className="grid gap-8 md:grid-cols-[1.425fr_1fr]">
      {contactData.map((contact) => (
        <ContactItem key={contact.title} contact={contact} />
      ))}
    </div>
  );
}
