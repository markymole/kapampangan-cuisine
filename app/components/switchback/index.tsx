import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import { SwitchbackLayout } from "./switchback.styles";
import Button from "@/app/molecules/button";
import Link from "next/link";

interface SwitchbackProps {
  layout: "default" | "switch";
  heading: string;
  image: string;
  description: string;
  button: buttonsProps;
}

interface buttonsProps {
  text: string;
  link?: string;
}

const Switchback = ({
  layout,
  image,
  heading,
  description,
  button,
}: SwitchbackProps) => {
  return (
    <div>
      <div
        className={twMerge(
          "max-width padding",
          SwitchbackLayout({ layout: layout }),
        )}
      >
        <div
          className={twMerge(
            "flex flex-col gap-4",
            layout === "switch" && "order-2",
          )}
        >
          {heading && (
            <h2 className="font-poppins text-2xl font-semibold lg:text-5xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="font-inter text-gray-800 lg:text-lg">{description}</p>
          )}
          {button && (
            <Button variant="primary">
              <Link href={button.link ? button.link : ""}>{button.text}</Link>
            </Button>
          )}
        </div>
        <div>
          <Image
            src={image}
            height={1000}
            width={1000}
            alt={image}
            className="h-full w-full rounded-md shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Switchback;
