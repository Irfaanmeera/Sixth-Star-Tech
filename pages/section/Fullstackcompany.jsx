import React from 'react';
import Link from 'next/link';



function Fullstackcompany({ companydata = [] }) {
  return (
    <div>
      <div className="row fullstack-resource justify-content-start">
        {companydata.map((item, index) => (
          <div className="col-lg-4 col-md-12" key={index}>
            <div className="box">
              <div className="con">
                <img src={item.image} alt={item.title} className="text-5xl text-blue-600" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fullstackcompany;
