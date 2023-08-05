import Profile from '@gossip/components/home/Profile';
import Trending from '@gossip/components/home/Trending';
import Feeds from '@gossip/components/home/Feeds';
import MainLayout from '@gossip/components/mainLayout';
import { Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

const HomePage = () => {
    return (
        <MainLayout title="Home" >
            <Feeds />
        </MainLayout>
    )
}

export default HomePage