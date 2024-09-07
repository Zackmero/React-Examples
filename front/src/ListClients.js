import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ClientService from './Services/ClientService';

function ListClients() {

    const [list, setList] = useState([]);

    useEffect(() => {
        getAllClients();
    }, [])

    const deleteClient = (clientId) => {
        ClientService.deleteClient(clientId).then((response) => {
            getAllClients();
        }).catch(error => {
            console.log(error);
        })
    }

    const getAllClients = () => {
        ClientService.getAllClients().then(response => {
            setList(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>

            <h2 className='text-left mt-4'>Client list</h2>

            <Link to='/add-client' className='btn btn-dark mb-2'>New Client</Link>

            <table className='table table-bordered table-striped'>
                <thead className='thead-dark'>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Options</th>
                </thead>

                <tbody>
                    {list.map(client =>
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.lastName}</td>
                            <td>{client.phone}</td>
                            <td>{client.email}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-client/${client.id}`}>Edit</Link>
                                <button className='btn btn-danger' onClick={() => deleteClient(client.id)} >Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default ListClients;
