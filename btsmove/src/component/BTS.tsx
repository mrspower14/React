import { useState } from "react";
import type { Member } from "../types/member.ts";
import { MemberCard } from "./MemberCard";
import Navigation from "./Navigation.tsx";
import './BTS.css'

interface BTSPros {
    members:Member[];
}
export default function BTS({members}:BTSPros) {
    const [index, setIndex] = useState<number>(0);
    const changeIndex = (newIndex: number): void => {
        const len = members.length; //7
        setIndex((newIndex+len) % len);
    }
    return (
        <div className="member-container">
            <MemberCard member={members[index]}/>
            <Navigation index={index} onChangeIndex={changeIndex}/>
        </div>
    );
}