import TeamCard from "../components/TeamCard";
import { motion } from "framer-motion";

import member1Img from "../assets/team/member1.jpg";
import member2Img from "../assets/team/member2.jpg";
import member3Img from "../assets/team/member3.jpg";
import member4Img from "../assets/team/member4.jpg";

export default function Team() {

  const team = [
    {
      name: "Anushka Khilari",
      image: member1Img,
      github: "#",
      linkedin: "#"
    },
    {
      name: "Ishwari Khobare",
      image: member2Img,
      github: "#",
      linkedin: "#"
    },
    {
      name: "Vaibhav Kolhe",
      image: member3Img,
      github: "#",
      linkedin: "#"
    },
    {
      name: "Vaishnavi Londhe",
      image: member4Img,
      github: "#",
      linkedin: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">

      <motion.h1
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        className="text-4xl font-bold text-indigo-700 text-center mb-12"
      >
        Meet Our Team
      </motion.h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member,index)=>(
          <TeamCard key={index} {...member}/>
        ))}
      </div>

    </div>
  );
}