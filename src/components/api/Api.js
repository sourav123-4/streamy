import axios from 'axios';
const KEY = "AIzaSyATODTy1dTlWwMBXey2_Mgve6t60IPo0Bk";
export const handleClick = async (term) => {
    return await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
            params: {
                part: "snippet",
                key: KEY,
                maxResults: 10,
                q: term,
            },
        }
    );
    // console.log(res);
    
};