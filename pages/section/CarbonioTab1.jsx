import React, { useState, useEffect } from 'react';
import styles from '../styles/Tabs.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CarbonioTab1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const delay = 5000;

  const tabs = [
    { id: 1, title: 'Inbox organization​',  content: 'Carbonio could automatically sort incoming messages into categories (like social, promotions, or updates) to help users prioritize what they need to read and save time.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722065325/Inbox-organization_xlrwit.webp' },
    { id: 2, title: 'Smart replies', content: 'Invest your operating budget in people not products, without compromising on the power of your CX tools. Build an advanced omnichannel CX initiative that empowers your sales, marketing, and support reps to make an impact at each stage of the customer lifecycle', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722065332/Smart-replies_ofq6yo.webp' },
    { id: 3, title: 'Send later', content: 'Carbonio could allow users to schedule emails to be sent at a later time, so they can draft messages at their convenience but still send them at an optimal time for the recipient.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722065327/send-later_akcxfm.webp' },
    { id: 4, title: 'Reminders​', content: 'Carbonio could send automated reminders for follow-up emails, upcoming meetings, or other important tasks based on the content of a user’s inbox and calendar.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068773/Reminder_zid9ei.webp' },
    { id: 5, title: 'Attachment assistance', content: 'Carbonio could offer suggestions for relevant attachments based on the topic of a user’s email, reducing the amount of time spent searching for files.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068757/Attachment-assistance_ctxnnf.webp' },
    { id: 6, title: 'Priority inbox', content: 'Carbonio could learn from a user’s behavior and automatically move important emails to the top of their inbox based on factors like sender, subject, and content.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068768/Priority-inbox_rf7kdv.webp' }
];

  const tabs2 = [
    { id: 1, title: 'Encryption​',  content: 'Carbonio could use end-to-end encryption to protect the content of users’ emails from interception or data breaches.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066487/Encryption_cdkqzy.webp' },
    { id: 2, title: 'Multi-factor authentication', content: 'Carbonio could require users to provide two or more types of authentication (like a password and a fingerprint) to access their accounts, making it harder for unauthorized users to gain access.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066476/2fa_qvu4mq.webp' },
    { id: 3, title: 'Spam filtering', content: 'Carbonio could use filters and AI algorithms to identify and block spam messages before they reach a user’s inbox.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066444/spam-filter_w0rvcx.webp' },
    { id: 4, title: 'Device management​', content: 'Carbonio could allow administrators to control which devices are allowed to access their company’s email system, and to remotely wipe data from lost or stolen devices to prevent data breaches.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068761/Device-management_gsyxtz.webp' },
    { id: 5, title: 'Reporting and auditing', content: 'Carbonio could provide detailed reports on email activity and usage to help administrators identify potential security threats or policy violations.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068776/Reporting-and-auditing_u7sm28.webp' },
    { id: 6, title: 'Phishing protection', content: 'Carbonio could use machine learning algorithms to identify and block suspicious emails or links that could be part of a phishing scam', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068765/Phishing-protection_xl4qa4.webp' }
];

  const tabs3 = [
    { id: 1, title: 'ActiveSync support​',  content: 'Carbonio Mail Service supports ActiveSync, which means that all your devices are synced seamlessly with your email account.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068996/carbonio-mail-sync_hjx07o.webp' },
    { id: 2, title: 'Distributed architecture', content: 'Carbonio Mail Service employs a distributed architecture that ensures improved performance and uptime.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722069008/Distributed-architecture_iejukx.webp' },
    { id: 3, title: 'Collaboration tools', content: 'Carbonio Mail Service comes with powerful collaboration tools that enable real-time communication and better teamwork.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722069001/Collaboration-tools_k7nj4x.webp' },
    { id: 4, title: 'Quotas and storage policies​', content: 'Carbonio Mail Service allows you to set up quotas and storage policies to manage your email storage effectively.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068986/storage-policies_lghvlo.webp' },
    { id: 5, title: 'Customizable login pages', content: 'you can customize the login pages of Carbonio Mail Service to match your business branding and design.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722069004/Customizable-login-pages_qstilo.webp' },
    { id: 6, title: '24/7 support', content: 'our team of experts is available round the clock to provide technical assistance with any issues you may encounter.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068990/247-support__kjqych.webp' }
];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    }, delay);

    return () => clearInterval(interval);
  }, [tabs.length]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='zimbra-tab-cont'>
      <div className="container">
        <div className={`row ${styles['mail-feat-tab-1']} align-content-center`}>
          <div className="col-12">
            <div className="row">
              <div className="col-3 ">
                <div className={styles.tab_wrap}>
                  {tabs.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`${styles.tab} ${index === activeIndex ? styles.active : ''}`}
                      onClick={() => handleTabClick(index)}
                    >
                      
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-8 content_wrap">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A',fontWeight:'600' , fontSize: '20px' }}>CARBONIO MAIL FEATURES</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3' >
                            <Link href='#carboniocontact' className='zimbra-btn'>Contact us</Link>
                          </button>
                        </div>
                        <div className="col">
                          <Image src={tab.imgSrc}  alt="CARBONIO MAIL FEATURES" className='carbonio-tab-img' width={350} height={280} loading='lazy' />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className={`row ${styles['mail-feat-tab-1']} align-content-center`}>
          <div className="col-12">
            <div className="row">
              <div className="col-8 content_wrap">
                {tabs2.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A', fontWeight:'600', fontSize: '20px' }}>SECURITY FEATURES</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3'>
                          <Link href='#carboniocontact' className='zimbra-btn'>Contact us</Link>
                          </button>
                        </div>
                        <div className="col">
                          <Image src={tab.imgSrc}  alt="SECURITY FEATURES" className='carbonio-tab-img' width={350} height={280} loading='lazy'  />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="col-3 ">
                <div className={styles.tab_wrap}>
                  {tabs2.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`${styles.tab} ${index === activeIndex ? styles.active : ''}`}
                      onClick={() => handleTabClick(index)}
                    >
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`row ${styles['mail-feat-tab-1']} align-content-center`}>
          <div className="col-12">
            <div className="row">
              <div className="col-3 ">
                <div className={styles.tab_wrap}>
                  {tabs3.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`${styles.tab} ${index === activeIndex ? styles.active : ''}`}
                      onClick={() => handleTabClick(index)}
                    >
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-8 content_wrap">
                {tabs3.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A',fontWeight:'600', fontSize: '20px' }}>Advanced Features​</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3'>
                          <Link href='#carboniocontact' className='zimbra-btn'>Contact us</Link>
                          </button> 
                        </div>
                        <div className="col">
                          <Image src={tab.imgSrc}  alt="Advanced Features" className='carbonio-tab-img' width={350} height={280} loading='lazy' />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CarbonioTab1;
