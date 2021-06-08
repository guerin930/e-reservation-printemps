import  styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
 min-height: 692px;
 position: fixed;
 bottom: 0;
 left: 0;
 right: 0;
 top: 0;
 padding: 0;
 border: none;
 outline: none;
 z-index: 0;
 overflow: hidden;
 background: #e7f7fe;
 color: #fff;
 @media screen and (max-width: 400px) {
     height: 80%
 }
`
export const ContactForm = styled.form`
 margin: 3rem auto 0;
 max-width: 50%;
 max-width: 350px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 border: 1px solid #fff;
 background:  #010101;
 padding: 0 30px 10px;
 box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.637);
 @media screen and (max-width: 400px) {
     padding: 32px 32px;
 }
`
export const FormH2 = styled.h2`
 margin-bottom: 15px;
 margin-top: 35px;
 text-align: center;
`
export const FormContent = styled.div`
 grid-template-rows: repeat(4, 1fr) 105px;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;

 @media screen and (max-width: 480px) {
     padding: 10px;
 }
`
export const FormInput = styled.input`
 background: none;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 font-size: 1.1rem;
 border: none;
 border-bottom: 1px solid#008000;
 color: #fff;
 ::placeholder {
    color: rgb(190, 188, 188);
 };
 width: 100%;
 margin: 0 auto;
 padding: 16px 0;
 :focus {outline: 0;}
`
export const FormTextArea = styled.textarea`
 background: none;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 font-size: 1.1rem;
 border: none;
 border-bottom: 1px solid#008000;
 color: #fff;
 ::placeholder {
    color: rgb(190, 188, 188);
 };
 width: 100%;
 margin: 0 auto;
 resize: none;
 padding: 24px 0;
 :focus {outline: 0;}
`
export const EmailContent = styled.div`
 position: relative;
 width: 100%;
 margin: 0 auto;
 input {
    width: 100%;
 }
`
export const FormLabel = styled.label`
 display: none;
 position: absolute;
 top: 4px;
 color: #ff4d4d;
 right: 0;
 transform-origin: 50% 50%;
`
export const FormMessage = styled.div`
 margin-top: 10px;
 padding: 12px;
 opacity: 0;
 transition: 0.2s ease;
 color: black;
 border-radius: 4px;
 box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
`
export const InputButton = styled.input` 
 font-size: 1.3rem;
 padding: 16px 0; 
 border: none; 
 margin-top: 10px;
 border-radius: 4px;
 color: #fff;
 cursor: pointer;
 transition: .2s;
 width: 100%;
 background: none;
 :hover{
    letter-spacing: 2px;
 };
`
export const Icon = styled(Link)`
 margin-left: 32px;
 margin-top: 32px;
 text-decoration: none;
 color: #fff;
 font-weight: 700;
 font-size: 32px;

 @media screen and (max-width: 400px) {
     margin-top: 8px;
     margin-left: 18px;
 };
`
