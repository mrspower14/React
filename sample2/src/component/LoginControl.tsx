import { useState } from "react";

// Greeting
type GreetingProps = {
    isLoggedIn : boolean;
}

function UserGreeting() {
    return <h1>다시오셨군요!</h1>;
}

function GuestGreeting() {
    return <h1>회원가입을 해주세요.</h1>;
}

function Greeting({isLoggedIn}: GreetingProps) {
    return isLoggedIn ? <UserGreeting/> : <GuestGreeting/>;
}

// Button
type ButtonProps = {
    onClick: () => void;
}

function LoginButton({onClick}: ButtonProps) {
    return <button onClick={onClick}>로그인</button>
}

function LogoutButton({onClick}: ButtonProps) {
    return <button onClick={onClick}>로그아웃</button>
}

// LoginControl
export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const haneldLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            { isLoggedIn ? <LogoutButton onClick={haneldLogoutClick}/> : <LoginButton onClick={handleLoginClick} /> }
        </div>
    );
}