let token = '12eae16a970af0ef5323ea9add761d7d0d9c4f67bd5fe3d8'

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async (data: any={}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    update: async ( id:string, data:any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async ( id:string ) => {
        const response = await fetch(`http://127.0.0.1:5000/api/cars${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
}