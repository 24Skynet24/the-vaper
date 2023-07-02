import ProfileService from "./ProfileService";
import CategoriesServices from "./CategoriesServices";

export default ($axios) => ({
  ProfileService: ProfileService($axios),
  CategoriesServices: CategoriesServices($axios)
})
