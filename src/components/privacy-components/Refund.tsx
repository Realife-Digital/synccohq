import React from 'react';

export default function RefundContent() {
    return (
      <>
        <div className="space-y-4 text-justify">
          <h1 className="text-5xl font-bold mb-4">Refund policy</h1>
          <p>Efffective Date: January 4th, 2025</p>
          <p className='text-justify'>
            At Realife Digital Concept, we strive to deliver high-quality
            solutions. However, due to the nature of software development, we
            have the following refund policy:
          </p>
          <ol className='list-decimal list-inside space-y-4 text-justify'>
            <li>Initial Deposit
              <p>
                {" "}
                Deposits made to commence a project are non-refundable once work
                has started.
              </p>
            </li>
            <li>Project Cancellation
              <p>
                {" "}
                If you cancel the project after it has started, you will be
                charged for the work completed up to the cancellation date.
              </p>
              <p>
                {" "}
                Refunds (if applicable) will be calculated based on the
                proportion of work not delivered.
              </p>
            </li>
            <li>
              Dissatisfaction with Deliverables
              <p>
                {" "}
                If you are dissatisfied with the deliverables, we will work with
                you to make adjustments as per the agreed project scope.
              </p>
              <p>
                {" "}
                Refunds are not applicable once the final deliverables have been
                approved and delivered.
              </p>
            </li>
            <li>Subscription Services
              <p>
                {" "}
                For recurring services (e.g., maintenance), refunds will only
                apply to unused portions of the service if cancelled before the
                next billing cycle.
              </p>
            </li>
            <li>
              Chargebacks
              <p>
                {" "}
                All chargebacks will be contested if the services have been
                delivered as agreed.
              </p>
            </li>
          </ol>
        </div>
      </>
    );
};