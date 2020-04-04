import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    /* background-color:#10661A; */
`;
export const Display = styled.View`
    height: 40%;
    width:100%;
    background-color: #38b6ff;
    border-bottom-left-radius:35px;
    border-bottom-right-radius:35px;
    padding-top: ${Constants.statusBarHeight + `px`};
    justify-content: center;
    text-align:right;
    padding-right: 10px;
`;

export const DisplayOperações = styled.View`
    height:40%;
    width: 100%;
    justify-content:center;
`;

export const DisplayOperaçõesText = styled.Text`
    width: 100%;
    text-align: right;
    font-family:BalooPaaji2-Regular;
    font-size:60px;
    color:#fff;
`;

export const DisplayResultado = styled.View`
    height:20%;
    width:100%;
    justify-content:center;
`;

export const DisplayResultadoText = styled.Text`
    width: 100%;
    text-align: right;
    font-family:BalooPaaji2-Regular;
    font-size:40px;
    color:#cccccc;
`;

export const Content = styled.View`
    width: 100%;
    height: 60%;
    /* background-color:#cccccc; */
    flex-direction: column;
    padding: 10px;
`;

export const LineButton = styled.View`
    width:100%;
    height:18%;
    background-color:#FFF;
    margin-bottom:1%;
    margin-top:1%;
    justify-content:space-between;
    flex-direction: row;
    align-items: center;
`;

export const ButtonNumbers =styled.TouchableOpacity`
    width:20%;
    height: 90%;
    background-color:#FFF;
    border-radius: 25px;
    border-width: 1px;
    border-color: #38b6ff;
    align-self: center;
    justify-content: center;
    text-align:center;
`;

export const ButtonNumbersText =styled.Text`
    font-family: BalooPaaji2-Regular;
    font-size:50px;
    color:#38b6ff;
    text-align: center;
`;

export const ButtonSinais =styled.TouchableOpacity`
    width:20%;
    height: 90%;
    background-color:#38b6ff;
    border-radius: 25px;
    border-width: 1px;
    border-color: #38b6ff;
    align-self: center;
    justify-content: center;
    text-align:center;
`;

export const ButtonSinaisText =styled.Text`
    font-family: BalooPaaji2-Regular;
    font-size:50px;
    color:#fff;
    text-align: center;
`;