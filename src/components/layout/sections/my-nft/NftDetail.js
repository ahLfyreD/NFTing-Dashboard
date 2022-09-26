import { useEffect } from 'react';
import axios from 'axios';
import { selectedNfts } from "../../../../redux/actions/nftActions";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const NftDetail = () => {
  const nft = useSelector((state) => state.nft);
  const {nftId} = useParams();
  const dispatch = useDispatch();
  console.log(nft)

  const fetchNftDetail = async() => {
    const response = await axios
    .get(`https://api-dev.nfting.store/api/nft-items/${nftId}`)
    .catch((err) => {
      console.log("Err ", err);
    });

    dispatch(selectedNfts(response.data));
  };

  useEffect(() => {
    if(nftId && nftId !== "" ) fetchNftDetail();
  }, [nftId]);
  return (
    <div>

    </div>
  )
}

export default NftDetail
