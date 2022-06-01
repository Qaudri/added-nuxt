export default function({store, redirect }){
  if (store.state.authentication.auth_status = false){
    return redirect('admin-login');
  }
}