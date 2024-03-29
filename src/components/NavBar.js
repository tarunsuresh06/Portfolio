import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 
        ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex justify-center items-center flex-wrap">
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mr-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          className="w-6 ml-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
