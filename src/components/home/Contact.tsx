import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";

export default function Contact() {
  return (
    <div id="contact" className="my-40 container mx-auto px-4">
      <div className="bg-white rounded-lg shadow-extra-smooth w-4/5 mx-auto flex">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
