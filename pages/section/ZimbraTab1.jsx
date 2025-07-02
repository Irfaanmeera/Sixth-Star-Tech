import React, { useState, useEffect } from 'react';
import styles from '../styles/Tabs.module.css';
import Link from 'next/link';
import Image from 'next/image';
const ZimbraTab1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const delay = 5000;

  const tabs = [
    { id: 1, title: 'Zimbra Docs',  content: 'Users can build real-time documents, spreadsheets, presentations, and other documents with Zimbra Docs in the version of Zimbra 8.8.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722065325/Inbox-organization_xlrwit.webp' },
    { id: 2, title: 'Zimbra Talk V2', content: 'Business level messaging and video conferencing authorization can be purchased for Zimbra network edition with no third party products.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722065332/Smart-replies_ofq6yo.webp' },
    { id: 3, title: 'Zimbra Drive', content: 'The key features of Zimbra drive are desktop sync, user quota, mobile sync, password protected, support for big files, and storage API support.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722065327/send-later_akcxfm.webp' },
  ];

  const tabs2 = [
    { id: 1, title: 'Mobile Sync',  content: 'New mobile module of Zimbra allows you to integrate your Zimbra mailbox and shared folder on any active sync device without third-party clients.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066439/mobile_sync_zmuy7l.webp' },
    { id: 2, title: 'Zimbra Connector For Outlook', content: 'Zimbra connector for Outlook allows your users to use Microsoft Outlook to integrate mailbox, calendar, contacts, and tasks.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066449/Zimbra_Connector_w4uj9p.webp' },
    { id: 3, title: 'Exchange Web Services', content: 'Admit your users to use Microsoft outlook in Mac OS X to interconnect mailbox, calendar, contacts, and without using additional plugin.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066437/Exchange_Web_service_ejrsvo.webp' },
  ];

  const tabs3 = [
    { id: 1, title: 'Zimbra Packaging System',  content: 'Zimbra’s Open source packaging design offers you to reply immediately to newly identified vulnerabilities by updating individual Zimbra components instead of overall Zimbra package.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066454/Zimbra_Packaging_b3zais.webp' },
    { id: 2, title: 'Unified Communication', content: 'Unified Communications are developed into Zimbra with new voice application features out-of-box collaboration with Cisco and Mitel UC solutions process via user interface.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066447/Unified_Communication_urtb5c.webp' },
    { id: 3, title: 'Archiving And Discovery', content: 'It’s mainly designed for audit and legal purposes. Zimbra Archiving and Discovery feature is optional enables you to archive messages that were delivered to or sent by Zimbra collaboration.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066460/Archiving_gt2ayj.webp' },
  ];

  const tabs4 = [
    { id: 1, title: 'Two-Factor Authentication',  content: 'Your mailbox will be too secure with the extra login layer because of the two-factor authentication feature which mainly improves email security by user login.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066476/2fa_qvu4mq.webp' },
    { id: 2, title: 'MTA Boosts Email Security', content: 'Zimbra Postscreen removes more SMTP server processes applicable to clients and delays the onset of server overload conditions by keeping spambots away.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066444/spam-filter_w0rvcx.webp' },
    { id: 3, title: 'SSL SNI For HTTPS', content: 'Zimbra SSL SNI permits the server to provide multiple certificates on same IP address and TCP port number, so multiple hostnames could be served over HTTPS.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722066487/Encryption_cdkqzy.webp' },
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
              <div className="col-2">
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

              <div className="col-9 content_wrap">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A', fontSize: '20px', fontWeight: 'bold' }}>FEATURES OF ZIMBRA 8.8</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3' >
                          <Link href='#zimbracontact' className='zimbra-btn'>
                            Learn about our Zimbra
                            </Link>
                          </button>
                        </div>
                        <div className="col">
                          <Image src={tab.imgSrc} className='carbonio-tab-img' alt="zimbra features" width={350} height={280} loading='lazy' />
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
              <div className="col-9 content_wrap">
                {tabs2.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row  content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A', fontSize: '20px', fontWeight: 'bold' }}>FEATURES OF ZIMBRA 8.8</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3'>
                          <Link href='#zimbracontact' className='zimbra-btn'>
                            Learn about our Zimbra
                            </Link>
                          </button>
                        </div>
                        <div className="col">
                          <Image src={tab.imgSrc} className='carbonio-tab-img' alt=" zimbra features" width={350} height={280} loading='lazy' />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="col-2 ">
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
            <div className="row ">
              <div className="col-2 ">
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

              <div className="col-9 content_wrap">
                {tabs3.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row  content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A', fontWeight: 'bold' ,  fontSize: '20px' }}>ADMINISTRATION FEATURES</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3'>
                          <Link href='#zimbracontact' className='zimbra-btn'>
                            Learn about our Zimbra
                            </Link>
                          </button> 
                        </div>
                        <div className="col">
                          <Image src={tab.imgSrc} className='carbonio-tab-img' alt="Zimbra admin" width={350} height={280} loading='lazy' />
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
              <div className="col-9 content_wrap">
                {tabs4.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row  content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A', fontSize: '20px' }}>ZIMBRA SECURITY FEATURES</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3'>
                          <Link href='#zimbracontact' className='zimbra-btn'>
                            Learn about our Zimbra
                            </Link>
                          </button>
                        </div>
                        <div className="col">
                          <Image src={tab.imgSrc} className='carbonio-tab-img' alt="zimbra security" width={350} height={280} loading='lazy'/>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="col-2 ">
                <div className={styles.tab_wrap}>
                  {tabs4.map((tab, index) => (
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

    </div>
  );
};

export default ZimbraTab1;
