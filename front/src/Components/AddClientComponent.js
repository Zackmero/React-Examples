import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../Services/ClientService';

const AddClientComponent = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const title = () => {
    if (id) {
      return <h2 className='text-center'>Update Client</h2>;
    } else {
      return <h2 className='text-center'>Sing up new Client</h2>
    }
  }

  const saveOrUpdateClient = (e) => {
    e.preventDefault();
    const client = { name, lastName, phone, email }

    if (id) {
      ClientService.updateClient(id, client).then((response) => {
        console.log(response.data);
        navigate('/client');
      }).catch(error => {
        console.log(error);
      });
    } else {
      ClientService.createClient(client).then((response) => {
        console.log(response.data);
        navigate('/client');
      }).catch(error => {
        console.log(error);
      });
    }
  }

  useEffect(() => {
    ClientService.getClientById(id).then((response) => {
      setName(response.data.name);
      setLastName(response.data.lastName);
      setPhone(response.data.phone);
      setEmail(response.data.email);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3 '>
            {title()}
            <div className='card-body'>
              <form>
                <div className='form-group md-2'>
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    placeholder='Set your name'
                    name='name'
                    className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className='form-label'>Last name</label>
                  <input
                    type='text'
                    placeholder='Set your last name'
                    name='lastName'
                    className='form-control'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label className='form-label'>Phone</label>
                  <input
                    type='text'
                    placeholder='Set your phone number'
                    name='phone'
                    className='form-control'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label className='form-label'>Email</label>
                  <input
                    type='email'
                    placeholder='Set your email'
                    name='email'
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className='btn btn-success mr-3' onClick={(e) => saveOrUpdateClient(e)} >Save</button>

                <Link to='/client' className='btn btn-danger'>Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddClientComponent;
