import ProfileService from "./ProfileService";
import CategoriesServices from "./CategoriesServices";
import ProductServices from "./ProductServices";

export default ($axios) => ({
  ProfileService: ProfileService($axios),
  CategoriesServices: CategoriesServices($axios),
  ProductServices: ProductServices($axios),
})
