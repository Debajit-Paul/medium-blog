import Quote from "../component/Quote";
import Auth from "../component/Auth";
const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <Auth type="signup" />
      </div>
      <Quote />
    </div>
  );
};

export default Signup;
