import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { Input, Icon } from 'semantic-ui-react';
import { useRef } from 'react';
function Home() {
  // const inputdata = useSelector((state) => state.reducer.inputdata);
  const data = useSelector((state) => state.reducer.data);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [ search, setSearch ] = useState("");
  const [ bool, setBool ] = useState(false);
  const [ item, setItem ] = useState([]);
  const ref = useRef();
  return (
    <div >
      {data.map((item) => {
        return <div key={item?.snippet?.title}>
          <h1>{item?.snippet?.title}</h1>
        </div>
      })}
      <Select
        options={options}
        isSearchable
        isMulti
      />
      <div ref={ref} className="ss" >
        <div className='select'>
          {
            
            item?.map((val) => {
              return <div className='values' key={val}>
                <div className='val'><p>{val}</p></div>
                <div className='svg-icon' onClick={() => setItem(item.filter(name => name !== val))}>{val ? <Icon name='close' size='small' className='ico' /> : null}</div>
              </div>
            })
          }
          <Input
            placeholder={item?.length > 0 ? null : "select.."}
            className='input-tag'
            transparent
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => setBool(bool => !bool)}
            value={search}
          />
          <div>
            {item?.length>0 ? <Icon name='close' size="large" onClick={() => setItem(null)} color="grey" /> : null}
          </div>
        </div>
        { 
          bool ? <div className='options-div' >
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
                  }} >{data.label}</p> : null
                }
                return null
              })
            }
            {(options?.length === item?.length) ? <p>no more options..</p> : null}
          </div> : null
        }
      </div>
    </div>
  )
}
export default Home