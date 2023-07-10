/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PrimePricing from "@/app/components/PrimePricing";
import PaperFormModal from "@/app/components/PaperFormModal";
import ToolTipComp from "@/app/components/ToolTipComp";
import _ from "lodash";
import { newoffers } from "@/app/utils/options";

const Page = () => {
  const flatoffers = [];
  Object.keys(newoffers).forEach((key) =>
    flatoffers.push(...newoffers[key].offering)
  );
  const findOffer = (id) => {
    return flatoffers.find((offer) => offer.id === id)?.text;
  };

  const text = {
    title: "<<<adipisicing elit<<<",
    id: "wx8i",
  };
  return (
    <>
      <div className="container relative">
        <div>
          <ToolTipComp tooltip={text.title} message={findOffer(text.id)} />
        </div>
      </div>
    </>
  );
};
export default Page;
