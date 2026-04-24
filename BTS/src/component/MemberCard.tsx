import type {Member} from "../types/member.ts";

interface MemberCardProps {
    member: Member;
}


function MemberCard({member}: MemberCardProps) {
    const { image, nick } = member;
    return (
        <div className="member-card">
            <img src={image} alt={nick} className="photo"/>
            <h2 className="nick">{nick}</h2>
            <p className="team">BTS</p>
        </div>
    );
}

// interface MemberCardProps {
//     image: String;
//     nick:String;
// }


// function MemberCard(props:MemberCardProps){
//     return (
//         <div>
//             <img src={props.image}/>
//             <h1>{props.nick}</h1>
//         </div>
//     );
// }

export default MemberCard;