import React from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Display,
    DisplayOperações,
    DisplayResultado,
    DisplayOperaçõesText,
    DisplayResultadoText,
    Content,
    LineButton,
    ButtonNumbers,
    ButtonNumbersText,
    ButtonSinais,
    ButtonSinaisText,
} from './styles/index';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


// import { Container } from './styles';

export default function index() {
    return (
        <Container>
            <Display>
                <DisplayOperações>
                    <DisplayOperaçõesText>16 + 16</DisplayOperaçõesText>
                </DisplayOperações>
                <DisplayResultado>
                    <DisplayResultadoText>32</DisplayResultadoText>
                </DisplayResultado>
            </Display>
            <Content>
                <LineButton>
                    <ButtonSinais>
                        <ButtonSinaisText style={{color:'#ff0000'}}>C</ButtonSinaisText>
                    </ButtonSinais>
                    <ButtonSinais>
                        <ButtonSinaisText>()</ButtonSinaisText>
                    </ButtonSinais>
                    <ButtonSinais>
                        <ButtonSinaisText>%</ButtonSinaisText>
                    </ButtonSinais>
                    <ButtonSinais>
                        <MaterialCommunityIcons name="division" size={35} color="#fff" style={{ textAlign: "center" }} />
                    </ButtonSinais>
                </LineButton>
                <LineButton>
                    <ButtonNumbers>
                        <ButtonNumbersText>7</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>8</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>9</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais>
                        <Feather name="x" size={30} color="#fff" style={{ textAlign: "center" }} />
                    </ButtonSinais>
                </LineButton>
                <LineButton>
                    <ButtonNumbers>
                        <ButtonNumbersText>4</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>5</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>6</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais>
                        <Ionicons name="ios-remove" size={40} color="#fff" style={{ textAlign: "center" }} />
                    </ButtonSinais>
                </LineButton>
                <LineButton>
                    <ButtonNumbers>
                        <ButtonNumbersText>1</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>2</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>3</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais>
                        <ButtonSinaisText>+</ButtonSinaisText>
                    </ButtonSinais>
                </LineButton>
                <LineButton>
                    <ButtonNumbers>
                        <ButtonNumbersText>,</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>0</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>.</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais>
                        <ButtonSinaisText style={{color:'#00ff00'}}>=</ButtonSinaisText>
                    </ButtonSinais>
                </LineButton>
            </Content>
        </Container>
    );
}