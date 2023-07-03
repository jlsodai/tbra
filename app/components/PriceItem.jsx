import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
const PriceItem = ({
  priceSwitch,
  title,
  pricing,
  amount,
  gold,
  priceValue,
  qry,
}) => {
  return (
    <div
      className={`${priceSwitch && "-lg:hidden"} ${
        gold && "border-mustard"
      } w-full lg:w-1/3 lg:-mt-px lg:mb-0 border-2 relative`}
    >
      <div
        className={`px-2 text-center ${
          qry === "prime" ? "h-36" : "h-16"
        } lg:h-36 flex flex-col items-center justify-center`}
      >
        <h2
          className={`${
            !gold && "text-dusk"
          } text-base lg:text-2xl font-medium flex items-center justify-center leading-none`}
        >
          {title}
        </h2>
        {amount && (
          <h2 className="text-4xl -sm:text-base text-gray-900 font-medium flex -sm:flex-col items-center justify-center leading-none mb-2 mt-2">
            {amount}
            <span className="text-gray-600 text-base ml-1">/year</span>
          </h2>
        )}
        {priceValue && (
          <span className="text-sm -sm:text-[10px] leading-none text-gray-600">
            For a $3,000 value
          </span>
        )}
      </div>
      {pricing.access.map((price, i) => (
        <p
          key={i}
          className={`${
            i % 2 || "bg-gray-100"
          } text-gray-600 text-center h-12 flex items-center justify-center ${
            i === 0 && "-mt-px"
          }`}
        >
          {price[qry] === "yes" ? (
            <FaCheckCircle />
          ) : price[qry] === "no" ? (
            <FaTimesCircle />
          ) : (
            price[qry]
          )}
        </p>
      ))}
      <div className="h-16"></div>
      {pricing.ondemand.map((price, i) => (
        <p
          key={i}
          className={`${
            i % 2 || "bg-gray-100"
          } text-gray-600 text-center h-12 flex items-center justify-center ${
            i === 0 && "-mt-px"
          }`}
        >
          {price[qry] === "yes" ? (
            <FaCheckCircle />
          ) : price[qry] === "no" ? (
            <FaTimesCircle />
          ) : (
            price[qry]
          )}
        </p>
      ))}
      <div className="h-16"></div>
      {pricing.exec.map((price, i) => (
        <p
          key={i}
          className={`${
            i % 2 || "bg-gray-100"
          } text-gray-600 text-center h-12 flex items-center justify-center ${
            i === 0 && "-mt-px"
          }`}
        >
          {price[qry] === "yes" ? (
            <FaCheckCircle />
          ) : price[qry] === "no" ? (
            <FaTimesCircle />
          ) : (
            price[qry]
          )}
        </p>
      ))}
    </div>
  );
};
export default PriceItem;
