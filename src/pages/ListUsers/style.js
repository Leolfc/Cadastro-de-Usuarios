import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
flex-direction:column;
gap: 10px;
margin-top: 30px;
@media screen and (max-width:650px) {
  max-width: 80%;
  margin: 30px auto;
}


`;

export const ContainerUsuarios = styled.div`
display: grid;
grid-template-columns: repeat(2, 400px);
gap: 10px 50px;
flex-flow: row wrap;
@media screen and (max-width:650px) {
    grid-template-columns: repeat(1, 400px);
    margin-top: 20px;
    
}
@media screen and (max-width:900px) {
    grid-template-columns: repeat(1, 400px);
    margin-top: 20px;
    
}
`
export const CardUsers = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:10px;
max-width: 400px;
background-color: #252d48 ;
padding:16px;
border-radius: 32px;
p{
    color: #fff;
    font-size: 14px;
}
h3{
    color:#fff;
    margin-bottom: 10px;
    text-transform: capitalize;
}

`

export const TrashIcon = styled.img`
cursor: pointer;
padding-left: 15px;

`

export const AvatarUser= styled.img`
max-width: 50px;
max-height: 50px;
`