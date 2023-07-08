import {
    ConnectWithoutContact,
    Devices,
    Favorite,
    FlightTakeoff,
    HistoryEdu,
    MusicNote,
    Whatshot,
} from '@mui/icons-material'

export const navItems = [
    {
        label: 'Xu hướng',
        slug: '/trending',
        icon: <Whatshot color="warning" />,
    },
    {
        label: 'Yêu thích',
        slug: '/liked',
        icon: <Favorite color="error" />,
    },
    {
        label: 'Viết bài',
        slug: '/write',
        icon: <HistoryEdu color="info" />,
    },
    {
        label: 'Tâm sự',
        slug: '/sharing',
        icon: <ConnectWithoutContact color="error" />,
    },
    {
        label: 'Công nghệ',
        slug: '/technology',
        icon: <Devices color="success" />,
    },
    {
        label: 'Âm nhạc',
        slug: '/music',
        icon: <MusicNote color="info" />,
    },
    {
        label: 'Du lịch',
        slug: '/traveling',
        icon: <FlightTakeoff color="primary" />,
    },
]
