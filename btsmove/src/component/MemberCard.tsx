import type { Member } from "../types/member.ts";

interface MemberCardProps {
    member: Member;
}

export function MemberCard({member}: MemberCardProps) {
    const {image, nick} = member;

    return (
        <div className="member-card">
            <img src={image} alt={nick} className="photo"/>
            <h2 className="nick">{nick}</h2>
            <p className="team">BTS</p>
        </div>
    );
}

