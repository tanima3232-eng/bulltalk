'use client';
import { useRef, useEffect } from 'react';

export default function TrustDiagramScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.innerWidth >= 768) return;

    // getBoundingClientRect で正確な位置を取得して📦を中央に合わせる
    const fundBox = el.querySelector<HTMLElement>('.trust-fund-box');
    if (!fundBox) return;

    const containerRect = el.getBoundingClientRect();
    const fundBoxRect = fundBox.getBoundingClientRect();

    const containerCenter = containerRect.left + containerRect.width / 2;
    const fundBoxCenter = fundBoxRect.left + fundBoxRect.width / 2;

    // 現在のscrollLeft（=0）から調整量を足す
    el.scrollLeft += fundBoxCenter - containerCenter;
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
