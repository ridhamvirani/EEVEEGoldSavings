import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Page = () => {
  return (
    <div className="">
      <Navbar />
      <div className="lg:my-32  lg:mt-40 md:my-28  mt-24 mb-16 w-[90%] mx-auto text-[--policy-text] tracking-wide">
        <h1 className="font-bold text-[30px] text-white ">Refund Policy</h1>
        <div>
          <p className="font-semibold mt-6 mb-4">
            eeveegoldsavings.com is managed by EEVEE LIFESTYLE LLP
          </p>
          {/* <p className="leading-relaxed">
            If you stop this plan, that is totally okay; however, you can discontinue this plan only after 16 months, in which case we will return only the gold equivalent of your deposited money. We cannot offer extra benefits if you discontinue this plan before completing 16 months.
          </p>
          <br />
          <p className="leading-relaxed">
            Whenever you are unable to continue this plan and skip two months, the payment for the third month will be the total cost of three months’ amounts plus a 5% charge, which must be paid by the 1st to the 10th of the month; otherwise, your plan will expire, and you will receive gold equivalent to the total value of your monthly deposits.
          </p>
          <p className="leading-relaxed mt-4">
            This refund and cancellation policy outlines how you can cancel or seek a refund for a product/service that you have purchased through the platform. Under this policy:
          </p>
          <p className="leading-relaxed mt-4">
            Cancellations will only be considered if the request is made within 7 days of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers/merchants listed on the platform and they have initiated the process of shipping them, or if the product is out for delivery. In such an event, you may choose to reject the product at the doorstep
          </p>
          <p className="leading-relaxed mt-4">
            LALIMA JEWELS LLP does not accept cancellation requests for perishable items like flowers, eatables, etc. However, a refund or replacement can be made if the user establishes that the quality of the product delivered is not satisfactory.
          </p>
          <p className="leading-relaxed mt-4">
            In case of receipt of damaged or defective items, please report to our customer service team. The request will be entertained once the seller/merchant listed on the platform has checked and confirmed the issue. This should be reported within 7 days of receipt of the products.
          </p>
          <p className="leading-relaxed mt-4">
            If you feel that the product received is not as shown on the site or does not meet your expectations, you must inform our customer service within 7 days of receiving the product. The customer service team will review your complaint and take appropriate action.
          </p>
          <p className="leading-relaxed mt-4">
            For complaints regarding products that come with a warranty from the manufacturers, please refer the issue directly to them.
          </p>
          <p className="leading-relaxed mt-4">
            In case of any refun
            ds approved by LALIMA JEWELS LLP, it will take 7 days for the refund to be processed.
          </p> */}
           <p className="leading-relaxed">
           You can discontinue your plan at any time; however, if you do so before completing the full duration of your commitment, we will return only the gold equivalent of your deposited money.Extra benefits cannot be offered if you discontinue your plan early.
          </p>
          <br />
          <p className="leading-relaxed">
            Whenever you are unable to continue this plan and skip two months, the payment for the third month will be the total cost of three months’ amounts plus a 5% charge, which must be paid by the 1st to the 10th of the month; otherwise, your plan will expire, and you will receive gold equivalent to the total value of your monthly deposits.
          </p>
          <p className="leading-relaxed mt-4">
          Cancellations will only be considered if the request is made within 7 days of placing the order.
          </p>
          <p className="leading-relaxed mt-4">
            In case of any refunds approved by LALIMA JEWELS LLP, it will take 7 days for the refund to be processed.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
