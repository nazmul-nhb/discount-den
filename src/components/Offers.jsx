import { offers } from "../data/offers";
import Offer from "./Offer";

const Offers = () => {

offers
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                offers.map(offer=> <Offer key={offer.id} offer={offer}/>)
            }
        </section>
    );
};

export default Offers;