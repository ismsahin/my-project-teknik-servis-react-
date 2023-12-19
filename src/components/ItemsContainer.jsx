import Item from "./Item";
import { DESTEK, SERVİS, Biz_Kimiz } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:px-8 px-5 py-16 sm:max-w-6xl mx-auto">
      <Item Links={DESTEK} title="DESTEK" />
      <Item Links={SERVİS} title="SERVİSLERİMİZ" />
      <Item Links={Biz_Kimiz} title="BİZ KİMİZ" />
    </div>
  );
};

export default ItemsContainer;