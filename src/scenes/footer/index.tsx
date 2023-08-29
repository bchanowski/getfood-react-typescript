import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Suspendisse ac massa id sem venenatis consequat. Nunc condimentum
            pulvinar magna, tincidunt sollicitudin eros aliquam at. Nullam
            sapien purus, mattis imperdiet nibh eget, maximus fermentum sapien.
          </p>
          <p>© Getfood All Rigths Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            Praesent quam purus, sodales et molestie sit amet, tempor in libero.
          </p>
          <p className="my-5">
            Proin rhoncus magna vel tortor interdum, et ornare eros ullamcorper.
          </p>
          <p>Pellentesque et euismod nunc.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Praesent porta volutpat venenatis.</p>
          <p>(777)677-1123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
