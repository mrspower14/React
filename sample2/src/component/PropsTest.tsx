interface PropsTestProps {
    name: string;
    url: string;
    rmk: string;
}

function PropsTest(props: PropsTestProps) {
    return (
      <>
        <h1>안녕! {props.name}</h1>
        <img src={props.url}/>
        <h1>{props.rmk}</h1>
      </>
    )
}

export default PropsTest;