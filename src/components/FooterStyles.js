import styled from 'styled-components';
   
export const Box = styled.div`
    box-sizing: border-box;
    padding: 80px 0px;
    background: black;
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
    
    @media (max-width: 1080px) {
        padding: 70px 30px;
    }
    @media (min-width: 1025px) {
        text-align: left;
    }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`;
   
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;
   
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 
                            minmax(185px, 1fr));
    grid-gap: 20px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, 
                            minmax(200px, 1fr));
    }
`;
   
export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;
   
export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const Policy = styled.div`
    width: 100%;
    max-width: 764px;
    font-size: 12px;
    line-height: 1.33;
    color: #2b2738;
    margin: 0 50px;
`;

export const PolicyRow = styled.p`
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
`;