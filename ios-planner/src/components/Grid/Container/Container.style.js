import styled from "styled-components"

const CONTAINER_BREACKPOINTS = {
  minWidthXXL: `
  @media(min-width: 1400px){
    width: 1320px;
    background-color: #d33;
  } `,

  maxWidthXXL: `
  @media(max-width: 1400px){
    width: 100%;
  }`,

  minWidthXL: `
  @media(min-width: 1200px){
    max-width: 1140px;
    background-color: #392;
  }`,

  maxWidthXL: `
  @media(max-width:1200px) {
    width:100%;
  }`,

  minWidthLg: `
  @media(min-width: 992px){
    max-width: 960px;
    background-color: #D92;
  }`,

  maxWidthLg: `
  @media(max-width:992px){
    width:100%;
  }`,

  minWidthMd: `
  @media(min-width: 768px){
   max-width: 720px;
   background-color: #039;
  }
  `,

  maxWidthMd: ` 
  @media(max-width:768px){
    width:100%;
  }
  `,

  minWidthSm: `
  @media(min-width:576px){
    max-width: 540px;
    background-color: #812;
  }`,

  maxWidthSm: ` 
  @media(max-width:576px){
    width:100%;
  }`,

  fluid: `
      width: 100%;
      background-color: #000;
    `,
}

const CONTAINER = {
  sm: `${
    CONTAINER_BREACKPOINTS.maxWidthSm +
    CONTAINER_BREACKPOINTS.minWidthSm +
    CONTAINER_BREACKPOINTS.minWidthMd +
    CONTAINER_BREACKPOINTS.minWidthLg +
    CONTAINER_BREACKPOINTS.minWidthXL +
    CONTAINER_BREACKPOINTS.minWidthXXL
  }`,
  md: `${
    CONTAINER_BREACKPOINTS.maxWidthMd +
    CONTAINER_BREACKPOINTS.minWidthMd +
    CONTAINER_BREACKPOINTS.minWidthLg +
    CONTAINER_BREACKPOINTS.minWidthXL +
    CONTAINER_BREACKPOINTS.minWidthXXL
  }`,

  lg: `${
    CONTAINER_BREACKPOINTS.maxWidthLg +
    CONTAINER_BREACKPOINTS.minWidthLg +
    CONTAINER_BREACKPOINTS.minWidthXL +
    CONTAINER_BREACKPOINTS.minWidthXLL
  }`,
  xl: `${
    CONTAINER_BREACKPOINTS.maxWidthXL +
    CONTAINER_BREACKPOINTS.minWidthXL +
    CONTAINER_BREACKPOINTS.minWidthXXL
  }`,
  xxl: `${
    CONTAINER_BREACKPOINTS.minWidthXXL + CONTAINER_BREACKPOINTS.maxWidthXXl
  }`,

  fluid: `${CONTAINER_BREACKPOINTS.fluid}`,
}

const ContainerStyle = styled.div`
  margin: 0 auto;
  background-color: #000;
  ${props => CONTAINER[props.size]}
`

export default ContainerStyle
