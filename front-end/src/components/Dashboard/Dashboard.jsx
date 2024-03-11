import './Dashboard.css'
import { useState } from 'react';
import {PieChart, Pie,Sector,Cell,Bar,BarChart,XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"
const Dashboard = () => {
    const [statistic, setstatistic] = useState(false);
    const data = [
            {name : "Nomber de Facture vente", value:13948, fill: '#d9b277'},
            {name : "Nomber de Facture service", value:47277,fill:'#a7cae6'},
    ]
    const click = () =>{
        setstatistic(!statistic)
    }
    return (
        <>
        <div style={{display:'inline-block'}}>

        <div className='card' onClick={click}>
            <p className='container'>Factures</p>
            {/* <button>More Info</button> */}
        </div>


        <div className='statistic bg-dark' >
            <PieChart width={200} height={140}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="55%"
                    cy="40%"
                    outerRadius={30}
                    label ={{fontSize: 10,}}
                />
            </PieChart>

            <div className='infos'>
                <div style={{display:"flex"}}>
                    <div className='info' style={{background:"#d9b277"}}></div>
                    <p className='details'>Nomber de Facture vente</p>
                </div>
                <div style={{display:"flex"}}>
                    <div className='info' style={{background:"#a7cae6"}}></div>
                    <p className='details'>Nomber de Facture service</p>
                </div>
            </div>
        </div>
     
        </div>
        </>
    )
}

export default Dashboard