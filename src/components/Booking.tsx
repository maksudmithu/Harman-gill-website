export default function Booking() {
  return (
    <section id="booking" className="py-24 relative z-10 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-slate-900 mb-4">
          Ready to Take Control?
        </h2>
        <p className="text-lg text-slate-600 font-light mb-12">
          Schedule your complimentary 45-minute financial discovery session today.
        </p>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden w-full max-w-5xl mx-auto border border-slate-100 min-h-[1050px] sm:min-h-[750px]">
          <iframe
            src="https://calendly.com/harmankaursrealty/45min"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full border-0 min-h-[1050px] sm:min-h-[750px]"
            title="Book a session with Harmann Gill"
          />
        </div>
      </div>
    </section>
  );
}
