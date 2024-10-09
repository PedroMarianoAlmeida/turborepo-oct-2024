import Image from "next/image";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui2/card";
import { Test } from "@repo/vite-project/test";
import { NextTest } from "@repo/next-shadcn/nextTest";
import { Badge } from "@repo/next-shadcn/badge";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <Badge variant="secondary">Secondary</Badge>
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
        <NextTest />
        <Test />
      </main>
    </div>
  );
}
