import React from "react";
import SlotCounter from "react-slot-counter";



function Counter() {
  return (
    <div className="bg-cover bg-center bg-[url('/fun-fact-bg.png')] min-h-fit py-16 ">
      <div className="max-w-screen-xl mx-auto py-3 px-5 xl:px-5 lg:py-3">
        <div className="grid grid-cols-3 ">
          <SlotCounter value={123456} />
          <SlotCounter value={36.5} />
          <SlotCounter value="1,234,567" />
        </div>
      </div>
    </div>
  );
}

export default Counter;
