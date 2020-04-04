import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Display,
    DisplayOperacoes,
    DisplayResultado,
    DisplayOperacoesText,
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
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [ope, setOpe] = useState(false);
    const [qualOpe, setQualOpe] = useState('');
    const [result, setResult] = useState(0);
    const [conta, setConta] = useState('');

    function qualNumero(num) {
        if (ope) {
            setNum2(num2 + num);
            setConta(conta + num2);
        } else if (!ope) {
            setNum1(num1 + num);
            setConta(num1+num);

            // setResult(parseInt(num1) + parseInt(num2));
        }
    }

    function clear() {
        setNum1('');
        setNum2('');
        setResult(0);
        setConta('');
    }

    return (
        <Container>
            <Display>
                <DisplayOperacoes>
                    <DisplayOperacoesText>{conta}</DisplayOperacoesText>
                </DisplayOperacoes>
                <DisplayResultado>
                    <DisplayResultadoText>32</DisplayResultadoText>
                </DisplayResultado>
            </Display>
            <Content>
                <LineButton>
                    <ButtonSinais onPress={clear}>
                        <ButtonSinaisText style={{ color: '#ff0000' }}>C</ButtonSinaisText>
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
                    <ButtonNumbers onPress={() => qualNumero(7)}>
                        <ButtonNumbersText>7</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers onPress={() => qualNumero(8)}>
                        <ButtonNumbersText>8</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers onPress={() => qualNumero(9)}>
                        <ButtonNumbersText>9</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais>
                        <Feather name="x" size={30} color="#fff" style={{ textAlign: "center" }} />
                    </ButtonSinais>
                </LineButton>
                <LineButton>
                    <ButtonNumbers onPress={() => qualNumero(4)}>
                        <ButtonNumbersText>4</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers onPress={() => qualNumero(5)}>
                        <ButtonNumbersText>5</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers onPress={() => qualNumero(6)}>
                        <ButtonNumbersText>6</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais>
                        <Ionicons name="ios-remove" size={40} color="#fff" style={{ textAlign: "center" }} />
                    </ButtonSinais>
                </LineButton>
                <LineButton>
                    <ButtonNumbers onPress={() => qualNumero(1)}>
                        <ButtonNumbersText>1</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers onPress={() => qualNumero(2)}>
                        <ButtonNumbersText>2</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers onPress={() => qualNumero(3)}>
                        <ButtonNumbersText>3</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais onPress={() => setConta(conta + " +")}>
                        <ButtonSinaisText>+</ButtonSinaisText>
                    </ButtonSinais>
                </LineButton>
                <LineButton>
                    <ButtonNumbers>
                        <ButtonNumbersText>,</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers onPress={() => qualNumero(0)}>
                        <ButtonNumbersText>0</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonNumbers>
                        <ButtonNumbersText>.</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais>
                        <ButtonSinaisText style={{ color: '#00ff00' }}>=</ButtonSinaisText>
                    </ButtonSinais>
                </LineButton>
            </Content>
        </Container>
    );
}