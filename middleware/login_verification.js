export default function({store, redirect }){
  if (!store.state.authentication.session_token){
    return redirect('login');
  }
}