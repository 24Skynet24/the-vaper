import Services from "../services/index";

export default (ctx, inject) => {
    inject('services', Services(ctx.$axios))
}