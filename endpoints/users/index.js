// Aqui llega la inyección de axios
const handlers = ({ axios }) => ({
    get: async (req, res) => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.status(200).json(data);
    },
    post: async (req, res) => {
        const { body } = req;
    
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body);
        res.status(201).json(data);
    },
    put: async (req, res) => {
        const { body } = req;
        const { id } = req.params;
    
        const { data } = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
        res.status(204).json(data);
    },
    delete: async (req, res) => {
        const { id } = req.params;
    
        const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        res.status(204).json(data);
    },
});

module.exports = handlers;