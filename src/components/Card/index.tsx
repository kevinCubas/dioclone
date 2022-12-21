import React from "react";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from "./style";

import { FiThumbsUp } from "react-icons/fi";

import nasaBanner from "../../assets/nasa.jpg"

export function Card() {
  return (
    <CardContainer>
      <ImageBackground src={nasaBanner} alt=""/>
      <Content>
        <UserInfo>
          <UserPicture 
            src="https://avatars.githubusercontent.com/u/61201131?s=400&u=f1d2c757917dd5abaaaeec6aa4a0236aefbe914e&v=4" 
            alt=""
            width={32}
            height={32}
            />
          <div>
            <h4>Kevin C</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso e HTML e CSS</h4>
          <p>Projeto feito durante o curso de HTML e CSS no Bootcamp DIO do Global Avanade... <strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 16
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
};