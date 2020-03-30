import React from 'react'
import {Chart} from 'primereact/chart'; 
import SymbolTable from "../SymbolTable";

export default function SymbolChart(props) {

    const multiAxisData = {
        labels: props.labels || [],
        datasets: (props.data || []).map( (item, index) => ({
            label: props.captions[index],
            fill: false,
            backgroundColor: `#${255 << index}`,
            borderColor: `#${255 << index}`,
            yAxisID: `y-axis-${index + 1}`,
            data: [...props.data[index]]
        }))
    };

    const multiAxisOptions = {
        responsive: true,
        hoverMode: 'index',
        stacked: false,
        scales: {
            yAxes: (props.data || []).map( (item, index) => ({
                type: 'linear',
                display: true,
                position: index % 2 ? "right" : "left",
                id: `y-axis-${index+1}`   
                })
            )            
        }
    }

    return (
        <div> {
            
            props.labels.length > 0 
                ? <Chart type="line" data={multiAxisData} options={multiAxisOptions} />
                : "No data to display"
        }
        {
            
            (props.captions || []).map(item => <SymbolTable key={item} symbol={item}/> )
        }
        </div>
    )
}
