import {
    AccessTime,
    ConnectWithoutContact,
    Devices,
    FamilyRestroom,
    FlightTakeoff,
    FoodBank,
    LocalFlorist,
    MusicNote,
    Notes,
    Palette,
    School,
    Whatshot,
} from '@mui/icons-material'

export const navItems = [
    {
        label: 'Xu hướng',
        slug: '/trending',
        icon: <Whatshot color="warning" />,
    },
    {
        label: 'Gần đây',
        slug: '/recent',
        icon: <AccessTime color="info" />,
    },
    {
        label: 'Tâm sự',
        slug: '/tags/sharing',
        icon: <ConnectWithoutContact color="error" />,
    },
    {
        label: 'Công nghệ',
        slug: '/tags/technology',
        icon: <Devices color="success" />,
    },
    {
        label: 'Âm nhạc',
        slug: '/tags/music',
        icon: <MusicNote color="info" />,
    },
    {
        label: 'Du lịch',
        slug: '/tags/traveling',
        icon: <FlightTakeoff color="primary" />,
    },
    {
        label: 'Ẩm thực',
        slug: '/tags/cuisine',
        icon: <FoodBank color="success" />,
    },
    {
        label: 'Nghệ Thuận',
        slug: '/tags/art',
        icon: <Palette color="warning" />,
    },
    {
        label: 'Thanh xuân',
        slug: '/tags/youth',
        icon: <LocalFlorist color="secondary" />,
    },
    {
        label: 'Gia đình',
        slug: '/tags/family',
        icon: <FamilyRestroom color="error" />,
    },
    {
        label: 'Học tập',
        slug: '/tags/education',
        icon: <School color="primary" />,
    },
    {
        label: 'Khác',
        slug: '/tags/other',
        icon: <Notes color="info" />,
    },
]
