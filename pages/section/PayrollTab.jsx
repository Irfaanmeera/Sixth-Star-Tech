import React from 'react'
import Image from 'next/image'

export default function PayrollTab() {
  return (
    <div>

<div className="d-flex align-items-start payroll-tab">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-employee-tab" data-bs-toggle="pill" data-bs-target="#v-pills-employee" type="button" role="tab" aria-controls="v-pills-employee" aria-selected="true">Employee Information</button>
    <button className="nav-link" id="v-pills-salary-tab" data-bs-toggle="pill" data-bs-target="#v-pills-salary" type="button" role="tab" aria-controls="v-pills-salary" aria-selected="false">Salary and Wages</button>
    <button className="nav-link" id="v-pills-deductions-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deductions" type="button" role="tab" aria-controls="v-pills-deductions" aria-selected="false">Deductions</button>
    <button className="nav-link" id="v-pills-taxes-tab" data-bs-toggle="pill" data-bs-target="#v-pills-taxes" type="button" role="tab" aria-controls="v-pills-taxes" aria-selected="false">Taxes</button>
    <button className="nav-link" id="v-pills-benefits-tab" data-bs-toggle="pill" data-bs-target="#v-pills-benefits" type="button" role="tab" aria-controls="v-pills-benefits" aria-selected="false">Benefits</button>
    <button className="nav-link" id="v-pills-attendance-tab" data-bs-toggle="pill" data-bs-target="#v-pills-attendance" type="button" role="tab" aria-controls="v-pills-attendance" aria-selected="false">Attendance</button>
    <button className="nav-link" id="v-pills-processing-tab" data-bs-toggle="pill" data-bs-target="#v-pills-processing" type="button" role="tab" aria-controls="v-pills-processing" aria-selected="false">Payroll Processing</button>
    <button className="nav-link" id="v-pills-record-tab" data-bs-toggle="pill" data-bs-target="#v-pills-record" type="button" role="tab" aria-controls="v-pills-record" aria-selected="false">Record-Keeping</button>
  </div>
  <div className="tab-content payroll-tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-employee" role="tabpanel" aria-labelledby="v-pills-employee-tab" tabIndex="0">
      <h3>Employee Information</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246909/Employee_Information_zapjba.webp" width={700} height={350} alt="Employee Information" loading='lazy' />
      <p>Such information comprises the names of employees, their addresses, social security numbers, tax withholdings, bank account details for direct deposits, employment status, and other relevant personal details.</p>
    </div>

    <div className="tab-pane fade" id="v-pills-salary" role="tabpanel" aria-labelledby="v-pills-salary-tab" tabIndex="0">
    <h3>Salary and Wages</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246916/Salary_and_Wages_svhk9g.webp" alt="Salary and Wages" width={700} height={350} loading='lazy' />
      <p>Payroll processing, which essentially entails computing wages and distributing them among employees, is at the center of it all. such payments include wages, hourly wages, bonuses, commissions, overtime pay any such form of wages.</p>
    
    </div>

    <div className="tab-pane fade" id="v-pills-deductions" role="tabpanel" aria-labelledby="v-pills-deductions-tab" tabIndex="0">
    <h3>Deductions</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246926/Deductions_exn4az.webp" alt="Deductions" width={700} height={350} loading='lazy' />
      <p>Earnings from different employees’ earnings can be utilized for making various deductions like taxes, social security contributions, medicare, health insurance premiums, retirement plan contributions among others, and other voluntary deductions such as charitable contributions and union</p>
    
    </div>

    <div className="tab-pane fade" id="v-pills-taxes" role="tabpanel" aria-labelledby="v-pills-taxes-tab" tabIndex="0">
    <h3>Taxes</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246919/Taxes_ys7wfv.webp" alt="Taxes" width={700} height={350} loading='lazy' />
      <p>It is mandatory for employers to deduct and forward several employee taxes. They can be in income taxes, Medicare taxes, and the unemployment tax.</p>
    
    </div>

    <div className="tab-pane fade" id="v-pills-benefits" role="tabpanel" aria-labelledby="v-pills-benefits-tab" tabIndex="0">
    <h3>Benefits</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246903/Benefits_unbpif.webp" alt="Benefits" width={700} height={350} loading='lazy' />
      <p>Such payrolls also involve handling employee benefits like health insurance, dental or vision cover, life insurance, Flexible Spending Accounts, as well as any other benefit that a given company could offer its employees.</p>
    
    </div>
    <div className="tab-pane fade" id="v-pills-attendance" role="tabpanel" aria-labelledby="v-pills-attendance-tab" tabIndex="0">
    <h3>Attendance</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246906/Attendance_fyk8ds.webp" alt="Attendance" width={700} height={350} loading='lazy' />
      <p>Monitoring employee attendance, working hours, overtime hours, and paid leave (e.g., casual, sick leaves) and ensuring appropriate pay-offs accordingly.</p>
    
    </div>
    <div className="tab-pane fade" id="v-pills-processing" role="tabpanel" aria-labelledby="v-pills-processing-tab" tabIndex="0">
    <h3>Payroll Processing</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246914/Payroll_Processing_a04rns.webp" alt="Payroll Processing" width={700} height={350} loading='lazy' />
      <p>Payrolling involves working out of gross wages, computing taxes and deductions, and effecting payments directly into bank accounts of employees using means such as direct deposit or the actual check.</p>
    
    </div>
    <div className="tab-pane fade" id="v-pills-record" role="tabpanel" aria-labelledby="v-pills-record-tab" tabIndex="0">
    <h3>Record-Keeping</h3>
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246924/Record-Keeping_jokdk1.webp" alt="Record-Keeping" width={700} height={350} loading='lazy' />
      <p>Ensuring that payroll records are kept accurately according to specified laws concerning payments, employees’ earnings, deductions, filing of taxes, and other associated documents.</p>
    
    </div>

  </div>
</div>
    </div>
  )
}
