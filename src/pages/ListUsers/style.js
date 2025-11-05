import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction:column;
margin: 20px auto;
text-align: center;
gap: 10px;


`;

export const ContainerUsuarios = styled.div`
display: flex;
flex-flow: row wrap;
`;

export const CardUsers = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:10px;
max-width: 400px;
background-color: #252d48 ;
padding:16px;
border-radius: 16px;
p{
    color: #fff;
    font-size: 14px;
}
h3{
    color:#fff;
    margin-bottom: 10px;

}
`

export const TrashIcon = styled.img`
cursor: pointer;
`

export const AvatarUser= styled.img`
max-width: 50px;
max-height: 50px;
`