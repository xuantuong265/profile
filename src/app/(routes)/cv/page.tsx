import CvContent from "@/components/features/cv/cv-content";
import NavDesktop from "@/components/features/cv/nav-desktop";

const CvPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[280px]">
        <NavDesktop />
      </div>

      <div className="flex flex-1">
        <CvContent />
      </div>
    </div>
  );
};

export default CvPage;
