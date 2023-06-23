/* eslint-disable @next/next/no-img-element */
import DonationForm from "@/app/components/DonationForm";
import XMLParse from "@/app/components/XMLParse";

const page = async () => {
  //   return <XMLParse />;
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-darkblue hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images.unsplash.com/photo-1595062584313-47018e0ee5cb"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100 text-center">
          <h1 className="text-4xl mb-8 text-dusk">Funeral Donation</h1>
          <p className="block text-gray-700 text-center">
            Enter Amount you would like to donate
          </p>
          <DonationForm />
        </div>
      </div>
    </section>
  );
};
export default page;
