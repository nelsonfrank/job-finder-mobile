import React from "react";

const Banner = () => {
  return (
    <div className="rounded-xl bg-banner py-4 px-6">
      <div className="mb-3 flex justify-between text-zinc-800">
        <h2 className="text-lg font-medium">Reminder</h2>
        <h2 className="text-lg font-medium">19:20 AM</h2>
      </div>
      <div>
        <p className="text-sm text-zinc-700">Interview at zoom in 2 hour.</p>
      </div>
    </div>
  );
};

export default Banner;
