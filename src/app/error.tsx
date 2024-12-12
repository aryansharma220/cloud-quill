"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-rose-100 p-3 rounded-full">
            <AlertTriangleIcon className="size-10 text-rose-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Something went wrong
          </h1>
          <p className="text-muted-foreground">{error.message}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <Button onClick={reset} className="font-medium px-6">
          Try again
        </Button>
        <Button
          className="font-medium px-6"
          variant="ghost"
          asChild
        >
          <Link href="/">
          Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
