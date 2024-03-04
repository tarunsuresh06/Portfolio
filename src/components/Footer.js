import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-solid border-dark font-medium
    text-lg"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
          Built by{" "}
          <Link className="underline underline-offset-2" href="/">
            Tarun Suresh
          </Link>
        </div>
        <Link className="underline underline-offset-2" href="/">
          Say Hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
