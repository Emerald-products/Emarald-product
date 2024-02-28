const Footer = () => {
  return (
    <div className="bg-[#3C1C6C] text-white px-6 pt-32 pb-48 gap-8 flex mt-10">
      <div className="pl-6 max-w-72 mr-auto">
        <h1 className="text-2xl font-bold mb-4">EMERALD</h1>
        <p className="">
          where simplicity meets security. Effortlessly manage and pay your
          bills online
        </p>
      </div>

      <div className="px-10">
        <h5 className="text-xl font-bold mb-4">Company</h5>
        <ul className="text-sm mb-2">About Us</ul>
        <ul className="text-sm mb-2">Pricing</ul>
      </div>
      <div>
        <h5 className="text-xl font-bold mb-4">Legal</h5>
        <ul className="mb-2 text-sm font">Privacy policy</ul>
        <ul className="mb-2">Terms of sevice</ul>
        <ul className="">Complaints</ul>
      </div>
      <div>
        <h5 className="text-xl font-bold mb-4">About Emerald</h5>
        <p>contact us info@emerald.com</p>
        <p>opposit Mapoly filling station, liberty road, oke ado</p>
      </div>
    </div>
  );
};

export default Footer;
