import "./Card.css"
import { Statistic } from "../index";
import { MdReadMore } from "react-icons/md";
import { useState } from 'react';
import {PieChart, Pie } from "recharts"
const Card = (props) =>{
    const data = [
        {name : props.name1, value: props.value1, fill: '#d9b277'},
        {name : props.name2, value: props.value2, fill: '#a7cae6'},
        {name : props.name3, value: props.value3, fill: '#c18d91'},
        {name : props.name4, value: props.value4, fill: '#f0593d'},
        {name : props.name5, value: props.value5, fill: '#57cbe0'},
    ]
    const [statistic, setstatistic] = useState(false);
    const click = () =>{
        setstatistic(!statistic)
    }
    return (
        <>
        <div className="inline-block">
            <div className='bg-[--card-color] text-light-color m-6 ml-6 cursor-pointer h-16 w-56 font-Main-font transition duration-700 hover:border-2 border-inset border-royal-blue shadow-md' onClick={click}>
                <p className='container'>{props.title}</p>
                <button className='text-xs w-16 bg-Menu-hover border-b border-solid border-light-color border-r'>
                    <a href="" className="text-light-color">More Info</a>
                    <MdReadMore  className='text-light-color ml-1 transform -rotate-90 hover:More-icon transition duration-700 transform rotate-0'/>
                </button>
            </div>

            {statistic &&(
            <div className="w-230 h-250 ml-0 mr-0 mb-0 mt-30 border border-solid border-light-color bg-dark ">
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

                <div className='m-neg-14 m-3 mb-5 mr-0'>
                    <Statistic color="#d9b277" details={props.name1}/>
                    <Statistic color="#a7cae6" details={props.name2}/>
                    <Statistic color="#c18d91" details={props.name3}/>
                    <Statistic color="#f0593d" details={props.name4}/>
                    <Statistic color="#57cbe0" details={props.name5}/>
                </div>
                </div>
                )}
                </div>
        </>
    )
}
export default Card