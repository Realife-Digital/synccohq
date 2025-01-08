import React from "react";

export default function TermsContent() {
  return (
    <>
      <div className="text-justify space-y-4">
        <h1 className="lg:text-5xl text-2xlfont-bold mb-4">Terms and Conditions</h1>
        <p>Efffective Date: January 4th, 2025</p>
        <p>
          Welcome to Realife Digital Concept. By accessing or using our
          services, you agree to be bound by the following terms and conditions.
          If you do not agree to these terms, you may not use our services.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-justify">
          <li>Services Provided
            <p>
              Realife Digital Concept provides software solutions, including web
              and mobile application development, website design, and other
              related services. Specific deliverables will be outlined in the
              agreement for each project.
            </p>
          </li>
          <li>User Obligations
            <p>
              You must provide accurate and complete information during project
              onboarding.
            </p>
            <p>
              {" "}
              You agree not to misuse or reverse-engineer any software or
              solutions delivered by Realife Digital Concept.
            </p>
          </li>
          <li>Intellectual Property
            <p>
              All intellectual property, including but not limited to software,
              designs, and documentation, remains the property of Realife
              Digital Concept unless otherwise agreed.
            </p>
          </li>
          <li>Payment
            <p>
              Payments must be made as per the agreed terms. Failure to pay on
              time may result in project delays or termination.
            </p>
          </li>
          <li>Limitation of Liability
            <p>
              {" "}
              Realife Digital Concept is not liable for indirect, incidental, or
              consequential damages arising from the use or inability to use
              delivered products.
            </p>
          </li>
          <li>Termination
            <p>
              Either party may terminate the agreement with written notice. In
              the event of termination, all outstanding fees for completed work
              must be settled.
            </p>
          </li>
          <li>Governing Law
            <p>
              These terms are governed by the laws of [Insert Jurisdiction].
              Disputes will be resolved through mediation or arbitration in
              [Insert Location].
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}
