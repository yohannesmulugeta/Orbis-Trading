"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) {
      return () => {
        document.body.style.overflow = "";
      };
    }

    const menu = mobileMenuRef.current;
    const firstLink = menu?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menu) return;

      const links = Array.from(menu.querySelectorAll<HTMLElement>("a[href]"));
      const focusable = [menuButtonRef.current, ...links].filter(
        (item): item is HTMLElement => Boolean(item),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="ORBIS home">
          <Image
            src={assetPath("/assets/orbis-logo.png")}
            alt="ORBIS Trading and Technical Centre Share Company"
            width={1024}
            height={256}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <div className="desktop-nav__item" key={item.label}>
              <Link href={item.href}>{item.label}</Link>
              {item.children ? (
                <div className="desktop-nav__menu">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.label}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <Link className="header-cta" href="/contact/">
          Contact ORBIS <span aria-hidden="true">↗</span>
        </Link>

        <button
          ref={menuButtonRef}
          className={`menu-button ${open ? "menu-button--open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <div className="mobile-menu__group" key={item.label}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
              {item.children ? (
                <div className="mobile-menu__children">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.label} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link className="mobile-menu__cta" href="/contact/" onClick={() => setOpen(false)}>
            Start an enquiry <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
