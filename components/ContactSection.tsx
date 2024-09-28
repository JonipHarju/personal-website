import { ContactForm } from "./ContactForm";
import content from "@/content.json";

// Helper function to fetch content
const getContent = () => content;

export const ContactSection = () => {
  // Fetch the contact content from content.json
  const contactContent = getContent().contact;

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          {contactContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information (Dynamic Content) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              {contactContent.contactInfoTitle}
            </h3>
            <p className="text-gray-300">{contactContent.formTitle}</p>
            <div className="flex flex-col space-y-4">
              {contactContent.contactPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <span>{platform.display}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Client-Side Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
