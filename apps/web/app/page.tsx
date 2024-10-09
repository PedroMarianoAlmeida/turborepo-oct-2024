import Image from "next/image";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui2/card";
import { Test } from "@repo/vite-project/test";
import { NextTest } from "@repo/next-shadcn/nextTest";
import { Badge } from "@repo/next-shadcn/badge";


export default function Home() {
  return (
    <div>
      <main>
        <Badge variant="secondary" className="bg-white">
          Secondary
        </Badge>
        <Button appName="web">Open alert</Button>
        <NextTest />
        <Test />
      </main>
    </div>
  );
}
