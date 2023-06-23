import { dpoRequest } from "../lib/dpoRequest";
import { redirect } from "next/navigation";
const XMLParse = () => {
  async function addItem(formData) {
    "use server";
    const url = await dpoRequest(formData.get("amount"), "Funeral Donation");
    redirect(`https://secure.3gdirectpay.com/pay.asp?ID=${url}`);
  }

  return (
    <section className="my-16">
      <form action={addItem}>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            name="amount"
            type="number"
            step={2}
            placeholder="Amount"
            required={true}
          />
          {/* <input type="number" name="amount" step="2" required={true} /> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default XMLParse;
