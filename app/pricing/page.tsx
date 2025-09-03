import React from 'react'
import { PricingTable } from "@clerk/nextjs";

function page() {
    return (
      <div className="">
        <h2 className="font-bold text-3xl my-5 text-white/90 text-center">
          💳 Hassle-Free Billing for Peace of Mind
        </h2>
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "0 1rem" }}>
          <PricingTable />
        </div>
      </div>
    );
}

export default page
