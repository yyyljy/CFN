import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputLeftAddon,
  Textarea,
  Button,
  Text,
  Select,
  SelectField,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { eOptions } from 'src/components/atoms/EnumArray';
import Ether from 'src/components/atoms/Ether';
import { useWallet, useWeb3 } from 'src/hooks/useMetamask';

export default function MakeCrowdfund() {
  const [filmName, setFilmName] = useState('');
  const [director, setDirector] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [targetAmount, setTargetAmount] = useState(0);
  const [vst, setVst] = useState(0);
  const [vet, setVet] = useState(0);
  const [fst, setFst] = useState(0);
  const [fet, setFet] = useState(0);
  const { crowdfundContract, getContracts } = useWeb3();
  const { account, getAccount } = useWallet();
  const [reward, setReward] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let opt = eOptions;

  useEffect(() => {
    getContracts();
    getAccount();
  }, []);

  async function sendCrowdfundData() {
    // console.log(vst, vet, fst, fet);
    await crowdfundContract.methods
      .makeCrowdfund(
        filmName + '__' + director,
        imgUrl,
        synopsis,
        (targetAmount * 10 ** 18).toString(),
        vst,
        vet,
        fst,
        fet
      )
      .send({
        from: account,
        value: '1000000000000000',
      });
  }

  const optBoxes = () => {
    const res = opt.map((item, index) => (
      <Flex gap={'10px'} key={index}>
        <Checkbox
          key={index}
          colorScheme={'orange'}
          onChange={e => {
            checkedItems[index] = e.target.checked;
          }}
        >
          {item}
        </Checkbox>
        <Text alignSelf={'center'}>x</Text>
        <Input
          w={'30px'}
          onChange={e => {
            // reward.map((v, i) => {
            //   if (i === index) setReward(e.target.value);
            // });
            console.log(reward);
          }}
          value={reward[index]}
        ></Input>
        <Text alignSelf={'center'}>개</Text>
      </Flex>
    ));
    return res;
  };

  return (
    <Box>
      <Text ml={'10px'} fontSize="xl">
        [ 크라우드 펀드 생성 ]
      </Text>
      <Box
        ml={'10px'}
        border={'3px solid'}
        borderColor={'orange.400'}
        w={'-webkit-max-content'}
        p={'5px'}
      >
        <form type="submit">
          <Flex direction={'column'} gap={'10px'}>
            <Flex gap={'10px'}>
              <Input
                placeholder="영화 제목"
                w={'300px'}
                borderColor="orange.300"
                borderWidth={'3px'}
                onChange={e => {
                  setFilmName(e.target.value);
                }}
              />
              <Input
                placeholder="감독명"
                w={'300px'}
                borderColor="orange.300"
                borderWidth={'3px'}
                onChange={e => {
                  setDirector(e.target.value);
                }}
              />
            </Flex>
            <Input
              placeholder="이미지 첨부"
              w={'610px'}
              borderColor="orange.300"
              borderWidth={'3px'}
              onChange={e => {
                setImgUrl(e.target.value);
              }}
            />
            <InputGroup w={'610px'}>
              <Textarea
                value={synopsis}
                onChange={e => {
                  setSynopsis(e.target.value);
                }}
                placeholder="시놉시스"
                size="md"
                borderColor="orange.300"
                borderWidth={'3px'}
                h={'150px'}
              />
            </InputGroup>
            <InputGroup w={'300px'}>
              <InputLeftElement children={<Ether />} />
              <Input
                placeholder="목표 금액"
                borderColor="orange.300"
                borderWidth={'3px'}
                type={'number'}
                onChange={e => {
                  setTargetAmount(e.target.value);
                }}
              />
              <InputRightAddon
                children="단위 : Ether"
                borderColor="orange.300"
                borderWidth={'3px'}
                backgroundColor={'orange.300'}
              />
            </InputGroup>
            <Flex gap={'5px'}>
              <Flex direction={'column'} gap={'5px'}>
                <InputGroup>
                  <InputLeftAddon
                    children="심사 시작"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    backgroundColor={'orange.300'}
                  />
                  <Input
                    placeholder="심사 시작"
                    size="md"
                    type="datetime-local"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    w={'260px'}
                    onChange={e => {
                      setVst(new Date(e.target.value).getTime() / 1000);
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon
                    children="심사 종료"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    backgroundColor={'orange.300'}
                  />
                  <Input
                    placeholder="심사 종료"
                    size="md"
                    type="datetime-local"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    w={'260px'}
                    onChange={e => {
                      setVet(new Date(e.target.value).getTime() / 1000);
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon
                    children="펀딩 시작"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    backgroundColor={'orange.300'}
                  />
                  <Input
                    placeholder="펀딩 시작"
                    size="md"
                    type="datetime-local"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    w={'260px'}
                    onChange={e => {
                      setFst(new Date(e.target.value).getTime() / 1000);
                    }}
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon
                    children="펀딩 종료"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    backgroundColor={'orange.300'}
                  />
                  <Input
                    placeholder="펀딩 종료"
                    size="md"
                    type="datetime-local"
                    borderColor="orange.300"
                    borderWidth={'3px'}
                    w={'260px'}
                    onChange={e => {
                      setFet(new Date(e.target.value).getTime() / 1000);
                    }}
                  />
                </InputGroup>
              </Flex>
              <Button
                w={'100px'}
                h={''}
                onClick={sendCrowdfundData}
                flexGrow={1}
                bgColor="orange.300"
              >
                <Flex direction={'column'} gap={'25px'}>
                  <Text fontSize={'lg'}>크라우드 펀드 생성</Text>
                  <Flex justifyContent="center" alignItems={'center'}>
                    [
                    <Ether />
                    <Text mr={'10px'}>0.001 ]</Text>
                  </Flex>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </form>
      </Box>
      <Box
        mt={'30px'}
        ml={'10px'}
        border={'3px solid'}
        borderColor={'orange.400'}
        w={'-webkit-max-content'}
        p={'5px'}
      >
        <Flex fontSize="xl" direction={'column'}>
          <Box>
            <Text>[펀드 아이템 생성]</Text>
            <Text fontSize={'md'}>[프로젝트 선택]</Text>
            <Select w={'400px'} borderColor="orange.400">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box mt={'15px'}>
            <Flex direction={'column'} gap={'5px'}>
              <Text fontSize={'md'}>[아이템 옵션 설정]</Text>
              {/* {opt.map((item, index) => (
                <Checkbox key={index} colorScheme={'orange'}>
                  {item}
                </Checkbox>
              ))} */}
              {optBoxes()}
              <InputGroup w={'300px'}>
                <Input
                  placeholder="판매 수량"
                  borderColor="orange.300"
                  borderWidth={'3px'}
                  type={'number'}
                  onChange={e => {
                    setTargetAmount(e.target.value);
                  }}
                />
                <InputRightAddon
                  children="단위 : 개"
                  borderColor="orange.300"
                  borderWidth={'3px'}
                  backgroundColor={'orange.300'}
                  w={'120px'}
                />
              </InputGroup>
              <InputGroup w={'300px'}>
                <InputLeftElement children={<Ether />} />
                <Input
                  placeholder="판매 금액"
                  borderColor="orange.300"
                  borderWidth={'3px'}
                  type={'number'}
                  onChange={e => {
                    setTargetAmount(e.target.value);
                  }}
                />
                <InputRightAddon
                  children="단위 : Ether"
                  borderColor="orange.300"
                  borderWidth={'3px'}
                  backgroundColor={'orange.300'}
                />
              </InputGroup>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
