'use client';

import { useState } from "react";
import Image from "next/image";

export default function Nata() {
  //this is getting flagged for multiple useState calls but I don't think that holds much water, the callback is in an onClick and doesn't actually get executed in the loop, just the images themselves get created in it...

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nataImage, setNataImage] = useState(14);

  const images = [];
  for (let i = 1; i <= 15; i++) {
    images.push(<Image
      className="rounded-3xl max-md:max-w-50 max-md:max-h-50 w-150 h-150 hover:cursor-pointer"
      src={`/cat/${i}.jpg`}
      alt="Photo of Justin (that's me, the narrator), looking fantastic"
      width="250"
      height="250"
      onClick={() => {
        let random = 1 + Math.floor(Math.random() * 13);
        //basic prevention of repetition
        if (nataImage == random)
          random++;
        setNataImage(random);
      }}
    />);
  }

  return (
    <div className="order-2 z-10 flex peer justify-center pt-2 pb-5 ">
      {images[nataImage]}
    </div>
  );
}