import ProfileService from "./ProfileService";

export default ($axios) => ({
    ProfileService: ProfileService($axios),
});
