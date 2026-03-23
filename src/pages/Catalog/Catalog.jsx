import ProductGrid from "../../components/product/ProductGrid";
import ProductFilters from "../../components/product/ProductFilters";

function Catalog(){

  return(

    <div className="catalog">

      <h1>Product Catalog</h1>

      {/* Filters Component */}
      <ProductFilters />

      {/* Products Grid */}
      <ProductGrid />

    </div>

  );

}

export default Catalog;
