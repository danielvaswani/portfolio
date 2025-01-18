"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SidebarProps {
  name: string;
  title: string;
  location: {
    city: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  skills: Skill[];
  profileImage?: string;
}

export default function Sidebar({
  name,
  title,
  location,
  contact,
  skills,
  profileImage = "/placeholder.svg?height=120&width=120",
}: SidebarProps) {
  return (
    <aside className="h-screen w-[220px] bg-[#004D40] text-white p-6 fixed left-0 top-0 overflow-y-auto">
      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="w-40 h-40  flex justify-center items-center rounded-full overflow-hidden mb-6 border-4 border-white/10">
          <Image
            src={profileImage}
            alt={name}
            width={160}
            height={160}
            className="object-cover"
          />
        </div>
        <h1 className="text-lg font-bold text-center mb-1">{name}</h1>
        <h2 className="text-2xs font-light tracking-wider">{title}</h2>
      </div>

      <section className="mb-6">
        <div className="space-y-1 flex flex-col gap-1 font-bold items-center text-sm">
          <p>
            {location.city}, {location.country}{" "}
          </p>
          <a
            href={"tel:" + contact.phone}
            className="hover:text-white/80 transition-colors"
          >
            <p className="break-all hover:underline">{contact.phone}</p>
          </a>
          <a
            href={"mailto:" + contact.email}
            className="hover:text-white/80 text-xs transition-colors"
          >
            <p className="break-all hover:underline">{contact.email}</p>
          </a>
          <br />
          <br />
        </div>
        <div className="flex mt-5 justify-evenly">
          <Link
            href="https://www.linkedin.com/in/daniel-vaswani-129805227"
            target="_blank"
            className="hover:text-white/80 transition-colors"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="https://github.com/danielvaswani"
            target="_blank"
            className="hover:text-white/80 transition-colors"
          >
            <Github size={16} />
          </Link>
        </div>
        <Link
          href="https://vaswanidaniel.com"
          target="_blank"
          className="hover:text-white/80 transition-colors"
        >
          <p className="break-all hover:underline font-bold text-center mt-10">
            vaswanidaniel.com
          </p>
        </Link>
      </section>

      <section>
        <h3 className="text-sm font-semibold mb-3 pb-1 border-b border-white/20">
          Skills
        </h3>
        <div className="space-y-2 flex flex-col gap-3">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="text-xs mb-1">{skill.name}</div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#80CBC4] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
