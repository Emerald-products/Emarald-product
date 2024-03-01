const Footer = () => {
  return (
    <div className="container bg-[#3C1C6C] text-white px-12 pt-32 pb-48 gap-12 flex flex-col md:flex-row mt-10">
      <div className="max-w-72 mr-auto">
        <h1 className="text-2xl font-bold mb-4">EMERALD</h1>
        <p className="">
          where simplicity meets security. Effortlessly manage and pay your
          bills online
        </p>
      </div>

      <div className="">
        <h5 className="text-xl font-bold mb-4">Company</h5>
        <ul className="text-sm mb-2">About Us</ul>
        <ul className="text-sm mb-2">Pricing</ul>
      </div>
      <div>
        <h5 className="text-xl font-bold mb-4">Legal</h5>
        <ul className="mb-2 text-sm">Privacy policy</ul>
        <ul className="mb-2">Terms of sevice</ul>
        <ul className="mb-2 text-sm">Complaints</ul>
      </div>
      <div>
        <h5 className="text-xl font-bold mb-4">About Emerald</h5>
        <p className="mb-2 text-sm">contact us info@emerald.com</p>
        <p className="mb-2 text-sm">
          opposit MOPOY filling station, liberty road, oke ado
        </p>
      </div>
    </div>
  );
};

export default Footer;
