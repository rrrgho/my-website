import React from 'react';

const BrandList = [
    {
        image: './images/myweb/react.png',
        style: {width:'150px', height:'50px', marginTop:6, opacity:0.5}
    },
    {
        image: './images/myweb/nextjs.png',
        style: {width:'90px', height:'50px', opacity:0.5, marginTop: 6}
    },
    {
        image: './images/myweb/jira.png',
        style: {width:'160px', height:'60px', marginTop: 1}
    },
    {
        image: './images/myweb/django.png',
        style: {width:'100px', height:'40px', opacity:0.5, marginTop: 10}
    },
    {
        image: './images/brand/brand-05.png'
    },
    {
        image: './images/brand/brand-06.png'
    },
    {
        image: './images/brand/brand-07.png'
    },
]

const BrandFour = ({brandStyle}) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a href="#"><img style={data.style} src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandFour;
