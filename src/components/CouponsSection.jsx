import React from "react";

const coupons = [
  {
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: (
      <span>
        <span className="font-bold text-lg text-[#222]">30% Off Weekday Fees</span>
        <br />
      </span>
    ),
    description:
      "Valid Monday-Thursday at Sunset Hills Golf Club. Present your membership card at check-in.",
    expires: "5 days",
    expiresSoon: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    bg: "bg-[#f6fbde]",
    title: (
      <span>
        <span className="font-bold text-lg text-[#222]">20% Off Pro Shop Apparel</span>
      </span>
    ),
    description:
      "Valid at all participating locations. Discount applies to regular-priced items only.",
    expires: "3 days",
    expiresSoon: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1699135343707-7f1c6dcc49d2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: (
      <span>
        <span className="font-bold text-lg text-[#222]">Free Cart Rental</span>
      </span>
    ),
    description:
      "Complimentary cart rental with paid green fee at Eagle Ridge Golf Club. Weekend restrictions may apply.",
    expires: "54 days",
    expiresSoon: true,
  },
];

export default function CouponsDeals() {
  return (
    <div className="px-4 py-10 w-full bg-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-10 mt-2">
          Exclusive Coupons &amp; Deals
        </h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
          {coupons.map((coupon, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md flex-1 min-w-[270px] max-w-[350px] flex flex-col items-stretch transition hover:shadow-lg relative"
            >
              <div className="rounded-t-2xl overflow-hidden">
                <div
                  className={`${coupon.bg ? coupon.bg : "bg-[#fafafa]"} flex items-center justify-center`}
                  style={{ height: "160px" }}
                >
                  <img
                    src={coupon.image}
                    alt="Coupon Visual"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 px-6 py-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="text-[#222] leading-tight">{coupon.title}</div>
                  <span className="bg-[#ffeaea] text-red-500 text-xs px-3 py-1.5 font-medium rounded-full">
                    Expires in {coupon.expires}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-4 min-h-[48px]">
                  {coupon.description}
                </p>
                <div className="flex-grow" />
                <button className="mt-6 bg-[#ead66a] hover:bg-[#d7c559] shadow rounded-full text-[#3f3f1b] font-semibold text-lg py-2 w-full transition">
                  Redeem Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
