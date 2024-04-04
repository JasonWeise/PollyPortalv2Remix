import {AppShell, Burger, Container, Group, Image} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppNavbar } from './NavBar/Navbar';
import img_logo from "~/_content/PrincessPolly-White-36h.png";
import {Outlet} from "@remix-run/react";

export function ApplicationShell() {
    const [opened, { toggle }] = useDisclosure();



    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Image src={img_logo} h={25}/>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar >
                <AppNavbar/>
            </AppShell.Navbar>
            <AppShell.Main><Container h={"100%"} fluid ><Outlet/></Container></AppShell.Main>
        </AppShell>
    );
}