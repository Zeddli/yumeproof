"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Victor Mak",
    role: "Software Engineer",
    description: "Expert in smart contract development and blockchain infrastructure with 8+ years of experience.",
    avatar: "/viktor.jpg",
    linkedin: "https://www.linkedin.com/in/victorevolves/",
    twitter: "https://x.com/victorevolves",
    email: "mailto:victor@yumeproof.xyz"
  },
  {
    name: "Junaid Javed",
    role: "Software Engineer",
    description: "Specializes in mobile penetration testing and secure app development across iOS and Android platforms.",
    avatar: "/junaid.jpg",
    linkedin: "https://www.linkedin.com/in/junaid-javed-3a7282235/",
    twitter: "https://x.com/MrJuna1d",
    email: "mailto:junaid@yumeproof.xyz"
  },
  {
    name: "Jun Heng",
    role: "Software Engineer",
    description: "PhD in cryptography with focus on zero-knowledge proofs and advanced encryption protocols.",
    avatar: "/junheng.jpg",
    linkedin: "https://www.linkedin.com/in/jun-heng-teh-6773202b0/",
    twitter: "https://x.com/JNHNG4",
    email: "mailto:junheng@yumeproof.xyz"
  },
  {
    name: "Chiw Jie Ren",
    role: "Software Engineer",
    description: "Drives product strategy and roadmap with deep technical understanding and user-centric approach.",
    avatar: "/chiw.png",
    linkedin: "https://www.linkedin.com/in/chiw-jie-ren-743862302/",
    twitter: "https://x.com/chiwbacca888",
    email: "mailto:chiwbacca@yumeproof.xyz"
  },
  {
    name: "Sam Zhi Jian",
    role: "Software Engineer",
    description: "Creates intuitive, secure user experiences that bridge complex security features with usability.",
    avatar: "/sam.jpg",
    linkedin: "https://www.linkedin.com/in/sam-zhi-jian-6907182b3/",
    twitter: "https://x.com/zhijiandv",
    email: "mailto:zhijiandv@yumeproof.xyz"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-20 md:py-32 bg-gradient-to-tl from-white via-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Our Team
          </h2>
          <p className="font-subheading text-xl md:text-2xl text-[#5995eb] max-w-3xl mx-auto">
            Dedicated Experts in Blockchain & Mobile Security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:grid-rows-2 lg:place-items-center">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-border/50">
                {member.avatar ? (
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#5995eb]/10 to-[#5995eb]/5 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#5995eb]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              
              <p className="text-[#5995eb] font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.description}
              </p>
              
              <div className="flex justify-center space-x-4">
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-[#5995eb] hover:bg-accent transition-all duration-200"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a 
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                    aria-label="Twitter profile"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.email && (
                  <a 
                    href={member.email}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                    aria-label="Email contact"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          
                     <div className="lg:col-span-3 flex justify-center gap-8">
             {teamMembers.slice(3).map((member, index) => (
               <motion.div
                 key={member.name}
                 className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 w-full max-w-sm"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
               >
                 <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-border/50">
                   {member.avatar ? (
                     <img 
                       src={member.avatar} 
                       alt={member.name}
                       className="w-full h-full object-cover"
                     />
                   ) : (
                                           <div className="w-full h-full bg-gradient-to-br from-[#5995eb]/10 to-[#5995eb]/5 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#5995eb]">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                   )}
                 </div>
                 
                 <h3 className="text-xl font-semibold text-foreground mb-2">
                   {member.name}
                 </h3>
                 
                 <p className="text-[#5995eb] font-medium mb-4">
                   {member.role}
                 </p>
                 
                 <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                   {member.description}
                 </p>
                 
                 <div className="flex justify-center space-x-4">
                   {member.linkedin && (
                     <a 
                       href={member.linkedin}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                       aria-label="LinkedIn profile"
                     >
                       <Linkedin className="w-5 h-5" />
                     </a>
                   )}
                   {member.twitter && (
                     <a 
                       href={member.twitter}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                       aria-label="Twitter profile"
                     >
                       <Twitter className="w-5 h-5" />
                     </a>
                   )}
                   {member.email && (
                     <a 
                       href={member.email}
                       className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                       aria-label="Email contact"
                     >
                       <Mail className="w-5 h-5" />
                     </a>
                   )}
                 </div>
               </motion.div>
             ))}
           </div>

        </div>

      </div>
    </section>
  );
}