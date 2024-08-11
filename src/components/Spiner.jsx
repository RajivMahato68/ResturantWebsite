import Logo from "../assets/logo.png";

const Spiner = () => {
  return (
    <>
      <div className="relative flex justify-center items-center bg-[#232323] h-screen w-full ">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#F38220]"></div>
        <img src={Logo} className="rounded-full h-28 w-28" />
      </div>
    </>
  );
};

export default Spiner;
