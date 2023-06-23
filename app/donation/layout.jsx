/* eslint-disable @next/next/no-img-element */

export default function PageLayout({ children }) {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-darkblue lg:block w-full md:w-1/2 xl:w-2/3 h-[300px] md:h-screen">
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
          <h1 className="text-4xl mb-8 text-dusk">
            Donation in Memory of Cynthia Quarcoo
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
