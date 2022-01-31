import XDPricingCard from "./xdPricingCard";
import { useState } from "react";

interface IXDSetOfPricingProps {
  entry: {
    cards: Record<string, any>[];
    [key: string]: any;
  };
}

const xdSetOfPricingCard = ({entry}: IXDSetOfPricingProps) => {

  const [pricingPeriod, setPricingPeriod] = useState<string>("mo");


  const setPricePreiod = (val: string) => {   
    setPricingPeriod(val);
  };

  const pricingCards = entry.pricingPlans.map(
    (item: { fields: Record<string, any> }, index: number) => {
      return (
        <XDPricingCard
          entry={item.fields}
          pricingPeriod={pricingPeriod}
          key={index}
        />
      );
    }
  );

  return (
    <>
      <section className="container mx-auto body-font py-24">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">                      
              
                {entry.title && (
                  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                    {entry.title}
                  </h1>
                )}

                {entry.description && (
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                    {entry.description}
                  </p>
                )}

                <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                  <button
                    className={pricingPeriod === "mo"? 'py-1 px-4 bg-indigo-500 text-white focus:outline-none' : 'py-1 px-4 focus:outline-none'}
                    onClick={(e) => setPricePreiod("mo")}
                  >
                    {entry.pricingPeriod[0]}
                  </button>
                  <button
                     className={pricingPeriod === "annually"? 'py-1 px-4 bg-indigo-500 text-white focus:outline-none' : 'py-1 px-4 focus:outline-none'}
                    onClick={(e) => setPricePreiod("annually")}
                  >
                    {entry.pricingPeriod[1]}
                  </button>
                </div>
              
           
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Repeate Card */}
            {pricingCards}
            {/* Repeate Card */}
          </div>
        </div>
      </section>
    </>
  );
}

export default xdSetOfPricingCard;
