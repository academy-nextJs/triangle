import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const ExitAuth = () => {
  return (
    <>
      <Button size={"rounded"}>
        <Link href={"/"}>
          <Home />
        </Link>
      </Button>
    </>
  );
};

export default ExitAuth;
