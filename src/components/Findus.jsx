
export default function FindUs() {

  return (
    <section
      className="py-16 px-4 bg-white  transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-orange-500  font-semibold tracking-widest mb-3 uppercase text-lg"
          data-aos="fade-up"
        >
          Find Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Visit Our Workshop Location
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            title="Google Map - RS Mobile Services"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.5571401962447!2d-1.1203096!3d52.94547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c389c61c13b7%3A0x118f51bd5a4c8278!2sAcg%20Autocentre!5e1!3m2!1sen!2slk!4v1768389728394!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
