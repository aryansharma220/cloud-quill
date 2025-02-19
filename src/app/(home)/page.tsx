"use client";

import { usePaginatedQuery } from "convex/react";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-param";
import Footer from "./footer";
const Home = () => {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-[#735DA5] p-4 shadow-lg">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          status={status}
          loadMore={loadMore}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
