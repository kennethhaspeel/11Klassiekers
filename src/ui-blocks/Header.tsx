"use client";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Header = () => {
  const mobiel = useIsMobile();

  const { isAuthenticated, isLoading,getPermission } = useKindeBrowserClient();

 const isAdmin = !isLoading && getPermission("admin")?.isGranted;
// const isAdmin = true
// const isLoading = false
// const isAuthenticated = false
  return (
    <header className="animate-slide h-12 p-3 text-white bg-black/80 border-b sticky top-0 z-20 rounded-2xl">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="default"
            aria-label="home"
            className="rounded-full"
            asChild
          >
            <Link
              href="/"
              className="flex justify-center items-center gap-2 ml-0"
              title="Home"
            >
              <h2> 11 Klassiekers</h2>
            </Link>
          </Button>
        </div>

        {mobiel ? (
          <h2>dit is een mobiel scherm</h2>
        ) : (
          <>
            <div className="flex  gap-2">
              <div className="flex ">
                <Button
                  variant="ghost"
                  size="default"
                  aria-label="wedstrijden"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="/Deelnemer/wedstrijdenOverzicht"
                    className="flex justify-center items-center gap-2 ml-0"
                    title="wedstrijdenOverzicht"
                  >
                    Wedstrijden
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="default"
                  aria-label="home"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="/Deelnemer/mijnploeg"
                    className="flex justify-center items-center gap-2 ml-0"
                    title="Mijn Ploeg"
                  >
                    Mijn Ploeg
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="default"
                  aria-label="tussenstand"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href="Deelnemer/tussenstand"
                    className="flex justify-center items-center gap-2 ml-0"
                    title="tussenstand"
                  >
                    Tussenstand
                  </Link>
                </Button>
              </div>
            </div>
            {isAdmin ? (
              <>
                <div className="flex ">
                  <Button
                    variant="ghost"
                    size="default"
                    aria-label="home"
                    className="rounded-full"
                    asChild
                  >
                    <Link
                      href="Admin/OverzichtWedstrijden"
                      className="flex justify-center items-center gap-2 ml-0"
                      title="Uitslag Verwerken"
                    >
                      Uitslag verwerken
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="default"
                    aria-label="deelnemers"
                    className="rounded-full"
                    asChild
                  >
                    <Link
                      href="Admin/deelnemers"
                      className="flex justify-center items-center gap-2 ml-0"
                      title="Deelnemers"
                    >
                      Deelnemers
                    </Link>
                  </Button>
                </div>
              </>
            ) : (
              ""
            )}
             <div className="flex items-center gap-2">
              <div className="flex items-center">
                {isLoading ? (
                  <p>laden</p>
                ) : (
                  <div>
                    {!isAuthenticated ? (
                      <>
                        <Button
                          variant="ghost"
                          size="default"
                          aria-label="log in"
                          asChild
                        >
                          <LoginLink>Log In</LoginLink>
                        </Button>

                        <Button asChild>
                          <RegisterLink>Registreer</RegisterLink>
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="LogOut"
                        title="LogOut"
                        className="rounded-full"
                        asChild
                      >
                        <LogoutLink>
                          <LogOut />
                        </LogoutLink>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div> 
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
