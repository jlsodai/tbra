/* eslint-disable @next/next/no-img-element */
import DonationForm from "@/app/components/DonationForm";

const page = async () => {
  return (
    <>
      <p className="block text-gray-700 text-center">
        Enter Amount you would like to donate
      </p>
      <DonationForm />
    </>
  );
};
export default page;
