import HeroSection from '#components/HeroSection';
import JobScroller from '#components/JobScroller';
import SalarySection from '#components/SalarySection';
import JobInfoSection from '../components/JobInfoSection';

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <JobScroller />
            <SalarySection />
            <JobInfoSection />
        </div>
    );
};

export default Home;
