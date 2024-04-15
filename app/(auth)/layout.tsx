import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
    <div className="space-y-6 h-screen flex flex-col items-center justify-center">
        <Logo />
        {children};
    </div>
    // <div className="grid h-screen place-items-center">
    //     {children};
    // </div>
    );
 
};

export default AuthLayout;
