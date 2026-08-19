"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/content";
import { assetPath } from "@/lib/paths";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  const isSectionActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link
          className="site-header__logo"
          href="/"
          aria-label="ORBIS home"
          style={{
            width: "clamp(156px, 16vw, 206px)",
            height: "46px",
            padding: 0,
            border: 0,
            borderRadius: 0,
            background: "transparent",
            boxShadow: "none",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={assetPath("/assets/orbis-logo.png")}
            alt="ORBIS Trading and Technical Centre Share Company"
            width={1024}
            height={256}
            priority
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "left center",
              mixBlendMode: "screen",
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,.2))",
            }}
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = isSectionActive(item.href);
            const exact = pathname === item.href;

            return (
              <div
                className={`desktop-nav__item ${active ? "desktop-nav__item--active" : ""}`}
                key={item.label}
              >
                <Link href={item.href} aria-current={exact ? "page" : undefined}>
                  {item.label}
                  {item.children ? <span className="desktop-nav__chevron" aria-hidden="true" /> : null}
                </Link>
                {item.children ? (
                  <div className="desktop-nav__menu">
                    <div className="desktop-nav__menu-label">{item.label}</div>
                    {item.children.map((child) => {
                      const childActive = pathname === child.href || pathname.startsWith(child.href);
                      return (
                        <Link
                          className={childActive ? "desktop-nav__menu-link--active" : undefined}
                          href={child.href}
                          key={child.label}
                          aria-current={pathname === child.href ? "page" : undefined}
                        >
                          <span>{child.label}</span>
                          <span aria-hidden="true">↗</span>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
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
          {navItems.map((item, index) => {
            const active = isSectionActive(item.href);
            return (
              <div
                className={`mobile-menu__group ${active ? "mobile-menu__group--active" : ""}`}
                key={item.label}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mobile-menu__children">
                    {item.children.map((child) => (
                      <Link
                        href={child.href}
                        key={child.label}
                        onClick={() => setOpen(false)}
                        aria-current={pathname === child.href ? "page" : undefined}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
          <Link className="mobile-menu__cta" href="/contact/" onClick={() => setOpen(false)}>
            Start an enquiry <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
