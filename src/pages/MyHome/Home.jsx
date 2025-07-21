import { memo, useEffect } from "react";
import Category from "../../components/Category/Category";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Support from "../../components/Support/Support";
import Footer from "../../components/Footer/Footer";
import { useAxios } from "../../context/AxiosContaext";
import Filter from "../../components/Filter/Filter";
import Loading from "../../components/Loading/Loading";
function Home() {
  const { isAxios, funcAxios, loading, filteredProducts } = useAxios();
  //   وقتی وارد صفحه محصول می‌شی، اگر صفحه پایین باشه، اسلایدر دیده نمی‌شه
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    funcAxios(
      "https://686b9bdee559eba90873470f.mockapi.io/ap/bazrafkan-store/products?fav=true"
    );
  }, []);

  return (
    <>
      <Navbar />
      <Support />
      <div className="relative">
        <div className="h-12"></div>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 rounded-2 p-2 py-4">
          <Category></Category>
        </div>
        <div>
          <Filter />
        </div>
        <div className="">
          {loading ? (
            <Loading />
          ) : Array.isArray(isAxios) && isAxios.length > 0 ? (
            filteredProducts.map((oneProduct) => (
              <Products key={oneProduct.id} {...oneProduct} />
            ))
          ) : (
            <p className="text-center py-10">محصولی یافت نشد</p>
          )}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
export default memo(Home);
