export const api = {
    getData: async function (client, path, payload) {
        try {
            const response = await client.post(path, payload);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
};
