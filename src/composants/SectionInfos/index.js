import React from 'react'
import { Button } from '../ButtonElements'




import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    EnTete,
    SousTitre,
    BtnWrap,
    ImgWrapp,
    Image,
    SousTitreColumn2
} from './InfoElements'



const SectionInfos = ({lightBg, id, imgStart, topLine, lightText, ligneEnTete, darkText, description,info1,info2,info3,info0, buttonLabel,img, To, alt, primary, dark, dark2}) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <EnTete lightText={lightText}>{ligneEnTete}</EnTete>
                                <SousTitre darkText={darkText}>{description}</SousTitre>
                                <SousTitre darkText={darkText}>{info0}</SousTitre>
                                <ImgWrapp>
                                </ImgWrapp>
                                <BtnWrap>
                                    <Button 
                                        to={To}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark = {dark ? 1 : 0}
                                        dark2 = {dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapp>
                                <Image src={img} alt={alt}/>
                                <SousTitreColumn2 darkText={darkText}>{info1}</SousTitreColumn2>
                                <SousTitreColumn2 darkText={darkText}>{info2}</SousTitreColumn2>
                                <SousTitreColumn2 darkText={darkText}>{info3}</SousTitreColumn2>
                            </ImgWrapp>
                           
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SectionInfos
