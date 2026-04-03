'use client';
import { useRef, useEffect } from 'react';

export default function TrustDiagramScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.innerWidth >= 768) return;

    // .trust-fund-box（📦投資信託ファンドボックス）の中心を画面中央に合わせる
    const fundBox = el.querySelector<HTMLElement>('.trust-fund-box');
    if (!fundBox) return;

    const fundCenter = fundBox.offsetLeft + fundBox.offsetWidth / 2;
    el.scrollLeft = Math.max(0, fundCenter - el.clientWidth / 2);
  }, []);

  return (
    <div
      ref={ref}
      className="my-4 w-full overflow-x-auto mt-6 trust-diagram-outer"
    >
      {children}
    </div>
  );
}
