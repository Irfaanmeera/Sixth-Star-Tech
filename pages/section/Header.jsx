import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const router = useRouter();
  const slug = router.pathname;

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.webp"
          as="image"
        />
      </Head>

      <Navbar expand="lg" sticky="top" className="bg-white shadow-sm header-sec ">
        <Container fluid className="container">
          {/* Logo on the left */}
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand className="me-0">
              <Image 
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.webp" 
                alt="Sixsthar logo" 
                width={187}
                height={71}
                priority
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>
          
          <Navbar.Toggle aria-controls="blog-navbar" className="ms-auto" />
          
          {/* Menu on the right */}
          <Navbar.Collapse id="blog-navbar" className="justify-content-center blog-navbar">
            {slug.startsWith('/blog') ? (
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blogs">All Post</Nav.Link>
                <Nav.Link href="/blogs/category/domains">Domains</Nav.Link>
                <Nav.Link href="/blogs/category/emails">Email</Nav.Link>
                <Nav.Link href="/blogs/category/hostings">Hosting</Nav.Link>
                <Nav.Link href="/blogs/category/servers">Server</Nav.Link>
                <Nav.Link href="/blogs/category/spam-filter">Spam Filter</Nav.Link>
                <Nav.Link href="/blogs/category/what-is">What Is</Nav.Link>
              </Nav>
            ) : (
              <Nav className='main-nav'>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/domain">Domain</Nav.Link>
                
                <NavDropdown title="Server" id="server-dropdown" className="mx-1">
                  <NavDropdown.Item href="/servers/dedicated-server">Dedicated Servers</NavDropdown.Item>
                  <NavDropdown.Item href="/servers/vps-server-hosting">VPS Server</NavDropdown.Item>
                  <NavDropdown.Item href="/servers/cloud-hosting-services">Cloud server</NavDropdown.Item>
                  <NavDropdown.Item href="/servers/web-hosting">Shared Server</NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Mail Services" id="mail-dropdown" className="mx-1">
                  <NavDropdown.Item href="/mail-services/zimbra">Zimbra Mail</NavDropdown.Item>
                  <NavDropdown.Item href="/mail-services/carbonio-mail">Carbonio Mail</NavDropdown.Item>
                  <NavDropdown.Item href="/mail-services/g-suite-providers">G suite</NavDropdown.Item>
                  <NavDropdown.Item href="/mail-services/office-365-providers">Office 365</NavDropdown.Item>
                  <NavDropdown.Item href="/mail-services/cpanel-hosting-in-chennai">CPanel</NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Security" id="security-dropdown" className="mx-1">
                  <NavDropdown.Item href="/ssl-certificate">SSL Certificate</NavDropdown.Item>
                  <NavDropdown.Item href="/spam-filter">Spam Filter</NavDropdown.Item>
                  <NavDropdown title="Support" id="support-dropdown">
                    <NavDropdown.Item href="/mail-server-support-in-chennai-india">Mail Server Support</NavDropdown.Item>
                    <NavDropdown.Item href="/enterprise-email-service-for-business">Enterprises Email</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                
                <NavDropdown title="Services" id="services-dropdown" className="mx-1">
                  <NavDropdown.Item href="/web-development-services">Web Development</NavDropdown.Item>
                  <NavDropdown.Item href="/mobile-app-development-in-chennai">Mobile App Development</NavDropdown.Item>
                  <NavDropdown.Item href="/seo-services">SEO</NavDropdown.Item>
                  <NavDropdown.Item href="/high-availability">High Availability</NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Products" id="products-dropdown" className="mx-1">
                  <NavDropdown.Item href="/products/crm-software">CRM Software</NavDropdown.Item>
                  <NavDropdown.Item href="/products/fleet-management-software-providers">Fleet Management Software</NavDropdown.Item>
                  <NavDropdown.Item href="/products/hms-software-provider">HMS Software</NavDropdown.Item>
                  <NavDropdown.Item href="/products/payroll-software-provider-in-chennai">Payroll Software</NavDropdown.Item>
                  <NavDropdown.Item href="/products/sftp-server">SFTP Server</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="/contact-us" className="mx-1">Contact Us</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;