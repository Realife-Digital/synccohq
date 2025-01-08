import Link from "next/link";
import React from "react";

const SupportSection = () => {
  return (
    <div className="bg-[#F5F5F5] py-32 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Talk to Us Section */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <span className="text-orange-500 text-2xl">📞</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Talk to us!</h3>
          <p className="text-gray-600 mb-4">
            Get in touch with our support team via email,{" "}
            <a
              href="tel:+2347012824846"
              className="text-primary-dark hover:underline"
            >
              call
            </a>
            , or chat. You can also tweet us @realifedigital
          </p>

          <Link
            href="/contact"
            className="text-primary-dark hover:underline font-medium"
          >
            Contact us
          </Link>
          {/* <a
            href="tel:+2347012824846"
            className="text-primary-dark text-xl  hover:underline font-medium"
          >
            +234 701 282 4846
          </a> */}
        </div>

        {/* Got a Question Section */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <span className="text-orange-500 text-2xl">❓</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Got a Question?</h3>
          <p className="text-gray-600 mb-4">
            Get answers from the experts from the realife Support community.
          </p>
          <a href="#" className="text-primary-dark hover:underline font-medium">
            Visit our forum
          </a>
        </div>

        {/* Submit a Ticket Section */}
        <div>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <span className="text-orange-500 text-2xl">💬</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Can&#39;t find what you&#39;re looking for?
          </h3>
          <p className="text-gray-600 mb-4">
            Submit a request and we&#39;ll get back to you soon!
          </p>
          <Link
            href="/contact"
            className="text-primary-dark hover:underline font-medium"
          >
            Submit a ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
