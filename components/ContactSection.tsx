// import { ContactForm } from "./ContactForm";
// import content from "@/content.json";

// const getContent = () => content;

// export const ContactSection = () => {
//   const contactContent = getContent().contact;

//   return (
//     <section
//       id="contact"
//       className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900"
//     >
//       <div className="container mx-auto max-w-4xl relative z-10">
//         <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
//           {contactContent.title}
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Information (Dynamic Content) */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold text-purple-400">
//               {contactContent.contactInfoTitle}
//             </h3>
//             <p className="text-gray-300">{contactContent.formTitle}</p>
//             <div className="flex flex-col space-y-4">
//               {contactContent.contactPlatforms.map((platform, index) => (
//                 <a
//                   key={index}
//                   href={platform.url}
//                   className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
//                 >
//                   <span>{platform.display}</span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Client-Side Contact Form */}
//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   );
// };

export const ContactSection = () => {
  return (
    <footer
      id="contact"
      className="relative py-10 px-6 bg-gradient-to-b from-black to-gray-900 text-gray-300"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
        {/* Footer Title */}
        <h2 className="text-2xl font-bold text-purple-400 text-center md:text-left mb-6 md:mb-0">
          Get in Touch
        </h2>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-10">
          <div className="text-center md:text-left">
            <a
              href="mailto:jonipharju@gmail.com"
              className="text-lg hover:text-purple-400 transition-colors"
            >
              Email: jonipharju@gmail.com
            </a>
          </div>
          <div className="text-center md:text-left">
            <a
              href="https://www.linkedin.com/in/joni-h-89172a134/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 Joni Harju
      </div>
    </footer>
  );
};
