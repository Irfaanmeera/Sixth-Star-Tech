import React, { useState, useEffect } from 'react';
import styles from '../styles/Tabs.module.css';
import Link from 'next/link';

const CpaneTab1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const delay = 5000;

  const cpaneltabs = [
    { id: 1, title: 'Easy Migration',  content: 'You can easily migrate all the account data to another account very easily i.e. its Content, databases and other information through CPanel without any complications.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081654/migration_l8psdo.webp' },
    { id: 2, title: 'Email Accounts', content: 'You can have multiple email accounts for your domains and can create autoresponders, forwarders. ', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081649/email-accounts_ylbdm6.webp' },
    { id: 3, title: 'Softaculous Installer', content: 'Instantly install any tools and scripts without any programming languages like WordPress, Joomla, PhpBB etc. in one click.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081665/softaculous_vpmgyu.webp' },
  ];

  const cpaneltabs2 = [
    { id: 1, title: 'Customized CPanel',  content: 'You can access, modify, deploy, setup or install as per your requirement through user-friendly and personalized CPanel at your convenience.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081632/Customized_-CPanel_dprvf9.webp' },
    { id: 2, title: 'Manage your disk space', content: 'You can back up or store a large amount of data’s thereby monitoring your disk space. Also, if the disk space exceeds you can edit files and folders according to it.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081637/disk-sapce_zhr2ft.webp' },
    { id: 3, title: 'Log your Performance', content: 'We provide Webalizer and AWStats that allows you to track no of visitors to your websites along your website performance.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081659/performance_tgv5iy.webp' },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cpaneltabs.length);
    }, delay);

    return () => clearInterval(interval);
  }, [cpaneltabs.length]);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='cpanel-tab-cont'>
      <div className="container">
        <div className={`row ${styles['mail-feat-tab-1']} align-content-center`}>
          <div className="col-12">
            <div className="row">
              <div className="col-3 ">
                <div className={styles.tab_wrap}>
                  {cpaneltabs.map((tab, index) => (
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
                {cpaneltabs.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A', fontSize: '20px', fontWeight: 'bold' }}>FEATURES OF cPANEL</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>        
                          <button className='mt-3'>
                            <Link href='/contact-us' className='zimbra-btn'>Contact US</Link>
                            </button>
                        </div>
                        <div className="col">
                          <img src={tab.imgSrc} className='carbonio-tab-img' alt="FEATURES OF cPANEL" loading='lazy' />
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
                {cpaneltabs2.map((tab, index) => (
                  <div key={tab.id} className={`${styles.box} ${index === activeIndex ? styles.first_box : ''}`}>
                    {index === activeIndex && (
                      <div className='row content_wrap_col'>
                        <div className="col">
                          <h2 style={{ color: '#00574A', fontSize: '20px', fontWeight: 'bold' }}>FEATURES OF cPANEL</h2>
                          <h3 style={{ color: 'black', fontSize: '19px' }}>{tab.title}</h3>
                          <p style={{ fontSize: '16px' }}>{tab.content}</p>
                          <button className='mt-3'>
                          <Link href='/contact-us' className='zimbra-btn'>Contact US</Link>
                          </button>
                        </div>
                        <div className="col">
                          <img src={tab.imgSrc} className='carbonio-tab-img' alt="FEATURES OF cPANEL" loading='lazy' />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="col-3 ">
                <div className={styles.tab_wrap}>
                  {cpaneltabs2.map((tab, index) => (
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

export default CpaneTab1;
