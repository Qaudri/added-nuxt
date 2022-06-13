export default function({store, redirect }){
  if (store.state.authentication.admin_auth_status == false){
    return redirect('admin/login');
  }
}