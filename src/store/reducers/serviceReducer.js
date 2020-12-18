const initState = {
  services: [
    {id: 1, serviceProvider: "Sling", serviceName: "Orange"},
    {id: 2, serviceProvider: "Sling", serviceName: "Blue"},
    {id: 3, serviceProvider: "Google", serviceName: "YouTubeTV"},
    
  ]
}

const serviceReducer = (state = initState, action) => {
  return state
}

export default serviceReducer