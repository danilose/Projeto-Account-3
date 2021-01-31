const isAuth = async (auth, route) => {
  if ( !auth ) {
    location.replace(`/#/${route}`);
  }
  return auth;
}

const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
}

const redirectTo = (path) => {
  window.location.replace(`/#/${path}`);
}

const storeData = (userData) => {
  console.log(userData)
  const {token, conta, usuario} = userData;
  localStorage.setItem('usuario', JSON.stringify(usuario));
  localStorage.setItem('conta', JSON.stringify(conta));
  localStorage.setItem('@token', token);

}

const isAuthenticated = () => {
  // se tiver a token então está logado senão não está
  return (localStorage.getItem("@token")) ? true : false;
}

export { isAuth, clearStorage, redirectTo, storeData, isAuthenticated };