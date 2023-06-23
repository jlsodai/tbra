import { dpoRequest } from "@/app/lib/dpoRequest";
import { redirect } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
const DonationForm = () => {
  async function makeDonation(formData) {
    "use server";
    const url = await dpoRequest(formData.get("amount"), "Funeral Donation");
    redirect(`https://secure.3gdirectpay.com/pay.asp?ID=${url}`);
  }

  return (
    <form className="max-w-[200px] mx-auto mt-6" action={makeDonation}>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Enter Amount"
        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        required={true}
      />

      <button
        type="submit"
        className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
      >
        Donate
      </button>
    </form>
  );
};
export default DonationForm;
