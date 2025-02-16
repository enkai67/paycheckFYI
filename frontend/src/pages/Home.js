import HeroSection from '#components/HeroSection';
import JobScroller from '#components/JobScroller';
import SalarySection from '#components/SalarySection';
import Footnote from '../components/Footnote';
import JobInfoSection from '../components/JobInfoSection';

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <JobScroller />
            <SalarySection />
            <JobInfoSection />
            <Footnote />
        </div>
    );
};

export default Home;
