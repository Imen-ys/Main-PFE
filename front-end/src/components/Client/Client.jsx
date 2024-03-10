import './Client.css'
import DataTable from 'react-data-table-component'
const Client = () => {
    const columns = [
        {
            name : 'Code',
            selector : row => row.code
        },
        {
            name : 'Name',
            selector : row => row.name
        },
        {
            name : 'Email',
            selector : row => row.email
        },
        {
            name : 'Num',
            selector : row => row.num
        }
    ];
    const data = [
        {
            id:1,
            code:111,
            name:'imen',
            email:'imen@gmail.com',
            num:'12334445'
        },
        {
            id:1,
            code:111,
            name:'imen',
            email:"imen@gmail.com",
            num:'12334445'
        },
    ]
    return(
        <>
        <div style={{display:'inline-blok'}}>
            <h1 style={{color:'var(--light-color)'}}>Client</h1>
            <form class="d-flex">
                <input className="input" type="search" placeholder="Search" aria-label="Search"/>
                <button className="Btn bg-dark" type="submit">Search</button>
            </form>

            <button className='ajouter'><a href="/AddClient">Ajouter +</a></button>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" className='item'>id</th>
                        <th scope="col" className='item'>Code</th>
                        <th scope="col" className='item'>Nom</th>
                        <th scope="col" className='item'>Email</th>
                        <th scope="col" className='item'>Address</th>
                        <th scope="col" className='item'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th scope="row">1</th>
                        <td>8888</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            <button className='update'><a href="#">Update</a></button>
                            <button className='paiement'><a href="#">Paiement</a></button>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">2</th>
                        <td>0000</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            <button className='update'><a href="#">Update</a></button>
                            <button className='paiement'><a href="#">Paiement</a></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>



            {/* <div className='table'>
                <DataTable className='main-table'
                    columns={columns}
                    data={data}
                >
                </DataTable>
            </div> */}
        </>
    )
}

export default Client