import { memo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Support from "../../components/Support/Support";
function OneProduct() {
  return (
    <>
      <Navbar></Navbar>
      <Support></Support>
      <div className="h-12"></div>
      <h3>یک محصول</h3>
    </>
  );
}
export default memo(OneProduct);
