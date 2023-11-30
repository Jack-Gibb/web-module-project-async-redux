const initialState = {
    imageUrl: '',
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DOG_IMAGE_SUCCESS':
        return { ...state, imageUrl: action.payload, error: null };
      case 'FETCH_DOG_IMAGE_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;