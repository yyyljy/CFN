import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useWallet, useWeb3 } from 'src/hooks/useMetamask';
import FundCard from 'src/components/molecules/FundCard';

export default function MyCrowdfund() {
  const { account } = useWallet();
  const { crowdfundContract, DBContract } = useWeb3();
  const [myFilmName, setMyFilmName] = useState();
  const [myCrowd, setMyCrowd] = useState([]);
  const [bFilmName, setBFilmName] = useState();
  const [bCrowd, setBCrowd] = useState([]);

  useEffect(() => {
    const getIndexList = async () => {
      if (account) {
        await crowdfundContract.methods
          .getUser(account)
          .call()
          .then(res => {
            setMyFilmName(res.aCrowdfundMakeList);
            setBFilmName(res.aFundedList);
          });
      }
    };

    if (crowdfundContract) {
      getIndexList();
    }
  }, [account, crowdfundContract]);
  // if (myIndex) console.log(myIndex);

  useEffect(() => {
    const getCrowdList = async () => {
      await myFilmName.map(async item => {
        // console.log('MAP', item);
        await DBContract.methods
          .getCrowdfundByFilmName(item)
          .call()
          .then(res => {
            setMyCrowd(myCrowd => [...myCrowd, res]);
          });
      });
    };

    const getFundList = async () => {
      await bFilmName.map(async item => {
        // console.log('MAP', item);
        await DBContract.methods
          .getCrowdfundByFilmName(item)
          .call()
          .then(res => {
            setBCrowd(bCrowd => [...bCrowd, res]);
          });
      });
    };
    if (myFilmName) getCrowdList();
    if (bFilmName) getFundList();
  }, [DBContract, myFilmName, bFilmName]);

  return (
    <Box ml={'15px'}>
      <Flex direction={'column'} gap={'30px'}>
        <Box>
          <Box>
            <ul>만든 크라우드 펀드 목록</ul>
          </Box>
          <Box>
            {myCrowd ? (
              myCrowd.map((item, index) => (
                <div>
                  <li key={index}>{item.filmName}</li>
                  {/* <FundCard {...item} /> */}
                </div>
              ))
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box>
          <Box>
            <ul>크라우드 펀드 투자 기록</ul>
          </Box>
          <Box>
            {bCrowd ? (
              bCrowd.map((item, index) => <li key={index}>{item.filmName}</li>)
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
