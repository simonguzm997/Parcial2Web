import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Graphic (pokemons){
   // console.log("test1" + datos)

    //console.log("test2"+ this.props.pokemons)

    console.log("test3" + pokemons)

    console.log("Test 4 "+ pokemons.datos)

    //console.log("test 5 "+ pokemons.data)

    useEffect(() => {
        
        createGraphic(pokemons.datos);
    }, []);

    function createGraphic(pokemons){

        const canvas = d3.select("#canvas");

        let maxVal = 0;

        pokemons.forEach(pokemons => {
            if (pokemons.height >= maxVal) {
                maxVal = pokemons.height
            }
        });

        const width = 700;
        const height = 500;
        const margin = { top:10, left:50, bottom: 40, right: 10};
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top -margin.bottom;

        const svg = canvas.append("svg");
        svg.attr("width", width);
        svg.attr("height", height);
    
        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const y = d3.scaleLinear()
        .domain([0, maxVal])
        .range([iheight, 0]);

        const x = d3.scaleBand()
        .domain(pokemons.map(d => d.name))
        .range([0, iwidth])
        .padding(0.1);

        const bars = g.selectAll("rect").data(pokemons);

        bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "steelblue")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.height))
            .attr("height", d => iheight - y(d.height))
            .attr("width", x.bandwidth())

        g.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${iheight})`);

        g.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));



    }

    return (
        <div id="canvas"></div>
    );

}

export default Graphic;