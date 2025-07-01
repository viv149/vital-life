
import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import Button from '../ui/Button';


export const Footer = () => {
    const footerLinks = {
        company: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Story', href: '#about' },
        { name: 'Press', href: '#' },
        ],
        support: [
        { name: 'Contact Us', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Returns', href: '#' },
        ],
        legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        ],
    };

    const socialLinks = [
        { name: 'Instagram', icon: FiInstagram, href: '#' },
        { name: 'Facebook', icon: FiFacebook, href: '#' },
        { name: 'Twitter', icon: FiTwitter, href: '#' },
        { name: 'Whatsapp', icon: BiLogoWhatsapp, href: '#' },
    ];

  return (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-4 gap-4 mb-12">
                {/* Brand Section */}
                <div className="lg:col-span-1">
                    <h3 className="text-2xl font-display font-bold text-nature-400 mb-4">
                        VitalLife
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Pure wellness for optimal living. Authentic natural supplements backed by science.
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a key={social.name} href={social.href} aria-label={social.name}>
                            <Icon className="h-5 w-5" />
                            </a>
                        
                        );
                    })}
                    </div>
                </div>

                {/* Links Sections */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Company</h4>
                    <ul className="space-y-2">
                    {footerLinks.company.map((link) => (
                        <li key={link.name}>
                        <a 
                            href={link.href}
                            className="text-gray-400 hover:text-nature-400 transition-colors text-sm"
                        >
                            {link.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>

                

                <div>
                    <h4 className="font-semibold text-white mb-4">Support</h4>
                    <ul className="space-y-2">
                    {footerLinks.support.map((link) => (
                        <li key={link.name}>
                        <a 
                            href={link.href}
                            className="text-gray-400 hover:text-nature-400 transition-colors text-sm"
                        >
                            {link.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Legal</h4>
                    <ul className="space-y-2">
                    {footerLinks.legal.map((link) => (
                        <li key={link.name}>
                        <a 
                            href={link.href}
                            className="text-gray-400 hover:text-nature-400 transition-colors text-sm"
                        >
                            {link.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

        
        </div>
    </footer>
  );
};