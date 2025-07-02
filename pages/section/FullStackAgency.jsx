import React from 'react';
import Link from 'next/link';
function FullStackAgency({ agencydata = [] }) {
  return (
    <div>
      <div className="row fullstack-business">
        {agencydata.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="box">
              <div className="con">
                <img src={item.image} alt={item.title} className="text-5xl text-blue-600" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
          <button className='fullstackbtn'><Link href={item.link} target='_blank'>Read more</Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullStackAgency;
