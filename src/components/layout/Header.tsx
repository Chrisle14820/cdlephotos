import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";

export default function Header() {
  return (
    <div className="text-primary-foreground fixed inset-0 z-49 bg-transparent w-full flex justify-between items-start p-16 max-h-[160px]">
      <Drawer>
        <DrawerTrigger>
          <Menu
            size={32}
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </DrawerTrigger>
        <DrawerContent data-vaul-drawer-direction="top">
          <DrawerHeader>
            <DrawerClose>
              <X
                size={32}
                className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </DrawerClose>
          </DrawerHeader>
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex flex-col gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/docs">home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/docs">about me</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/docs">contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/docs">documentation</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="flex flex-col gap-12">
              <NavigationMenuItem asChild>
                <div>
                  <div className="flex flex-col">
                    <h4>quick contact</h4>
                    <span>phone: +1 972 804 2797</span>
                    <span>email: chris14820@gmail.com</span>
                  </div>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem asChild>
                <div className="flex gap-4">
                  <Link href="/">insta</Link>
                  <Link href="/">github</Link>
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
