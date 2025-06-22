import { memo } from "react";
import Category from "../../components/Category/Category";
import Navbar from "../../components/Navbar/Navbar";
import { dataProducts } from "../../components/Products/dataProducts";
import { dataCategory } from "../../components/Category/dataCategory";
import Products from "../../components/Products/Products";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <div className="relative bg-gray-900 text-gray-50">
        <Navbar></Navbar>
        <Support></Support>
        <div className="h-12"></div>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 rounded-2 p-2 py-4">
          {dataCategory.map((oneCategory) => (
            <Category {...oneCategory}></Category>
          ))}
        </div>
        <div className="">
          {dataProducts.map((oneProducts) => (
            <Products {...oneProducts}></Products>
          ))}
        </div>
       <footer>
       <Footer></Footer>
       </footer>
      </div>
    </>
  );
}
export default memo(Home);
