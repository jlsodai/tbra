import Link from "next/link";
const page = () => {
  return (
    <>
      <p className="text-3xl font-thin">Donation Unsuccessful.</p>
      <Link
        href="/donation"
        className="bg-tender hover:bg-tender-400 focus:bg-tender-400 text-white px-4 py-3 mt-6"
      >
        TRY AGAIN
      </Link>
    </>
  );
};
export default page;
