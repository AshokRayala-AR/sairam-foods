import ExperienceSairam from "./experience/experience-comp/ExperiencePage";
import GiftBoxPage from "./giftbox/giftbox-comp/GiftBoxPage";
import Header from "./header/Header";
import OrderItems from "./order-items/OrderItems";
import SquareCard from "./square-card/SquareCard";
import Footer from "./footer/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <ExperienceSairam />
      <SquareCard />
      <GiftBoxPage />
      <OrderItems />
      <Footer />
    </>
  );
}
