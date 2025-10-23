import DownToUpMotion from "../animation/DownToUpMotion";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";

export default function Contact() {
  return (
    <div id="contact" className="my-40 container mx-auto px-4">
      <DownToUpMotion className="bg-white rounded-lg shadow-extra-smooth xl:w-4/5 w-full mx-auto xl:flex ">
          <ContactInfo />
          <ContactForm />
      </DownToUpMotion>
    </div>
  );
}
