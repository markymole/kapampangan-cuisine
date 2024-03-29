import { cva } from "class-variance-authority";

export const headingLayout = cva([], {
  variants: {
    layout: {
      centered: ["flex flex-col items-center text-center lg:w-1/2 gap-4"],
      split: [""],
    },
  },
});
