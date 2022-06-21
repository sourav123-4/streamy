import React from 'react'
function Header() {
  const [isSignedIn,setIsSignedIn]=React.useState(null)
  React.useEffect(()=>{
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:
          '464448965409-94umbt7pkqqhh09iajkqi1ckgq7qdjhc.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=>{
        const auth= window.gapi.auth2.getAuthInstance();
        setIsSignedIn(auth.isSignedIn.get())
      })
    })
  },[])
  return (
    <div className='header'>
      <h1>streamy</h1>
      <h3>streams</h3>
      {
        isSignedIn? <button>login</button> : <button>logout</button>
      }
    </div>
  )
}

export default Header