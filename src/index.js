import React, { useState } from 'react';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function index() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [ope, setOpe] = useState(false);
    const [qualOpe, setQualOpe] = useState(0);
    const [result, setResult] = useState(0);
    const [conta, setConta] = useState('');

    function qualNumero(num) {
        if (ope) {
            setNum2(num2 + num);
            setConta(conta + num);
        } else if (!ope) {
            setNum1(num1 + num);
            setConta(num1 + num);
            // setResult(parseFloat(num1) + parseFloat(num2)); ÷
        }
    }

    function realizaOperação() {
        switch (qualOpe) {
            case 0: setResult(parseFloat(num1));
                break;
            case 1:
                setResult(parseFloat(num1) + parseFloat(num2));
                break;
            case 2:
                setResult(parseFloat(num1) - parseFloat(num2));
                break;
            case 3:
                setResult(parseFloat(num1) * parseFloat(num2));
                break;
            case 4:
                setResult(parseFloat(num1) / parseFloat(num2));
                break;
        }
    }

    function clear() {
        setNum1('');
        setNum2('');
        setResult(0);
        setConta('');
        setQualOpe(0);
        setOpe(false);
    }

    return (
        <Container>
            <Display>
                <DisplayOperacoes>
                    <DisplayOperacoesText>{conta}</DisplayOperacoesText>
                </DisplayOperacoes>
                <DisplayResultado>
                    <DisplayResultadoText>{result}</DisplayResultadoText>
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
                    <ButtonSinais onPress={() => {
                        setQualOpe(4);
                        setConta(conta + " ÷ ");
                        setOpe(true);
                    }}>
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
                    <ButtonSinais onPress={() => {
                        setQualOpe(3);
                        setConta(conta + " x ");
                        setOpe(true);
                    }}>
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
                    <ButtonSinais onPress={() => {
                        setQualOpe(2);
                        setConta(conta + " - ");
                        setOpe(true);
                    }}>
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
                    <ButtonSinais onPress={() => {
                        setQualOpe(1);
                        setConta(conta + " + ");
                        setOpe(true);
                    }}>
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
                    <ButtonNumbers onPress={() => qualNumero('.')}>
                        <ButtonNumbersText>.</ButtonNumbersText>
                    </ButtonNumbers>
                    <ButtonSinais onPress={realizaOperação}>
                        <ButtonSinaisText style={{ color: '#00ff00' }}>=</ButtonSinaisText>
                    </ButtonSinais>
                </LineButton>
            </Content>
        </Container>
    );
}