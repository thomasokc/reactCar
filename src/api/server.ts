let token = '381c82f2f449b4262f060b618afbd6c31ebe13837120c69c'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-81.herokuapp.com`,{
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
        const response = await fetch(`https://car-inventory-81.herokuapp.com`,{
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
        const response = await fetch(`https://car-inventory-81.herokuapp.com/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async ( id:string ) => {
        const response = await fetch(`https://car-inventory-81.herokuapp.com/cars${id}`,{
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