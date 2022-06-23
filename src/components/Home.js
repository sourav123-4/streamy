import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Input, Icon } from 'semantic-ui-react';
function Home() {
  const inputdata = useSelector((state) => state.reducer.inputdata);
  const data = useSelector((state) => state.reducer.data)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [value, setValue] = useState([])
  const [search, setSearch] = useState("")
  const [bool, setBool] = useState(false)
  const [item, setItem] = useState([])
  return (
    <div>
      {data.map((item) => {
        return <div key={item?.snippet?.title}>
          <h1>{item?.snippet?.title}</h1>
        </div>
      })}
      <Select
        options={options}
        isSearchable
        isMulti
        onChange={setValue}
      />
      <div className='select'>
        {
          item?.map((val) => {
            return <div className='values' key={val}>
              <p>{val}</p>
              {val ? <Icon name='close' size='small' className='ico' onClick={() => setItem(item.filter(name => name !== val))} /> : null}
            </div>
          })
        }
        <Input
          placeholder='select...'
          className='input-tag'
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => setBool(bool => !bool)}
          value={search}
        />
        <div>
          {item ? <Icon name='close' size="large" onClick={() => setItem(null)} color="grey" /> : null}
        </div>
      </div>
      {
        bool ? <div className='options-div'>
          {
            options?.map((data) => {
              if (search && data.label.toLowerCase().includes(search)) {
                return !item?.includes(data.label) ? <p key={data.label} onClick={() => {
                  setItem(item ? [...item, data.label] : [data.label])
                  setBool(bool => !bool)
                }}>{data.label}</p> : null
              } else if (!search) {
                return !item?.includes(data.label) ? <p key={data.value} onClick={() => {
                  setItem(item ? [...item, data.label] : [data.label])
                  setBool(bool => !bool)
                }}>{data.label}</p> : null
              }
              return null
            })
          }
          {(options?.length === item?.length) ? <p>no more options..</p> : null}
        </div> : null
      }
    </div>
  )
}
export default Home