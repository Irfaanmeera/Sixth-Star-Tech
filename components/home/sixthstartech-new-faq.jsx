import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import{
	FaCheckSquare
} from "react-icons/fa";

const faqList = [
	{
		isActive: true,
		question: "What is web hosting and how does it work?",
		answer:
			"Web hosting is a service that stores your website’s files on a server and makes them accessible online. With Sixthstar Technologies, your site is hosted on high-speed, secure servers — ensuring fast load times and 99.99% uptime.",
	},
	{
		isActive: false,
		question: "Why should I buy web hosting from Sixthstar Technologies?",
		answer:
			"Choosing Sixthstar Technologies means getting lightning-fast servers, daily backups, malware protection, free SSL, and 24/7 expert support — all at an affordable price. It’s hosting built for performance and peace of mind.",
	},
	{
		isActive: false,
		question: "Is there free web hosting available with Sixthstar?",
		answer:
			"We don’t offer free web hosting — but unlike many providers, we don’t lock you down with restrictions. No hidden limits on traffic, bandwidth, or features. You get full access, full speed, and full support from day one. Quality > gimmicks.",
	},
	{
		isActive: false,
		question: "Can I get web hosting on a monthly plan from Sixthstar?",
		answer:
			"Yes! Sixthstar Technologies offers flexible monthly and yearly plans, so you only pay for what you need. Perfect for startups, side hustles, or scaling businesses.",
	},
	{
		isActive: false,
		question: "Who sets up my hosting account after I purchase it?",
		answer:
			"Sixthstar’s onboarding is instant. Once you sign up, your account is auto-provisioned — and if you need help, our tech team’s got your back 24/7 with full setup support.",
	},
	{
		isActive: false,
		question: "What payment methods does Sixthstar Technologies accept?",
		answer:
			"We accept major credit/debit cards, UPI, net banking, and digital wallets — making it super easy and secure to get started with your web hosting.",
	},
	{
  isActive: false,
  question: "What features are included with Sixthstar hosting plans?",
  answer: (
	
    <ul className="space-y-2">
      <li><FontAwesomeIcon icon={faCheckSquare} className="text-blue-600 mr-2" /> Unlimited Bandwidth</li>
      <li><FontAwesomeIcon icon={faCheckSquare} className="text-blue-600 mr-2" /> Dedicated IP</li>
      <li><FontAwesomeIcon icon={faCheckSquare} className="text-blue-600 mr-2" /> weekly Backups</li>
      <li><FontAwesomeIcon icon={faCheckSquare} className="text-blue-600 mr-2" /> Real-time Malware Scans</li>
      <li><FontAwesomeIcon icon={faCheckSquare} className="text-blue-600 mr-2" /> SSD Storage</li>
      <li><FontAwesomeIcon icon={faCheckSquare} className="text-blue-600 mr-2" /> 24/7 Expert Support</li>
      <li><FontAwesomeIcon icon={faCheckSquare} className="text-blue-600 mr-2" /> Customized Requirement</li>
      
    </ul>
	
  )
},
	{
		isActive: false,
		question: "Can I migrate my existing site to Sixthstar Technologies?",
		answer:
			"Yes, you can migrate your website to Sixthstar Technologies, but please note that migration is not free of charge. Our expert team ensures a smooth and secure transfer with minimal downtime — so your site stays up and running without a hitch.",
	},
	{
		isActive: false,
		question: "How do I choose and purchase the right hosting from Sixthstar?",
		answer:
			"Just visit our hosting page, compare plans based on your traffic, storage, and support needs. Hit “Buy Now” — and your hosting will be live in minutes.",
	},
	{
		isActive: false,
		question: "What happens after I buy hosting from Sixthstar?",
		answer:
			"You’ll get instant access to your control panel, along with setup instructions and support. From installing WordPress to connecting your domain — we help every step of the way.",
	},

];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive);

	return (
		<div
			className={`bg-white rounded-xl shadow-md transition-all duration-300 mt-6`}
		>
			<button
				className="flex justify-between items-center w-full text-left px-3 py-4 font-medium sm"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</button>
			<div
				className={`px-6 pt-0 pb-5 transition-all duration-300 ${
					isOpen ? "block" : "hidden"
				}`}
			>
				 {faq.answer}
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faq1 = () => {
	// Divide FAQs equally for 2 columns
	const half = Math.ceil(faqList.length / 2);
	const col1 = faqList.slice(0, half);
	const col2 = faqList.slice(half);

	return (
		<section className="bg-white py-10 px-4 sm:px-6 lg:px-16 text-gray-900">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-5xl font-bold mb-4">
						Frequently Asked Questions
					</h2>
					
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>{col1.map((faq, i) => <FaqItem faq={faq} key={i} />)}</div>
					<div>{col2.map((faq, i) => <FaqItem faq={faq} key={i + half} />)}</div>
				</div>
			</div>
		</section>
	);
};

export default Faq1;
