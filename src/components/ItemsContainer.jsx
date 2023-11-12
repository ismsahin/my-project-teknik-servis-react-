import Item from "./Item";
import { İLETİŞİM, SERVİS, KURUMSAL } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={İLETİŞİM} title="İLETİŞİM" />
      <Item Links={SERVİS} title="SERVİSLERİMİZ" />
      <Item Links={KURUMSAL} title="KURUMSAL" />
    </div>
  );
};

export default ItemsContainer;