import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Skeleton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { useOutletContext } from 'react-router-dom';
import {
  BiMessageRoundedDetail,
  BiMailSend,
  BiShareAlt,
  BiPlusCircle,
  BiMinusCircle,
} from 'react-icons/bi';
import TableComp from '../atoms/TableComp';
import { FirebaseRead } from '../molecules/FirebaseDbManager';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function ProfileMaker() {
  const [userObj, setUserObj] = useOutletContext();
  const [birthValue, birthOnChange] = useState(new Date());
  const [googleUser, setGoogleUser] = useState();

  async function getUserAccount() {
    try {
      const response = await FirebaseRead({
        _collection: 'users',
        _column: 'google_id',
        _value: userObj.email,
        _compOpt: '==',
      });
      response.forEach(doc => setGoogleUser(doc.data()));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserAccount();
  }, [userObj]);

  async function nftQuery() {
    // const query = { size: 1 };
    // const result = await caver.kas.tokenHistory.getNFTList(
    //   '0xbbe63781168c9e67e7a8b112425aa84c479f39aa',
    //   query
    // );
  }

  async function onClickSaveBtn() {
    try {
      toast.success('저장되었습니다', {
        position: 'top-right',
        autoClose: '1000',
      });
    } catch (error) {
      console.error(error);
    }
  }

  function onClickClearBtn() {
    toast.warning('작성 내용을 초기화합니다.');
  }

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box
        justifyContent={'flex-end'}
        alignContent={'center'}
        display={'flex'}
        flexDirection={'row'}
      >
        <Button onClick={onClickClearBtn} m={'10px'}>
          초기화
        </Button>
        <Button onClick={onClickSaveBtn} m={'10px'}>
          저장
        </Button>
      </Box>
      <Box border={'5px solid orange'} borderRadius={'10px'} shadow={'2xl'}>
        <Box>
          <Flex>
            <Box flexGrow={1}>
              <Flex>
                <Box w={'260px'}>
                  <Box
                    display="flex"
                    w={'260px'}
                    h={'340px'}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text zIndex={999} position={'absolute'}>
                      프로필 사진을 등록 해주세요
                    </Text>
                    <Skeleton
                      w={'240px'}
                      h={'320px'}
                      borderRadius={10}
                      startColor="orange.400"
                      endColor="pink.500"
                      speed={1.2}
                    ></Skeleton>
                  </Box>
                  <Box
                    w={'260px'}
                    h={'400px'}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text zIndex={999} position={'absolute'}>
                      일상 사진을 등록 해주세요
                    </Text>
                    <Skeleton
                      w={'240px'}
                      h={'320px'}
                      mb={'10px'}
                      borderRadius={10}
                      startColor="orange.400"
                      endColor="pink.500"
                      speed={1.2}
                    />
                  </Box>
                </Box>
                <Box
                  flexGrow={1}
                  borderLeft={'5px dotted'}
                  borderColor={'orange.400'}
                >
                  <Box
                    display={'flex'}
                    h={'50px'}
                    justifyContent={'space-between'}
                    borderBottom={'5px dotted'}
                    borderColor={'orange.400'}
                  >
                    <Box display={'flex'}>
                      <Text
                        letterSpacing={'10px'}
                        ml={'20px'}
                        alignSelf={'center'}
                        fontSize={'3xl'}
                      >
                        {userObj ? userObj.displayName : '홍길동'}
                      </Text>
                      <Input
                        fontSize={'md'}
                        bottom={'2px'}
                        ml={'10px'}
                        alignSelf={'flex-end'}
                        w={'300px'}
                        placeholder={'영어 이름을 입력해주세요'}
                        border={'2px'}
                        borderColor={'orange.400'}
                      ></Input>
                    </Box>
                    <Box
                      alignSelf={'center'}
                      justifySelf={'flex-end'}
                      mr={'10px'}
                    >
                      <Flex gap={2}>
                        <BiMessageRoundedDetail size={40} />
                        <BiMailSend size={40} />
                        <BiShareAlt size={40} />
                      </Flex>
                    </Box>
                  </Box>
                  <Flex h={'708px'}>
                    <Box w={'360px'}>
                      <Flex direction={'column'}>
                        <Box>
                          <Text m={'10px'} fontSize={'xl'}>
                            개인 신상 정보
                          </Text>
                          <Flex
                            alignItems={'center'}
                            justifyContent={'space-around'}
                          >
                            <Text>성별 : </Text>
                            <Select
                              fontSize={'sm'}
                              w={'77px'}
                              placeholder="성별"
                              isRequired
                              border={'2px'}
                              borderColor={'orange.400'}
                            >
                              <option value="남자">남자</option>
                              <option value="여자">여자</option>
                            </Select>
                            <Text>생년월일 : </Text>
                            <DatePicker
                              onChange={birthOnChange}
                              value={birthValue}
                              maxDate={new Date()}
                            />
                          </Flex>
                          <Flex alignItems={'center'}>
                            <Flex m={'10px'}>
                              <Text>키 : </Text>
                              <Input
                                fontSize={'sm'}
                                bottom={'5px'}
                                ml={'10px'}
                                alignSelf={'flex-end'}
                                w={'70px'}
                                placeholder={'키'}
                                maxLength={3}
                                border={'2px'}
                                borderColor={'orange.400'}
                              />
                              <Text>cm</Text>
                            </Flex>
                            <Flex m={'10px'}>
                              <Text>몸무게 : </Text>
                              <Input
                                fontSize={'sm'}
                                bottom={'5px'}
                                ml={'10px'}
                                alignSelf={'flex-end'}
                                w={'73px'}
                                placeholder={'몸무게'}
                                maxLength={3}
                                border={'2px'}
                                borderColor={'orange.400'}
                              />
                              <Text>kg</Text>
                            </Flex>
                          </Flex>
                        </Box>
                        <Spacer />
                        <Flex
                          direction={'row'}
                          alignContent={'center'}
                          justifyContent={'center'}
                        >
                          <Box>
                            <Select
                              fontSize={'xl'}
                              w={'200px'}
                              placeholder="카테고리"
                              isRequired
                              border={'2px'}
                              borderColor={'orange.400'}
                            >
                              <option value="필모그래피">필모그래피</option>
                              <option value="드라마">드라마</option>
                              <option value="뮤직비디오">뮤직비디오</option>
                              <option value="광고">광고</option>
                            </Select>
                          </Box>
                          <Box ml={3} alignSelf={'center'}>
                            <BiPlusCircle size={'25px'} />
                          </Box>
                        </Flex>
                        <Box>
                          <Flex>
                            <Text m={'10px'} fontSize={'xl'}>
                              필모그래피
                            </Text>
                            <Box ml={3} alignSelf={'center'}>
                              <Flex>
                                <BiPlusCircle size={'25px'} />
                                <BiMinusCircle size={'25px'} />
                              </Flex>
                            </Box>
                          </Flex>
                          <TableComp />
                        </Box>
                        <Spacer />
                        <Flex>
                          <Text m={'10px'} fontSize={'xl'}>
                            드라마
                          </Text>
                          <Box ml={3} alignSelf={'center'}>
                            <Flex>
                              <BiPlusCircle size={'25px'} />
                              <BiMinusCircle size={'25px'} />
                            </Flex>
                          </Box>
                        </Flex>
                        <Spacer />
                        <Flex>
                          <Text m={'10px'} fontSize={'xl'}>
                            뮤직비디오
                          </Text>
                          <Box ml={3} alignSelf={'center'}>
                            <Flex>
                              <BiPlusCircle size={'25px'} />
                              <BiMinusCircle size={'25px'} />
                            </Flex>
                          </Box>
                        </Flex>
                        <Spacer />
                        <Flex>
                          <Text m={'10px'} fontSize={'xl'}>
                            광고
                          </Text>
                          <Box ml={3} alignSelf={'center'}>
                            <Flex>
                              <BiPlusCircle size={'25px'} />
                              <BiMinusCircle size={'25px'} />
                            </Flex>
                          </Box>
                        </Flex>
                      </Flex>
                    </Box>
                    <Box
                      borderLeft={'5px dotted'}
                      borderColor={'orange.400'}
                      flexGrow={1}
                    >
                      <Text m={'10px'}>활동 그래프 / 내 NFT</Text>
                      <Text ml={10}>
                        {googleUser
                          ? googleUser.kaikasAddress
                          : '지갑주소 연동이 필요합니다.'}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
