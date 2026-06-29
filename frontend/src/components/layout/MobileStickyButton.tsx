"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

export function MobileStickyButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white p-3 shadow-[0_-4px_6px_-1px_rgb(0_0_0_/_0.05)] lg:hidden">
      <Button size="lg" fullWidth href="#lead-form-1">
        Получить расчёт
      </Button>
    </div>
  );
}
