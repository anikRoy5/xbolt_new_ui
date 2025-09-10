"use client"

import { useState } from "react";
import { ChevronDown, Menu, X, Phone, Zap, Users, Settings, BookOpen, Building2, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  interface NavItem {
    name: string;
    icon: LucideIcon;
    description?: string;
    path?: string;
  }
  const productItems = [
    { name: "Voice Calling System", icon: Phone, description: "Real-time calling with recording & controls", path: '/products/voice-calling' },
    { name: "AI Transcription & Notes", icon: Zap, description: "Convert calls to text with smart summaries", path: '/products/ai-transcription' },
    { name: "Messaging Platform", icon: Users, description: "SMS/text messaging with conversation threads", path: '/products/messaging' },
    { name: "Analytics Dashboard", icon: Settings, description: "Multi-tab insights & performance metrics", path: '/products/analytics' },
  ];

  const solutionItems = [
    { name: "Sales Teams", icon: Users, description: "Boost performance with call analytics & AI insights", path: '/solutions/sales' },
    { name: "Customer Support", icon: BookOpen, description: "Enhance experience with transcription & notes",/*  path: '/solutions/support' */ },
    { name: "Organization Management", icon: Building2, description: "Centralize communication & user management", /*path:  '/solutions/organization' */ },
  ];

  const resourceItems = [
    { name: "Documentation", icon: BookOpen, /* path: "/resources/documentation" */ },
    { name: "API Reference", icon: Settings },
    { name: "Help Center", icon: Users },
    { name: "Blog", icon: Building2 },
  ];

  const NavLink = ({ children, hasDropdown = false }: { children: React.ReactNode; hasDropdown?: boolean }) => (
    <div className="flex items-center gap-1 text-navbar-text hover:text-navbar-brand transition-smooth cursor-pointer font-medium">
      {children}
      {hasDropdown && <ChevronDown className="h-4 w-4" />}
    </div>
  );

  const DropdownSection = ({ items, title }: { items: NavItem[]; title?: string }) => (
    <div className="p-2">
      {title && <div className="px-2 py-1 text-sm font-medium text-navbar-muted">{title}</div>}
      {items.map((item, index) => (
        <Link href={item?.path || '/'} key={item?.path || '/'}>
          <DropdownMenuItem key={index} className="p-3 cursor-pointer hover:bg-accent rounded-md">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-medium text-navbar-text">{item.name}</div>
                {item.description && (
                  <div className="text-sm text-navbar-muted mt-1">{item.description}</div>
                )}
              </div>
            </div>
          </DropdownMenuItem>
        </Link>

      ))}
    </div>
  );

  const MobileNavItem = ({ children }: { children: React.ReactNode }) => (
    <div className="px-4 py-3 text-navbar-text hover:bg-accent rounded-lg cursor-pointer font-medium">
      {children}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-navbar-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-navbar py-1">
      <div className="container max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={'/'}>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold text-navbar-brand">XBolt AI</span>
            </div></Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <NavLink hasDropdown>Products</NavLink>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-96 shadow-dropdown" align="start">
                <DropdownSection items={productItems} />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <NavLink hasDropdown>Solutions</NavLink>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 shadow-dropdown" align="start">
                <DropdownSection items={solutionItems} />
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <Link href={'/pricing'}> */}<NavLink>Pricing</NavLink>{/* </Link> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <NavLink hasDropdown>Resources</NavLink>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 shadow-dropdown" align="start">
                <DropdownSection items={resourceItems} />
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <NavLink>Company</NavLink> */}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="navbar-sm">
              Sign In
            </Button>
            <Button variant="navbar-secondary" size="navbar">
              Book Demo
            </Button>
            <Button variant="navbar-primary" size="navbar">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 py-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xl font-bold text-navbar-brand">XBolt AI</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <MobileNavItem>Products</MobileNavItem>
                    <MobileNavItem>Solutions</MobileNavItem>
                    <MobileNavItem>Pricing</MobileNavItem>
                    <MobileNavItem>Resources</MobileNavItem>
                    <MobileNavItem>Company</MobileNavItem>
                  </div>

                  <div className="border-t border-navbar-border pt-6">
                    <div className="flex flex-col gap-3">
                      <Button variant="navbar-ghost" className="justify-start">
                        Sign In
                      </Button>
                      <Button variant="navbar-secondary">
                        Book Demo
                      </Button>
                      <Button variant="navbar-primary">
                        Start Free Trial
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;