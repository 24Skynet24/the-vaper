const baseApiUrl = '/api/profile';

export default ($axios) => ({
    async me() {
        return (await $axios.get(baseApiUrl)).data;
    },
    async update({ first_name, last_name, password = null, email, date_of_birth }) {
        const formData = new FormData();

        formData.append('first_name', first_name);

        formData.append('last_name', last_name);

        if (!!password) formData.append('password', password);

        formData.append('email', email);

        formData.append('date_of_birth', date_of_birth);

        try {
            await $axios.post(baseApiUrl, formData);
            return true;
        } catch (error) {
            return false;
        }
    }
});