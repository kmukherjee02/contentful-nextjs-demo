interface IXDPricingCardProps {
  entry: Record<string, any>;
  pricingPeriod: string;
}

export default function XDPricingCard({
  entry,
  pricingPeriod,
}: IXDPricingCardProps) {
  const pricingCardSDescription = entry.description.content[0].content.map(
    (item: any, index: number) => {
      return (
        <p className="flex items-center text-gray-600 mb-2" key={index}>
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              className="w-3 h-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          {item.content[0].content[0].value}
        </p>
      );
    }
  );
  
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className={entry.popular ?"h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden  hover:border-indigo-500" :"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden  hover:border-indigo-500"} >
        {entry.popular && (
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
        )}
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          {entry.planName}
        </h2>
        <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
          {entry.priceUnit ? entry.priceUnit : ""}
          {pricingPeriod === "annually"
            ? !isNaN(entry.price) ? entry.price * 12 : entry.price
            : entry.price}
          {entry.pricingPeriod && (
            <span className="text-lg ml-1 font-normal text-gray-500">
              {entry.pricingPeriod ? "/" + pricingPeriod : ""}
            </span>
          )}
        </h1>

        {pricingCardSDescription}
        
        <button className= {entry.popular?"flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded" :"flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"}>
          {entry.button.fields.label}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className="text-xs text-gray-500 mt-3">{entry.note}</p>
      </div>
    </div>
  );
}
