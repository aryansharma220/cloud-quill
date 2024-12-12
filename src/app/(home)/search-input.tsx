"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react"
import { useSearchParam } from "@/hooks/use-search-param";

export const SearchInput = () => {
  const [search, setSearch] = useSearchParam();
  const [value, setValue] = useState(search || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Search as you type with debounce
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (value !== search) {
        setSearch(value);
      }
    }, 500); // 500ms debounce to prevent too many searches

    return () => clearTimeout(debounceTimer);
  }, [value, search, setSearch]);

  // Clear search on outside click or page reload
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current && 
        !formRef.current.contains(event.target as Node)
      ) {
        setValue("");
        setSearch("");
      }
    };

    // Handle page reload or initial load
    const handlePageLoad = () => {
      setValue("");
      setSearch("");
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('load', handlePageLoad);

    // Clean up event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('load', handlePageLoad);
    };
  }, [setSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(value);
    inputRef.current?.blur();
  };

  const handleClear = () => {
    setValue("");
    setSearch("");
    inputRef.current?.blur();
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="relative max-w-[720px] w-full"
      >
        <Input
          value={value}
          ref={inputRef}
          onChange={handleChange}
          placeholder="Search"
          className="md:text-base placeholder:text-neutral-500 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-[#f0f4f8] rounded-full h-[48px] focus-visible:ring-0 focus:bg-white"
        />
        <Button
          size="icon"
          type="submit"
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
          variant="ghost"
        >
          <SearchIcon />
        </Button>
        {value && (
          <Button
            size={"icon"}
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
            variant={"ghost"}
          >
            <XIcon />
          </Button>
        )}
      </form>
    </div>
  );
};