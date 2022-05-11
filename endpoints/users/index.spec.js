    const handlers = require('./index');

    describe('Endpoints', () => {
        describe('users', () => {
            describe('get', () => {
                it('return to user json', async () => {
                    const axios = {
                        get: jest.fn().mockResolvedValue({ data: 1 }),
                    };

                    const res = {
                        status: jest.fn().mockReturnThis(),
                        json: jest.fn()
                    };

                    await handlers({ axios }).get({}, res);
                    expect(res.status.mock.calls).toEqual([[200]]);
                    expect(res.json.mock.calls).toEqual([[1]]);
                });
            });

            describe('post', () => {
                it('create user', async () => {
                    const axios = {
                        post: jest.fn().mockResolvedValue({ data: 1 }),
                    };

                    const res = {
                        status: jest.fn().mockReturnThis(),
                        json: jest.fn()
                    };

                    const req = {
                        body: 'request body',
                    };

                    await handlers({ axios }).post(req, res);
                    expect(res.status.mock.calls).toEqual([[201]]);
                    expect(res.json.mock.calls).toEqual([[1]]);
                    expect(axios.post.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users', 'request body']]);
                });
            });

            describe('put', () => {
                it('update user', async () => {
                    const axios = {
                        put: jest.fn().mockResolvedValue({ data: 1 }),
                    };

                    const res = {
                        status: jest.fn().mockReturnThis(),
                        json: jest.fn()
                    };

                    const req = {
                        body: 'request body',
                        params: {
                            id: 12
                        }
                    };

                    await handlers({ axios }).put(req, res);
                    expect(res.status.mock.calls).toEqual([[204]]);
                    expect(res.json.mock.calls).toEqual([[1]]);
                    expect(axios.put.mock.calls).toEqual([[`https://jsonplaceholder.typicode.com/users/12`, 'request body']]);
                });
            });

            describe('delete', () => {
                it('delete user', async () => {
                    const axios = {
                        delete: jest.fn().mockResolvedValue({ data: 1 }),
                    };

                    const res = {
                        status: jest.fn().mockReturnThis(),
                        json: jest.fn()
                    };

                    const req = {
                        params: {
                            id: 54
                        }
                    };

                    await handlers({ axios }).delete(req, res);
                    expect(res.status.mock.calls).toEqual([[204]]);
                    expect(res.json.mock.calls).toEqual([[1]]);
                    expect(axios.delete.mock.calls).toEqual([[`https://jsonplaceholder.typicode.com/users/54`]]);
                });
            });
        });
    });