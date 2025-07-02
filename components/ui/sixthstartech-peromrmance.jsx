import React from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Cloud, 
  Globe, 
  Database, 
  Mail, 
  Shield, 
  Server, 
  Link2
} from 'lucide-react';

const services = [
  { 
    id: 1, 
    title: 'Hosting', 
    icon: <Globe className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    description: 'Lightning-fast cloud hosting with 99.9% uptime guarantee',
    link: 'https://sixthstartech.com/servers/dedicated-server'
  },
  { 
    id: 2, 
    title: 'Our Premium Services', 
    icon: <Cloud className="w-16 h-16 text-white/80" />, 
    bgColor: 'bg-gradient-to-r from-purple to-purple-light',
    description: 'Enterprise-grade solutions trusted by Fortune Indian companies at Global level',
    isCenter: true,
    link: 'https://sixthstartech.com/web-development-services'
  },
  { 
    id: 3, 
    title: 'Domains', 
    icon: <Link2 className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    description: 'Register and manage domain names with free WHOIS protection',
    link: 'https://sixthstartech.com/domain'
  },
  { 
    id: 4, 
    title: 'Servers', 
    icon: <Server className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    description: 'High-performance dedicated servers with root access',
    link: 'https://sixthstartech.com/servers/vps-server-hosting'
  },
  { 
    id: 5, 
    title: '3K', 
    icon: <Cpu className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    description: 'Over 3,000 satisfied enterprise clients worldwide',
    hasUsers: true,

  },
  { 
    id: 6, 
    title: 'Colocation Data Centers', 
    icon: <Database className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    hasBadges: true,
    link: 'https://sixthstartech.com/data-center-chennai'
  },
  { 
    id: 7, 
    title: 'SFTP', 
    icon: <Shield className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    description: 'Encrypted file transfer with advanced security protocols',
    isPill: true,
    link: 'https://sixthstartech.com/products/sftp-server'
  },
  { 
    id: 8, 
    title: 'Email Solutions', 
    icon: <Mail className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    description: 'Professional email hosting with spam protection and large storage',
    link: 'https://sixthstartech.com/mail-services/zimbra'
  },
  { 
    id: 9, 
    title: 'Spam Filters', 
    icon: <Shield className="w-8 h-8" />, 
    bgColor: 'bg-navy',
    description: 'Advanced AI-powered spam filtering with 99.9% accuracy',
    link: 'https://sixthstartech.com/spam-filter'
  }
];

const SixthstarPerformance = () => {
  return (
    <section className="relative bg-white pt-16 px-4 z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-navy font-sans">Fastest Performance Server</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-6 mt-10">
          {services.map((service) => {
            // Center item
            if (service.isCenter) {
              return (
                <div 
                  key={service.id} 
                  className={`${service.bgColor} col-span-1 sm:col-span-2 row-span-2 rounded-2xl p-6 flex flex-col items-center justify-center text-white font-sans shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pt-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-white/10 rounded-full border-8 border-white/20 animate-pulse-light"></div>
                    <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-purple-light/30 rounded-full animate-ping-slow"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-float"></div>
                  </div>
                  <div className="relative z-10 animate-bounce-slow mb-6">{service.icon}</div>
                  <h3 className="text-3xl pb-4 font-bold text-center relative z-10 -mt-8">{service.title}</h3>
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md my-6">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-orange-300">99.9%</span>
                      <span className="text-xm text-white/70">Uptime</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-orange-300">0.1s</span>
                      <span className="text-xm text-white/70">Response</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-orange-300">24/7</span>
                      <span className="text-xm text-white/70">Support</span>
                    </div>
                  </div>
                  <img 
                    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741849438/Untitled_400_x_400_px_xjvkpy.png" 
                    alt="Star Logo" 
                    className="w-20 h-20 mt-4 object-contain relative z-10 animate-spin-slow" 
                  />
                  <p className="text-center mt-4 max-w-sm opacity-80 group-hover:opacity-100 transition-opacity relative z-10 pt-12">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 bg-white text-purple px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all group-hover:scale-105 transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            }

            if (service.hasUsers) {
              return (
                <div 
                  key={service.id} 
                  className={`${service.bgColor} rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                >
                  <h3 className="text-4xl font-bold text-orange-300 mb-1 group-hover:scale-110 transition-transform">{service.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">Happy Customers</p>
                  <div className="flex -space-x-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-navy animate-bounce-slow"
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          backgroundImage: `url("https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747310481/Untitled_design_16_c7mbjt.png")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-center mt-4 text-xm text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                 
                </div>
              );
            }

            if (service.hasBadges) {
              return (
                <div 
                  key={service.id} 
                  className={`${service.bgColor} rounded-2xl p-4 flex flex-col items-center justify-between text-white shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                >
                  <h3 className="text-xl font-semibold text-center text-purple-200 mb-2">{service.title}</h3>
                  <div className="w-full flex justify-around mt-2">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mb-1 animate-bounce-slow">
                        <span className="text-purple-200 text-sm">100%</span>
                      </div>
                      <span className="text-xm text-gray-400">Security</span>
                      <div className="w-20 h-8 rounded-full bg-orange-400 flex items-center justify-center animate-pulse mt-2 ">
                        <span className="text-xm font-bold">TIER-3+</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center animate-bounce-slow">
                        <span className="text-purple-200 text-xm">24/7</span>
                      </div>
                      <span className="text-xm text-gray-400 mt-1">Support</span>
                      <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center mt-2 animate-pulse-slow">
                        <span className="text-xm font-bold">SLA</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-3 text-xm text-gray-300 opacity-80">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-0  pt-3 border-t border-white/10 flex justify-center text-xm text-purple-200 items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              );
            }

            if (service.isPill) {
              return (
                <div 
                  key={service.id} 
                  className={`${service.bgColor} rounded-2xl p-4 flex flex-col items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className="bg-purple-500 text-white font-bold px-8 py-3 rounded-full text-xl group-hover:scale-105 transition-transform">
                    {service.title}
                  </div>
                  <div className="mt-4 flex flex-col items-center">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-xm">Secure Connection</span>
                    </div>
                    <p className="text-center mt-2 text-xm text-gray-300">{service.description}</p>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 pt-3 border-t border-white/10 flex justify-center text-xm text-purple-200 items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              );
            }

            // Default card
            return (
              <div 
                key={service.id} 
                className={`${service.bgColor} rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-5 rounded-full group-hover:animate-ping-slow"></div>
                <div className="absolute top-5 left-5 w-16 h-16 bg-purple-light/10 rounded-full group-hover:animate-pulse"></div>
                <div className="text-4xl mb-4 group-hover:animate-bounce-slow text-purple-200">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-sm opacity-80 text-center mt-2 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 pt-3 border-t border-white/10 flex justify-center text-xm text-purple-200 items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SixthstarPerformance;
