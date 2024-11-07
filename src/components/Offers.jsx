import { offers } from "../data/offers";
import Offer from "./Offer";

const Offers = () => {

offers
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mx-auto">
            {
                offers.map(offer=> <Offer key={offer.id} offer={offer}/>)
            }
        </section>
    );
};

export default Offers;