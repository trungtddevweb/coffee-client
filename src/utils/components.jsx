import {
    ConnectWithoutContact,
    Devices,
    Favorite,
    FlightTakeoff,
    FoodBank,
    HistoryEdu,
    MusicNote,
    Whatshot,
} from '@mui/icons-material'

export const navItems = [
    {
        label: 'Xu hướng',
        slug: '/tags/trending',
        icon: <Whatshot color="warning" />,
    },
    {
        label: 'Yêu thích',
        slug: '/tags/liked',
        icon: <Favorite color="error" />,
    },
    {
        label: 'Viết bài',
        slug: '/tags/write',
        icon: <HistoryEdu color="info" />,
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
]
