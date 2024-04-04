import {ScrollArea, AppShell, Text, Center, UnstyledButton} from '@mantine/core';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import classes from './Navbar.module.css';

const mockdata = [
    { label: 'Dashboard', icon: IconGauge, topLevelLink: '/app/home' },
    {
        label: 'Market news',
        icon: IconNotes,
        initiallyOpened: false,
        links: [
            { label: 'Overview', link: '/app/overview' },
            { label: 'Forecasts', link: '/' },
            { label: 'Outlook', link: '/' },
            { label: 'Real time', link: '/' },
        ],
    },
    {
        label: 'Releases',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    { label: 'Analytics', icon: IconPresentationAnalytics },
    { label: 'Contracts', icon: IconFileAnalytics },
    { label: 'Settings', icon: IconAdjustments },
    {
        label: 'Security',
        icon: IconLock,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];

export function AppNavbar() {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <>
            <AppShell.Section>
                <UnstyledButton className={classes.headerBlock}>
                <Center>
                    <Text fw={700} size={"lg"}>POLLY PORTAL</Text>
                </Center>
                </UnstyledButton>
            </AppShell.Section>
            <AppShell.Section grow component={ScrollArea}>
                        <div className={classes.linksInner}>{links}</div>
            </AppShell.Section>
            <AppShell.Section pr="md" pl="md">
                <div className={classes.footer}>
                    <UserButton/>
                </div>
            </AppShell.Section>
        </>
    );
}