import React, { Component } from 'react';
import pic from '../../Images/prof.png';
import './Team.css';
import { string, shape } from 'prop-types'


class Team extends Component{
	render()
	{
	    const Images_array = [pic,pic,pic,pic,pic,pic,pic,pic];

      const data =[
      {
        title:"ABC",
        description: "Top quality 'Ignitus-Exclusive'" 
      },
      { 
        title:"ABC",
        description:"Unique, well researched." 
      },
      {
        title:"ABC",
        description:"Guidance" 
      },
      {
        title:"ABC",
        description: "Top quality" 
      },
      { 
        title:"ABC",
        description:"Unique, well researched and goal-oriented." 
      },
      {
        title:"ABC",
        description:"Guidance from an unparalleled network" 
      },
      { 
        title:"ABC",
        description:"Unique, well researched and goal-oriented courses." 
      },
      {
        title:"ABC",
        description:"Guidance from an unparalleled network of professors" 
      }
    ];

    let _html = Images_array.map(function (logo,x,key) {

        return(
          <TeamItem key={key} logo={logo} data={data[x]}/>
        )
      })



	return (
    <div>
  
          <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 _align mt-4">
              <div className = "leadership"> LEADERSHIP </div>
                    <div className="_ignitus_intr _align">We're led by a team who constanty questions, tinkers, and </div>
                    <div className="_ignitus_intr_con _align">challenges to unlock great creativity around every turn </div>
         </div>
        	<div className = "container">
         	 <div className = "row">
            	{_html}
         	 </div>
      		</div>
    </div>
	);
	}
}

const TeamItem = (props)=>(
  <div className="col-lg-3 col-md-4 col-sm-6 col-9 mx-auto  _imgs">
      <div className="ch-item">
        <div className="imag">
          <img src={props.logo} alt={"logo"} className = "mx-auto d-block image_style"/> 
        </div>
          <div className="overlay">
            <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 middle ">Some Text here</div>
          </div>
      </div>
          <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 textalign ">{props.data.title}</div>
          <div className = "col-sm-12 col-md-12 col-lg-12 col-xs-12 textalign ">{props.data.description}</div>
  </div>
)

TeamItem.propTypes = {
  logo: string.isRequired,
  data: shape({
    title: string.isRequired,
    description: string.isRequired
  }).isRequired
};

export default Team;
