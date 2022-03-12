import styled from "styled-components";


const Button = styled.button`
border:solid black 0px;
background-color:${(props)=>props.variant==="outline" ? "rgba(0, 0, 0, 0.911)" :"#f8f1f1"} ;
color:${(props)=>(props.variant==="outline" ? "#f8f1f1" :"rgba(0, 0, 0, 0.911)")};
padding: 0.25em 1em
height:40px;

justify-content: space-between;
border:dotted 1px
margin: 0 1em;



&.A{
    color:white;
    background-color:rgb(46, 121, 235);
    height:28px;

    margin:10px;
    font-weight: 400;


    
}
&.B{
height:28px;
margin:10px;
font-weight: 550;


}
&.C{
    border:dotted 1px;
    height:28px;
    font-weight: bold;

margin:10px;


}
&.Simple{
    margin:12px;
    // padding:20px;
    border:none;
    justify-content: space-between;

}

&.Simple1{
    margin:12px;
    // padding:20px;
    border:none;
    justify-content: space-between;
    color:blue;
    

}
`;
// const FancyButton=styled(Button)`
// background-image:linear-gradient(to right,#f6d365 0%, #fda085 100%);
// border:none`;


export { Button };
