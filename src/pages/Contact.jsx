import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20  ">
      <div className="m-auto sm:w-[90%] md:w-[60%]">
        <h1 className="text-blue-400 font-bold uppercase">Contact </h1>
        <p className="text-slate-900 text-2xl font-bold tracking-widest">
          Hit me up !👇
        </p>

        <div className="mt-5">
          <div className="flex items-center gap-5">
            {/* Location */}
            <div className="p-5 rounded-full shadow-mmd flex items-center justify-center gap-5 ">
              <div className="w-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/location.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p>Rodriguez Rizal, Philippines</p>
              </div>
            </div>
            {/* Email */}
            <div className="p-5 rounded-full shadow-mmd flex items-center justify-center gap-5 ">
              <div className="w-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/email.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="underline text-blue-600">riejanevangelista1620@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
