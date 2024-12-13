"use client";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="fixed bg-[#735DA5] bottom-0 flex h-10 w-full items-center justify-center border-t">
      <p className="text-sm text-white">
        &copy; {new Date().getFullYear()} CloudQuill
      </p>
      <Separator orientation="vertical" className="mx-2 h-6 w-0.5 bg-white" />
      <p className="text-sm text-white">
        Crafted by{" "}
        <a
          href="https://github.com/aryansharma220"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Aryan Sharma
        </a>
      </p>
    </footer>
  );
};

export default Footer;