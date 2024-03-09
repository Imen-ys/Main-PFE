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
            <div className='table'>
                <DataTable
                    columns={columns}
                    data={data}
                >
                </DataTable>
            </div>
        </>
    )
}

export default Client