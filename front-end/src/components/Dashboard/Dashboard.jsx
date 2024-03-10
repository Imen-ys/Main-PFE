import './Dashboard.css'
import {PieChart, Pie,Sector,Cell} from "recharts"
const Dashboard = () => {
    const data = [
            {name : "Nomber de Facture vente", value:13948},
            {name : "Nomber de Facture service", value:47277},
    ]
    return (
        <>
        <div className='card'>
            <p className='container'>Factures</p>
            {/* <button>More Info</button> */}
        </div>
        <div className='statistic'>
        <PieChart width={400} height={400}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
        />
        </PieChart>
        </div>
        </>
    )
}

export default Dashboard