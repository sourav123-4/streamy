import React from 'react'
import { useSelector } from 'react-redux';
function Home() {
  const inputdata = useSelector(state => state.reducer.inputdata);
  console.log(inputdata)
  const data = useSelector(state => state.reducer.data)
  console.log(data)
  return (
    <div>
      {data.map((item) => {
        return <div>
          <h1>{item?.snippet?.title}</h1>
        </div>
      })}
    </div>
  )
}

export default Home