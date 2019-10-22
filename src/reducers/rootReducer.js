const initState = {
    posts: [
      {id: '1', title: 'iPhone', body: 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista.'},
      {id: '2', title: 'Android', body: 'Android is a mobile operating system developed by Google. It is used by several smartphones and tablets. ... The "Dalvik" JVM was used through Android 4.4 and was replaced by Android Runtime or "ART" in Android 5.0. Users can download and install Android apps from Google Play and other locations'},
      {id: '3', title: 'Windows', body: 'Windows Phone is Microsoft s smartphone operating system and a brand for the numerous hardware designs that run on it. Windows Phone uses a Metro-derived user interface (UI), closely reflecting and relying on the tile-like interface introduced with the desktop systems.'}
    ]
  }
  
  
  
  const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => {
       return post.id !== action.id
     });
     return {
       ...state,
       posts: newPosts
     }
    }
    return state;
  }
  
  export default rootReducer