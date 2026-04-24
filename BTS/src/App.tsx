
import './App.css'
import type {Member} from './types/member.ts';
import MemberCard from './component/MemberCard';
import './component/MemberCard.css';

const members: Member[] = [
  {image: 'bts/bts1.png', nick:'RM'},
  {image: 'bts/bts2.png', nick:'진'},
  {image: 'bts/bts3.png', nick:'슈가'},
  {image: 'bts/bts4.png', nick:'제이홉'},
  {image: 'bts/bts5.png', nick:'지민'},
  {image: 'bts/bts6.png', nick:'뷔'},
  {image: 'bts/bts7.png', nick:'정국'}
];


function App() {

  return (
    <div>

      {/* <MemberCard image={members[0].image} nick={members[0].nick}/>
      <MemberCard image={members[1].image} nick={members[1].nick}/>
      <MemberCard image={members[2].image} nick={members[2].nick}/>
      <MemberCard image={members[3].image} nick={members[3].nick}/>
      <MemberCard image={members[4].image} nick={members[4].nick}/>
      <MemberCard image={members[5].image} nick={members[5].nick}/>
      <MemberCard image={members[6].image} nick={members[6].nick}/> */}

      <MemberCard member={members[0]}/>
      <MemberCard member={members[1]}/>
      <MemberCard member={members[2]}/>
      <MemberCard member={members[3]}/>
      <MemberCard member={members[4]}/>
      <MemberCard member={members[5]}/>
      <MemberCard member={members[6]}/>
      
    </div>
  )
}

export default App
